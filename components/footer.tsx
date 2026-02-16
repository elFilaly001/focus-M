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
                <svg
                  className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#dc2626]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-sm text-muted-foreground">0666 906 422</span>
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
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#dc2626] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Angle Avenue Ambassadeur Ben Aicha et rue barbier,
2ème étage, Casablanca
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
          <div className="flex flex-col md:flex-row items-center w-full gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Focus-M. Tous droits réservés.
            </p>
            <div className="flex justify-center w-full items-center gap-4 mt-2 md:mt-0">
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-[#dc2626] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-[#dc2626] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Youtube" className="text-muted-foreground hover:text-[#dc2626] transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Linkedin" className="text-muted-foreground hover:text-[#dc2626] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
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
