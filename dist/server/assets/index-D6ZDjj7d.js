import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, Coins, Eye } from "lucide-react";
import { u as useT } from "./router-HBKnjp6h.js";
import "react";
import "@radix-ui/react-dropdown-menu";
import "clsx";
import "tailwind-merge";
function FeedPage() {
  const t = useT();
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-5 pt-8", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden rounded-3xl glass-strong holo-border p-8 md:p-12 mb-10", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-20 -right-20 h-80 w-80 rounded-full bg-ai/20 blur-3xl pointer-events-none" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-intelligence/20 blur-3xl pointer-events-none" }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 mb-6", children: [
          /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-profit animate-orb-pulse" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: t("feed.live") })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-6xl font-bold leading-[1.05] max-w-3xl", children: [
          t("feed.heroTitle1"),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-gradient-ai", children: t("feed.heroTitle2") })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-base md:text-lg text-muted-foreground max-w-xl", children: t("feed.heroSubtitle") }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxs("button", { className: "px-5 py-3 rounded-full bg-foreground text-background text-sm font-semibold magnetic inline-flex items-center gap-2", children: [
            t("feed.enterUniverse"),
            " ",
            /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/ai", className: "px-5 py-3 rounded-full glass holo-border text-sm font-medium magnetic inline-flex items-center gap-2 hover:bg-muted transition-colors", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4 text-ai" }),
            " ",
            t("feed.talkToTolsentinel")
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-10 rounded-2xl border border-dashed border-border/50 p-6 text-center text-sm text-muted-foreground", children: "Real-time stats will load once connected to backend" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-dashed border-border/50 p-8 md:p-12 text-center", children: [
      /* @__PURE__ */ jsx(Sparkles, { className: "mx-auto h-12 w-12 text-muted-foreground/50 mb-4" }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: t("feed.yourAiFeed") }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground max-w-md mx-auto", children: t("feed.adaptive") }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground/60", children: "Awaiting Tolsentinel AI engine integration and real-time data feed..." })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mt-12 glass-strong holo-border rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "relative h-14 w-14 rounded-2xl bg-gradient-to-br from-profit to-intelligence glow-profit flex items-center justify-center", children: /* @__PURE__ */ jsx(Coins, { className: "h-6 w-6 text-background" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: t("feed.tokensLevel") }),
          /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold tabular-nums", children: [
            "1,847",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground font-normal", children: t("feed.toNextRank") })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-2 h-1.5 w-64 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full w-[74%] bg-gradient-to-r from-profit to-intelligence" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx("button", { className: "glass magnetic rounded-full px-4 py-2 text-sm", children: t("common.redeem") }),
        /* @__PURE__ */ jsx("button", { className: "rounded-full px-4 py-2 text-sm bg-foreground text-background magnetic", children: t("common.earnMore") })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mt-8 relative overflow-hidden rounded-3xl border border-ai/40 p-8 md:p-10", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-ai/20 via-intelligence/10 to-transparent" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -top-20 -right-10 h-72 w-72 rounded-full bg-ai/30 blur-3xl" }),
      /* @__PURE__ */ jsxs("div", { className: "relative grid md:grid-cols-2 gap-6 items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-ai", children: t("feed.premiumTag") }),
          /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold mt-2", children: t("feed.premiumTitle") }),
          /* @__PURE__ */ jsx("ul", { className: "mt-5 space-y-2 text-sm text-foreground/85", children: ["feed.premiumF1", "feed.premiumF2", "feed.premiumF3", "feed.premiumF4"].map((f) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Eye, { className: "h-3.5 w-3.5 text-ai" }),
            t(f)
          ] }, f)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "glass-strong holo-border rounded-2xl p-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: t("feed.monthly") }),
          /* @__PURE__ */ jsxs("p", { className: "text-5xl font-display font-bold mt-1", children: [
            "$29",
            /* @__PURE__ */ jsx("span", { className: "text-base text-muted-foreground font-normal", children: t("feed.perMonth") })
          ] }),
          /* @__PURE__ */ jsx("button", { className: "mt-5 w-full rounded-xl bg-gradient-to-r from-intelligence to-ai py-3 text-sm font-semibold magnetic glow-ai", children: t("feed.activatePremium") }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-[11px] text-center text-muted-foreground", children: t("feed.cancelAnytime") })
        ] })
      ] })
    ] })
  ] });
}
export {
  FeedPage as component
};
