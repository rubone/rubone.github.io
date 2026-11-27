export type NavLink = { label: string; href: string };

export type StackGroup = { title: string; items: string[] };

export type Project = {
  name: string;
  summary: string;
  stack: string[];
  href: string;
  /** Path under /public, or null to show a placeholder. */
  image: string | null;
  /** Placeholder tint while there is no screenshot. */
  tint: { bg: string; fg: string };
};

export type Job = {
  period: string;
  role: string;
  company: string;
  highlight: string;
};

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  /** Path under /public, or null to show a placeholder. */
  logo: string | null;
  verifyUrl: string;
};

export type SiteContent = {
  name: string;
  initials: string;
  nav: { links: NavLink[]; cta: NavLink };
  hero: {
    badge: string;
    title: string;
    lead: string;
    primaryCta: NavLink;
    secondaryCta: NavLink;
    photo: { src: string | null; alt: string; placeholder: string };
  };
  stack: { title: string; lead: string; groups: StackGroup[] };
  work: { title: string; projects: Project[] };
  experience: { title: string; jobs: Job[] };
  certifications: {
    title: string;
    allLink: NavLink;
    verifyLabel: string;
    logoPlaceholder: string;
    items: Certification[];
  };
  contact: {
    title: string;
    lead: string;
    email: string;
    links: NavLink[];
  };
  footer: { location: string };
};
