import { Globe, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useI18n } from "@/i18n/I18nContext";
import { cn } from "@/lib/utils";

export function LanguageSelector() {
  const { lang, meta, languages, setLang } = useI18n();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-1.5 glass magnetic rounded-full px-2.5 sm:px-3 py-1.5 text-xs"
          aria-label="Select language"
        >
          <Globe className="h-3.5 w-3.5 text-intelligence" />
          <span className="hidden sm:inline font-medium">
            {meta.nativeName}
          </span>
          <span className="sm:hidden font-medium uppercase">{meta.code}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[11rem] glass-strong">
        {languages.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => setLang(l.code)}
            className={cn(
              "flex items-center gap-2 cursor-pointer",
              l.code === lang && "bg-accent/60",
            )}
            dir={l.dir}
          >
            <span className="text-base leading-none">{l.flag}</span>
            <span className="flex-1 font-medium">{l.nativeName}</span>
            {l.code === lang && <Check className="h-3.5 w-3.5 text-profit" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
