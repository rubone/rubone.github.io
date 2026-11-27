import type { SiteContent } from "@/content/types";

type Props = SiteContent["stack"];

export function Stack({ title, lead, groups }: Props) {
  return (
    <section id="stack" className="flex flex-col gap-8 border-t border-line pt-12 pb-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="section-title">{title}</h2>
        <p className="m-0 max-w-[420px] text-base leading-[1.6] text-muted">{lead}</p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-4">
        {groups.map((group) => (
          <div
            key={group.title}
            className="flex flex-col gap-3.5 rounded-card border border-line bg-surface p-7"
          >
            <h3 className="m-0 text-[13px] font-semibold tracking-[0.08em] text-accent uppercase">
              {group.title}
            </h3>
            <p className="m-0 text-base leading-[1.7] text-ink-soft">{group.items.join(" · ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
