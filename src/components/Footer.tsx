import { Link } from "@tanstack/react-router";
import tmLogo from "@/assets/tm-group-logo.png";
import { useT } from "@/i18n/I18nContext";

/** Site footer — only place TM Group parent branding appears alongside About. */
export function Footer() {
  const t = useT();
  return (
    <footer className="border-t border-border/60 mt-16">
      <div className="container mx-auto px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()} TolBuy. {t("footer.rights")}
        </p>
        <Link
          to="/about"
          className="flex items-center gap-2 magnetic opacity-80 hover:opacity-100"
          aria-label={t("footer.tmCompany")}
        >
          <img src={tmLogo} alt="TM Group" className="h-5 w-auto opacity-90" />
          <span>{t("footer.tmCompany")}</span>
        </Link>
      </div>
    </footer>
  );
}
