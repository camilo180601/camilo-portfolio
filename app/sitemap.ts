import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { profile } from "@/lib/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, `${profile.siteUrl}/${locale}`])
  );

  return locales.map((locale) => ({
    url: `${profile.siteUrl}/${locale}`,
    lastModified,
    changeFrequency: "monthly",
    priority: locale === "es" ? 1 : 0.9,
    alternates: { languages },
  }));
}
