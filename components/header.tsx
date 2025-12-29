"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Sun, Moon } from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { get } from "http"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  // useEffect(() => setMounted(true), [])

  function getAssociatLink(link: string) {
    if (pathname?.includes('/entreprise')) {
      return `/entreprise${link}`;
    } else if (pathname?.includes('/education')) {
      return `/education${link}`;
    } else {
      return `/entreprise${link}`;
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  const darkLogo = "/LOGO/focus-m-12-19-2025_10_27_PM-removebg-preview.png"
  const lightLogo = "/LOGO/Screenshot_2025-12-19_153602-removebg-preview.png"
  const logoSrc = mounted && resolvedTheme === 'dark' ? darkLogo : lightLogo

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href={getAssociatLink('/home')} className="flex items-center space-x-2">
            <img src={logoSrc} alt="logo" className="h-18 mr-2" />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href={getAssociatLink('/home')}
              className={`text-sm font-medium hover:text-[#dc2626] transition-colors ${pathname?.includes('/home') ? 'text-[#dc2626]' : ''
                }`}
            >
              Accueil
            </Link>

            <Link
              href={getAssociatLink('/solutions')}
              className={`text-sm font-medium hover:text-[#dc2626] transition-colors ${pathname?.includes('/solutions') ? 'text-[#dc2626]' : ''
                }`}
            >
              Solutions
            </Link>

            {pathname?.includes('/education') ? (
              <Link
                href={getAssociatLink('/products')}
                className={`text-sm font-medium hover:text-[#dc2626] transition-colors ${pathname?.includes('/products') ? 'text-[#dc2626]' : ''
                  }`}
              >
                <div className="flex flex-row gap-1">
                <img src="/LOGO/Brandbook-FOCUS-M-1.png" alt="logo" className="w-5" />
                club
                </div>
              </Link>
            ) : null}
            <Link
              href={getAssociatLink('/faq')}
              className={`text-sm font-medium hover:text-[#dc2626] transition-colors ${pathname === '/about' ? 'text-[#dc2626]' : ''
                }`}
            >
              FAQ
            </Link>
            <Link
              href={getAssociatLink('/contact')}
              className={`text-sm font-medium hover:text-[#dc2626] transition-colors ${pathname === '/contact' ? 'text-[#dc2626]' : ''
                }`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(mounted && resolvedTheme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              {mounted && (resolvedTheme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />)}
            </Button>

            <Button asChild variant="default" className="bg-[#dc2626] hover:bg-[#991b1b] text-white">
              <Link href="/demo">Demander une démo</Link>
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href={getAssociatLink('/home')}
              className={`text-sm font-medium hover:text-[#dc2626] ${pathname === '/' ? 'text-[#dc2626]' : ''
                }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>

            <Link
              href={getAssociatLink('/solutions')}
              className={`text-sm font-medium hover:text-[#dc2626] ${pathname?.includes('/entreprise') || pathname?.includes('/education') ? 'text-[#dc2626]' : ''
                }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </Link>

            <Link
              href="/products"
              className={`text-sm font-medium hover:text-[#dc2626] ${pathname === '/products' ? 'text-[#dc2626]' : ''
                }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Produits
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium hover:text-[#dc2626] ${pathname === '/about' ? 'text-[#dc2626]' : ''
                }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium hover:text-[#dc2626] ${pathname === '/contact' ? 'text-[#dc2626]' : ''
                }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="flex items-center justify-between pt-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(mounted && resolvedTheme === 'dark' ? 'light' : 'dark')}
                aria-label="Toggle theme"
              >
                {mounted && (resolvedTheme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />)}
              </Button>

              <Button asChild className="bg-[#dc2626] hover:bg-[#991b1b] text-white flex-1 ml-4">
                <Link href="/demo">Demander une démo</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}