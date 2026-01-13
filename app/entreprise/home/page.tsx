"use client"
import HeroPlatform  from "@/components/Ent/hero-platform"
import { AboutIntroSection } from "@/components/About-us"
import { SolutionsEnterprise } from "@/components/Ent/Solutions"
import LogoSlider from "@/components/Ent/Brandslider"
import { FinalCTASection } from "@/components/Ent/cta-section"

export default function Home() {
  
  return (
    <div className="min-h-screen">

      <HeroPlatform />

      <AboutIntroSection />

      <SolutionsEnterprise/>

      <LogoSlider />

      <FinalCTASection/>


    </div>
  )
}