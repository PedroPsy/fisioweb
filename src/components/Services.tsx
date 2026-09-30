import { Activity, ArrowUpRight, Home, ScanLine, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { getWhatsAppUrl } from "@/components/WhatsAppButton";

const icons = { sparkles: Sparkles, home: Home, scan: ScanLine, activity: Activity };

export function Services() {
  return <section className="section services-section" id="servicos"><div className="container"><div className="section-heading"><div><p className="eyebrow"><span /> Especialidades</p><h2>Um cuidado que olha <em>para você por inteiro.</em></h2></div><p>Tratamentos que combinam conhecimento clínico, movimento e uma relação próxima para acelerar sua evolução.</p></div><div className="services-grid">{siteConfig.services.map((service, index) => { const Icon = icons[service.icon]; return <article className="service-card" key={service.title}><div className="service-top"><span className="service-index">0{index + 1}</span><div className="service-icon"><Icon size={22} /></div></div><p className="service-benefit">{service.benefit}</p><h3>{service.title}</h3><p className="service-description">{service.description}</p><a className="service-link" href={getWhatsAppUrl(service.whatsappMessage)} target="_blank" rel="noreferrer">Quero saber mais <ArrowUpRight size={16} /></a></article>; })}</div></div></section>;
}
