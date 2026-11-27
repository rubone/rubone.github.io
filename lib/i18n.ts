export const SITE_URL = "https://rubensaavedra.net";

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

/** Path of each language version (trailingSlash is on). */
export const localePath: Record<Locale, string> = { en: "/", es: "/es/" };

export const ogLocale: Record<Locale, string> = { en: "en_US", es: "es_NI" };

export const otherLocale = (locale: Locale): Locale => (locale === "en" ? "es" : "en");
