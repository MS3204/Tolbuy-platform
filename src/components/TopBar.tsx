import { Link } from "@tanstack/react-router";
import { Coins } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageSelector } from "./LanguageSelector";
import { useT } from "@/i18n/I18nContext";

export function TopBar() {
  const t = useT();
  return (
    <header className="sticky top-0 z-30 glass border-b">
      <div className="container mx-auto px-5 h-14 flex items-center justify-between">
        <Link to="/" className="group">
          <Logo />
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs">
            <Coins className="h-3.5 w-3.5 text-profit" />
            <span className="tabular-nums font-medium">1,847</span>
            <span className="text-muted-foreground">{t("top.tolTokens")}</span>
          </div>
          <LanguageSelector />
          <button className="text-xs glass magnetic rounded-full px-3 py-1.5">
            <span className="text-gradient-ai font-semibold">
              {t("top.premium")}
            </span>
          </button>
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-intelligence to-ai shrink-0" />
        </div>
      </div>
    </header>
  );
}
