import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { profile } from "@/lib/profile";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${profile.siteUrl}/#person`,
        name: "Camilo Alejandro López",
        alternateName: "Camilo López",
        url: `${profile.siteUrl}/${locale}`,
        email: `mailto:${profile.email}`,
        jobTitle: dict.hero.roles[0],
        description: dict.meta.description,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bogotá D.C.",
          addressCountry: "CO",
        },
        sameAs: [profile.github, profile.linkedin],
        knowsAbout: dict.skills.groups.flatMap((group) => group.items),
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Universidad Militar Nueva Granada",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${profile.siteUrl}/#website`,
        url: profile.siteUrl,
        name: "Camilo López · Portfolio",
        inLanguage: locale,
        publisher: { "@id": `${profile.siteUrl}/#person` },
      },
    ],
  };

  return (
    <>
      <Navbar locale={locale} nav={dict.nav} />
      <main id="main-content" tabIndex={-1}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          src="https://crm-hub-api.onrender.com/api/webchat/widget.js?ch=1"
          async
        ></script>
        <Hero hero={dict.hero} locale={locale} />
        <Projects projects={dict.projects} />
        <About about={dict.about} />
        <Experience experience={dict.experience} />
        <Skills skills={dict.skills} />
        <Contact contact={dict.contact} />
      </main>
      <Footer footer={dict.footer} />
    </>
  );
}
