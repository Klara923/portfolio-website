import { translations, type Locale, type TranslationTree } from "./translations";

export type { Locale, TranslationTree };

export type TranslationKey = {
  [K in keyof TranslationTree & string]: TranslationTree[K] extends string
    ? K
    : TranslationTree[K] extends readonly unknown[]
      ? never
      : {
          [P in keyof TranslationTree[K] & string]: TranslationTree[K][P] extends string
            ? `${K}.${P}`
            : TranslationTree[K][P] extends readonly unknown[]
              ? never
              : {
                  [Q in keyof TranslationTree[K][P] & string]: TranslationTree[K][P][Q] extends string
                    ? `${K}.${P}.${Q}`
                    : TranslationTree[K][P][Q] extends readonly unknown[]
                      ? never
                      : {
                          [R in keyof TranslationTree[K][P][Q] & string]: TranslationTree[K][P][Q][R] extends string
                            ? `${K}.${P}.${Q}.${R}`
                            : TranslationTree[K][P][Q][R] extends readonly unknown[]
                              ? never
                              : {
                                  [S in keyof TranslationTree[K][P][Q][R] & string]: TranslationTree[K][P][Q][R][S] extends string
                                    ? `${K}.${P}.${Q}.${R}.${S}`
                                    : never;
                                }[keyof TranslationTree[K][P][Q][R] & string];
                        }[keyof TranslationTree[K][P][Q] & string];
                }[keyof TranslationTree[K][P] & string];
        }[keyof TranslationTree[K] & string];
}[keyof TranslationTree & string];

type ArrayKey = {
  [K in keyof TranslationTree & string]: {
    [P in keyof TranslationTree[K] & string]: {
      [Q in keyof TranslationTree[K][P] & string]: {
        [R in keyof TranslationTree[K][P][Q] & string]: TranslationTree[K][P][Q][R] extends readonly string[]
          ? `${K}.${P}.${Q}.${R}`
          : never;
      }[keyof TranslationTree[K][P][Q] & string];
    }[keyof TranslationTree[K][P] & string];
  }[keyof TranslationTree[K] & string];
}[keyof TranslationTree & string];

function resolvePath(locale: Locale, path: string): unknown {
  const keys = path.split(".");
  let value: unknown = translations[locale];

  for (const key of keys) {
    if (value && typeof value === "object" && key in value) {
      value = (value as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }

  return value;
}

export function getTranslation(
  locale: Locale,
  path: TranslationKey,
  params?: Record<string, string>,
): string {
  const value = resolvePath(locale, path);
  if (typeof value !== "string") {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`Missing translation: ${path} (${locale})`);
    }
    return path;
  }

  if (!params) return value;

  return Object.entries(params).reduce(
    (result, [key, replacement]) =>
      result.replaceAll(`{${key}}`, replacement),
    value,
  );
}

export function getTranslationArray(
  locale: Locale,
  path: ArrayKey,
): string[] {
  const value = resolvePath(locale, path);
  return Array.isArray(value) ? value.map(String) : [];
}

export function getPortfolioString(
  locale: Locale,
  path: string,
): string | undefined {
  const value = resolvePath(locale, path);
  return typeof value === "string" ? value : undefined;
}

export function getPortfolioArray(
  locale: Locale,
  path: string,
): string[] {
  const value = resolvePath(locale, path);
  return Array.isArray(value) ? value.map(String) : [];
}
