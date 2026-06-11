import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import Spotlight from "@/components/Spotlight";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <main className="relative">
      <Spotlight />
      <Navbar locale={locale} nav={dict.nav} />
      <Hero hero={dict.hero} locale={locale} />
      <Marquee />
      <About about={dict.about} />
      <Experience experience={dict.experience} />
      <Projects projects={dict.projects} />
      <Skills skills={dict.skills} />
      <Contact contact={dict.contact} />
      <Footer footer={dict.footer} />
    </main>
  );
}
