import type { SiteContent } from "@/content/types";

type Props = SiteContent["hero"];

export function Hero({ badge, title, lead, primaryCta, secondaryCta, photo }: Props) {
  return (
    <section className="flex flex-wrap items-center gap-14 pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="flex min-w-0 grow-[999] basis-[560px] flex-col gap-7">
        <span className="inline-flex items-center gap-2 self-start rounded-full bg-success-bg px-3.5 py-[7px] text-sm font-medium text-success-text">
          <span className="size-2 rounded-full bg-success-dot" aria-hidden />
          {badge}
        </span>
        <h1 className="m-0 font-display text-[clamp(44px,6vw,76px)] leading-[1.02] font-semibold tracking-[-0.03em] text-balance">
          {title}
        </h1>
        <p className="m-0 max-w-[560px] text-[19px] leading-[1.6] text-pretty text-muted">{lead}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a href={primaryCta.href} className="btn bg-accent text-white hover:bg-accent-hover">
            {primaryCta.label}
          </a>
          <a
            href={secondaryCta.href}
            className="btn border border-line-strong text-ink hover:border-ink"
          >
            {secondaryCta.label}
          </a>
        </div>
      </div>
      <div className="flex min-w-0 grow basis-[300px] justify-center">
        {photo.src ? (
          // eslint-disable-next-line @next/next/no-img-element -- static export, images are unoptimized
          <img
            src={photo.src}
            alt={photo.alt}
            width={300}
            height={360}
            className="h-[360px] w-[300px] max-w-full rounded-photo border border-placeholder-line object-cover grayscale contrast-125 brightness-105"
          />
        ) : (
          <div className="flex h-[360px] w-[300px] max-w-full items-center justify-center rounded-photo border border-placeholder-line bg-placeholder text-sm text-muted">
            {photo.placeholder}
          </div>
        )}
      </div>
    </section>
  );
}
