import type { Locale } from "@/lib/i18n";
import { en } from "./en";
import { es } from "./es";
import type { SiteContent } from "./types";

const content: Record<Locale, SiteContent> = { en, es };

export const getContent = (locale: Locale): SiteContent => content[locale];
