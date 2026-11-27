import type { SiteContent } from "@/content/types";

type Props = Pick<SiteContent, "name" | "initials" | "nav">;

export function Header({ name, initials, nav }: Props) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 py-7">
      <a href="#top" className="flex items-center gap-3 text-ink">
        <span className="flex size-10 items-center justify-center rounded-[10px] bg-ink font-display text-base font-bold text-white">
          {initials}
        </span>
        <span className="text-base font-semibold">{name}</span>
      </a>
      <nav className="flex flex-wrap items-center gap-x-5 gap-y-3 text-[15px] sm:gap-x-7">
        {nav.links.map((link) => (
          <a key={link.href} href={link.href} className="text-muted hover:text-accent">
            {link.label}
          </a>
        ))}
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
