import { createFileRoute } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { TolsentinelBadge } from "@/components/TolsentinelBadge";
import tmLogo from "@/assets/tm-group-logo.png";
import { useT } from "@/i18n/I18nContext";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — TolBuy" },
      {
        name: "description",
        content:
          "TolBuy is an AI-native economic universe powered by Tolsentinel AI — a TM Group company unifying commerce, trading, and investing.",
      },
      { property: "og:title", content: "About TolBuy — A TM Group Company" },
      {
        property: "og:description",
        content:
          "Learn about TolBuy, Tolsentinel AI, and our parent company TM Group.",
      },
    ],
  }),
});

function AboutPage() {
  const t = useT();
  return (
    <div className="container mx-auto px-5 pt-10 pb-24 max-w-3xl">
      <header className="mb-10">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
          {t("about.kicker")}
        </p>
        <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight">
          {t("about.title1")}{" "}
          <span className="text-gradient-brand">{t("about.title2")}</span>
        </h1>
        <p className="mt-4 text-foreground/75 max-w-2xl">{t("about.intro")}</p>
      </header>

      <section className="glass-strong holo-border rounded-3xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-3">
          <Logo size={32} withWordmark={false} />
          <h2 className="text-xl font-display">TolBuy</h2>
        </div>
        <p className="text-sm text-foreground/75">{t("about.tolbuyBody")}</p>
      </section>

      <section className="glass-strong holo-border rounded-3xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-3">
          <TolsentinelBadge size={32} />
          <h2 className="text-xl font-display">
            Tolsentinel <span className="text-gradient-ai">AI</span>
          </h2>
        </div>
        <p className="text-sm text-foreground/75">
          {t("about.tolsentinelBody")}
        </p>
      </section>

      <section className="glass rounded-3xl p-6">
        <div className="flex items-center gap-4 mb-4">
          <img src={tmLogo} alt="TM Group" className="h-10 w-auto" />
          <div>
            <h2 className="text-lg font-display">TM Group</h2>
            <p className="text-xs text-muted-foreground">
              {t("about.tmParent")}
            </p>
          </div>
        </div>
        <p className="text-sm text-foreground/75">
          {t("about.tmBody1")}{" "}
          <span className="font-medium text-foreground">
            {t("about.tmBody2")}
          </span>
          {t("about.tmBody3")}
        </p>
      </section>
    </div>
  );
}
