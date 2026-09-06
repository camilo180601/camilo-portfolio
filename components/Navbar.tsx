"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export default function Navbar({
  locale,
  nav,
}: {
  locale: Locale;
  nav: Dictionary["nav"];
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuButton = useRef<HTMLButtonElement>(null);
  const other: Locale = locale === "es" ? "en" : "es";
  const links = [
    { href: "#projects", label: nav.projects },
    { href: "#about", label: nav.about },
    { href: "#experience", label: nav.experience },
    { href: "#skills", label: nav.skills },
    { href: "#contact", label: nav.contact },
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const media = window.matchMedia("(min-width: 900px)");
    const close = () => {
      if (media.matches) setOpen(false);
    };
    document.addEventListener("keydown", escape);
    media.addEventListener("change", close);
    return () => {
      document.removeEventListener("keydown", escape);
      media.removeEventListener("change", close);
    };
  }, [open]);
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        {locale === "es" ? "Saltar al contenido" : "Skip to content"}
      </a>
      <nav
        className="nav-inner page-width"
        aria-label={
          locale === "es" ? "Navegación principal" : "Main navigation"
        }
      >
        <a href="#top" className="wordmark" aria-label="cl. Camilo López">
          cl<span>.</span>
        </a>
        <ul className="desktop-nav">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? "location" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <Link
            href={`/${other}`}
            hrefLang={other}
            className="locale-switch"
            aria-label={
              other === "en"
                ? "ES / EN: Switch to English"
                : "EN / ES: Cambiar a español"
            }
          >
            <span className="current-locale">{locale.toUpperCase()}</span>
            <span aria-hidden="true">/</span>
            <span>{other.toUpperCase()}</span>
            <ArrowUpRight size={14} />
          </Link>
          <button
            ref={menuButton}
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={
              locale === "es"
                ? open
                  ? "Cerrar menú"
                  : "Abrir menú"
                : open
                  ? "Close menu"
                  : "Open menu"
            }
          >
            {open ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </nav>
      <nav
        id="mobile-navigation"
        className="mobile-nav page-width"
        hidden={!open}
        aria-label={locale === "es" ? "Navegación móvil" : "Mobile navigation"}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            aria-current={active === link.href ? "location" : undefined}
          >
            {link.label}
            <ArrowUpRight size={20} />
          </a>
        ))}
      </nav>
    </header>
  );
}
