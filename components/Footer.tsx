import type { Dictionary } from "@/lib/dictionaries";

export default function Footer({ footer }: { footer: Dictionary["footer"] }) {
  return (
    <footer className="site-footer page-width">
      <a href="#top" className="wordmark" aria-label="cl. Camilo López">
        cl<span>.</span>
      </a>
      <p>
        © {new Date().getFullYear()} Camilo López. {footer.rights}
      </p>
      <p>{footer.built}</p>
    </footer>
  );
}
