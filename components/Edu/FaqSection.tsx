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
                      Quels sont les horaires d’ouverture de Focus-M ?
                    </AccordionTrigger>
                  </div>
                  <AccordionContent className="pl-14 pb-6 text-muted-foreground">
                    Notre showroom est ouvert du lundi au vendredi, de 9h à 18h, ainsi que le samedi de manière exceptionnelle. En dehors de ces horaires, vous pouvez nous contacter via notre formulaire en ligne.
                  </AccordionContent>
                </AccordionItem>
                {/* FAQ Item 2 */}
                <AccordionItem value="faq2" className="border-0">
                  <div className="flex items-center py-10">
                    <span className="text-xl font-semibold text-muted-foreground w-12 flex-shrink-0">
                      02
                    </span>
                    <AccordionTrigger className="flex-1 text-lg font-medium text-left px-2 py-0 bg-transparent shadow-none hover:bg-transparent focus:outline-none">
                      Puis-je visiter vos locaux sans rendez-vous ?
                    </AccordionTrigger>
                  </div>
                  <AccordionContent className="pl-14 pb-6 text-muted-foreground">
                    Non. Les visites se font uniquement sur rendez-vous.
                  </AccordionContent>
                </AccordionItem>
                {/* FAQ Item 3 */}
                <AccordionItem value="faq3" className="border-0">
                  <div className="flex items-center py-10">
                    <span className="text-xl font-semibold text-muted-foreground w-12 flex-shrink-0">
                      03
                    </span>
                    <AccordionTrigger className="flex-1 text-lg font-medium text-left px-2 py-0 bg-transparent shadow-none hover:bg-transparent focus:outline-none">
                      Proposez-vous des démonstrations sur site ou à distance ?
                    </AccordionTrigger>
                  </div>
                  <AccordionContent className="pl-14 pb-6 text-muted-foreground">
                    Nous pouvons venir dans votre établissement pour vous présenter nos solutions et accessoires principaux et vous montrer leur utilisation en contexte, ou vous accueillir dans notre showroom pour découvrir et tester toute notre gamme de produits.
                  </AccordionContent>
                </AccordionItem>
                {/* FAQ Item 4 */}
                <AccordionItem value="faq4" className="border-0">
                  <div className="flex items-center py-10">
                    <span className="text-xl font-semibold text-muted-foreground w-12 flex-shrink-0">
                      04
                    </span>
                    <AccordionTrigger className="flex-1 text-lg font-medium text-left px-2 py-0 bg-transparent shadow-none hover:bg-transparent focus:outline-none">
                      Les solutions sont-elles adaptées aux établissements publics et privés ?
                    </AccordionTrigger>
                  </div>
                  <AccordionContent className="pl-14 pb-6 text-muted-foreground">
                    Oui, nos solutions pédagogiques et intelligentes conviennent aussi bien aux établissements publics qu’aux établissements privés.
                  </AccordionContent>
                </AccordionItem>
                {/* FAQ Item 5 */}
                <AccordionItem value="faq5" className="border-0">
                  <div className="flex items-center py-10">
                    <span className="text-xl font-semibold text-muted-foreground w-12 flex-shrink-0">
                      05
                    </span>
                    <AccordionTrigger className="flex-1 text-lg font-medium text-left px-2 py-0 bg-transparent shadow-none hover:bg-transparent focus:outline-none">
                      Vos solutions sont-elles adaptées aux élèves ayant des besoins spécifiques ?
                    </AccordionTrigger>
                  </div>
                  <AccordionContent className="pl-14 pb-6 text-muted-foreground">
                    Oui, nos solutions prennent en compte les besoins éducatifs spécifiques et favorisent l’accessibilité et l’inclusion.
                  </AccordionContent>
                </AccordionItem>
                {/* FAQ Item 6 */}
                <AccordionItem value="faq6" className="border-0">
                  <div className="flex items-center py-10">
                    <span className="text-xl font-semibold text-muted-foreground w-12 flex-shrink-0">
                      06
                    </span>
                    <AccordionTrigger className="flex-1 text-lg font-medium text-left px-2 py-0 bg-transparent shadow-none hover:bg-transparent focus:outline-none">
                      Les enseignants peuvent-ils prendre en main les solutions facilement ?
                    </AccordionTrigger>
                  </div>
                  <AccordionContent className="pl-14 pb-6 text-muted-foreground">
                    Oui, nos outils sont intuitifs et faciles à utiliser, même sans compétences techniques avancées.
                  </AccordionContent>
                </AccordionItem>
                {/* FAQ Item 7 */}
                <AccordionItem value="faq7" className="border-0">
                  <div className="flex items-center py-10">
                    <span className="text-xl font-semibold text-muted-foreground w-12 flex-shrink-0">
                      07
                    </span>
                    <AccordionTrigger className="flex-1 text-lg font-medium text-left px-2 py-0 bg-transparent shadow-none hover:bg-transparent focus:outline-none">
                      Proposez-vous un accompagnement pour l’installation des solutions ?
                    </AccordionTrigger>
                  </div>
                  <AccordionContent className="pl-14 pb-6 text-muted-foreground">
                    Oui, nous assurons un accompagnement complet, de l’installation à la mise en service.
                  </AccordionContent>
                </AccordionItem>
                {/* FAQ Item 8 */}
                <AccordionItem value="faq8" className="border-0">
                  <div className="flex items-center py-10">
                    <span className="text-xl font-semibold text-muted-foreground w-12 flex-shrink-0">
                      08
                    </span>
                    <AccordionTrigger className="flex-1 text-lg font-medium text-left px-2 py-0 bg-transparent shadow-none hover:bg-transparent focus:outline-none">
                      Proposez-vous une formation pour les équipes pédagogiques après l’installation ?
                    </AccordionTrigger>
                  </div>
                  <AccordionContent className="pl-14 pb-6 text-muted-foreground">
                    Oui, nous accompagnons vos équipes pédagogiques avec une formation complète pour assurer une prise en main facile et efficace.
                  </AccordionContent>
                </AccordionItem>
                {/* FAQ Item 9 */}
                <AccordionItem value="faq9" className="border-0">
                  <div className="flex items-center py-10">
                    <span className="text-xl font-semibold text-muted-foreground w-12 flex-shrink-0">
                      09
                    </span>
                    <AccordionTrigger className="flex-1 text-lg font-medium text-left px-2 py-0 bg-transparent shadow-none hover:bg-transparent focus:outline-none">
                      Proposez-vous une assistance technique ?
                    </AccordionTrigger>
                  </div>
                  <AccordionContent className="pl-14 pb-6 text-muted-foreground">
                    Oui, notre équipe assure une assistance technique réactive en cas de besoin.
                  </AccordionContent>
                </AccordionItem>
                {/* FAQ Item 10 */}
                <AccordionItem value="faq10" className="border-0">
                  <div className="flex items-center py-10">
                    <span className="text-xl font-semibold text-muted-foreground w-12 flex-shrink-0">
                      10
                    </span>
                    <AccordionTrigger className="flex-1 text-lg font-medium text-left px-2 py-0 bg-transparent shadow-none hover:bg-transparent focus:outline-none">
                      Disposez-vous d’un service après-vente ?
                    </AccordionTrigger>
                  </div>
                  <AccordionContent className="pl-14 pb-6 text-muted-foreground">
                    Oui, nous disposons d’un service après-vente dédié pour assurer le suivi et la maintenance de nos solutions.
                  </AccordionContent>
                </AccordionItem>
                {/* FAQ Item 11 */}
                <AccordionItem value="faq11" className="border-0">
                  <div className="flex items-center py-10">
                    <span className="text-xl font-semibold text-muted-foreground w-12 flex-shrink-0">
                      11
                    </span>
                    <AccordionTrigger className="flex-1 text-lg font-medium text-left px-2 py-0 bg-transparent shadow-none hover:bg-transparent focus:outline-none">
                      Les produits Focus-M sont-ils garantis ?
                    </AccordionTrigger>
                  </div>
                  <AccordionContent className="pl-14 pb-6 text-muted-foreground">
                    Oui, tous nos produits bénéficient d’une garantie fiable, pour assurer aux établissements une utilisation sereine et sans souci.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq11" className="border-0">
                  <div className="flex items-center py-10">
                    <span className="text-xl font-semibold text-muted-foreground w-12 flex-shrink-0">
                      12
                    </span>
                    <AccordionTrigger className="flex-1 text-lg font-medium text-left px-2 py-0 bg-transparent shadow-none hover:bg-transparent focus:outline-none">
                      Les solutions sont-elles compatibles avec les logiciels éducatifs existants ?
                    </AccordionTrigger>
                  </div>
                  <AccordionContent className="pl-14 pb-6 text-muted-foreground">
                    Oui, nos écrans interactifs sont compatibles avec les logiciels pédagogiques couramment utilisés, incluant les logiciels de mathématiques, de sciences, de gestion de classe ou d’apprentissage en ligne, pour une intégration facile dans vos pratiques pédagogiques.
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
