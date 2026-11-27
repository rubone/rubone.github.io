import type { SiteContent } from "@/content/types";
import { type Locale, localePath, otherLocale } from "@/lib/i18n";

type Props = Pick<SiteContent, "name" | "initials" | "nav" | "ui"> & { locale: Locale };

export function Header({ locale, name, initials, nav, ui }: Props) {
  const target = otherLocale(locale);
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 py-7">
      <a href="#top" className="flex items-center gap-3 text-ink">
        <span
          aria-hidden
          className="flex size-10 items-center justify-center rounded-[10px] bg-ink font-display text-base font-bold text-white"
        >
          {initials}
        </span>
        <span className="text-base font-semibold">{name}</span>
      </a>
      <nav
        aria-label={ui.navLabel}
        className="flex flex-wrap items-center gap-x-5 gap-y-3 text-[15px] sm:gap-x-7"
      >
        {nav.links.map((link) => (
          <a key={link.href} href={link.href} className="text-muted hover:text-accent">
            {link.label}
          </a>
        ))}
        <a
          href={localePath[target]}
          hrefLang={target}
          lang={target}
          aria-label={ui.languageSwitch.ariaLabel}
          className="rounded-full border border-line-strong px-3 py-1.5 text-sm font-semibold text-ink hover:border-ink"
        >
          {ui.languageSwitch.label}
        </a>
        <a
          href={nav.cta.href}
          className="rounded-full bg-accent px-5 py-[11px] font-medium text-white hover:bg-accent-hover"
        >
          {nav.cta.label}
        </a>
      </nav>
    </header>
  );
}
