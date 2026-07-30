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
import { siteConfig } from "@/data/siteConfig";
import { getTranslation, type Locale, type TranslationKey } from "@/i18n";
import type { LanguageOption } from "@/types/site";

const STORAGE_KEY = "portfolio-language";

const DISPLAY_LABELS: Record<string, string> = {
  en: "English",
  pl: "Polish",
};

function readStoredLanguage(
  available: LanguageOption[],
  fallback: string,
): string {
  if (typeof window === "undefined") return fallback;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && available.some((item) => item.code === stored)) {
    return stored;
  }
  return fallback;
}

type LanguageContextValue = {
  language: string;
  locale: Locale;
  setLanguage: (code: string) => void;
  languages: LanguageOption[];
  switcherEnabled: boolean;
  ready: boolean;
  getLabel: (code: string) => string;
  t: (path: TranslationKey, params?: Record<string, string>) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

type LanguageProviderProps = {
  children: ReactNode;
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  const languages = siteConfig.languages.available;
  const switcherEnabled = siteConfig.featureFlags.languageSwitcher;
  const fallback = siteConfig.languages.default;

  const [language, setLanguageState] = useState(fallback);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setLanguageState(readStoredLanguage(languages, fallback));
      setReady(true);
    });
    return () => cancelAnimationFrame(frame);
  }, [languages, fallback]);

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
    (path: TranslationKey, params?: Record<string, string>) =>
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
    [
      language,
      locale,
      setLanguage,
      languages,
      switcherEnabled,
      ready,
      getLabel,
      t,
    ],
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
