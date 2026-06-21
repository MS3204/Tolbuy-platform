import {
  calculateTokenReward,
  type CalculateRewardInput,
} from "./rewardEngine";
import type { TolTokenAction, TolTokenContext } from "./tolTokenConfig";
import { DEFAULT_DEMO_USER_ID } from "./tolTokenConfig";
import type { PerkId } from "./perksCatalog";
import { getPerkById } from "./perksCatalog";
import { evaluateEarningAnomaly } from "./fraudDetection";

export type TolTokenTransactionType =
  | "earn"
  | "redeem"
  | "bonus"
  | "adjustment";

export type TolTokenTransaction = {
  transactionId: string;
  userId: string;
  type: TolTokenTransactionType;
  amount: number;
  action: string;
  relatedId?: string;
  timestamp: number;
  note?: string;
};

export type WalletState = {
  userId: string;
  balance: number;
  totalEarned: number;
  totalRedeemed: number;
  lastUpdated: number;
  pendingReview: boolean;
  /** Stock consumption for limited perks (demo-only persistence). */
  perkStock: Partial<Record<PerkId, number>>;
  transactions: TolTokenTransaction[];
};

const STORAGE_KEY = "tolbuy.tolToken.wallet.v1";

function uid() {
  return Math.random().toString(16).slice(2) + "-" + Date.now().toString(16);
}

function safeParse<T>(raw: string | null): T | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

function loadAllWallets(): Record<string, WalletState> {
  const raw =
    typeof window === "undefined"
      ? null
      : window.localStorage.getItem(STORAGE_KEY);
  const parsed = safeParse<Record<string, WalletState>>(raw);
  return parsed ?? {};
}

function saveAllWallets(wallets: Record<string, WalletState>) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(wallets));
}

function getOrCreateWallet(userId: string): WalletState {
  const wallets = loadAllWallets();
  const existing = wallets[userId];
  if (existing) return existing;

  const wallet: WalletState = {
    userId,
    balance: 0,
    totalEarned: 0,
    totalRedeemed: 0,
    lastUpdated: Date.now(),
    pendingReview: false,
    perkStock: {},
    transactions: [],
  };

  wallets[userId] = wallet;
  saveAllWallets(wallets);
  return wallet;
}

export async function getBalance(userId: string = DEFAULT_DEMO_USER_ID) {
  const wallet = getOrCreateWallet(userId);
  return wallet.balance;
}

export function listTransactions(userId: string = DEFAULT_DEMO_USER_ID) {
  const wallet = getOrCreateWallet(userId);
  // newest first
  return [...wallet.transactions].sort((a, b) => b.timestamp - a.timestamp);
}

export function getWalletState(userId: string = DEFAULT_DEMO_USER_ID) {
  return getOrCreateWallet(userId);
}

export async function addTokens(params: {
  userId?: string;
  action: TolTokenAction;
  value?: number;
  count?: number;
  context: TolTokenContext;
  relatedId?: string;
  note?: string;
}): Promise<{ pointsAdded: number }> {
  const userId = params.userId ?? DEFAULT_DEMO_USER_ID;
  const wallet = getOrCreateWallet(userId);

  const input: CalculateRewardInput = {
    action: params.action,
    value: params.value,
    count: params.count,
    context: params.context,
  };

  const { points } = calculateTokenReward(input);

  const recentEarningEvents = wallet.transactions
    .filter((tx) => tx.type === "earn" || tx.type === "bonus")
    .slice(0, 12)
    .map((tx) => ({
      action: tx.action as TolTokenAction,
      points: tx.amount,
      timestamp: tx.timestamp,
    }));

  const fraud = await evaluateEarningAnomaly({
    userId,
    recentEarningEvents,
  });

  if (fraud.flagged) {
    // Demo behavior: mark pending review and add as adjustment (not to balance yet)
    const tx: TolTokenTransaction = {
      transactionId: uid(),
      userId,
      type: "adjustment",
      amount: points,
      action: params.action,
      relatedId: params.relatedId,
      timestamp: Date.now(),
      note: `Fraud flagged (score ${fraud.score}). Pending review.`,
    };

    wallet.transactions.push(tx);
    wallet.pendingReview = true;
    wallet.lastUpdated = Date.now();
    // Do not credit balance in demo placeholder
    saveAllWallets(loadAllWallets());
    return { pointsAdded: 0 };
  }

  const tx: TolTokenTransaction = {
    transactionId: uid(),
    userId,
    type: params.action === "daily_login" ? "bonus" : "earn",
    amount: points,
    action: params.action,
    relatedId: params.relatedId,
    timestamp: Date.now(),
    note: params.note,
  };

  wallet.balance += points;
  wallet.totalEarned += points;
  wallet.transactions.push(tx);
  wallet.lastUpdated = Date.now();

  const wallets = loadAllWallets();
  wallets[userId] = wallet;
  saveAllWallets(wallets);

  return { pointsAdded: points };
}

export async function redeemTokens(params: {
  userId?: string;
  perkId: PerkId;
}): Promise<{ cost: number; ok: boolean; message?: string }> {
  const userId = params.userId ?? DEFAULT_DEMO_USER_ID;
  const wallet = getOrCreateWallet(userId);

  const perk = getPerkById(params.perkId);
  if (!perk) return { cost: 0, ok: false, message: "invalid_perk" };

  // Stock validation for limited perks
  if (perk.availability === "limited" && typeof perk.stock === "number") {
    const currentRaw = wallet.perkStock[perk.perkId];
    const current = typeof currentRaw === "number" ? currentRaw : perk.stock;

    if (current <= 0) {
      return { cost: perk.tokenCost, ok: false, message: "out_of_stock" };
    }

    wallet.perkStock[perk.perkId] = current - 1;
  }

  if (wallet.balance < perk.tokenCost) {
    return { cost: perk.tokenCost, ok: false, message: "insufficient_balance" };
  }

  wallet.balance -= perk.tokenCost;
  wallet.totalRedeemed += perk.tokenCost;

  wallet.transactions.push({
    transactionId: uid(),
    userId,
    type: "redeem",
    amount: perk.tokenCost,
    action: "redeem",
    relatedId: perk.perkId,
    timestamp: Date.now(),
    note: `Redeemed perk ${perk.perkId}`,
  });

  wallet.lastUpdated = Date.now();

  const wallets = loadAllWallets();
  wallets[userId] = wallet;
  saveAllWallets(wallets);

  return { cost: perk.tokenCost, ok: true };
}
