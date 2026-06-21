import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/i18n/I18nContext";

export const Route = createFileRoute("/trade")({
  component: TradePage,
  head: () => ({
    meta: [
      { title: "Trade & Invest — TolBuy" },
      {
        name: "description",
        content:
          "Crypto, fiat and startup investments visualized as living nodes — interpreted by Tolsentinel AI.",
      },
    ],
  }),
});

// Live market data will be fetched from real-time API once connected

function TradePage() {
  const t = useT();
  return (
    <div className="container mx-auto px-5 pt-8 space-y-8">
      <header>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          {t("common.dimension")}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mt-1">
          {t("trade.title")}
        </h1>
        <p className="mt-2 text-muted-foreground max-w-xl">
          {t("trade.subtitle")}
        </p>
      </header>

      <section className="glass-strong holo-border rounded-3xl p-6">
        <div className="rounded-2xl border border-dashed border-border/50 p-8 text-center">
          <p className="text-muted-foreground">
            Portfolio data will be fetched from connected wallet once
            authentication is set up
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-3">{t("trade.liveAssets")}</h3>
        <div className="rounded-3xl border border-dashed border-border/50 p-8 md:p-12 text-center">
          <p className="text-muted-foreground">
            Live asset prices and trading will be available once real-time data
            feeds are connected
          </p>
          <p className="mt-2 text-sm text-muted-foreground/60">
            Awaiting WebSocket integration with market data providers...
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-3">
          {t("trade.investMarketplace")}
        </h3>
        <div className="rounded-3xl border border-dashed border-border/50 p-8 md:p-12 text-center">
          <p className="text-muted-foreground">
            Startup investment opportunities will appear here once the deal
            database is connected
          </p>
          <p className="mt-2 text-sm text-muted-foreground/60">
            Awaiting backend integration with investment data...
          </p>
        </div>
      </section>
    </div>
  );
}
