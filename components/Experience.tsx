import type { SiteContent } from "@/content/types";

type Props = SiteContent["experience"];

export function Experience({ title, jobs }: Props) {
  return (
    <section id="experience" className="flex flex-col gap-2 border-t border-line pt-12 pb-24">
      <h2 className="section-title mb-6">{title}</h2>
      <ol className="m-0 list-none p-0">
        {jobs.map((job) => (
          <li
            key={`${job.company}-${job.period}`}
            className="flex flex-wrap gap-x-8 gap-y-2 border-b border-line py-6"
          >
            <span className="shrink-0 grow-0 basis-40 text-[15px] text-subtle">{job.period}</span>
            <div className="flex grow basis-[400px] flex-col gap-1.5">
              <span className="text-[19px] font-semibold">
                {job.role} · {job.company}
              </span>
              <span className="text-base leading-[1.6] text-muted">{job.highlight}</span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
