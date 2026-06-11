import type { Locale } from "./i18n";

export const profile = {
  siteUrl: "https://camilo-portfolio-cyan.vercel.app",
  email: "camilo06180401@gmail.com",
  phone: "+573204458519",
  github: "https://github.com/camilo180601",
  linkedin: "https://www.linkedin.com/in/camilo-lopez-aguilar-1806c",
  whatsapp: "https://wa.me/573204458519",
  cvPath: {
    es: "/cv/CamiloLopez_CV_ES.pdf",
    en: "/cv/CamiloLopez_CV_EN.pdf",
  } satisfies Record<Locale, string>,
};
