import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Sparkles } from "lucide-react";
import { u as useT } from "./router-HBKnjp6h.js";
import { T as TolsentinelBadge } from "./TolsentinelBadge-CqEyLZ3v.js";
import "react";
import "@radix-ui/react-dropdown-menu";
import "clsx";
import "tailwind-merge";
function AiPage() {
  useT();
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-5 pt-8 pb-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "p-2 rounded-lg hover:bg-muted transition-colors", "aria-label": "Go back", children: /* @__PURE__ */ jsx(ArrowLeft, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-bold flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(TolsentinelBadge, {}),
          "Tolsentinel AI"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Your intelligent economic assistant" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsx("div", { className: "md:col-span-1", children: /* @__PURE__ */ jsxs("div", { className: "glass-strong holo-border rounded-3xl p-6 sticky top-24", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold mb-4", children: "Capabilities" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("button", { className: "w-full text-left px-4 py-3 rounded-xl hover:bg-muted transition-colors text-sm", children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Product Search" }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Find exactly what you need" })
          ] }),
          /* @__PURE__ */ jsxs("button", { className: "w-full text-left px-4 py-3 rounded-xl hover:bg-muted transition-colors text-sm", children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Market Analysis" }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Understand trends & signals" })
          ] }),
          /* @__PURE__ */ jsxs("button", { className: "w-full text-left px-4 py-3 rounded-xl hover:bg-muted transition-colors text-sm", children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Trading Assistant" }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Optimize your positions" })
          ] }),
          /* @__PURE__ */ jsxs("button", { className: "w-full text-left px-4 py-3 rounded-xl hover:bg-muted transition-colors text-sm", children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Investment Scout" }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Discover opportunities" })
          ] }),
          /* @__PURE__ */ jsxs("button", { className: "w-full text-left px-4 py-3 rounded-xl hover:bg-muted transition-colors text-sm", children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Profit Optimizer" }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Maximize your returns" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "glass-strong holo-border rounded-3xl p-8 md:p-12 h-[600px] flex flex-col items-center justify-center text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center h-20 w-20 rounded-full bg-ai/20 mb-4", children: /* @__PURE__ */ jsx(Sparkles, { className: "h-10 w-10 text-ai" }) }) }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-3", children: "Tolsentinel AI" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-md mb-6", children: "Your personal economic assistant is ready to help you navigate shopping, trading, and investing opportunities." }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground/60", children: "Chat interface coming soon — awaiting AI engine integration" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Try asking:" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsx("button", { className: "text-left px-4 py-3 rounded-xl glass holo-border hover:bg-muted transition-colors text-sm", children: '"What should I buy today?"' }),
            /* @__PURE__ */ jsx("button", { className: "text-left px-4 py-3 rounded-xl glass holo-border hover:bg-muted transition-colors text-sm", children: '"Analyze my portfolio risk"' }),
            /* @__PURE__ */ jsx("button", { className: "text-left px-4 py-3 rounded-xl glass holo-border hover:bg-muted transition-colors text-sm", children: '"Show me trending products"' }),
            /* @__PURE__ */ jsx("button", { className: "text-left px-4 py-3 rounded-xl glass holo-border hover:bg-muted transition-colors text-sm", children: '"Find investment opportunities"' })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 rounded-3xl border border-dashed border-border/50 p-8 md:p-12 text-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "How Tolsentinel works" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto mb-6", children: "Tolsentinel AI watches every signal across shopping, trading, and investing. It surfaces what matters — only when it matters. Every interaction makes it smarter about your preferences and goals." }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-ai mb-2", children: "1" }),
          /* @__PURE__ */ jsx("div", { className: "font-medium mb-1", children: "Observe" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Monitor market signals and your behavior" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-intelligence mb-2", children: "2" }),
          /* @__PURE__ */ jsx("div", { className: "font-medium mb-1", children: "Analyze" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Process patterns and opportunities" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-profit mb-2", children: "3" }),
          /* @__PURE__ */ jsx("div", { className: "font-medium mb-1", children: "Recommend" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Surface personalized actions" })
        ] })
      ] })
    ] })
  ] });
}
export {
  AiPage as component
};
