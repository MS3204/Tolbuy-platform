import { Wand2 } from "lucide-react";

/**
 * Marketing Copy Generator — Merchant Mode placeholder.
 * Static UI box. Submitting does nothing yet.
 * TODO: wire to tolsentinel.merchant.generateCopy().
 */
export function MarketingCopyGenerator() {
  return (
    <section className="glass-strong holo-border rounded-3xl p-6">
      <header className="flex items-center gap-2 mb-3">
        <Wand2 className="h-4 w-4 text-ai" />
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Marketing Copy Generator
        </p>
      </header>

      <label className="block text-xs text-muted-foreground mb-1">
        Product
      </label>
      <input
        placeholder="e.g. Vintage Leica M3 35mm camera"
        className="w-full glass rounded-xl px-3 py-2.5 text-sm bg-transparent outline-none mb-3"
      />

      <label className="block text-xs text-muted-foreground mb-1">Tone</label>
      <select
        defaultValue="premium"
        className="w-full glass rounded-xl px-3 py-2.5 text-sm bg-transparent outline-none mb-4"
      >
        <option value="premium">Premium</option>
        <option value="playful">Playful</option>
        <option value="minimal">Minimal</option>
      </select>

      <button
        disabled
        className="w-full rounded-xl bg-foreground/80 text-background py-2.5 text-sm font-semibold opacity-70 cursor-not-allowed"
        title="Tolsentinel AI not yet connected"
      >
        Generate (coming soon)
      </button>

      <div className="mt-4 rounded-2xl border border-dashed border-border p-4 text-xs text-muted-foreground min-h-20">
        Generated copy will appear here.
      </div>
    </section>
  );
}
