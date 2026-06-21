// Tolsentinel AI — shared type contracts.
// NOTE: Placeholder types only. No runtime logic.

export type TolsentinelMode = "consumer" | "merchant";

export type SignalSeverity = "calm" | "info" | "opportunity" | "risk";

/** A single AI-surfaced insight rendered in the UI. */
export interface TolsentinelInsight {
  id: string;
  mode: TolsentinelMode;
  severity: SignalSeverity;
  title: string;
  body: string;
  /** Optional follow-up action label (e.g. "View matches"). */
  cta?: string;
  /** ISO timestamp — when the insight was generated. */
  createdAt?: string;
}

/* ---------- Consumer ---------- */

export interface ProductRecommendation {
  productId: string;
  reason: string; // "Why this product"
  confidence: number; // 0..1
}

export interface ProductComparison {
  productIds: string[];
  highlights: string[]; // bullet points
}

/* ---------- Merchant ---------- */

export interface MarketTrend {
  topic: string;
  delta: number; // % change
  window: "24h" | "7d" | "30d";
}

export interface MarketingCopy {
  headline: string;
  body: string;
  tags: string[];
}

/* ---------- Engine contract ---------- */

export interface TolsentinelEngine {
  ready: boolean;
  consumer: {
    recommend(): Promise<ProductRecommendation[]>;
    explain(productId: string): Promise<string>;
    compare(productIds: string[]): Promise<ProductComparison>;
  };
  merchant: {
    insights(): Promise<TolsentinelInsight[]>;
    trends(): Promise<MarketTrend[]>;
    generateCopy(input: {
      product: string;
      tone?: string;
    }): Promise<MarketingCopy>;
  };
}
