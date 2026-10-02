import { ArrowUpRight, Clock3, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Location() {
  return <section className="location-section" id="contato"><div className="container location-grid"><div className="location-map rounded-3xl overflow-hidden"><iframe src={siteConfig.location.googleMapsEmbedUrl} className="w-full h-full min-h-[360px] lg:min-h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização do consultório no Google Maps" /></div><div className="location-copy"><p className="eyebrow"><span /> Vamos conversar</p><h2>Seu próximo movimento começa <em>aqui.</em></h2><div className="location-detail"><MapPin size={19} /><div><strong>{siteConfig.location.clinicName}</strong><p>{siteConfig.location.address}</p><a href={siteConfig.location.mapsUrl} target="_blank" rel="noreferrer">Ver no Google Maps <ArrowUpRight size={15} /></a></div></div><div className="location-detail"><Clock3 size={19} /><div><strong>Horários flexíveis</strong><p>{siteConfig.location.hours}</p></div></div><p className="coverage"><span /> {siteConfig.location.coverage}</p><WhatsAppButton>Agendar uma conversa</WhatsAppButton></div></div></section>;
}
