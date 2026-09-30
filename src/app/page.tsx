import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Navbar } from "@/components/Navbar";
import { Pillars } from "@/components/Pillars";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return <><Navbar /><main><Hero /><Services /><Pillars /><Reviews /><Location /></main><Footer /><WhatsAppButton variant="floating" /></>;
}
