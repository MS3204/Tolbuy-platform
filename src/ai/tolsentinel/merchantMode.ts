// Tolsentinel AI — Merchant Mode (placeholder).
// TODO: integrate merchant analytics engine.

import type { MarketTrend, MarketingCopy, TolsentinelInsight } from "./types";

/** Returns market insights tailored to the merchant. */
export async function insights(): Promise<TolsentinelInsight[]> {
  // TODO: call merchant insights engine
  return [];
}

/** Returns rising product / category trends. */
export async function trends(): Promise<MarketTrend[]> {
  // TODO: call trend forecasting engine
  return [];
}

/** Generates static marketing copy for a product listing. */
export async function generateCopy(_input: {
  product: string;
  tone?: string;
}): Promise<MarketingCopy> {
  // TODO: call copy generation engine
  return { headline: "", body: "", tags: [] };
}
