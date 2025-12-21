import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/LOGO/focus-m-12-19-2025_10_27_PM-removebg-preview.png"
                alt="FocusTech logo"
                width={200}
                height={200}
                className="rounded"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Next-generation interactive display solutions for modern businesses and education.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-[#dc2626]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/references" className="text-sm text-muted-foreground hover:text-[#dc2626]">
                  References
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="text-sm text-muted-foreground hover:text-[#dc2626]">
                  Downloads
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/education/products/i3touch-x2" className="text-sm text-muted-foreground hover:text-[#dc2626]">
                  I3TOUCH X2
                </Link>
              </li>
              <li>
                <Link href="/education/products/i3touch-ultra" className="text-sm text-muted-foreground hover:text-[#dc2626]">
                  I3TOUCH ULTRA
                </Link>
              </li>
              <li>
                <Link href="/education/products/i3touch-x-one" className="text-sm text-muted-foreground hover:text-[#dc2626]">
                  I3TOUCH X-ONE
                </Link>
              </li>
              <li>
                <Link href="/education/products/i3touch-e-one" className="text-sm text-muted-foreground hover:text-[#dc2626]">
                  I3TOUCH E-ONE
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Phone: +1 (555) 123-4567</li>
              <li>Email: info@focustech.com</li>
              <li className="pt-2">
                <Link href="/contact" className="text-[#dc2626] hover:text-[#991b1b] font-medium">
                  Contact Us →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">© 2025 FocusTech. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-[#dc2626]">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-[#dc2626]">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-[#dc2626]">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-[#dc2626]">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
