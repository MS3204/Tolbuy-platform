import { jsx, jsxs } from "react/jsx-runtime";
import { c as cn, u as useT } from "./router-HBKnjp6h.js";
import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import { Coins, AlertTriangle, Sparkles, ArrowRightLeft } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import "@tanstack/react-router";
import "@radix-ui/react-dropdown-menu";
import "clsx";
import "tailwind-merge";
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("font-semibold leading-none tracking-tight", className),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
const perksCatalog = [
  {
    perkId: "discount_10",
    nameKey: "perk.discount10.name",
    descriptionKey: "perk.discount10.desc",
    tokenCost: 1800,
    perkType: "discount",
    availability: "always",
    stock: null
  },
  {
    perkId: "content_premium",
    nameKey: "perk.contentPremium.name",
    descriptionKey: "perk.contentPremium.desc",
    tokenCost: 2400,
    perkType: "content",
    availability: "limited",
    stock: 50
  },
  {
    perkId: "tools_pro",
    nameKey: "perk.toolsPro.name",
    descriptionKey: "perk.toolsPro.desc",
    tokenCost: 3200,
    perkType: "tool",
    availability: "always",
    stock: null
  },
  {
    perkId: "fee_reduction_30",
    nameKey: "perk.feeReduction30.name",
    descriptionKey: "perk.feeReduction30.desc",
    tokenCost: 4200,
    perkType: "fee_reduction",
    availability: "limited",
    stock: 20
  },
  {
    perkId: "early_access",
    nameKey: "perk.earlyAccess.name",
    descriptionKey: "perk.earlyAccess.desc",
    tokenCost: 2800,
    perkType: "other",
    availability: "always",
    stock: null
  }
];
function getPerkById(perkId) {
  return perksCatalog.find((p) => p.perkId === perkId);
}
const actionRewardRates = {
  // Purchases: points per currency value
  purchase: { type: "value", pointsPerCurrencyUnit: 0.1, dailyCap: 5e4 },
  // Sales: points per completed sale
  sale: { type: "count", pointsPerCount: 300, dailyCap: 3e3 },
  // Trading activity: points per currency value traded
  trade: { type: "value", pointsPerCurrencyUnit: 0.05, dailyCap: 25e3 },
  // Investments: points per currency value invested
  investment: { type: "value", pointsPerCurrencyUnit: 0.08, dailyCap: 4e4 },
  // Referral: points per successful referral
  referral: { type: "count", pointsPerCount: 900, dailyCap: 2e3 },
  // Daily login: small daily bonus
  daily_login: { type: "count", pointsPerCount: 120, dailyCap: 1e3 },
  // Verified reviews: points per review
  verified_review: { type: "count", pointsPerCount: 250, dailyCap: 1e3 },
  // Profile / KYC: one-time onboarding bonus (no strict daily cap)
  profile_kyc: { type: "count", pointsPerCount: 2500, dailyCap: void 0 }
};
const investorMultiplierTiers = {
  standard: { tierId: "standard", multiplier: 1 },
  investor: { tierId: "investor", multiplier: 1.5 },
  vip: { tierId: "vip", multiplier: 2 }
};
const DEFAULT_DEMO_USER_ID = "demo-user";
function applyNumberCap(points, dailyCap) {
  if (typeof dailyCap !== "number") return points;
  return Math.min(points, dailyCap);
}
function calculateTokenReward(input) {
  const rate = actionRewardRates[input.action];
  let basePoints = 0;
  if (rate.type === "value") {
    const v = typeof input.value === "number" ? input.value : 0;
    basePoints = v * rate.pointsPerCurrencyUnit;
  } else {
    const c = typeof input.count === "number" ? input.count : 0;
    basePoints = c * rate.pointsPerCount;
  }
  const dailyCap = "dailyCap" in rate ? rate.dailyCap : void 0;
  basePoints = applyNumberCap(basePoints, dailyCap);
  const investorTier = investorMultiplierTiers[input.context.investorTier];
  const promoMultiplier = input.context.promoMultiplier ?? 1;
  const vipMultiplier = input.context.vip ? 1.1 : 1;
  const multiplier = investorTier.multiplier * promoMultiplier * vipMultiplier;
  const finalPoints = Math.round(basePoints * multiplier);
  const breakdown = [
    {
      label: "base",
      points: Math.round(basePoints)
    }
  ];
  if (multiplier !== 1) {
    breakdown.push({
      label: "multiplier",
      points: finalPoints - Math.round(basePoints)
    });
  }
  return { points: finalPoints, breakdown };
}
async function evaluateEarningAnomaly(req) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1e3;
  const recent = req.recentEarningEvents.filter(
    (e) => now - e.timestamp <= windowMs
  );
  const sum = recent.reduce((acc, e) => acc + e.points, 0);
  if (sum > 1e4) {
    return {
      flagged: true,
      score: Math.min(95, Math.round(sum / 1e4 * 60)),
      reasons: ["earning_spike_in_window"]
    };
  }
  return {
    flagged: false,
    score: 20,
    reasons: []
  };
}
const STORAGE_KEY = "tolbuy.tolToken.wallet.v1";
function uid() {
  return Math.random().toString(16).slice(2) + "-" + Date.now().toString(16);
}
function safeParse(raw) {
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
function loadAllWallets() {
  const raw = typeof window === "undefined" ? null : window.localStorage.getItem(STORAGE_KEY);
  const parsed = safeParse(raw);
  return parsed ?? {};
}
function saveAllWallets(wallets) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(wallets));
}
function getOrCreateWallet(userId) {
  const wallets = loadAllWallets();
  const existing = wallets[userId];
  if (existing) return existing;
  const wallet = {
    userId,
    balance: 0,
    totalEarned: 0,
    totalRedeemed: 0,
    lastUpdated: Date.now(),
    pendingReview: false,
    perkStock: {},
    transactions: []
  };
  wallets[userId] = wallet;
  saveAllWallets(wallets);
  return wallet;
}
function listTransactions(userId = DEFAULT_DEMO_USER_ID) {
  const wallet = getOrCreateWallet(userId);
  return [...wallet.transactions].sort((a, b) => b.timestamp - a.timestamp);
}
function getWalletState(userId = DEFAULT_DEMO_USER_ID) {
  return getOrCreateWallet(userId);
}
async function addTokens(params) {
  const userId = params.userId ?? DEFAULT_DEMO_USER_ID;
  const wallet = getOrCreateWallet(userId);
  const input = {
    action: params.action,
    value: params.value,
    count: params.count,
    context: params.context
  };
  const { points } = calculateTokenReward(input);
  const recentEarningEvents = wallet.transactions.filter((tx2) => tx2.type === "earn" || tx2.type === "bonus").slice(0, 12).map((tx2) => ({
    action: tx2.action,
    points: tx2.amount,
    timestamp: tx2.timestamp
  }));
  const fraud = await evaluateEarningAnomaly({
    recentEarningEvents
  });
  if (fraud.flagged) {
    const tx2 = {
      transactionId: uid(),
      userId,
      type: "adjustment",
      amount: points,
      action: params.action,
      relatedId: params.relatedId,
      timestamp: Date.now(),
      note: `Fraud flagged (score ${fraud.score}). Pending review.`
    };
    wallet.transactions.push(tx2);
    wallet.pendingReview = true;
    wallet.lastUpdated = Date.now();
    saveAllWallets(loadAllWallets());
    return { pointsAdded: 0 };
  }
  const tx = {
    transactionId: uid(),
    userId,
    type: params.action === "daily_login" ? "bonus" : "earn",
    amount: points,
    action: params.action,
    relatedId: params.relatedId,
    timestamp: Date.now(),
    note: params.note
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
async function redeemTokens(params) {
  const userId = params.userId ?? DEFAULT_DEMO_USER_ID;
  const wallet = getOrCreateWallet(userId);
  const perk = getPerkById(params.perkId);
  if (!perk) return { cost: 0, ok: false, message: "invalid_perk" };
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
    note: `Redeemed perk ${perk.perkId}`
  });
  wallet.lastUpdated = Date.now();
  const wallets = loadAllWallets();
  wallets[userId] = wallet;
  saveAllWallets(wallets);
  return { cost: perk.tokenCost, ok: true };
}
function milestoneFor(balance) {
  if (balance < 1e3) return {
    labelKey: "wallet.tier.1",
    min: 0,
    max: 999
  };
  if (balance < 3e3) return {
    labelKey: "wallet.tier.2",
    min: 1e3,
    max: 2999
  };
  if (balance < 7e3) return {
    labelKey: "wallet.tier.3",
    min: 3e3,
    max: 6999
  };
  return {
    labelKey: "wallet.tier.4",
    min: 7e3,
    max: 2e4
  };
}
function WalletPage() {
  const t = useT();
  const userId = "demo-user";
  const [balance, setBalance] = useState(0);
  const [pendingReview, setPendingReview] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [toast, setToast] = useState(null);
  useEffect(() => {
    const state = getWalletState(userId);
    setBalance(state.balance);
    setPendingReview(state.pendingReview);
    setTransactions(listTransactions(userId));
  }, []);
  const tier = useMemo(() => milestoneFor(balance), [balance]);
  const progress = useMemo(() => {
    const denom = Math.max(1, tier.max - tier.min);
    const v = Math.min(tier.max, Math.max(tier.min, balance));
    return (v - tier.min) / denom * 100;
  }, [balance, tier.max, tier.min]);
  async function refresh() {
    const state = getWalletState(userId);
    setBalance(state.balance);
    setPendingReview(state.pendingReview);
    setTransactions(listTransactions(userId));
  }
  const investorTier = "standard";
  async function onDemoEarn(action) {
    const context = {
      investorTier
    };
    let value;
    let count;
    switch (action) {
      case "purchase":
        value = 120;
        break;
      case "trade":
        value = 800;
        break;
      case "investment":
        value = 500;
        break;
      case "sale":
        count = 1;
        break;
      case "referral":
        count = 1;
        break;
      case "daily_login":
        count = 1;
        break;
      case "verified_review":
        count = 1;
        break;
      case "profile_kyc":
        count = 1;
        break;
    }
    setToast(null);
    const res = await addTokens({
      userId,
      action,
      value,
      count,
      context,
      note: "demo_action"
    });
    if (res.pointsAdded > 0) {
      setToast(t("wallet.toast.earned"));
    } else {
      setToast(t("wallet.toast.review"));
    }
    await refresh();
    setTimeout(() => setToast(null), 2500);
  }
  async function onRedeem(perkId) {
    setToast(null);
    const res = await redeemTokens({
      userId,
      perkId
    });
    if (res.ok) setToast(t("wallet.toast.redeemed"));
    else setToast(t(`wallet.toast.${res.message}`));
    await refresh();
    setTimeout(() => setToast(null), 2500);
  }
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-5 pt-8 pb-20 space-y-8", children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: t("common.dimension") }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mt-1", children: t("wallet.tolToken.title") }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground max-w-xl", children: t("wallet.tolToken.subtitle") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsx("section", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxs(Card, { className: "glass-strong holo-border rounded-3xl", children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Coins, { className: "h-5 w-5 text-profit" }),
            t("wallet.tolToken.balance"),
            /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "ml-2", children: t("wallet.tolToken.unit") })
          ] }),
          /* @__PURE__ */ jsx(CardDescription, { children: t("wallet.tolToken.balanceDesc") })
        ] }),
        /* @__PURE__ */ jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between gap-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-5xl font-bold tabular-nums", children: balance.toLocaleString() }),
              /* @__PURE__ */ jsx("div", { className: "mt-2 text-muted-foreground text-sm", children: t(tier.labelKey) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "min-w-[240px]", children: [
              /* @__PURE__ */ jsx("div", { className: "h-2.5 w-full rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full rounded-full bg-gradient-to-r from-profit to-intelligence", style: {
                width: `${progress}%`
              } }) }),
              /* @__PURE__ */ jsxs("div", { className: "mt-2 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsx("div", { children: t("wallet.tolToken.nextMilestone") }),
                /* @__PURE__ */ jsx("div", { className: "mt-1", children: t("wallet.tolToken.tierProgress", {
                  min: tier.min,
                  max: tier.max
                }) })
              ] })
            ] })
          ] }),
          pendingReview && /* @__PURE__ */ jsxs("div", { className: "mt-5 flex items-start gap-3 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-4", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-amber-400" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-semibold", children: t("wallet.fraud.title") }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground mt-1", children: t("wallet.fraud.body") })
            ] })
          ] }),
          toast && /* @__PURE__ */ jsx("div", { className: "mt-4 text-sm text-ai font-medium", children: toast })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("aside", { className: "glass-strong holo-border rounded-3xl p-6", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4 text-ai" }),
          t("wallet.quickActions")
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx(Button, { variant: "secondary", className: "w-full justify-start rounded-2xl", onClick: () => onDemoEarn("purchase"), children: t("wallet.actions.purchase") }),
          /* @__PURE__ */ jsx(Button, { variant: "secondary", className: "w-full justify-start rounded-2xl", onClick: () => onDemoEarn("trade"), children: t("wallet.actions.trade") }),
          /* @__PURE__ */ jsx(Button, { variant: "secondary", className: "w-full justify-start rounded-2xl", onClick: () => onDemoEarn("daily_login"), children: t("wallet.actions.daily_login") }),
          /* @__PURE__ */ jsx(Button, { variant: "secondary", className: "w-full justify-start rounded-2xl", onClick: () => onDemoEarn("verified_review"), children: t("wallet.actions.verified_review") }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground leading-relaxed", children: t("wallet.demo.storage") })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "grid lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxs(Card, { className: "glass-strong holo-border rounded-3xl lg:col-span-2", children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(ArrowRightLeft, { className: "h-5 w-5 text-intelligence" }),
            t("wallet.redeem.title")
          ] }),
          /* @__PURE__ */ jsx(CardDescription, { children: t("wallet.redeem.desc") })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: perksCatalog.map((perk) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-dashed border-border/50 p-4", children: [
          /* @__PURE__ */ jsx("div", { className: "font-semibold", children: t(perk.nameKey) }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground mt-1", children: t(perk.descriptionKey) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxs(Badge, { variant: "secondary", children: [
              perk.tokenCost,
              " ",
              t("wallet.tolToken.unit")
            ] }),
            /* @__PURE__ */ jsx(Button, { size: "sm", className: "rounded-full", onClick: () => onRedeem(perk.perkId), disabled: balance < perk.tokenCost, children: t("common.redeem") })
          ] }),
          perk.availability === "limited" && /* @__PURE__ */ jsx("div", { className: "mt-2 text-xs text-muted-foreground", children: t("wallet.perk.limited") })
        ] }, perk.perkId)) }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "glass-strong holo-border rounded-3xl", children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsx(CardTitle, { children: t("wallet.history.title") }),
          /* @__PURE__ */ jsx(CardDescription, { children: t("wallet.history.desc") })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: transactions.length === 0 ? /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-dashed border-border/50 p-6 text-center text-sm text-muted-foreground", children: t("wallet.history.empty") }) : /* @__PURE__ */ jsx("div", { className: "space-y-3 max-h-[420px] overflow-auto pr-1", children: transactions.slice(0, 12).map((tx) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border/40 p-3 flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold", children: t(`wallet.tx.type.${tx.type}`) }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground mt-1", children: tx.action })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-sm font-bold tabular-nums", children: [
              tx.type === "redeem" ? "-" : "+",
              tx.amount.toLocaleString()
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground mt-1", children: new Date(tx.timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit"
            }) })
          ] })
        ] }, tx.transactionId)) }) })
      ] })
    ] })
  ] });
}
export {
  WalletPage as component
};
