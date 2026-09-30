"use client";

import { Instagram, Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site-config";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { href: "#servicos", label: "Especialidades" },
    { href: "#metodo", label: "Como funciona" },
    { href: "#depoimentos", label: "Histórias reais" },
    { href: "#contato", label: "Onde estamos" },
  ];

  return (
    <header className="site-header">
      <nav className="container nav-inner" aria-label="Navegação principal">
        <a href="#inicio" className="brand" onClick={() => setIsOpen(false)}>
          <span className="brand-mark">MA</span>
          <span><strong>{siteConfig.professional.shortName}</strong><small>{siteConfig.professional.crefito}</small></span>
        </a>
        <div className={`nav-links ${isOpen ? "is-open" : ""}`}>
          {links.map((link) => <a href={link.href} key={link.href} onClick={() => setIsOpen(false)}>{link.label}</a>)}
          <a className="instagram-link" href={siteConfig.professional.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram size={17} /> <span>Instagram</span>
          </a>
          <WhatsAppButton variant="primary" className="nav-cta">Conversar agora</WhatsAppButton>
        </div>
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={isOpen}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
    </header>
  );
}
