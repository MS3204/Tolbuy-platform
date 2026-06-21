export type TolTokenAction =
  | "purchase"
  | "sale"
  | "trade"
  | "investment"
  | "referral"
  | "daily_login"
  | "verified_review"
  | "profile_kyc";

export type RewardBreakdownItem = {
  label: string;
  points: number;
};

export type InvestorMultiplierTier = {
  tierId: "standard" | "investor" | "vip";
  /** Multiplier applied to base earning */
  multiplier: number;
};

export type TolTokenContext = {
  /** Whether user invests in Tol company (loyalty multiplier) */
  investorTier: InvestorMultiplierTier["tierId"];
  /** Optional promo multiplier (e.g., limited-time campaign) */
  promoMultiplier?: number;
  /** VIP users can get an extra bonus multiplier */
  vip?: boolean;
};

export const actionRewardRates: Record<
  TolTokenAction,
  | { type: "value"; pointsPerCurrencyUnit: number; dailyCap?: number }
  | { type: "count"; pointsPerCount: number; dailyCap?: number }
> = {
  // Purchases: points per currency value
  purchase: { type: "value", pointsPerCurrencyUnit: 0.1, dailyCap: 50_000 },
  // Sales: points per completed sale
  sale: { type: "count", pointsPerCount: 300, dailyCap: 3_000 },
  // Trading activity: points per currency value traded
  trade: { type: "value", pointsPerCurrencyUnit: 0.05, dailyCap: 25_000 },
  // Investments: points per currency value invested
  investment: { type: "value", pointsPerCurrencyUnit: 0.08, dailyCap: 40_000 },
  // Referral: points per successful referral
  referral: { type: "count", pointsPerCount: 900, dailyCap: 2_000 },
  // Daily login: small daily bonus
  daily_login: { type: "count", pointsPerCount: 120, dailyCap: 1_000 },
  // Verified reviews: points per review
  verified_review: { type: "count", pointsPerCount: 250, dailyCap: 1_000 },
  // Profile / KYC: one-time onboarding bonus (no strict daily cap)
  profile_kyc: { type: "count", pointsPerCount: 2_500, dailyCap: undefined },
};

export const investorMultiplierTiers: Record<
  InvestorMultiplierTier["tierId"],
  InvestorMultiplierTier
> = {
  standard: { tierId: "standard", multiplier: 1.0 },
  investor: { tierId: "investor", multiplier: 1.5 },
  vip: { tierId: "vip", multiplier: 2.0 },
};

export type RedemptionPerkType =
  | "discount"
  | "content"
  | "tool"
  | "fee_reduction"
  | "other";

export const DEFAULT_DEMO_USER_ID = "demo-user";
