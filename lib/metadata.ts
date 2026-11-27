import type { Metadata } from "next";
import { getContent } from "@/content";
import { type Locale, SITE_URL, localePath, locales, ogLocale } from "./i18n";

export function buildMetadata(locale: Locale): Metadata {
  const { meta, name } = getContent(locale);
  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    authors: [{ name }],
    alternates: {
      canonical: localePath[locale],
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, localePath[l]])),
        "x-default": localePath.en,
      },
    },
    openGraph: {
      type: "website",
      url: localePath[locale],
      siteName: name,
      title: meta.title,
      description: meta.description,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}
