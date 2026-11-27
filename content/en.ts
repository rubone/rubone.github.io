import type { SiteContent } from "./types";

// Paso 1: placeholder copy from docs/design/option-a.html.
// Real content replaces the [bracketed] values in Paso 2.
export const en: SiteContent = {
  name: "Rubén Saavedra",
  initials: "RS",
  nav: {
    links: [
      { label: "Work", href: "#work" },
      { label: "Stack", href: "#stack" },
      { label: "Experience", href: "#experience" },
      { label: "Certifications", href: "#certifications" },
    ],
    cta: { label: "Let’s talk", href: "#contact" },
  },
  hero: {
    badge: "Open to new projects",
    title: "I build reliable software, end to end.",
    lead: "Full-stack engineer with 10+ years shipping .NET backends, React frontends and mobile apps — from the database schema to the last pixel.",
    primaryCta: { label: "View my work", href: "#work" },
    secondaryCta: { label: "Download CV", href: "#cv" },
    photo: { src: null, alt: "Rubén Saavedra", placeholder: "[Your photo]" },
  },
  stack: {
    title: "What I work with",
    lead: "One engineer across the whole product, so nothing gets lost between layers.",
    groups: [
      {
        title: "Backend",
        items: [".NET 8 & 10", "ASP.NET Core", "CQRS / MediatR", "EF Core", "REST APIs", "Node.js + TypeScript"],
      },
      { title: "Frontend", items: ["React", "TypeScript", "React Query", "Angular"] },
      { title: "Mobile", items: ["Android (Kotlin, Java)", "Flutter"] },
      { title: "Data & Cloud", items: ["PostgreSQL", "SQL Server", "Azure", "Docker"] },
    ],
  },
  work: {
    title: "Selected work",
    projects: [
      {
        name: "Taxfyle",
        summary: "[One line on what you built]",
        stack: [".NET", "React"],
        href: "#taxfyle",
        image: null,
        tint: { bg: "#E9EEFB", fg: "#4B5A85" },
      },
      {
        name: "Doctor Finder",
        summary: "Doctor directory & appointment booking",
        stack: ["[stack]"],
        href: "#doctor-finder",
        image: null,
        tint: { bg: "#E8F4EE", fg: "#3F6B55" },
      },
      {
        name: "[Project name]",
        summary: "[One line description]",
        stack: ["[stack]"],
        href: "#project-3",
        image: null,
        tint: { bg: "#F3EEE6", fg: "#6E5E45" },
      },
    ],
  },
  experience: {
    title: "Experience",
    jobs: [
      {
        period: "[Year] — Present",
        role: "Full-stack Software Engineer",
        company: "Taxfyle",
        highlight: "[Key responsibility or outcome]",
      },
      {
        period: "[Year] — [Year]",
        role: "[Role]",
        company: "[Company]",
        highlight: "[Key responsibility or outcome]",
      },
    ],
  },
  certifications: {
    title: "Certifications",
    allLink: { label: "View all credentials →", href: "#all-certs" },
    verifyLabel: "Verify credential ↗",
    logoPlaceholder: "[Logo]",
    items: [1, 2, 3, 4].map((n) => ({
      name: "[Certification name]",
      issuer: "[Issuer]",
      year: "[Year]",
      logo: null,
      verifyUrl: `#verify-${n}`,
    })),
  },
  contact: {
    title: "Have a project in mind?",
    lead: "English or Spanish — let’s talk.",
    email: "[YOUR EMAIL]",
    links: [
      { label: "GitHub", href: "#github" },
      { label: "LinkedIn", href: "#linkedin" },
    ],
  },
  footer: { location: "Nicaragua · Remote worldwide" },
};
