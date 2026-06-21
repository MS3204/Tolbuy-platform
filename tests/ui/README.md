# UI Layout Checks (LTR + Arabic RTL)

Automated Playwright checks that render every key page in both **English (LTR)**
and **Arabic (RTL)** to catch layout regressions — horizontal clipping,
viewport-edge bleed, and broken direction switching.

## What it verifies (per page, per direction)

- `<html dir>` and `<html lang>` flip correctly (`ltr`/`en`, `rtl`/`ar`)
- No page-level horizontal scroll (a classic RTL clipping symptom)
- No element bleeds past the left/right viewport edges (ignores decorative
  layers that are clipped by an `overflow-hidden` ancestor or `pointer-events:none`)
- Captures a full-page screenshot of each page+direction for visual review

Pages covered: `/`, `/shop`, `/trade`, `/sell`, `/wallet`, `/about`.

## Run

```bash
bun run test:ui          # starts a dev server and runs all checks
bun run test:ui:report   # open the last HTML report
```

### Environment notes

- In sandboxes/CI without Playwright's bundled browser deps, point it at a
  system Chromium: `CHROMIUM_PATH=/bin/chromium bun run test:ui`
- To run against an already-running server instead of spawning one:
  `UI_TEST_BASE_URL=http://localhost:8080 bun run test:ui`

## Extending

- Add pages by appending to `ROUTES` in `tests/ui/layout.spec.ts`.
- Add directions/languages by appending to `LOCALES`.
