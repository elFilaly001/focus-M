"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/LOGO/Screenshot_2025-12-19_153602-removebg-preview.png" alt="logo" className="h-15" />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-[#dc2626] transition-colors">
              Plateforme
            </Link>
            <Link href="/products" className="text-sm font-medium hover:text-[#dc2626] transition-colors">
              Produits
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-[#dc2626] transition-colors">
              Entreprise
            </Link>
            <Link href="/references" className="text-sm font-medium hover:text-[#dc2626] transition-colors">
              Clients
            </Link>
            <Link href="/downloads" className="text-sm font-medium hover:text-[#dc2626] transition-colors">
              Ressources
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-[#dc2626] transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="default" className="bg-[#dc2626] hover:bg-[#991b1b] text-white">
              <Link href="/demo">Demander une démo</Link>
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-[#dc2626]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Plateforme
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium hover:text-[#dc2626]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Produits
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-[#dc2626]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Entreprise
            </Link>
            <Link
              href="/references"
              className="text-sm font-medium hover:text-[#dc2626]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Clients
            </Link>
            <Link
              href="/downloads"
              className="text-sm font-medium hover:text-[#dc2626]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ressources
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-[#dc2626]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="bg-[#dc2626] hover:bg-[#991b1b] text-white w-full">
              <Link href="/demo">Demander une démo</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
