import { test, expect, type Page } from "@playwright/test";

/**
 * Automated UI layout regression checks for TolBuy.
 *
 * Renders every key page in both directions:
 *   - English  (LTR)
 *   - Arabic   (RTL)
 *
 * and asserts there are no layout regressions:
 *   - no horizontal overflow on <html> (a classic RTL clipping symptom)
 *   - no element bleeds past the left/right viewport edges (clipping)
 *   - the <html dir> / lang attributes flip correctly per language
 *
 * A screenshot of each page+direction is captured for visual diffing.
 */

const STORAGE_KEY = "tolbuy.lang";

const ROUTES = [
  { path: "/", name: "feed" },
  { path: "/shop", name: "shop" },
  { path: "/trade", name: "trade" },
  { path: "/sell", name: "sell" },
  { path: "/wallet", name: "wallet" },
  { path: "/about", name: "about" },
] as const;

const LOCALES = [
  { code: "en", dir: "ltr" as const },
  { code: "ar", dir: "rtl" as const },
] as const;

/** Pixel tolerance for sub-pixel rounding / scrollbar widths. */
const OVERFLOW_TOLERANCE = 2;

async function gotoWithLocale(page: Page, path: string, locale: string) {
  // Seed the language preference before the app boots so the first render
  // already uses the requested direction (matches I18nProvider hydration).
  await page.addInitScript(
    ([key, value]) => {
      try {
        window.localStorage.setItem(key, value);
      } catch {
        /* ignore */
      }
    },
    [STORAGE_KEY, locale],
  );
  await page.goto(path, { waitUntil: "networkidle" });
  // Give the i18n effect a tick to apply dir/lang on <html>.
  await page.waitForFunction(
    (expected) => document.documentElement.lang === expected,
    locale,
    { timeout: 5000 },
  );
}

/** Returns elements that extend beyond the viewport horizontally (clipping). */
async function findHorizontalOverflowers(page: Page, tolerance: number) {
  return page.evaluate((tol) => {
    const vw = document.documentElement.clientWidth;
    const offenders: { selector: string; left: number; right: number }[] = [];
    const describe = (el: Element) => {
      const id = el.id ? `#${el.id}` : "";
      const cls =
        typeof el.className === "string" && el.className
          ? "." + el.className.trim().split(/\s+/).slice(0, 2).join(".")
          : "";
      return `${el.tagName.toLowerCase()}${id}${cls}`;
    };
    document.querySelectorAll("body *").forEach((el) => {
      const style = window.getComputedStyle(el);
      if (style.position === "fixed") return; // overlays/nav handled separately
      if (style.visibility === "hidden" || style.display === "none") return;
      if (style.pointerEvents === "none") return; // decorative-only layers
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) return;
      if (r.right <= vw + tol && r.left >= -tol) return;
      // Ignore elements that are visually contained by an ancestor that clips
      // horizontal overflow (overflow hidden/clip) — these can't bleed or cause
      // page scroll, e.g. decorative blurred glow orbs.
      let clipped = false;
      let parent = el.parentElement;
      while (parent && parent !== document.body) {
        const ps = window.getComputedStyle(parent);
        if (
          /(hidden|clip)/.test(ps.overflowX) ||
          /(hidden|clip)/.test(ps.overflow)
        ) {
          clipped = true;
          break;
        }
        parent = parent.parentElement;
      }
      if (clipped) return;
      offenders.push({
        selector: describe(el),
        left: Math.round(r.left),
        right: Math.round(r.right),
      });
    });

    // De-dupe and cap to keep failure output readable.
    const seen = new Set<string>();
    return offenders
      .filter((o) =>
        seen.has(o.selector) ? false : (seen.add(o.selector), true),
      )
      .slice(0, 15);
  }, tolerance);
}

for (const route of ROUTES) {
  for (const locale of LOCALES) {
    test(`${route.name} renders cleanly in ${locale.code.toUpperCase()} (${locale.dir})`, async ({
      page,
    }, testInfo) => {
      await gotoWithLocale(page, route.path, locale.code);

      // 1. Direction + lang attributes flip correctly.
      const html = page.locator("html");
      await expect(html).toHaveAttribute("dir", locale.dir);
      await expect(html).toHaveAttribute("lang", locale.code);

      // 2. No page-level horizontal scroll (RTL clipping symptom).
      const overflow = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));
      expect(
        overflow.scrollWidth,
        `horizontal scroll detected (scrollWidth ${overflow.scrollWidth} > clientWidth ${overflow.clientWidth})`,
      ).toBeLessThanOrEqual(overflow.clientWidth + OVERFLOW_TOLERANCE);

      // 3. No individual element clipped past the viewport edges.
      const offenders = await findHorizontalOverflowers(
        page,
        OVERFLOW_TOLERANCE,
      );
      expect(
        offenders,
        `elements overflow viewport edges:\n${JSON.stringify(offenders, null, 2)}`,
      ).toEqual([]);

      // 4. Capture a screenshot for visual review / diffing.
      const shot = await page.screenshot({ fullPage: true });
      await testInfo.attach(`${route.name}-${locale.code}`, {
        body: shot,
        contentType: "image/svg",
      });
    });
  }
}
