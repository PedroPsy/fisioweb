import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Pillars() {
  return <section className="section method-section" id="metodo"><div className="container"><div className="method-intro"><p className="eyebrow"><span /> Minha metodologia</p><h2>Seu corpo tem uma história.<br /><em>Vamos escrever o próximo capítulo.</em></h2><p>Resultado sustentável não acontece por acaso. A cada etapa, você entende mais sobre o seu corpo e ganha autonomia para cuidar dele.</p><WhatsAppButton variant="outline">Começar minha jornada</WhatsAppButton></div><div className="method-steps">{siteConfig.methodology.map((step, index) => <div className="method-step" key={step.number}><div className="step-number">{step.number}</div><div><h3>{step.title}</h3><p>{step.description}</p></div>{index < siteConfig.methodology.length - 1 && <ArrowRight className="step-arrow" size={20} />}</div>)}</div></div></section>;
}
