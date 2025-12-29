"use client"

import { useSector } from '@/components/sector-context'
import { Building2, GraduationCap } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export function SectorToggle() {
  const { sector, setSector } = useSector()
  const router = useRouter()
  const shouldReduce = useReducedMotion()

  const handleSectorChange = (newSector: 'enterprise' | 'education') => {
    if (newSector === sector) return
    setSector(newSector)
    if (newSector === 'enterprise') router.push('/entreprise/home')
    else router.push('/education/home')
  }

  const transition = shouldReduce
    ? { duration: 0 }
    : { type: 'spring' as const, bounce: 0.2, duration: 0.45 }

  return (
    <div className="border-b border-gray-200 dark:border-gray-800 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-1">
          <div
            role="tablist"
            aria-label="Select sector"
            className="inline-flex gap-2 bg-white/60 dark:bg-[#0b0f13]/60 backdrop-blur-sm p-1 rounded-md shadow-sm"
          >
            <button
              role="tab"
              aria-pressed={sector === 'education'}
              onClick={() => handleSectorChange('education')}
              className={`relative px-5 py-1.5 rounded-md text-sm font-semibold flex items-center gap-2 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C52133] ${sector === 'education'
                  ? 'text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
            >
              {sector === 'education' && (
                <motion.span
                  layoutId="sector-bg"
                  className="absolute inset-0 rounded-md bg-gradient-to-r from-[#C52133] to-[#b71c27] shadow-md"
                  transition={transition}
                />
              )}
              <GraduationCap className="h-4 w-4 relative z-10" />
              <span className="relative z-10">Education</span>
            </button>

            <button
              role="tab"
              aria-pressed={sector === 'enterprise'}
              onClick={() => handleSectorChange('enterprise')}
              className={`relative px-5 py-1.5 rounded-md text-sm font-semibold flex items-center gap-2 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C52133] ${sector === 'enterprise'
                  ? 'text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
            >
              {sector === 'enterprise' && (
                <motion.span
                  layoutId="sector-bg"
                  className="absolute inset-0 rounded-md bg-gradient-to-r from-[#C52133] to-[#b71c27] shadow-md"
                  transition={transition}
                />
              )}
              <Building2 className="h-4 w-4 relative z-10" />
              <span className="relative z-10">Enterprise</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}