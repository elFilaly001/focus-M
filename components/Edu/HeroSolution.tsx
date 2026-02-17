"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSolutionProps {
  className?: string;
}

const features = [
  "Auditer vos besoins pédagogiques et votre infrastructure actuelle.",
  "Fournir des solutions interactives adaptées (Vente ou Location)",
  "Installer et configurer l'ensemble de vos équipements sur site.",
  "Former vos équipes enseignantes pour une prise en main immédiate.",
  "Assurer l’adaptabilité des solutions sur tous les types d’écrans interactifs.",
];

export function HeroSolution({ className }: HeroSolutionProps) {
  return (
    <section
      className={cn(
        "w-full flex flex-col-reverse md:flex-row items-stretch justify-between overflow-hidden min-h-screen pb-6 md:pb-10 bg-white dark:bg-[#080c13]",
        className,
      )}
    >
      {/* Left: Content */}
      <motion.div
        className="flex-1 px-4 sm:px-6 md:pl-32 md:pr-12 pt-8 md:py-20 flex flex-col justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 18,
          duration: 0.7,
        }}
      >
        {/* <motion.span
          className="text-xs sm:text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wide mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Salle de réunion intelligente
        </motion.span> */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#162030] dark:text-white mb-3 sm:mb-4 leading-tight"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.6 }}
        >
          Nos solutions interactives au service de la pédagogie
        </motion.h1>
        {/* <motion.p
          className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg mb-5 sm:mb-6 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Focus-M accompagne les écoles et universités dans leur transformation
          numérique. Nous proposons des tableaux et écrans interactifs
          disponibles à la vente ou en location longue durée, intégrés au sein
          de solutions globales qui simplifient l’enseignement et placent
          l’élève au cœur de l’apprentissage. Nos dispositifs s’adaptent à vos
          contraintes pédagogiques, techniques et budgétaires, tout en
          garantissant une expérience d’usage fluide et durable.
        </motion.p> */}
        <motion.p
          className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg mb-5 sm:mb-6 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Focus M accélère la transformation numérique des établissements
          scolaires, universités et centres de formation. Nous déployons des
          écrans interactifs de dernière génération, spécialement conçus pour
          enrichir l'expérience d'apprentissage et moderniser vos salles de
          classe.
        </motion.p>
        <motion.p
          className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg mb-5 sm:mb-6 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Accessibles à l'achat ou en location longue durée, nos solutions
          incluent un service complet : livraison, installation sur site,
          formation et maintenance. Nous garantissons un matériel fiable et
          performant, adapté à vos contraintes budgétaires et techniques.
        </motion.p>
        <motion.ul
          className="mb-6 sm:mb-8 space-y-2 sm:space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.13, delayChildren: 0.38 },
            },
          }}
        >
          {features.map((f, i) => (
            <motion.li
              key={i}
              className="flex items-center gap-2 text-[#162030] dark:text-gray-200 text-sm sm:text-base md:text-lg"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <CheckCircle className="w-5 h-5 text-[#C52133] flex-shrink-0" />{" "}
              {f}
            </motion.li>
          ))}
        </motion.ul>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Link href="/education/demo">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#C52133] text-white hover:bg-[#a81a29] transition-colors font-semibold rounded-xl px-8 py-3 shadow-md"
            >
              Réserver une démo
            </Button>
          </Link>
        </motion.div>
      </motion.div>
      {/* Right: Image */}
      <motion.div
        className="flex-1 relative w-full h-64 sm:h-80 md:h-auto md:w-1/2 mb-6 md:mb-0"
        initial={{ opacity: 0, x: 40, y: 0 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 18,
          duration: 0.8,
        }}
      >
        <Image
          src="/focus-m-visual-11.webp"
          alt="Salle de réunion moderne avec écran tactile Focus-M"
          fill
          className="object-cover object-center w-full h-full"
          priority
        />
      </motion.div>
    </section>
  );
}
