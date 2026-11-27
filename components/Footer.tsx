import type { SiteContent } from "@/content/types";

type Props = { name: SiteContent["name"] } & SiteContent["footer"];

export function Footer({ name, location }: Props) {
  return (
    <footer className="flex flex-wrap justify-between gap-3 pb-10 text-sm text-subtle">
      <span>
        © {new Date().getFullYear()} {name}
      </span>
      <span>{location}</span>
    </footer>
  );
}
