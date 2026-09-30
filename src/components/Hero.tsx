import { ArrowDown, Check, Instagram, Star } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-glow" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span /> {siteConfig.hero.eyebrow}</p>
          <h1>{siteConfig.hero.headline}</h1>
          <p className="hero-description">{siteConfig.hero.description}</p>
          <div className="credential-row"><span className="credential-badge">{siteConfig.professional.crefito}</span><span className="credential-text">{siteConfig.professional.credentials}</span></div>
          <div className="hero-actions">
            <WhatsAppButton>Agendar pelo WhatsApp</WhatsAppButton>
            <a className="button-outline" href={siteConfig.professional.instagramUrl} target="_blank" rel="noreferrer"><Instagram size={17} /> Conheça meu trabalho</a>
          </div>
          <div className="hero-proof"><div className="proof-avatars"><span>R</span><span>C</span><span>E</span><span>+</span></div><div><div className="stars"><Star size={13} fill="currentColor" /> <Star size={13} fill="currentColor" /> <Star size={13} fill="currentColor" /> <Star size={13} fill="currentColor" /> <Star size={13} fill="currentColor" /> <strong>{siteConfig.authority.rating}</strong></div><small>de quem voltou a se movimentar</small></div></div>
        </div>
        <div className="hero-visual">
          <div className="hero-image" style={{ backgroundImage: `url(${siteConfig.hero.imageUrl})` }} aria-label="Profissional atendendo paciente" role="img" />
          <div className="hero-caption"><div className="caption-icon"><Check size={16} /></div><div><strong>{siteConfig.authority.patients}</strong><span>{siteConfig.authority.patientsLabel}</span></div></div>
          <div className="hero-side-note"><span className="pulse-dot" /> atendimento humano</div>
        </div>
      </div>
      <a className="scroll-cue" href="#servicos" aria-label="Conheça as especialidades"><ArrowDown size={16} /> <span>conheça o cuidado</span></a>
    </section>
  );
}
