import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stack } from "@/components/Stack";
import { Work } from "@/components/Work";
import { en } from "@/content/en";

export default function Home() {
  const c = en;
  return (
    <div id="top" className="container-page">
      <Header name={c.name} initials={c.initials} nav={c.nav} />
      <main>
        <Hero {...c.hero} />
        <Stack {...c.stack} />
        <Work {...c.work} />
        <Experience {...c.experience} />
        <Certifications {...c.certifications} />
        <Contact {...c.contact} />
      </main>
      <Footer name={c.name} {...c.footer} />
    </div>
  );
}
