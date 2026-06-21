import { Link, useRouterState } from "@tanstack/react-router";
import { Home, ShoppingBag, TrendingUp, Store, Wallet } from "lucide-react";
import { useT } from "@/i18n/I18nContext";

const items = [
  { to: "/", labelKey: "nav.feed", icon: Home },
  { to: "/shop", labelKey: "nav.shop", icon: ShoppingBag },
  { to: "/trade", labelKey: "nav.trade", icon: TrendingUp },
  { to: "/sell", labelKey: "nav.sell", icon: Store },
  { to: "/wallet", labelKey: "nav.wallet", icon: Wallet },
] as const;

export function DimensionNav() {
  const t = useT();
  const path = useRouterState({ select: (r) => r.location.pathname });
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 glass-strong holo-border rounded-full p-1.5 flex items-center gap-1">
      {items.map((it) => {
        const active = path === it.to;
        const Icon = it.icon;
        return (
          <Link
            key={it.to}
            to={it.to}
            className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm magnetic transition-colors ${
              active
                ? "text-background"
                : "text-foreground/70 hover:text-foreground"
            }`}
          >
            {active && (
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-intelligence to-ai glow-intelligence" />
            )}
            <Icon className="relative h-4 w-4" />
            <span className="relative hidden sm:inline font-medium">
              {t(it.labelKey)}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
