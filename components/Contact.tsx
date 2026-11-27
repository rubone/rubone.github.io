import type { SiteContent } from "@/content/types";

type Props = SiteContent["contact"] & { opensInNewTab: string };

export function Contact({ title, lead, email, links, opensInNewTab }: Props) {
  return (
    <section
      id="contact"
      className="mb-12 flex flex-col items-center gap-6 rounded-block bg-ink px-6 py-20 text-center text-white sm:px-8 md:py-24"
    >
      <h2 className="m-0 font-display text-[clamp(36px,5vw,56px)] leading-[1.1] font-semibold tracking-[-0.02em] text-balance">
        {title}
      </h2>
      <p className="m-0 text-lg text-on-dark">{lead}</p>
      <a
        href={`mailto:${email}`}
        className="max-w-full rounded-full bg-white px-7 py-4 text-base font-semibold break-all text-ink hover:bg-line"
      >
        {email}
      </a>
      <div className="flex gap-6 text-[15px]">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-dark hover:text-white"
          >
            {link.label}
            <span className="sr-only"> ({opensInNewTab})</span>
          </a>
        ))}
      </div>
    </section>
  );
}
