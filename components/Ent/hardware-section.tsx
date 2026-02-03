"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HardwareSectionEnt() {
  // Structured data for French SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Écrans Tactiles Professionnels",
    description:
      "Solutions d'affichage tactile interactif professionnel 4K UHD pour entreprises",
    itemListElement: [
      {
        "@type": "Product",
        position: 1,
        name: "Touch X2 - Écran Tactile Interactif 4K",
        description:
          "Écran tactile multi-touch 20 points avec résolution 4K UHD et partage d'écran sans fil. Parfait pour le développement collaboratif en équipe.",
        image: "/modern-tech-display-monitor.jpg",
        brand: {
          "@type": "Brand",
          name: "Focus-M",
        },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "EUR",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "127",
        },
      },
      {
        "@type": "Product",
        position: 2,
        name: "Touch Ultra - Écran Tactile 98 Pouces",
        description:
          "Écran tactile ultra-large 98 pouces pour collaboration immersive. Idéal pour salles de conférence et centres de commande.",
        image: "/ultrawide-tech-monitor-display.jpg",
        brand: {
          "@type": "Brand",
          name: "Focus-M",
        },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "EUR",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "89",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="py-32 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-sm font-semibold text-[#C52133] uppercase tracking-wide mb-4">
                Matériel
              </p>
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
                Écrans tactiles professionnels
              </h1>
              <p className="text-xl text-muted-foreground dark:text-muted-foreground max-w-3xl mx-auto">
                Matériel interactif professionnel conçu pour les développeurs et
                les équipes modernes
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <article itemScope itemType="https://schema.org/Product">
                <Link
                  href="/entreprise/products"
                  className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white dark:from-background dark:to-background border-2 border-border dark:border-neutral-700 hover:border-[#C52133]/30 transition-all duration-300 p-8 block"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-100 dark:from-background dark:to-background rounded-xl mb-6 overflow-hidden">
                    <img
                      src="/modern-tech-display-monitor.jpg"
                      alt="Écran tactile interactif Touch X2 4K UHD multi-touch 20 points"
                      className="w-full h-full object-cover"
                      itemProp="image"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-start justify-between mb-4">
                    <h2
                      className="font-display text-3xl font-bold text-slate-900 dark:text-white"
                      itemProp="name"
                    >
                      Touch X2
                    </h2>
                    <div className="text-xs font-semibold text-[#C52133] bg-[#fef2f2] dark:bg-neutral-800 dark:text-[#fecaca] px-3 py-1.5 rounded-full">
                      4K UHD
                    </div>
                  </div>
                  <p
                    className="text-muted-foreground dark:text-muted-foreground leading-relaxed mb-4"
                    itemProp="description"
                  >
                    Écran tactile multi-touch 20 points, résolution 4K, partage
                    d'écran sans fil. Parfait pour le développement
                    collaboratif.
                  </p>
                  <div className="inline-flex items-center text-[#C52133] font-semibold text-sm">
                    Voir les spécifications{" "}
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </article>

              <article itemScope itemType="https://schema.org/Product">
                <Link
                  href="/entreprise/products"
                  className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white dark:from-background dark:to-background border-2 border-border dark:border-neutral-700 hover:border-[#C52133]/30 transition-all duration-300 p-8 block"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-100 dark:from-background dark:to-background rounded-xl mb-6 overflow-hidden">
                    <img
                      src="/ultrawide-tech-monitor-display.jpg"
                      alt="Écran tactile ultra-large Touch Ultra 98 pouces pour salle de conférence"
                      className="w-full h-full object-cover"
                      itemProp="image"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-start justify-between mb-4">
                    <h2
                      className="font-display text-3xl font-bold text-slate-900 dark:text-white"
                      itemProp="name"
                    >
                      Touch Ultra
                    </h2>
                    <div className="text-xs font-semibold text-[#C52133] bg-[#fef2f2] dark:bg-neutral-800 dark:text-white px-3 py-1.5 rounded-full">
                      98"
                    </div>
                  </div>
                  <p
                    className="text-muted-foreground dark:text-muted-foreground leading-relaxed mb-4"
                    itemProp="description"
                  >
                    Format ultra-large pour une collaboration immersive. Idéal
                    pour les salles de conférence et les centres de commande.
                  </p>
                  <div className="inline-flex items-center text-[#C52133] font-semibold text-sm">
                    Voir les spécifications{" "}
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
