import { createFileRoute } from "@tanstack/react-router";
import { Search, Sparkles, ShieldCheck, TrendingUp } from "lucide-react";
import { AIRecommendationPanel } from "@/components/ai/AIRecommendationPanel";
import { WhyThisProduct } from "@/components/ai/WhyThisProduct";
import { ComparisonCard } from "@/components/ai/ComparisonCard";
import { useT } from "@/i18n/I18nContext";

export const Route = createFileRoute("/shop")({
  component: ShopPage,
  head: () => ({
    meta: [
      { title: "Shop Dimension — TolBuy" },
      {
        name: "description",
        content:
          "Floating product cards with AI insights — fairness, demand and trust scored by Tolsentinel.",
      },
    ],
  }),
});

// Products will be fetched from API once backend is ready
const products: Array<{
  nameKey: string;
  price: number;
  fair: number;
  demand: number;
  trust: number;
  hue: string;
}> = [];

function ShopPage() {
  const t = useT();
  return (
    <div className="container mx-auto px-5 pt-8">
      <header className="mb-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          {t("common.dimension")}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mt-1">
          {t("shop.title")}
        </h1>
        <p className="mt-2 text-muted-foreground max-w-xl">
          {t("shop.subtitle")}
        </p>
      </header>

      <div className="glass holo-border rounded-2xl p-2 flex items-center gap-2 mb-8">
        <Search className="h-4 w-4 ml-3 text-muted-foreground" />
        <input
          placeholder={t("shop.searchPlaceholder")}
          className="flex-1 bg-transparent outline-none text-sm py-2.5"
        />
        <button className="rounded-xl px-4 py-2 bg-foreground text-background text-sm magnetic flex items-center gap-2">
          <Sparkles className="h-4 w-4" /> {t("shop.aiSearch")}
        </button>
      </div>

      {/* Products grid — Coming from API */}
      <div className="rounded-3xl border border-dashed border-border/50 p-8 md:p-12 text-center">
        <Search className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4" />
        <h2 className="text-2xl font-bold">{t("shop.title")}</h2>
        <p className="mt-2 text-muted-foreground max-w-md mx-auto">
          Real products with AI analysis will appear here once the database is
          connected.
        </p>
        <p className="mt-3 text-sm text-muted-foreground/60">
          Awaiting backend API integration...
        </p>
      </div>

      {/* AI integration points (placeholders — Tolsentinel not yet wired) */}
      <div className="mt-10 grid lg:grid-cols-2 gap-5">
        <AIRecommendationPanel />
        <ComparisonCard productIds={["Aurora Headphones", "Helix Sneakers"]} />
      </div>
    </div>
  );
}
