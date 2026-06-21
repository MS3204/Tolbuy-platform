// Tolsentinel AI — Consumer Mode (placeholder).
// TODO: integrate consumer recommendation engine.

import type { ProductComparison, ProductRecommendation } from "./types";

/** Returns AI product recommendations for the current user. */
export async function recommend(): Promise<ProductRecommendation[]> {
  // TODO: call recommendation engine
  return [];
}

/** Returns a human-readable "why this product" explanation. */
export async function explain(_productId: string): Promise<string> {
  // TODO: call explanation engine
  return "";
}

/** Compares multiple products side-by-side. */
export async function compare(
  productIds: string[],
): Promise<ProductComparison> {
  // TODO: call comparison engine
  return { productIds, highlights: [] };
}
