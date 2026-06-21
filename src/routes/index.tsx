import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Coins, Eye, ArrowUpRight } from "lucide-react";
import { useT } from "@/i18n/I18nContext";

export const Route = createFileRoute("/")({
  component: FeedPage,
  head: () => ({
    meta: [
      { title: "Feed — TolBuy" },
      {
        name: "description",
        content:
          "Your personalized AI economic feed: deals, trades, insights and opportunities curated by Tolsentinel.",
      },
    ],
  }),
});

// Feed items will be fetched from API once Tolsentinel AI is integrated

function FeedPage() {
  const t = useT();
  const stats: { k: string; v: string; d: string; up: boolean }[] = []; // Will be populated from API
  return (
    <div className="container mx-auto px-5 pt-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl glass-strong holo-border p-8 md:p-12 mb-10">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-ai/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-intelligence/20 blur-3xl pointer-events-none" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-profit animate-orb-pulse" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              {t("feed.live")}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] max-w-3xl">
            {t("feed.heroTitle1")}
            <br />
            <span className="text-gradient-ai">{t("feed.heroTitle2")}</span>
          </h1>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">
            {t("feed.heroSubtitle")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="px-5 py-3 rounded-full bg-foreground text-background text-sm font-semibold magnetic inline-flex items-center gap-2">
              {t("feed.enterUniverse")} <ArrowUpRight className="h-4 w-4" />
            </button>
            <Link
              to="/ai"
              className="px-5 py-3 rounded-full glass holo-border text-sm font-medium magnetic inline-flex items-center gap-2 hover:bg-muted transition-colors"
            >
              <Sparkles className="h-4 w-4 text-ai" />{" "}
              {t("feed.talkToTolsentinel")}
            </Link>
          </div>

          {/* Stat strip — Coming from API */}
          <div className="mt-10 rounded-2xl border border-dashed border-border/50 p-6 text-center text-sm text-muted-foreground">
            Real-time stats will load once connected to backend
          </div>
        </div>
      </section>

      {/* Feed grid — Coming from API */}
      <div className="rounded-3xl border border-dashed border-border/50 p-8 md:p-12 text-center">
        <Sparkles className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4" />
        <h2 className="text-2xl font-bold">{t("feed.yourAiFeed")}</h2>
        <p className="mt-2 text-muted-foreground max-w-md mx-auto">
          {t("feed.adaptive")}
        </p>
        <p className="mt-3 text-sm text-muted-foreground/60">
          Awaiting Tolsentinel AI engine integration and real-time data feed...
        </p>
      </div>

      {/* Tokens band */}
      <section className="mt-12 glass-strong holo-border rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
        <div className="flex items-center gap-4">
          <div className="relative h-14 w-14 rounded-2xl bg-gradient-to-br from-profit to-intelligence glow-profit flex items-center justify-center">
            <Coins className="h-6 w-6 text-background" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              {t("feed.tokensLevel")}
            </p>
            <h3 className="text-2xl font-bold tabular-nums">
              1,847{" "}
              <span className="text-sm text-muted-foreground font-normal">
                {t("feed.toNextRank")}
              </span>
            </h3>
            <div className="mt-2 h-1.5 w-64 rounded-full bg-muted overflow-hidden">
              <div className="h-full w-[74%] bg-gradient-to-r from-profit to-intelligence" />
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="glass magnetic rounded-full px-4 py-2 text-sm">
            {t("common.redeem")}
          </button>
          <button className="rounded-full px-4 py-2 text-sm bg-foreground text-background magnetic">
            {t("common.earnMore")}
          </button>
        </div>
      </section>

      {/* Premium */}
      <section className="mt-8 relative overflow-hidden rounded-3xl border border-ai/40 p-8 md:p-10">
        <div className="absolute inset-0 bg-gradient-to-br from-ai/20 via-intelligence/10 to-transparent" />
        <div className="absolute -top-20 -right-10 h-72 w-72 rounded-full bg-ai/30 blur-3xl" />
        <div className="relative grid md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-ai">
              {t("feed.premiumTag")}
            </p>
            <h3 className="text-3xl font-bold mt-2">
              {t("feed.premiumTitle")}
            </h3>
            <ul className="mt-5 space-y-2 text-sm text-foreground/85">
              {[
                "feed.premiumF1",
                "feed.premiumF2",
                "feed.premiumF3",
                "feed.premiumF4",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Eye className="h-3.5 w-3.5 text-ai" />
                  {t(f)}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-strong holo-border rounded-2xl p-6">
            <p className="text-sm text-muted-foreground">{t("feed.monthly")}</p>
            <p className="text-5xl font-display font-bold mt-1">
              $29
              <span className="text-base text-muted-foreground font-normal">
                {t("feed.perMonth")}
              </span>
            </p>
            <button className="mt-5 w-full rounded-xl bg-gradient-to-r from-intelligence to-ai py-3 text-sm font-semibold magnetic glow-ai">
              {t("feed.activatePremium")}
            </button>
            <p className="mt-3 text-[11px] text-center text-muted-foreground">
              {t("feed.cancelAnytime")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
