import { jsxs, jsx } from "react/jsx-runtime";
import { LineChart, TrendingUp, Wand2, Upload } from "lucide-react";
import { u as useT } from "./router-HBKnjp6h.js";
import "@tanstack/react-router";
import "react";
import "@radix-ui/react-dropdown-menu";
import "clsx";
import "tailwind-merge";
function MarketInsightsPanel() {
  return /* @__PURE__ */ jsxs("section", { className: "glass-strong holo-border rounded-3xl p-6", children: [
    /* @__PURE__ */ jsxs("header", { className: "flex items-center gap-2 mb-3", children: [
      /* @__PURE__ */ jsx(LineChart, { className: "h-4 w-4 text-intelligence" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Market Insights" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-dashed border-border py-10 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Awaiting Tolsentinel" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1 max-w-xs mx-auto", children: "Live market signals for your store will appear here." })
    ] })
  ] });
}
function TrendSuggestions() {
  const items = [];
  return /* @__PURE__ */ jsxs("section", { className: "glass-strong holo-border rounded-3xl p-6", children: [
    /* @__PURE__ */ jsxs("header", { className: "flex items-center gap-2 mb-3", children: [
      /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4 text-profit" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Trend Suggestions" })
    ] }),
    items.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-dashed border-border py-10 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "No trends yet" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Tolsentinel will list rising categories here." })
    ] }) : /* @__PURE__ */ jsx("ul", { className: "divide-y divide-border", children: items.map((t) => /* @__PURE__ */ jsxs("li", { className: "flex justify-between py-2 text-sm", children: [
      /* @__PURE__ */ jsx("span", { children: t.topic }),
      /* @__PURE__ */ jsxs("span", { className: "text-profit tabular-nums", children: [
        "+",
        t.delta,
        "%"
      ] })
    ] }, t.topic)) })
  ] });
}
function MarketingCopyGenerator() {
  return /* @__PURE__ */ jsxs("section", { className: "glass-strong holo-border rounded-3xl p-6", children: [
    /* @__PURE__ */ jsxs("header", { className: "flex items-center gap-2 mb-3", children: [
      /* @__PURE__ */ jsx(Wand2, { className: "h-4 w-4 text-ai" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Marketing Copy Generator" })
    ] }),
    /* @__PURE__ */ jsx("label", { className: "block text-xs text-muted-foreground mb-1", children: "Product" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        placeholder: "e.g. Vintage Leica M3 35mm camera",
        className: "w-full glass rounded-xl px-3 py-2.5 text-sm bg-transparent outline-none mb-3"
      }
    ),
    /* @__PURE__ */ jsx("label", { className: "block text-xs text-muted-foreground mb-1", children: "Tone" }),
    /* @__PURE__ */ jsxs(
      "select",
      {
        defaultValue: "premium",
        className: "w-full glass rounded-xl px-3 py-2.5 text-sm bg-transparent outline-none mb-4",
        children: [
          /* @__PURE__ */ jsx("option", { value: "premium", children: "Premium" }),
          /* @__PURE__ */ jsx("option", { value: "playful", children: "Playful" }),
          /* @__PURE__ */ jsx("option", { value: "minimal", children: "Minimal" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        disabled: true,
        className: "w-full rounded-xl bg-foreground/80 text-background py-2.5 text-sm font-semibold opacity-70 cursor-not-allowed",
        title: "Tolsentinel AI not yet connected",
        children: "Generate (coming soon)"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-4 rounded-2xl border border-dashed border-border p-4 text-xs text-muted-foreground min-h-20", children: "Generated copy will appear here." })
  ] });
}
function SellPage() {
  const t = useT();
  return /* @__PURE__ */ jsx("div", { className: "min-h-[80vh] bg-[oklch(0.10_0.04_265)] -mx-0", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-5 pt-8 space-y-8", children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 glass rounded-full px-3 py-1.5", children: [
        /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-ai animate-orb-pulse" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-widest", children: t("sell.tag") })
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-bold mt-3", children: [
        t("sell.title1"),
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-ai", children: t("sell.title2") })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground max-w-xl", children: t("sell.subtitle") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 glass-strong holo-border rounded-3xl p-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "border-2 border-dashed border-border rounded-2xl py-16 text-center hover:border-ai/50 transition-colors", children: [
          /* @__PURE__ */ jsx("div", { className: "mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br from-intelligence to-ai grid place-items-center glow-intelligence", children: /* @__PURE__ */ jsx(Upload, { className: "h-6 w-6 text-background" }) }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 font-semibold", children: t("sell.dropPhoto") }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: t("sell.autoGen") }),
          /* @__PURE__ */ jsx("button", { className: "mt-5 rounded-full px-5 py-2.5 bg-foreground text-background text-sm font-semibold magnetic", children: t("sell.pickFile") })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 rounded-2xl border border-dashed border-border p-8 text-center text-muted-foreground text-sm", children: "Upload a photo to generate AI-powered listing preview" })
      ] }),
      /* @__PURE__ */ jsxs("aside", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "glass-strong holo-border rounded-3xl p-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: t("sell.profitSim") }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 rounded-2xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground", children: "Profit simulation will calculate once you add a product" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-5 border border-dashed border-border text-center text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx("p", { children: t("sell.logistics") }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs", children: "Logistics partners will be calculated once listing is created" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "grid lg:grid-cols-3 gap-6 pt-2", children: [
      /* @__PURE__ */ jsx(MarketInsightsPanel, {}),
      /* @__PURE__ */ jsx(TrendSuggestions, {}),
      /* @__PURE__ */ jsx(MarketingCopyGenerator, {})
    ] })
  ] }) });
}
export {
  SellPage as component
};
