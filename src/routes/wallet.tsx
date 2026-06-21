import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/i18n/I18nContext";

import { useEffect, useMemo, useState } from "react";

import { Coins, Sparkles, AlertTriangle, ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { perksCatalog, type PerkId } from "@/tokens/perksCatalog";
import {
  type TolTokenAction,
  type TolTokenContext,
} from "@/tokens/tolTokenConfig";
import {
  addTokens,
  getWalletState,
  redeemTokens,
  listTransactions,
} from "@/tokens/walletStore";

export const Route = createFileRoute("/wallet")({
  component: WalletPage,
  head: () => ({
    meta: [
      { title: "Wallet — TolBuy" },
      {
        name: "description",
        content:
          "TolToken wallet demo: earn points, redeem perks, and see fraud flags (placeholder) — stored locally.",
      },
    ],
  }),
});

function milestoneFor(balance: number) {
  // Demo tiers
  if (balance < 1000) return { labelKey: "wallet.tier.1", min: 0, max: 999 };
  if (balance < 3000)
    return { labelKey: "wallet.tier.2", min: 1000, max: 2999 };
  if (balance < 7000)
    return { labelKey: "wallet.tier.3", min: 3000, max: 6999 };
  return { labelKey: "wallet.tier.4", min: 7000, max: 20000 };
}

function WalletPage() {
  const t = useT();
  const userId = "demo-user";

  const [balance, setBalance] = useState(0);
  const [pendingReview, setPendingReview] = useState(false);
  const [transactions, setTransactions] = useState<
    ReturnType<typeof listTransactions>
  >([]);
  const [toast, setToast] = useState<string | null>(null);

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
    return ((v - tier.min) / denom) * 100;
  }, [balance, tier.max, tier.min]);

  async function refresh() {
    const state = getWalletState(userId);
    setBalance(state.balance);
    setPendingReview(state.pendingReview);
    setTransactions(listTransactions(userId));
  }

  const investorTier: TolTokenContext["investorTier"] = "standard";

  async function onDemoEarn(action: TolTokenAction) {
    const context: TolTokenContext = { investorTier };

    // Demo values
    let value: number | undefined;
    let count: number | undefined;

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
      note: "demo_action",
    });

    if (res.pointsAdded > 0) {
      setToast(t("wallet.toast.earned"));
    } else {
      setToast(t("wallet.toast.review"));
    }

    await refresh();
    setTimeout(() => setToast(null), 2500);
  }

  async function onRedeem(perkId: PerkId) {
    setToast(null);
    const res = await redeemTokens({ userId, perkId });
    if (res.ok) setToast(t("wallet.toast.redeemed"));
    else setToast(t(`wallet.toast.${res.message}`) as string);

    await refresh();
    setTimeout(() => setToast(null), 2500);
  }

  return (
    <div className="container mx-auto px-5 pt-8 pb-20 space-y-8">
      <header>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          {t("common.dimension")}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mt-1">
          {t("wallet.tolToken.title")}
        </h1>
        <p className="mt-2 text-muted-foreground max-w-xl">
          {t("wallet.tolToken.subtitle")}
        </p>
      </header>

      <div className="grid lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2">
          <Card className="glass-strong holo-border rounded-3xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Coins className="h-5 w-5 text-profit" />
                {t("wallet.tolToken.balance")}
                <Badge variant="secondary" className="ml-2">
                  {t("wallet.tolToken.unit")}
                </Badge>
              </CardTitle>
              <CardDescription>
                {t("wallet.tolToken.balanceDesc")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between gap-6">
                <div>
                  <div className="text-5xl font-bold tabular-nums">
                    {balance.toLocaleString()}
                  </div>
                  <div className="mt-2 text-muted-foreground text-sm">
                    {t(tier.labelKey)}
                  </div>
                </div>
                <div className="min-w-[240px]">
                  <div className="h-2.5 w-full rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-profit to-intelligence"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    <div>{t("wallet.tolToken.nextMilestone")}</div>
                    <div className="mt-1">
                      {t("wallet.tolToken.tierProgress", {
                        min: tier.min,
                        max: tier.max,
                      } as never)}
                    </div>

                  </div>
                </div>
              </div>

              {pendingReview && (
                <div className="mt-5 flex items-start gap-3 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-4">
                  <AlertTriangle className="h-5 w-5 text-amber-400" />
                  <div>
                    <div className="font-semibold">
                      {t("wallet.fraud.title")}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {t("wallet.fraud.body")}
                    </div>
                  </div>
                </div>
              )}

              {toast && (
                <div className="mt-4 text-sm text-ai font-medium">{toast}</div>
              )}
            </CardContent>
          </Card>
        </section>

        <aside className="glass-strong holo-border rounded-3xl p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-ai" />
            {t("wallet.quickActions")}
          </h3>
          <div className="space-y-3">
            <Button
              variant="secondary"
              className="w-full justify-start rounded-2xl"
              onClick={() => onDemoEarn("purchase")}
            >
              {t("wallet.actions.purchase")}
            </Button>
            <Button
              variant="secondary"
              className="w-full justify-start rounded-2xl"
              onClick={() => onDemoEarn("trade")}
            >
              {t("wallet.actions.trade")}
            </Button>
            <Button
              variant="secondary"
              className="w-full justify-start rounded-2xl"
              onClick={() => onDemoEarn("daily_login")}
            >
              {t("wallet.actions.daily_login")}
            </Button>
            <Button
              variant="secondary"
              className="w-full justify-start rounded-2xl"
              onClick={() => onDemoEarn("verified_review")}
            >
              {t("wallet.actions.verified_review")}
            </Button>
            <div className="text-xs text-muted-foreground leading-relaxed">
              {t("wallet.demo.storage")}
            </div>
          </div>
        </aside>
      </div>

      <section className="grid lg:grid-cols-3 gap-6">
        <Card className="glass-strong holo-border rounded-3xl lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <ArrowRightLeft className="h-5 w-5 text-intelligence" />
              {t("wallet.redeem.title")}
            </CardTitle>
            <CardDescription>{t("wallet.redeem.desc")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {perksCatalog.map((perk) => (
                <div
                  key={perk.perkId}
                  className="rounded-2xl border border-dashed border-border/50 p-4"
                >
                  <div className="font-semibold">{t(perk.nameKey)}</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {t(perk.descriptionKey)}
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <Badge variant="secondary">
                      {perk.tokenCost} {t("wallet.tolToken.unit")}
                    </Badge>
                    <Button
                      size="sm"
                      className="rounded-full"
                      onClick={() => onRedeem(perk.perkId)}
                      disabled={balance < perk.tokenCost}
                    >
                      {t("common.redeem")}
                    </Button>
                  </div>
                  {perk.availability === "limited" && (
                    <div className="mt-2 text-xs text-muted-foreground">
                      {t("wallet.perk.limited")}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="glass-strong holo-border rounded-3xl">
          <CardHeader>
            <CardTitle>{t("wallet.history.title")}</CardTitle>
            <CardDescription>{t("wallet.history.desc")}</CardDescription>
          </CardHeader>
          <CardContent>
            {transactions.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border/50 p-6 text-center text-sm text-muted-foreground">
                {t("wallet.history.empty")}
              </div>
            ) : (
              <div className="space-y-3 max-h-[420px] overflow-auto pr-1">
                {transactions.slice(0, 12).map((tx) => (
                  <div
                    key={tx.transactionId}
                    className="rounded-2xl border border-border/40 p-3 flex items-start justify-between gap-4"
                  >
                    <div>
                      <div className="text-sm font-semibold">
                        {t(`wallet.tx.type.${tx.type}`)}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {tx.action}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold tabular-nums">
                        {tx.type === "redeem" ? "-" : "+"}
                        {tx.amount.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {new Date(tx.timestamp).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
