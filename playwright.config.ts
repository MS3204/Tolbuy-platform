import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright config for TolBuy automated UI layout checks.
 * Boots the Vite dev server and runs the LTR/RTL regression suite against it.
 */
const PORT = Number(process.env.UI_TEST_PORT ?? 8080);
const BASE_URL = process.env.UI_TEST_BASE_URL ?? `http://localhost:${PORT}`;

export default defineConfig({
  testDir: "./tests/ui",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: [["list"]],
  outputDir: "./tests/ui/.artifacts",
  use: {
    baseURL: BASE_URL,
    headless: true,
    viewport: { width: 1280, height: 800 },
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        // Prefer a system-installed Chromium when present (sandbox / CI without
        // Playwright's bundled browser deps); falls back to the bundled build.
        launchOptions: process.env.CHROMIUM_PATH
          ? { executablePath: process.env.CHROMIUM_PATH }
          : undefined,
      },
    },
  ],
  // Reuse an already-running dev server if present, otherwise start one.
  webServer: process.env.UI_TEST_BASE_URL
    ? undefined
    : {
        command: `vite dev --port ${PORT}`,
        port: PORT,
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
      },
});
