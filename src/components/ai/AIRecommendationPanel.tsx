import { useEffect, useMemo, useState } from "react";
import { TolsentinelBadge } from "@/components/TolsentinelBadge";
import { tolsentinel } from "@/ai/tolsentinel";

/**
 * AI Recommendation Panel — Consumer Mode.
 */
export function AIRecommendationPanel() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<
    { productId: string; reason: string; confidence: number }[]
  >([]);

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
    // tolsentinel placeholder returns empty array today, but keep UI consistent.
    return (c: number) => {
      const pct = Math.round(Math.max(0, Math.min(1, c)) * 100);
      return `${pct}%`;
    };
  }, []);

  return (
    <section className="glass-strong holo-border rounded-3xl p-6">
      <header className="flex items-center gap-2 mb-3">
        <TolsentinelBadge size={18} />
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Tolsentinel · Recommendations
        </p>
      </header>

      {loading ? (
        <div className="rounded-2xl border border-dashed border-border py-10 text-center">
          <p className="text-sm font-medium">Loading recommendations…</p>
          <p className="text-xs text-muted-foreground mt-1 max-w-xs mx-auto">
            Preparing your tailored picks.
          </p>
        </div>
      ) : items.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border py-10 text-center">
          <p className="text-sm font-medium">No recommendations yet</p>
          <p className="text-xs text-muted-foreground mt-1 max-w-xs mx-auto">
            Tolsentinel will surface tailored picks here once the AI engine is
            online.
          </p>
        </div>
      ) : (
        <div className="rounded-2xl border border-border/60 p-4">
          <ul className="space-y-3">
            {items.map((it) => (
              <li
                key={it.productId}
                className="flex items-start justify-between gap-4 p-3 rounded-xl bg-muted/20 border border-border/30"
              >
                <div className="min-w-0">
                  <p className="text-sm font-semibold truncate">
                    {it.productId}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {it.reason}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-xs text-muted-foreground">Confidence</p>
                  <p className="text-sm font-semibold tabular-nums">
                    {confidenceText(it.confidence)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
