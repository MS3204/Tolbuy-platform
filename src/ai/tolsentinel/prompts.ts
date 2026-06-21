// Tolsentinel AI — static prompt templates.
// NOTE: These are text scaffolds only. Nothing here executes a model.

export const SYSTEM_PROMPT = `
You are Tolsentinel, the embedded intelligence of the TolBuy economic platform.
You guide users across commerce, trading and investing with calm, concise,
trust-first answers. You never invent financial guarantees.
`.trim();

export const CONSUMER_PROMPTS = {
  recommend: `Given the user's recent activity, surface 3 products with reasons.`,
  whyThisProduct: `Explain in 2 sentences why product {productId} fits this user.`,
  compare: `Compare products {productIds} on price, trust score, and demand.`,
};

export const MERCHANT_PROMPTS = {
  marketInsights: `Summarize today's market signals relevant to seller {sellerId}.`,
  trendSuggestions: `Suggest 5 rising product categories for the next 7 days.`,
  marketingCopy: `Write a short, premium marketing blurb for: {product}. Tone: {tone}.`,
};

// TODO: move to a remote prompt registry once the engine is live.
