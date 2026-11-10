export const locales = ["en", "zh-TW", "ja", "ko"] as const;
export type Locale = (typeof locales)[number];

export const languageNames: Record<Locale, string> = {
  en: "English", "zh-TW": "繁體中文", ja: "日本語", ko: "한국어",
};

export function isLocale(value: string): value is Locale {
  return locales.some(locale => locale === value);
}

export function localizedPath(locale: Locale, path: string) {
  return locale === "en" ? path : `/${locale}${path}`;
}
