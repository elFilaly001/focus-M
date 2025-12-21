"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import HeroPlatform  from "@/components/Edu/hero-platform"
import { Button } from "@/components/ui/button"
import { AboutIntroSection } from "@/components/About-us"
import { SolutionsEducation } from "@/components/Edu/Solutions"
import HardwareSection from "@/components/Edu/hardware-section"
import { FinalCTASection } from "@/components/ui/CTA"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroPlatform />

      <AboutIntroSection />

      <SolutionsEducation />

      <HardwareSection />

     <FinalCTASection/>
    </div>
  )
}
