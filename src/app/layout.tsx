import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clara Andrade | Fisioterapia & Pilates Clínico",
  description: "Fisioterapia personalizada e Pilates Clínico para você voltar a viver em movimento.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
