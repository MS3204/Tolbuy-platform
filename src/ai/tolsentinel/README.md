# Tolsentinel AI — Module Placeholder

> ⚠️ This directory is a **scaffold only**. No AI logic, no model calls,
> no network requests live here yet. It defines the shape of the future
> Tolsentinel intelligence layer so the rest of the app can be wired
> against stable contracts today.

## Vision

Tolsentinel is the planned **AI decision engine** for TolBuy:

- A plug-and-play commerce intelligence layer
- Modular: attachable without rewriting the frontend
- Two operating modes:
  - **Consumer mode** — recommendations, "why this product", comparison
  - **Merchant mode** — market insights, trend suggestions, marketing copy

## Files

| File              | Purpose                                                 |
| ----------------- | ------------------------------------------------------- |
| `index.ts`        | Public entry — re-exports modes, types, prompts         |
| `types.ts`        | Shared TypeScript contracts (inputs / outputs / events) |
| `consumerMode.ts` | Stub functions for consumer-side intelligence           |
| `merchantMode.ts` | Stub functions for merchant-side intelligence           |
| `prompts.ts`      | Static prompt templates (text only — no execution)      |

## Integration rule

> **AI-ready commerce platform, but AI not yet implemented.**

UI components import from `@/ai/tolsentinel/*` and treat every function as
async. Today they resolve to empty / placeholder data. When the real engine
ships, only the internals of these files change — components stay the same.

## TODO checklist (future work)

- [ ] Wire `consumerMode` to recommendation engine
- [ ] Wire `merchantMode` to analytics + forecasting engine
- [ ] Add streaming responses for live insights
- [ ] Add per-user memory + privacy controls
