import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import {
  translations as dictionaries,
  languages,
  DEFAULT_LANGUAGE,
  type LanguageCode,
  type LanguageMeta,
} from "./translations";

const STORAGE_KEY = "tolbuy.lang";

interface I18nContextValue {
  lang: LanguageCode;
  dir: "ltr" | "rtl";
  meta: LanguageMeta;
  languages: LanguageMeta[];
  setLang: (code: LanguageCode) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function metaFor(code: LanguageCode): LanguageMeta {
  return languages.find((l) => l.code === code) ?? languages[0];
}

function getStoredLang(): LanguageCode {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;
  try {
    const stored = window.localStorage.getItem(
      STORAGE_KEY,
    ) as LanguageCode | null;
    if (stored && languages.some((l) => l.code === stored)) return stored;
    // Fall back to browser language if recognized
    const browser = window.navigator.language?.slice(0, 2) as
      | LanguageCode
      | undefined;
    if (browser && languages.some((l) => l.code === browser)) return browser;
  } catch {
    /* ignore */
  }
  return DEFAULT_LANGUAGE;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  // Start from default to keep SSR/first client render identical, then hydrate.
  const [lang, setLangState] = useState<LanguageCode>(DEFAULT_LANGUAGE);

  useEffect(() => {
    setLangState(getStoredLang());
  }, []);

  const meta = metaFor(lang);
  const dir = meta.dir;

  // Reflect language + direction on <html> for proper RTL/LTR layout.
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const setLang = useCallback((code: LanguageCode) => {
    setLangState(code);
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch {
      /* ignore */
    }
  }, []);

  const t = useCallback(
    (key: string): string => {
      const dict = dictionaries[lang] ?? dictionaries[DEFAULT_LANGUAGE];
      return dict[key] ?? dictionaries[DEFAULT_LANGUAGE][key] ?? key;
    },
    [lang],
  );

  return (
    <I18nContext.Provider value={{ lang, dir, meta, languages, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    // Fallback for SSR or when context is not available
    return {
      lang: DEFAULT_LANGUAGE,
      dir: "ltr" as const,
      meta: languages[0],
      languages: languages,
      setLang: () => {},
      t: (key: string) => key,
    };
  }
  return ctx;
}

/** Convenience hook returning just the translate function. */
export function useT() {
  return useI18n().t;
}
