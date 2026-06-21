import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

/**
 * "Why this product?" expandable section — Consumer Mode placeholder.
 * No real reasoning yet; static empty state inside the panel.
 */
export function WhyThisProduct({ productId }: { productId?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="glass rounded-2xl">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-3 text-sm magnetic"
      >
        <span className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-ai" />
          Why this product?
        </span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-4 pb-4 text-xs text-muted-foreground">
          {/* TODO: render `await tolsentinel.consumer.explain(productId)` */}
          Tolsentinel will explain the fit for product
          {productId ? ` ${productId}` : ""} once the AI engine is online.
        </div>
      )}
    </div>
  );
}
