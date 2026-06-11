import { ImageResponse } from "next/og";
import { isLocale, defaultLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

export const alt = "Camilo López · Fullstack Developer";
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
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0a0a0f",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(34,211,238,0.25), transparent 45%), radial-gradient(circle at 85% 80%, rgba(167,139,250,0.25), transparent 45%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "#34d399",
            fontSize: 28,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "#34d399",
            }}
          />
          {dict.hero.badge}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 96,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-3px",
          }}
        >
          Camilo López
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 44,
            color: "#22d3ee",
            fontWeight: 600,
          }}
        >
          {dict.hero.roles[0]} · Frontend & Backend
        </div>
        <div style={{ marginTop: 24, fontSize: 30, color: "#9ca3af" }}>
          Next.js · React · Angular · .NET · Node.js · Laravel · AWS
        </div>
        <div style={{ marginTop: 60, fontSize: 26, color: "#6b7280" }}>
          camilo-portfolio-cyan.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
