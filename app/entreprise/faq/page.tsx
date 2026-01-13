import { ContactHero } from "@/components/ContactHero";
import { FaqSection } from "@/components/Ent/FaqSection";
import { MapBanner } from "@/components/MapBanner";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "FAQ - FocusTech Entreprise",
  description:
    "Questions fréquemment posées sur les solutions FocusTech pour les entreprises.",
};

export default function FaqPage() {
  return (
    <div className="min-h-screen">
      {/* Contact/Hero Section */}
      {/* <ContactHero /> */}
      {/* Map Banner */}
      {/* <MapBanner /> */}

      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
}
