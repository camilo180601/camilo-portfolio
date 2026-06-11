const TECHS = [
  "Next.js",
  "React",
  "TypeScript",
  "Angular",
  "Vue.js",
  ".NET",
  "Node.js",
  "Laravel",
  "NestJS",
  "Umbraco",
  "AWS",
  "Docker",
  "MySQL",
  "MongoDB",
  "Tailwind CSS",
  "Figma",
];

export default function Marquee() {
  const row = [...TECHS, ...TECHS];
  return (
    <div className="marquee border-y border-line py-5">
      <div className="marquee-track items-center gap-12 pr-12">
        {row.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="flex items-center gap-12 whitespace-nowrap font-[family-name:var(--font-mono-custom)] text-sm uppercase tracking-[0.2em] text-muted"
          >
            {tech}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
