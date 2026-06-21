import { GitCompare } from "lucide-react";

/**
 * Comparison card structure — Consumer Mode placeholder.
 * No comparison logic yet; renders an empty grid skeleton.
 */
export function ComparisonCard({ productIds = [] as string[] }) {
  return (
    <section className="glass-strong holo-border rounded-3xl p-6">
      <header className="flex items-center gap-2 mb-4">
        <GitCompare className="h-4 w-4 text-intelligence" />
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Side-by-side comparison
        </p>
      </header>

      <div className="grid grid-cols-2 gap-3">
        {[0, 1].map((i) => (
          <div
            key={i}
            className="rounded-2xl border border-dashed border-border p-4"
          >
            <div className="h-24 rounded-lg bg-muted/40" />
            <p className="mt-3 text-xs text-muted-foreground">
              {productIds[i]
                ? `Product ${productIds[i]}`
                : "No product selected"}
            </p>
            {/* TODO: render comparison highlights from tolsentinel.consumer.compare */}
          </div>
        ))}
      </div>
    </section>
  );
}
