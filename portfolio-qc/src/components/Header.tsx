"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "Profil" },
  { href: "#research", label: "Recherche" },
  { href: "#experience", label: "Parcours" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#home" className="brand" aria-label="Emmanuel AMELA — accueil">
          <span className="brand-mark">EA</span>
          <span className="brand-text">Emmanuel AMELA</span>
        </a>

        <nav className={`nav ${open ? "is-open" : ""}`} aria-label="Navigation principale">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="btn btn-small" href="/cv-emmanuel.pdf" download onClick={() => setOpen(false)}>
            CV
          </a>
        </nav>

        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
