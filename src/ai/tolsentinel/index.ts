// Tolsentinel AI — public entry.
// Placeholder module. No AI is wired yet — see ./README.md.

import * as consumer from "./consumerMode";
import * as merchant from "./merchantMode";
import type { TolsentinelEngine } from "./types";

export * from "./types";
export * as prompts from "./prompts";
export { consumer, merchant };

/** Singleton handle the UI should import. */
export const tolsentinel: TolsentinelEngine = {
  ready: false, // flips to true once the real engine is wired in
  consumer,
  merchant,
};
