import { LineChart } from "lucide-react";

/**
 * Market Insights Panel — Merchant Mode placeholder.
 * TODO: feed from tolsentinel.merchant.insights().
 */
export function MarketInsightsPanel() {
  return (
    <section className="glass-strong holo-border rounded-3xl p-6">
      <header className="flex items-center gap-2 mb-3">
        <LineChart className="h-4 w-4 text-intelligence" />
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Market Insights
        </p>
      </header>
      <div className="rounded-2xl border border-dashed border-border py-10 text-center">
        <p className="text-sm font-medium">Awaiting Tolsentinel</p>
        <p className="text-xs text-muted-foreground mt-1 max-w-xs mx-auto">
          Live market signals for your store will appear here.
        </p>
      </div>
    </section>
  );
}
