import { ArrowUpRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site-config";

type WhatsAppButtonProps = {
  message?: string;
  children?: React.ReactNode;
  variant?: "primary" | "light" | "outline" | "floating";
  className?: string;
};

export function getWhatsAppUrl(message = siteConfig.whatsapp.defaultMessage) {
  return `https://wa.me/${siteConfig.professional.phone}?text=${encodeURIComponent(message)}`;
}

export function WhatsAppButton({ message, children, variant = "primary", className = "" }: WhatsAppButtonProps) {
  const variantClass = {
    primary: "button-primary",
    light: "button-light",
    outline: "button-outline",
    floating: "whatsapp-floating",
  }[variant];

  return (
    <a className={`${variantClass} ${className}`} href={getWhatsAppUrl(message)} target="_blank" rel="noreferrer" aria-label={variant === "floating" ? siteConfig.whatsapp.floatingLabel : undefined}>
      <MessageCircle size={variant === "floating" ? 25 : 18} strokeWidth={2.2} />
      {variant === "floating" ? <span className="floating-label">{siteConfig.whatsapp.floatingLabel}</span> : children}
      {variant !== "floating" && <ArrowUpRight size={17} />}
    </a>
  );
}
