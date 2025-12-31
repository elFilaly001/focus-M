
import { ContactHero } from "@/components/ContactHero"
import { MapBanner } from "@/components/MapBanner"
import { FaqSection } from "@/components/FaqSection"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Sparkles, HelpCircle, Lightbulb } from "lucide-react"

export const metadata = {
  title: "FAQ - FocusTech",
  description: "Frequently Asked Questions about FocusTech interactive displays and solutions."
}

export default function FaqPage() {
  return (
    <div className="min-h-screen">
      {/* Contact/Hero Section */}
      <ContactHero />
        {/* Map Banner */}
        <MapBanner />

      {/* FAQ Section */}
      <FaqSection />
    </div>
  )
}
