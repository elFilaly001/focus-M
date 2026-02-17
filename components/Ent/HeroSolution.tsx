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
  "Auditer votre infrastructure réseau et vos besoins fonctionnels.",
  "Déployer et intégrer les équipements de visioconférence sur site.",
  "Former vos collaborateurs à l'usage des nouveaux outils.",
  "Garantir la disponibilité de vos salles grâce au support technique.",
];

export function HeroSolution({ className }: HeroSolutionProps) {
  return (
    <section
      className={cn(
        "w-full flex flex-col-reverse md:flex-row items-stretch justify-between overflow-hidden min-h-screen pb-6 md:pb-10 dark:bg-[#080c13]",
        className
      )}
    >
      {/* Left: Content */}
      <motion.div
        className="flex-1 px-4 sm:px-6 md:pl-32 md:pr-12 pt-8 md:py-20 flex flex-col justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 18,
          duration: 0.7,
        }}
      >
        <motion.span
          className="text-xs sm:text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wide mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Salle de réunion intelligente
        </motion.span>
        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#162030] dark:text-white mb-3 sm:mb-4 leading-tight"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Des solutions professionnelles pour donner une nouvelle dimension à
          vos projets.
        </motion.h1>
        <motion.p
          className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg mb-5 sm:mb-6 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.5 }}
          viewport={{ once: true }}
        >
         Adoptez une méthodologie éprouvée pour la digitalisation de vos salles. De l'audit initial au maintien en condition opérationnelle, nous gérons l'intégralité de votre projet audiovisuel pour une sérénité totale.
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
              initial={{ opacity: 0, x: -20 }}
              animate="visible"
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-5 h-5 text-[#C52133] flex-shrink-0" />{" "}
              {f}
            </motion.li>
          ))}
        </motion.ul>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href="/entreprise/demo">
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
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 18,
          duration: 0.8,
        }}
      >
        <Image
          src="/focus-m-visual-77.webp"
          alt="Salle de réunion moderne avec écran tactile Focus-M"
          fill
          className="object-cover object-center w-full h-full"
          priority
        />
      </motion.div>
    </section>
  );
}
