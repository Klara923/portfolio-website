import { translations, type Locale } from "./translations";

export type { Locale };

export function getTranslation(
  locale: Locale,
  path: string,
  params?: Record<string, string>,
): string {
  const keys = path.split(".");
  let value: unknown = translations[locale];

  for (const key of keys) {
    if (value && typeof value === "object" && key in value) {
      value = (value as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }

  if (typeof value !== "string") return path;

  if (!params) return value;

  return Object.entries(params).reduce(
    (result, [key, replacement]) =>
      result.replaceAll(`{${key}}`, replacement),
    value,
  );
}

export function getTranslationArray(locale: Locale, path: string): string[] {
  const keys = path.split(".");
  let value: unknown = translations[locale];

  for (const key of keys) {
    if (value && typeof value === "object" && key in value) {
      value = (value as Record<string, unknown>)[key];
    } else {
      return [];
    }
  }

  return Array.isArray(value) ? value.map(String) : [];
}
