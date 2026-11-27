import type { SiteContent } from "@/content/types";

type Props = SiteContent["certifications"];

export function Certifications({ title, allLink, verifyLabel, logoPlaceholder, items }: Props) {
  return (
    <section id="certifications" className="flex flex-col gap-8 border-t border-line pt-12 pb-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="section-title">{title}</h2>
        <a
          href={allLink.href}
          className="text-[15px] font-medium text-accent hover:text-accent-hover"
        >
          {allLink.label}
        </a>
      </div>
      <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(250px,100%),1fr))] gap-4 p-0">
        {items.map((cert) => (
          <li
            key={cert.verifyUrl}
            className="flex flex-col gap-[18px] rounded-card border border-line bg-surface p-6"
          >
            {cert.logo ? (
              // eslint-disable-next-line @next/next/no-img-element -- static export, images are unoptimized
              <img
                src={cert.logo}
                alt={`${cert.issuer} logo`}
                width={52}
                height={52}
                className="size-[52px] rounded-[14px] object-contain"
              />
            ) : (
              <div className="flex size-[52px] items-center justify-center rounded-[14px] bg-placeholder text-[11px] text-subtle">
                {logoPlaceholder}
              </div>
            )}
            <div className="flex flex-col gap-1.5">
              <h3 className="m-0 text-lg leading-[1.35] font-semibold">{cert.name}</h3>
              <span className="text-[15px] text-muted">
                {cert.issuer} · {cert.year}
              </span>
            </div>
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-sm font-medium text-accent hover:text-accent-hover"
            >
              {verifyLabel}
              <span className="sr-only"> — {cert.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
