"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function Footer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Determine sector from pathname
  const isEducation = pathname?.includes("/education");
  const isEntreprise = pathname?.includes("/entreprise");
  const basePath = isEducation
    ? "/education"
    : isEntreprise
    ? "/entreprise"
    : "";

  useEffect(() => {
    setMounted(true);
  }, []);

  const darkLogo = "/LOGO/focus-m-12-19-2025_10_27_PM-removebg-preview.png";
  const lightLogo = "/LOGO/Screenshot_2025-12-19_153602-removebg-preview.png";
  const logoSrc = mounted && resolvedTheme === "dark" ? darkLogo : lightLogo;
  return (
    <footer className="border-t border-border bg-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src={logoSrc}
                alt="Logo Focus M"
                width={0}
                height={0}
                sizes="64px"
                className="h-16 w-auto rounded"
                priority
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Un partenaire engagé, de la réflexion à l’usage, pour des environnements interactifs, performants et optimisés 
            </p>
            {/* <div className="flex items-center space-x-3 mt-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-[#dc2626] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-[#dc2626] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-[#dc2626] transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-[#dc2626] transition-colors"
                aria-label="Linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div> */}
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {isEducation ? "Éducation" : "Entreprise"}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`${basePath}/home`}
                  className="text-sm text-muted-foreground hover:text-[#dc2626] transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href={`${basePath}/home#references`}
                  className="text-sm text-muted-foreground hover:text-[#dc2626] transition-colors"
                >
                  Références
                </Link>
              </li>
              <li>
                <Link
                  href={`${basePath}/downloads`}
                  className="text-sm text-muted-foreground hover:text-[#dc2626] transition-colors"
                >
                  Téléchargements
                </Link>
              </li>
              <li>
                <Link
                  href={`${basePath}/faq`}
                  className="text-sm text-muted-foreground hover:text-[#dc2626] transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          {/* <div>
            <h3 className="font-semibold text-foreground mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`${basePath}/solutions`}
                  className="text-sm text-muted-foreground hover:text-[#dc2626] transition-colors"
                >
                  {isEducation ? "Solutions Éducation" : "Solutions Entreprise"}
                </Link>
              </li>
              {isEntreprise && (
                <li>
                  <Link
                    href={`${basePath}/products`}
                    className="text-sm text-muted-foreground hover:text-[#dc2626] transition-colors"
                  >
                    Produits
                  </Link>
                </li>
              )}
              {isEducation && (
                <li>
                  <Link
                    href={`${basePath}/mclub`}
                    className="text-sm text-muted-foreground hover:text-[#dc2626] transition-colors"
                  >
                    M-Club
                  </Link>
                </li>
              )}
              <li>
                <Link
                  href={`${basePath}/demo`}
                  className="text-sm text-muted-foreground hover:text-[#dc2626] transition-colors"
                >
                  Démo
                </Link>
              </li>
              <li>
                <Link
                  href={`${basePath}/contact`}
                  className="text-sm text-muted-foreground hover:text-[#dc2626] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-[#dc2626] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  05222-44289
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-[#dc2626] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contact@focus-m.ma"
                  className="text-sm text-muted-foreground hover:text-[#dc2626] transition-colors"
                >
                  contact@focusm.ma
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#dc2626] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Rabat, Maroc
                </span>
              </li>
              <li className="pt-2">
                <Link
                  href={`${basePath}/contact`}
                  className="inline-flex items-center text-sm font-medium text-[#dc2626] hover:text-[#991b1b] transition-colors"
                >
                  Contactez-nous →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-12 pt-8 border-t border-border gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Focus-M. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href={`/mention-legal`}
              className="text-sm text-muted-foreground hover:text-[#dc2626] transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href={`/politics`}
              className="text-sm text-muted-foreground hover:text-[#dc2626] transition-colors"
            >
              Politique de Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
