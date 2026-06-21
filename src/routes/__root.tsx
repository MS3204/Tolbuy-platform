import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { TolsentinelOrb } from "../components/TolsentinelOrb";
import { DimensionNav } from "../components/DimensionNav";
import { TopBar } from "../components/TopBar";
import { Footer } from "../components/Footer";
import { I18nProvider, useT } from "../i18n/I18nContext";

function NotFoundComponent() {
  const t = useT();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient-ai">404</h1>
        <h2 className="mt-4 text-xl font-semibold">{t("nf.title")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t("nf.body")}</p>
        <div className="mt-6">
          <Link
            to="/"
            className="glass holo-border rounded-full px-5 py-2.5 text-sm magnetic inline-block"
          >
            {t("nf.return")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TolBuy — The Intelligent Economic Universe" },
      {
        name: "description",
        content:
          "TolBuy unifies commerce, trading, and investing into one AI-native ecosystem powered by Tolsentinel AI.",
      },
      {
        property: "og:title",
        content: "TolBuy — The Intelligent Economic Universe",
      },
      {
        property: "og:description",
        content:
          "Shop, trade, invest and grow with Tolsentinel AI as your personal economic assistant.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", type: "image/", href: "/favicon.svg" },
      { rel: "apple-touch-icon", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        <I18nProvider>
          <div className="min-h-dvh">
            <TopBar />
            <main className="pb-12">{children}</main>
            <Footer />
            <DimensionNav />
            <TolsentinelOrb />
          </div>
        </I18nProvider>
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
