"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface FaqSectionProps {
  className?: string;
}

export function FaqSection({ className }: FaqSectionProps) {
  return (
    <section className={"w-full py-24 bg-background " + (className || "")}>
      <motion.div
        className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-34"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Left: Title and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Questions Fréquemment Posées
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-2">
              Contactez-nous si vous avez encore des questions pour rendre votre
              expérience plus fluide.
            </p>
          </motion.div>
          {/* Right: FAQ List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          >
            <div className="divide-y divide-border">
              <Accordion type="single" collapsible className="w-full">
                {/* FAQ Item 1 */}
                <AccordionItem value="faq1" className="border-0">
                  <div className="flex items-center py-10">
                    <span className="text-xl font-semibold text-muted-foreground w-12 flex-shrink-0">
                      01
                    </span>
                    <AccordionTrigger className="flex-1 text-lg font-medium text-left px-2 py-0 bg-transparent shadow-none hover:bg-transparent focus:outline-none">
                      Est-ce sécurisé et facile à gérer ?
                    </AccordionTrigger>
                  </div>
                  <AccordionContent className="pl-14 pb-6 text-muted-foreground">
                    Oui, nos solutions sont conçues avec des mesures de sécurité
                    avancées et une interface intuitive pour une gestion facile.
                  </AccordionContent>
                </AccordionItem>
                {/* FAQ Item 2 */}
                <AccordionItem value="faq2" className="border-0">
                  <div className="flex items-center py-10">
                    <span className="text-xl font-semibold text-muted-foreground w-12 flex-shrink-0">
                      02
                    </span>
                    <AccordionTrigger className="flex-1 text-lg font-medium text-left px-2 py-0 bg-transparent shadow-none hover:bg-transparent focus:outline-none">
                      Est-ce compatible avec le travail à distance ou hybride ?
                    </AccordionTrigger>
                  </div>
                  <AccordionContent className="pl-14 pb-6 text-muted-foreground">
                    Absolument, nos plateformes supportent le travail à distance
                    et hybride avec des outils de collaboration intégrés.
                  </AccordionContent>
                </AccordionItem>
                {/* FAQ Item 3 */}
                <AccordionItem value="faq3" className="border-0">
                  <div className="flex items-center py-10">
                    <span className="text-xl font-semibold text-muted-foreground w-12 flex-shrink-0">
                      03
                    </span>
                    <AccordionTrigger className="flex-1 text-lg font-medium text-left px-2 py-0 bg-transparent shadow-none hover:bg-transparent focus:outline-none">
                      Puis-je visiter vos locaux sans rendez-vous ?
                    </AccordionTrigger>
                  </div>
                  <AccordionContent className="pl-14 pb-6 text-muted-foreground">
                    Nous vous recommandons de prendre rendez-vous afin de
                    garantir la disponibilité d'un conseiller.
                  </AccordionContent>
                </AccordionItem>
                {/* FAQ Item 4 */}
                <AccordionItem value="faq4" className="border-0">
                  <div className="flex items-center py-10">
                    <span className="text-xl font-semibold text-muted-foreground w-12 flex-shrink-0">
                      04
                    </span>
                    <AccordionTrigger className="flex-1 text-lg font-medium text-left px-2 py-0 bg-transparent shadow-none hover:bg-transparent focus:outline-none">
                      Proposez-vous un accompagnement pour l'installation ?
                    </AccordionTrigger>
                  </div>
                  <AccordionContent className="pl-14 pb-6 text-muted-foreground">
                    Oui, nous proposons un accompagnement complet pour
                    l'installation et la configuration de nos solutions.
                  </AccordionContent>
                </AccordionItem>
                {/* FAQ Item 5 */}
                <AccordionItem value="faq5" className="border-0">
                  <div className="flex items-center py-10">
                    <span className="text-xl font-semibold text-muted-foreground w-12 flex-shrink-0">
                      05
                    </span>
                    <AccordionTrigger className="flex-1 text-lg font-medium text-left px-2 py-0 bg-transparent shadow-none hover:bg-transparent focus:outline-none">
                      Vos solutions sont-ils adaptés aux élèves ayant des
                      besoins spécifiques ?
                    </AccordionTrigger>
                  </div>
                  <AccordionContent className="pl-14 pb-6 text-muted-foreground">
                    Oui, nos solutions sont conçues pour être inclusives et
                    adaptées aux élèves ayant des besoins spécifiques, avec des
                    fonctionnalités d'accessibilité.
                  </AccordionContent>
                </AccordionItem>
                {/* FAQ Item 6 */}
                <AccordionItem value="faq6" className="border-0">
                  <div className="flex items-center py-10">
                    <span className="text-xl font-semibold text-muted-foreground w-12 flex-shrink-0">
                      06
                    </span>
                    <AccordionTrigger className="flex-1 text-lg font-medium text-left px-2 py-0 bg-transparent shadow-none hover:bg-transparent focus:outline-none">
                      Un service de navette aéroport est-il disponible ?
                    </AccordionTrigger>
                  </div>
                  <AccordionContent className="pl-14 pb-6 text-muted-foreground">
                    Oui, nous proposons un service de navette gratuit pour
                    garantir un trajet sans encombre.
                  </AccordionContent>
                </AccordionItem>
                {/* FAQ Item 7 */}
                <AccordionItem value="faq7" className="border-0">
                  <div className="flex items-center py-10">
                    <span className="text-xl font-semibold text-muted-foreground w-12 flex-shrink-0">
                      07
                    </span>
                    <AccordionTrigger className="flex-1 text-lg font-medium text-left px-2 py-0 bg-transparent shadow-none hover:bg-transparent focus:outline-none">
                      À quelle distance se trouve FocusTech du centre-ville ?
                    </AccordionTrigger>
                  </div>
                  <AccordionContent className="pl-14 pb-6 text-muted-foreground">
                    Nous sommes situés à environ 10 minutes en voiture du
                    centre-ville.
                  </AccordionContent>
                </AccordionItem>
                {/* FAQ Item 8 */}
                <AccordionItem value="faq8" className="border-0">
                  <div className="flex items-center py-10">
                    <span className="text-xl font-semibold text-muted-foreground w-12 flex-shrink-0">
                      08
                    </span>
                    <AccordionTrigger className="flex-1 text-lg font-medium text-left px-2 py-0 bg-transparent shadow-none hover:bg-transparent focus:outline-none">
                      Y a-t-il un parking gratuit sur place ?
                    </AccordionTrigger>
                  </div>
                  <AccordionContent className="pl-14 pb-6 text-muted-foreground">
                    Oui, un parking gratuit est disponible pour tous nos
                    visiteurs.
                  </AccordionContent>
                </AccordionItem>
                {/* FAQ Item 9 */}
                <AccordionItem value="faq9" className="border-0">
                  <div className="flex items-center py-10">
                    <span className="text-xl font-semibold text-muted-foreground w-12 flex-shrink-0">
                      09
                    </span>
                    <AccordionTrigger className="flex-1 text-lg font-medium text-left px-2 py-0 bg-transparent shadow-none hover:bg-transparent focus:outline-none">
                      Comment puis-je réserver une démonstration ?
                    </AccordionTrigger>
                  </div>
                  <AccordionContent className="pl-14 pb-6 text-muted-foreground">
                    Vous pouvez réserver une démonstration via notre formulaire
                    de contact ou en nous appelant directement.
                  </AccordionContent>
                </AccordionItem>
                {/* FAQ Item 10 */}
                <AccordionItem value="faq10" className="border-0">
                  <div className="flex items-center py-10">
                    <span className="text-xl font-semibold text-muted-foreground w-12 flex-shrink-0">
                      10
                    </span>
                    <AccordionTrigger className="flex-1 text-lg font-medium text-left px-2 py-0 bg-transparent shadow-none hover:bg-transparent focus:outline-none">
                      Proposez-vous une assistance technique ?
                    </AccordionTrigger>
                  </div>
                  <AccordionContent className="pl-14 pb-6 text-muted-foreground">
                    Oui, notre équipe d’assistance technique est disponible
                    24h/24 et 7j/7.
                  </AccordionContent>
                </AccordionItem>
                {/* FAQ Item 11 */}
                <AccordionItem value="faq11" className="border-0">
                  <div className="flex items-center py-10">
                    <span className="text-xl font-semibold text-muted-foreground w-12 flex-shrink-0">
                      11
                    </span>
                    <AccordionTrigger className="flex-1 text-lg font-medium text-left px-2 py-0 bg-transparent shadow-none hover:bg-transparent focus:outline-none">
                      Quels sont les horaires d'ouverture de FocusTech ?
                    </AccordionTrigger>
                  </div>
                  <AccordionContent className="pl-14 pb-6 text-muted-foreground">
                    Nous sommes ouverts du lundi au vendredi, de 9h00 à 18h00.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
