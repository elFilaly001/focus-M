"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

type Sector = 'enterprise' | 'education'

interface SectorContextType {
  sector: Sector
  setSector: (sector: Sector) => void
}

const SectorContext = createContext<SectorContextType | undefined>(undefined)

export function SectorProvider({ children }: { children: React.ReactNode }) {
  const [sector, setSector] = useState<Sector>('enterprise')
  const pathname = usePathname()

  useEffect(() => {
    if (pathname.includes('/education/home')) {
      setSector('education')
    } else if (pathname.includes('/entreprise/home')) {
      setSector('enterprise')
    }
  }, [pathname])

  return (
    <SectorContext.Provider value={{ sector, setSector }}>
      {children}
    </SectorContext.Provider>
  )
}

export function useSector() {
  const context = useContext(SectorContext)
  if (context === undefined) {
    throw new Error('useSector must be used within a SectorProvider')
  }
  return context
}