"use client";
import HeroPlatform from "@/components/Edu/hero-platform";
import { AboutIntroSection } from "@/components/Edu/About-us";
import { SolutionsEducation } from "@/components/Edu/Solutions";
import { ShowcaseSection } from "@/components/Edu/Showcase";
import { FinalCTASection } from "@/components/Edu/CTA";
import LogoSlider from "@/components/Edu/Brandslider";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroPlatform />

      <AboutIntroSection />

      {/* <SolutionsEducation /> */}

      <ShowcaseSection />

      <LogoSlider />

      <FinalCTASection />
    </div>
  );
}
