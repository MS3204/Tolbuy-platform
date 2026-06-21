import {
  actionRewardRates,
  investorMultiplierTiers,
  type RewardBreakdownItem,
  type TolTokenAction,
  type TolTokenContext,
} from "./tolTokenConfig";

export type CalculateRewardInput = {
  action: TolTokenAction;
  /** Monetary value for value-based actions (purchase/trade/investment). */
  value?: number;
  /** Count for count-based actions (sale/referral/daily_login/etc). */
  count?: number;
  context: TolTokenContext;
};

export type CalculateTokenRewardResult = {
  points: number;
  breakdown: RewardBreakdownItem[];
};

function applyNumberCap(points: number, dailyCap?: number) {
  if (typeof dailyCap !== "number") return points;
  return Math.min(points, dailyCap);
}

export function calculateTokenReward(
  input: CalculateRewardInput,
): CalculateTokenRewardResult {
  const rate = actionRewardRates[input.action];

  let basePoints = 0;
  if (rate.type === "value") {
    const v = typeof input.value === "number" ? input.value : 0;
    basePoints = v * rate.pointsPerCurrencyUnit;
  } else {
    const c = typeof input.count === "number" ? input.count : 0;
    basePoints = c * rate.pointsPerCount;
  }

  // Apply daily cap to base points only
  const dailyCap =
    "dailyCap" in rate ? (rate.dailyCap as number | undefined) : undefined;
  basePoints = applyNumberCap(basePoints, dailyCap);

  const investorTier = investorMultiplierTiers[input.context.investorTier];
  const promoMultiplier = input.context.promoMultiplier ?? 1;
  const vipMultiplier = input.context.vip ? 1.1 : 1;

  const multiplier = investorTier.multiplier * promoMultiplier * vipMultiplier;
  const finalPoints = Math.round(basePoints * multiplier);

  const breakdown: RewardBreakdownItem[] = [
    {
      label: "base",
      points: Math.round(basePoints),
    },
  ];

  if (multiplier !== 1) {
    breakdown.push({
      label: "multiplier",
      points: finalPoints - Math.round(basePoints),
    });
  }

  return { points: finalPoints, breakdown };
}
