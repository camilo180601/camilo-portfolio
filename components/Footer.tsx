import type { Dictionary } from "@/lib/dictionaries";

export default function Footer({ footer }: { footer: Dictionary["footer"] }) {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <p className="font-[family-name:var(--font-mono-custom)] text-xs text-muted">
          © {new Date().getFullYear()} Camilo López. {footer.rights}
        </p>
        <p className="text-xs text-muted">{footer.built}</p>
      </div>
    </footer>
  );
}
