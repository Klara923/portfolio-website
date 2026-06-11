"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getTranslation, type Locale } from "@/i18n";
import { getSiteConfig } from "@/lib/api";
import type { LanguageOption } from "@/types/site";

const STORAGE_KEY = "portfolio-language";

const DISPLAY_LABELS: Record<string, string> = {
  en: "English",
  pl: "Polish",
};

type LanguageContextValue = {
  language: string;
  locale: Locale;
  setLanguage: (code: string) => void;
  languages: LanguageOption[];
  switcherEnabled: boolean;
  ready: boolean;
  getLabel: (code: string) => string;
  t: (path: string, params?: Record<string, string>) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

type LanguageProviderProps = {
  children: ReactNode;
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState("en");
  const [languages, setLanguages] = useState<LanguageOption[]>([]);
  const [switcherEnabled, setSwitcherEnabled] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    getSiteConfig()
      .then((config) => {
        setLanguages(config.languages.available);
        setSwitcherEnabled(config.feature_flags.language_switcher);

        const allowed = new Set(
          config.languages.available.map((item) => item.code),
        );
        const fallback = config.languages.default;

        if (stored && allowed.has(stored)) {
          setLanguageState(stored);
        } else {
          setLanguageState(fallback);
        }
      })
      .catch(() => {
        setLanguages([
          { code: "en", label: "English" },
          { code: "pl", label: "Polish" },
        ]);
        setSwitcherEnabled(true);
        if (stored === "en" || stored === "pl") {
          setLanguageState(stored);
        }
      })
      .finally(() => setReady(true));
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback(
    (code: string) => {
      if (!languages.some((item) => item.code === code)) return;
      setLanguageState(code);
      localStorage.setItem(STORAGE_KEY, code);
    },
    [languages],
  );

  const getLabel = useCallback(
    (code: string) => DISPLAY_LABELS[code] ?? code,
    [],
  );

  const locale: Locale = language === "pl" ? "pl" : "en";

  const t = useCallback(
    (path: string, params?: Record<string, string>) =>
      getTranslation(locale, path, params),
    [locale],
  );

  const value = useMemo(
    () => ({
      language,
      locale,
      setLanguage,
      languages,
      switcherEnabled,
      ready,
      getLabel,
      t,
    }),
    [language, locale, setLanguage, languages, switcherEnabled, ready, getLabel, t],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
