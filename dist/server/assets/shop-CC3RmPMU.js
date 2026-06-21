import { jsxs, jsx } from "react/jsx-runtime";
import { GitCompare, Search, Sparkles } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { T as TolsentinelBadge } from "./TolsentinelBadge-CqEyLZ3v.js";
import { u as useT } from "./router-HBKnjp6h.js";
import "@tanstack/react-router";
import "@radix-ui/react-dropdown-menu";
import "clsx";
import "tailwind-merge";
async function recommend() {
  return [];
}
async function explain(_productId) {
  return "";
}
async function compare(productIds) {
  return { productIds, highlights: [] };
}
const consumer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compare,
  explain,
  recommend
}, Symbol.toStringTag, { value: "Module" }));
async function insights() {
  return [];
}
async function trends() {
  return [];
}
async function generateCopy(_input) {
  return { headline: "", body: "", tags: [] };
}
const merchant = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generateCopy,
  insights,
  trends
}, Symbol.toStringTag, { value: "Module" }));
const tolsentinel = {
  ready: false,
  // flips to true once the real engine is wired in
  consumer,
  merchant
};
function AIRecommendationPanel() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  useEffect(() => {
    let cancelled = false;
    async function run() {
      try {
        setLoading(true);
        const recs = await tolsentinel.consumer.recommend();
        if (!cancelled) setItems(recs);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    void run();
    return () => {
      cancelled = true;
    };
  }, []);
  const confidenceText = useMemo(() => {
    return (c) => {
      const pct = Math.round(Math.max(0, Math.min(1, c)) * 100);
      return `${pct}%`;
    };
  }, []);
  return /* @__PURE__ */ jsxs("section", { className: "glass-strong holo-border rounded-3xl p-6", children: [
    /* @__PURE__ */ jsxs("header", { className: "flex items-center gap-2 mb-3", children: [
      /* @__PURE__ */ jsx(TolsentinelBadge, { size: 18 }),
      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Tolsentinel · Recommendations" })
    ] }),
    loading ? /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-dashed border-border py-10 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Loading recommendations…" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1 max-w-xs mx-auto", children: "Preparing your tailored picks." })
    ] }) : items.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-dashed border-border py-10 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "No recommendations yet" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1 max-w-xs mx-auto", children: "Tolsentinel will surface tailored picks here once the AI engine is online." })
    ] }) : /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-border/60 p-4", children: /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: items.map((it) => /* @__PURE__ */ jsxs(
      "li",
      {
        className: "flex items-start justify-between gap-4 p-3 rounded-xl bg-muted/20 border border-border/30",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold truncate", children: it.productId }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: it.reason })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "shrink-0 text-right", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Confidence" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold tabular-nums", children: confidenceText(it.confidence) })
          ] })
        ]
      },
      it.productId
    )) }) })
  ] });
}
function ComparisonCard({ productIds = [] }) {
  return /* @__PURE__ */ jsxs("section", { className: "glass-strong holo-border rounded-3xl p-6", children: [
    /* @__PURE__ */ jsxs("header", { className: "flex items-center gap-2 mb-4", children: [
      /* @__PURE__ */ jsx(GitCompare, { className: "h-4 w-4 text-intelligence" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Side-by-side comparison" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3", children: [0, 1].map((i) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "rounded-2xl border border-dashed border-border p-4",
        children: [
          /* @__PURE__ */ jsx("div", { className: "h-24 rounded-lg bg-muted/40" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-xs text-muted-foreground", children: productIds[i] ? `Product ${productIds[i]}` : "No product selected" })
        ]
      },
      i
    )) })
  ] });
}
function ShopPage() {
  const t = useT();
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-5 pt-8", children: [
    /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: t("common.dimension") }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mt-1", children: t("shop.title") }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground max-w-xl", children: t("shop.subtitle") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "glass holo-border rounded-2xl p-2 flex items-center gap-2 mb-8", children: [
      /* @__PURE__ */ jsx(Search, { className: "h-4 w-4 ml-3 text-muted-foreground" }),
      /* @__PURE__ */ jsx("input", { placeholder: t("shop.searchPlaceholder"), className: "flex-1 bg-transparent outline-none text-sm py-2.5" }),
      /* @__PURE__ */ jsxs("button", { className: "rounded-xl px-4 py-2 bg-foreground text-background text-sm magnetic flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" }),
        " ",
        t("shop.aiSearch")
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-dashed border-border/50 p-8 md:p-12 text-center", children: [
      /* @__PURE__ */ jsx(Search, { className: "mx-auto h-12 w-12 text-muted-foreground/50 mb-4" }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: t("shop.title") }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground max-w-md mx-auto", children: "Real products with AI analysis will appear here once the database is connected." }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground/60", children: "Awaiting backend API integration..." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 grid lg:grid-cols-2 gap-5", children: [
      /* @__PURE__ */ jsx(AIRecommendationPanel, {}),
      /* @__PURE__ */ jsx(ComparisonCard, { productIds: ["Aurora Headphones", "Helix Sneakers"] })
    ] })
  ] });
}
export {
  ShopPage as component
};
