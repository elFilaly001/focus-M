import { ContactHero } from "@/components/ContactHero";
import { MapBanner } from "@/components/MapBanner";
import { FaqSection } from "@/components/Edu/FaqSection";

export const metadata = {
  title: "FAQ - FocusTech",
  description:
    "Frequently Asked Questions about FocusTech interactive displays and solutions.",
};

export default function FaqPage() {
  return (
    <div className="min-h-screen">
      {/* <ContactHero />
      <MapBanner /> */}
      <FaqSection />
    </div>
  );
}
