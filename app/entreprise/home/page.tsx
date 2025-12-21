"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import HeroPlatform  from "@/components/Ent/hero-platform"
import { AboutIntroSection } from "@/components/About-us"
import { SolutionsEnterprise } from "@/components/Ent/Solutions"
import HardwareSection from "@/components/Ent/hardware-section"
import { FinalCTASection } from "@/components/ui/CTA"

export default function Home() {
  return (
    <div className="min-h-screen">

      <HeroPlatform />

      <AboutIntroSection />

      <SolutionsEnterprise/>

      <HardwareSection />

      <FinalCTASection/>

      
    </div>
  )
}
