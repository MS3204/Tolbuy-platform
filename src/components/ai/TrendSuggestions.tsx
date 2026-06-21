import { TrendingUp } from "lucide-react";

/**
 * Trend Suggestions — Merchant Mode placeholder.
 * TODO: feed from tolsentinel.merchant.trends().
 */
export function TrendSuggestions() {
  const items: { topic: string; delta: number }[] = []; // empty until AI is wired

  return (
    <section className="glass-strong holo-border rounded-3xl p-6">
      <header className="flex items-center gap-2 mb-3">
        <TrendingUp className="h-4 w-4 text-profit" />
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Trend Suggestions
        </p>
      </header>

      {items.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border py-10 text-center">
          <p className="text-sm font-medium">No trends yet</p>
          <p className="text-xs text-muted-foreground mt-1">
            Tolsentinel will list rising categories here.
          </p>
        </div>
      ) : (
        <ul className="divide-y divide-border">
          {items.map((t) => (
            <li key={t.topic} className="flex justify-between py-2 text-sm">
              <span>{t.topic}</span>
              <span className="text-profit tabular-nums">+{t.delta}%</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
