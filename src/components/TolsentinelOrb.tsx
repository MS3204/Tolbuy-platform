import { useState } from "react";
import { Sparkles, X } from "lucide-react";
import { useT } from "@/i18n/I18nContext";

export function TolsentinelOrb() {
  const t = useT();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
        {/* Orb */}
        <button
          onClick={() => setOpen(true)}
          aria-label={t("orb.open")}
          className="relative h-16 w-16 rounded-full magnetic group"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-intelligence/60 via-ai/40 to-profit/40 animate-orb-rotate opacity-90 blur-[1px]" />
          <div className="absolute inset-1 rounded-full bg-background/70 backdrop-blur-xl" />
          <div className="absolute inset-3 rounded-full bg-intelligence/80 animate-orb-pulse glow-ai" />
          <Sparkles className="absolute inset-0 m-auto h-5 w-5 text-foreground" />
        </button>
      </div>

      {/* Command Center */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-2xl animate-float-up">
          <div className="container mx-auto h-full p-6 flex flex-col">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-full">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-intelligence via-ai to-profit animate-orb-rotate" />
                  <div className="absolute inset-1 rounded-full bg-background" />
                  <div className="absolute inset-3 rounded-full bg-ai animate-orb-pulse" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">
                    Tolsentinel AI
                  </p>
                  <h2 className="text-xl font-display">
                    {t("orb.commandCenter")}
                  </h2>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="glass rounded-full p-2 magnetic"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-8 flex-1 flex items-center justify-center">
              <div className="max-w-md text-center glass holo-border rounded-2xl p-8 md:p-12">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-ai/20 mb-4 mx-auto">
                  <Sparkles className="h-8 w-8 text-ai" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("orb.commandCenterTitle")}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t("orb.commandCenterBody")}
                </p>
                <p className="text-sm text-muted-foreground/60">
                  {t("orb.commandCenterComing")}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
