import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stack } from "@/components/Stack";
import { Work } from "@/components/Work";
import { getContent } from "@/content";
import type { Locale } from "@/lib/i18n";

export function HomePage({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-full bg-accent font-medium text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-5 focus:py-3"
      >
        {c.ui.skipToContent}
      </a>
      <div id="top" className="container-page">
        <Header locale={locale} name={c.name} initials={c.initials} nav={c.nav} ui={c.ui} />
        <main id="main" tabIndex={-1} className="outline-none">
          <Hero {...c.hero} />
          <Stack {...c.stack} />
          <Work {...c.work} />
          <Experience {...c.experience} />
          <Certifications {...c.certifications} opensInNewTab={c.ui.opensInNewTab} />
          <Contact {...c.contact} opensInNewTab={c.ui.opensInNewTab} />
        </main>
        <Footer name={c.name} {...c.footer} />
      </div>
    </>
  );
}
