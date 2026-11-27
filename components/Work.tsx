import type { SiteContent } from "@/content/types";

type Props = SiteContent["work"];

export function Work({ title, projects }: Props) {
  return (
    <section id="work" className="flex flex-col gap-8 border-t border-line pt-12 pb-24">
      <h2 className="section-title">{title}</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-6">
        {projects.map((project) => (
          <a
            key={project.href}
            href={project.href}
            className="group flex flex-col gap-[18px] text-ink"
          >
            {project.image ? (
              // eslint-disable-next-line @next/next/no-img-element -- static export, images are unoptimized
              <img
                src={project.image}
                alt={`${project.name} screenshot`}
                className="h-[260px] w-full rounded-card object-cover transition-transform group-hover:-translate-y-1"
              />
            ) : (
              <div
                className="flex h-[260px] items-center justify-center rounded-card text-sm transition-transform group-hover:-translate-y-1"
                style={{ backgroundColor: project.tint.bg, color: project.tint.fg }}
              >
                [{project.name} screenshot]
              </div>
            )}
            <div className="flex flex-col gap-1.5">
              <span className="font-display text-[22px] font-semibold group-hover:text-accent">
                {project.name}
              </span>
              <span className="text-base leading-normal text-muted">
                {[project.summary, ...project.stack].join(" · ")}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
