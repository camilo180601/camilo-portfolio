import { ImageResponse } from "next/og";
import { isLocale, defaultLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

export const alt = "Camilo López · Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : defaultLocale);
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "60px 72px",
        backgroundColor: "#f7f6f2",
        color: "#292823",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 23,
        }}
      >
        <span style={{ color: "#a44630", fontWeight: 700 }}>cl.</span>
        <span>{dict.hero.roles[0]}</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 124,
          lineHeight: 0.98,
          fontWeight: 600,
          letterSpacing: "-8px",
        }}
      >
        <span>Camilo</span>
        <span style={{ display: "flex" }}>
          López<span style={{ color: "#a44630" }}>.</span>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #d6d2c9",
          paddingTop: 24,
          fontSize: 21,
          color: "#66645d",
        }}
      >
        <span>Angular / .NET / Java / Spring Boot</span>
        <span>Bogotá, Colombia</span>
      </div>
    </div>,
    { ...size },
  );
}
