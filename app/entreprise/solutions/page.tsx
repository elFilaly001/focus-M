"use client"

import { HeroSolution } from "@/components/Ent/HeroSolution"
import SolutionsSolu from "@/components/Ent/SolutionsSolu"



export default function SolutionsPage() {
  return (
    <>
      <div className="mb-8">
        <HeroSolution />
      </div>
      <SolutionsSolu />
    </>
  )
}