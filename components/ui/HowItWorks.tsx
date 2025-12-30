"use client"

import { MonitorSmartphone, LayoutDashboard, ShieldCheck, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface Step {
  title: string
  desc: string
  icon: React.ReactNode
}

const steps: Step[] = [
  {
    title: "Analyse & Conseil Personnalisé",
    desc: "Notre équipe évalue vos besoins, l'espace et l'usage pour proposer la solution d'écran tactile la plus adaptée à votre entreprise.",
    icon: <MonitorSmartphone className="h-7 w-7 text-[#C52133]" />,
  },
  {
    title: "Conception & Proposition sur Mesure",
    desc: "Nous concevons un système interactif sur mesure, intégrant vos outils collaboratifs et exigences techniques, puis vous présentons une proposition claire.",
    icon: <LayoutDashboard className="h-7 w-7 text-[#C52133]" />,
  },
  {
    title: "Installation & Sécurisation",
    desc: "Nos techniciens certifiés installent les écrans tactiles, assurent la configuration réseau et la sécurité (SSO, gestion centralisée, etc.), et gèrent les autorisations nécessaires.",
    icon: <ShieldCheck className="h-7 w-7 text-[#C52133]" />,
  },
  {
    title: "Activation & Formation",
    desc: "Après installation, nous validons le bon fonctionnement, formons vos équipes à l'utilisation optimale et vous accompagnons pour une expérience fluide et durable.",
    icon: <Zap className="h-7 w-7 text-[#C52133]" />,
  },
]

export interface HowItWorksProps {
  className?: string
}

export function HowItWorks({ className }: HowItWorksProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <motion.section
      ref={ref}
      className={cn(
        "w-full flex flex-col md:flex-row items-start gap-8 md:gap-0 py-8 sm:py-10 md:py-20",
        className
      )}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Left side: Title & intro */}
      <motion.div
        className="md:w-1/2 flex flex-col justify-center px-4 sm:px-6 md:px-12 mb-6 md:mb-0"
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <span className="text-xs sm:text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wide mb-3 sm:mb-4">Comment ça marche ?</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#162030] dark:text-white mb-3 sm:mb-4 leading-tight">Comment nos écrans tactiles<br />transforment votre entreprise</h2>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-lg">Découvrez les 4 étapes clés pour intégrer des écrans interactifs intelligents dans vos espaces professionnels. Simplifiez la collaboration, la sécurité et l'efficacité grâce à notre expertise.</p>
      </motion.div>
      {/* Right side: Steps */}
      <motion.div
        className="md:w-1/2 grid grid-cols-1 gap-10 sm:gap-14 md:gap-20 px-4 sm:px-6 md:px-0"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-4 sm:gap-5"
            variants={itemVariants}
          >
            <div className="flex-shrink-0 mt-1">{step.icon}</div>
            <div>
              <div className="font-semibold text-[#162030] dark:text-white mb-1 text-sm sm:text-base">Étape {i + 1}</div>
              <h3 className="font-bold text-base sm:text-lg mb-2 text-[#C52133]">{step.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
