import { jsxs, jsx } from "react/jsx-runtime";
import { u as useT, L as Logo, t as tmLogo } from "./router-HBKnjp6h.js";
import { T as TolsentinelBadge } from "./TolsentinelBadge-CqEyLZ3v.js";
import "@tanstack/react-router";
import "react";
import "lucide-react";
import "@radix-ui/react-dropdown-menu";
import "clsx";
import "tailwind-merge";
function AboutPage() {
  const t = useT();
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-5 pt-10 pb-24 max-w-3xl", children: [
    /* @__PURE__ */ jsxs("header", { className: "mb-10", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-3", children: t("about.kicker") }),
      /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-display font-bold leading-tight", children: [
        t("about.title1"),
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-brand", children: t("about.title2") })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-foreground/75 max-w-2xl", children: t("about.intro") })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "glass-strong holo-border rounded-3xl p-6 mb-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
        /* @__PURE__ */ jsx(Logo, { size: 32, withWordmark: false }),
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-display", children: "TolBuy" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/75", children: t("about.tolbuyBody") })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "glass-strong holo-border rounded-3xl p-6 mb-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
        /* @__PURE__ */ jsx(TolsentinelBadge, { size: 32 }),
        /* @__PURE__ */ jsxs("h2", { className: "text-xl font-display", children: [
          "Tolsentinel ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-ai", children: "AI" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/75", children: t("about.tolsentinelBody") })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "glass rounded-3xl p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
        /* @__PURE__ */ jsx("img", { src: tmLogo, alt: "TM Group", className: "h-10 w-auto" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-display", children: "TM Group" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: t("about.tmParent") })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-sm text-foreground/75", children: [
        t("about.tmBody1"),
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", children: t("about.tmBody2") }),
        t("about.tmBody3")
      ] })
    ] })
  ] });
}
export {
  AboutPage as component
};
