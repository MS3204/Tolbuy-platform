import { jsxs, jsx } from "react/jsx-runtime";
function TolsentinelBadge({
  size = 22,
  className = "",
  withWordmark = false
}) {
  return /* @__PURE__ */ jsxs("span", { className: `inline-flex items-center gap-2 ${className}`, children: [
    /* @__PURE__ */ jsxs(
      "svg",
      {
        width: size,
        height: size,
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-label": "Tolsentinel AI",
        role: "img",
        children: [
          /* @__PURE__ */ jsxs("defs", { children: [
            /* @__PURE__ */ jsxs(
              "linearGradient",
              {
                id: "ts-grad",
                x1: "0",
                y1: "0",
                x2: "32",
                y2: "32",
                gradientUnits: "userSpaceOnUse",
                children: [
                  /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "oklch(0.58 0.15 248)" }),
                  /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "oklch(0.65 0.22 280)" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "linearGradient",
              {
                id: "ts-core",
                x1: "0",
                y1: "0",
                x2: "0",
                y2: "32",
                gradientUnits: "userSpaceOnUse",
                children: [
                  /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "oklch(0.97 0.01 250)" }),
                  /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "oklch(0.72 0.20 148)" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M16 1.7 28.6 9v14L16 30.3 3.4 23V9L16 1.7Z",
              stroke: "url(#ts-grad)",
              strokeWidth: "1.5",
              fill: "oklch(0.18 0.04 265 / 0.5)"
            }
          ),
          /* @__PURE__ */ jsx("circle", { cx: "16", cy: "16", r: "3", fill: "url(#ts-core)" }),
          /* @__PURE__ */ jsxs("g", { stroke: "url(#ts-grad)", strokeWidth: "1.1", strokeLinecap: "round", children: [
            /* @__PURE__ */ jsx("line", { x1: "16", y1: "13", x2: "16", y2: "7.5" }),
            /* @__PURE__ */ jsx("line", { x1: "16", y1: "19", x2: "16", y2: "24.5" }),
            /* @__PURE__ */ jsx("line", { x1: "13.4", y1: "14.5", x2: "8.5", y2: "11.8" }),
            /* @__PURE__ */ jsx("line", { x1: "18.6", y1: "17.5", x2: "23.5", y2: "20.2" }),
            /* @__PURE__ */ jsx("line", { x1: "13.4", y1: "17.5", x2: "8.5", y2: "20.2" }),
            /* @__PURE__ */ jsx("line", { x1: "18.6", y1: "14.5", x2: "23.5", y2: "11.8" })
          ] }),
          /* @__PURE__ */ jsxs("g", { fill: "oklch(0.72 0.20 148)", children: [
            /* @__PURE__ */ jsx("circle", { cx: "16", cy: "7.2", r: "1.1" }),
            /* @__PURE__ */ jsx("circle", { cx: "16", cy: "24.8", r: "1.1" }),
            /* @__PURE__ */ jsx("circle", { cx: "8.2", cy: "11.6", r: "1.1" }),
            /* @__PURE__ */ jsx("circle", { cx: "23.8", cy: "11.6", r: "1.1" }),
            /* @__PURE__ */ jsx("circle", { cx: "8.2", cy: "20.4", r: "1.1" }),
            /* @__PURE__ */ jsx("circle", { cx: "23.8", cy: "20.4", r: "1.1" })
          ] })
        ]
      }
    ),
    withWordmark && /* @__PURE__ */ jsxs("span", { className: "font-display text-xs uppercase tracking-[0.2em] text-foreground/80", children: [
      "Tolsentinel ",
      /* @__PURE__ */ jsx("span", { className: "text-gradient-ai", children: "AI" })
    ] })
  ] });
}
export {
  TolsentinelBadge as T
};
