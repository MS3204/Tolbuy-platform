import { createFileRoute } from "@tanstack/react-router";
import { Upload, Sparkles, TrendingUp } from "lucide-react";
import { MarketInsightsPanel } from "@/components/ai/MarketInsightsPanel";
import { TrendSuggestions } from "@/components/ai/TrendSuggestions";
import { MarketingCopyGenerator } from "@/components/ai/MarketingCopyGenerator";
import { useT } from "@/i18n/I18nContext";

export const Route = createFileRoute("/sell")({
  component: SellPage,
  head: () => ({
    meta: [
      { title: "Sell Mode — TolBuy" },
      {
        name: "description",
        content:
          "AI-generated listings, live profit simulation and instant onboarding for sellers — local to global.",
      },
    ],
  }),
});

function SellPage() {
  const t = useT();
  return (
    <div className="min-h-[80vh] bg-[oklch(0.10_0.04_265)] -mx-0">
      <div className="container mx-auto px-5 pt-8 space-y-8">
        <header>
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-ai animate-orb-pulse" />
            <span className="text-xs uppercase tracking-widest">
              {t("sell.tag")}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            {t("sell.title1")}{" "}
            <span className="text-gradient-ai">{t("sell.title2")}</span>
          </h1>
          <p className="mt-2 text-muted-foreground max-w-xl">
            {t("sell.subtitle")}
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Drop zone */}
          <div className="lg:col-span-2 glass-strong holo-border rounded-3xl p-8">
            <div className="border-2 border-dashed border-border rounded-2xl py-16 text-center hover:border-ai/50 transition-colors">
              <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br from-intelligence to-ai grid place-items-center glow-intelligence">
                <Upload className="h-6 w-6 text-background" />
              </div>
              <p className="mt-4 font-semibold">{t("sell.dropPhoto")}</p>
              <p className="text-sm text-muted-foreground">
                {t("sell.autoGen")}
              </p>
              <button className="mt-5 rounded-full px-5 py-2.5 bg-foreground text-background text-sm font-semibold magnetic">
                {t("sell.pickFile")}
              </button>
            </div>

            {/* AI generated preview — Coming after upload */}
            <div className="mt-6 rounded-2xl border border-dashed border-border p-8 text-center text-muted-foreground text-sm">
              Upload a photo to generate AI-powered listing preview
            </div>
          </div>

          {/* Live profit sim */}
          <aside className="space-y-4">
            <div className="glass-strong holo-border rounded-3xl p-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {t("sell.profitSim")}
              </p>
              <div className="mt-4 rounded-2xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
                Profit simulation will calculate once you add a product
              </div>
            </div>

            <div className="glass rounded-2xl p-5 border border-dashed border-border text-center text-sm text-muted-foreground">
              <p>{t("sell.logistics")}</p>
              <p className="mt-2 text-xs">
                Logistics partners will be calculated once listing is created
              </p>
            </div>
          </aside>
        </div>

        {/* Tolsentinel AI integration points (placeholders) */}
        <section className="grid lg:grid-cols-3 gap-6 pt-2">
          <MarketInsightsPanel />
          <TrendSuggestions />
          <MarketingCopyGenerator />
        </section>
      </div>
    </div>
  );
}
