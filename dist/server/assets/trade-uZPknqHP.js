import { jsxs, jsx } from "react/jsx-runtime";
import { u as useT } from "./router-HBKnjp6h.js";
import "@tanstack/react-router";
import "react";
import "lucide-react";
import "@radix-ui/react-dropdown-menu";
import "clsx";
import "tailwind-merge";
function TradePage() {
  const t = useT();
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-5 pt-8 space-y-8", children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: t("common.dimension") }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mt-1", children: t("trade.title") }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground max-w-xl", children: t("trade.subtitle") })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "glass-strong holo-border rounded-3xl p-6", children: /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-dashed border-border/50 p-8 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Portfolio data will be fetched from connected wallet once authentication is set up" }) }) }),
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-3", children: t("trade.liveAssets") }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-dashed border-border/50 p-8 md:p-12 text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Live asset prices and trading will be available once real-time data feeds are connected" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground/60", children: "Awaiting WebSocket integration with market data providers..." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-3", children: t("trade.investMarketplace") }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-dashed border-border/50 p-8 md:p-12 text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Startup investment opportunities will appear here once the deal database is connected" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground/60", children: "Awaiting backend integration with investment data..." })
      ] })
    ] })
  ] });
}
export {
  TradePage as component
};
