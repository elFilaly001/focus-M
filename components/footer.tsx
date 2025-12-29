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
                alt="Logo FocusTech"
                width={200}
                height={200}
                className="rounded"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Solutions d'affichage interactif de nouvelle génération pour les entreprises et l'éducation modernes.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-[#dc2626]">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/references" className="text-sm text-muted-foreground hover:text-[#dc2626]">
                  Références
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="text-sm text-muted-foreground hover:text-[#dc2626]">
                  Téléchargements
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Téléphone : +1 (555) 123-4567</li>
              <li>E-mail : info@focustech.com</li>
              <li className="pt-2">
                <Link href="/contact" className="text-[#dc2626] hover:text-[#991b1b] font-medium">
                  Contactez-nous →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">© 2025 FocusTech. Tous droits réservés.</p>
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
