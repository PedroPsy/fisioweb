import { Instagram, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site-config";

export function Footer() {
  return <footer className="site-footer"><div className="container footer-top"><a href="#inicio" className="brand footer-brand"><span className="brand-mark">MA</span><span><strong>{siteConfig.professional.shortName}</strong><small>{siteConfig.professional.title}</small></span></a><p>Mais movimento.<br /><em>Mais vida.</em></p><a className="footer-instagram" href={siteConfig.professional.instagramUrl} target="_blank" rel="noreferrer"><Instagram size={17} /> {siteConfig.professional.instagram} <ArrowUpRight size={15} /></a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.professional.name}. Todos os direitos reservados.</span><span>{siteConfig.professional.crefito} • São Paulo, SP</span></div></footer>;
}
