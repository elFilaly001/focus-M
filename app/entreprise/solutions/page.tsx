"use client"

import { motion } from "framer-motion"
import { 
  Briefcase, Globe2, ShieldCheck, 
  Cpu, LayoutDashboard, Share2 
} from "lucide-react"
import Image from "next/image"
import { HeroSolution } from "@/components/Ent/HeroSolution"
import { HowItWorks } from "@/components/ui/HowItWorks"

const corpSolutions = [
  {
    title: "Diffusion sans fil BYOD",
    desc: "Entrez et présentez. Prend en charge AirPlay, Chromecast et Miracast avec écran partagé en 4 pour comparer les données.",
    icon: <Share2 className="h-8 w-8 text-[#C52133]" />, 
    image: {
      src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
      alt: "Main utilisant un écran tactile en salle de réunion"
    }
  },
  {
    title: "Sécurité d'entreprise (SSO)",
    desc: "Connexion sécurisée via Microsoft Azure ou Google Workspace. Efface automatiquement le cache et l'historique après chaque réunion.",
    icon: <ShieldCheck className="h-8 w-8 text-[#C52133]" />, 
    image: {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
      alt: "Doigt touchant un écran tactile pour la sécurité"
    }
  },
  {
    title: "Prêt pour les réunions hybrides",
    desc: "Caméra 4K intégrée et matrice de 8 micros avec suppression du bruit par IA pour des appels Zoom ou Teams professionnels.",
    icon: <Globe2 className="h-8 w-8 text-[#C52133]" />, 
    image: {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
      alt: "Appel vidéo sur écran tactile en salle de réunion"
    }
  },
  {
    title: "Gestion centralisée des appareils",
    desc: "Les équipes IT peuvent pousser des mises à jour, surveiller la consommation d'énergie et envoyer des alertes d'urgence à tous les écrans depuis un tableau de bord centralisé.",
    icon: <LayoutDashboard className="h-8 w-8 text-[#C52133]" />, 
    image: {
      src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      alt: "Tableau de bord de gestion sur écran tactile"
    }
  },
  {
    title: "Emplacement OPS pour modules PC",
    desc: "Le module PC Windows enfichable permet à l'écran d'exécuter des applications de bureau complètes sans ordinateur portable externe.",
    icon: <Cpu className="h-8 w-8 text-[#C52133]" />, 
    image: {
      src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80",
      alt: "Module PC connecté à un écran tactile"
    }
  },
  {
    title: "Professionnalisme en salle de réunion",
    desc: "Bords ultra-fins et technologie de verre collé qui élimine l'espace entre l'affichage et la surface tactile.",
    icon: <Briefcase className="h-8 w-8 text-[#C52133]" />, 
    image: {
      src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
      alt: "Salle de réunion moderne avec écran tactile et participants"
    }
  }
]

export default function SolutionsPage() {
  return (
    <>
      <div className="mb-8">
        <HeroSolution />
      </div>
      <HowItWorks className="mb-10 px-4 md:px-12" />
      <div className="px-8 md:px-32">
        <div className="mb-2">
          <span className="text-xs sm:text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wide mb-3 sm:mb-4 block">Solutions interactives</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#162030] dark:text-white mb-3 sm:mb-4 leading-tight">Des solutions pour chaque espace professionnel</h2>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-2xl mb-2">Découvrez nos fonctionnalités phares pour transformer vos réunions, renforcer la sécurité et optimiser la gestion de vos écrans tactiles en entreprise.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
        {corpSolutions.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 70, damping: 20, duration: 0.6 }}
            whileHover={{ scale: 1.01, y: -2 }}
            style={{ transformOrigin: 'center' }}
            className={
              "w-full p-0 md:p-0 bg-white dark:bg-[#162030] border border-gray-100 dark:border-gray-900 rounded-xl shadow transition-shadow flex flex-col items-stretch gap-0"
            }
          >
            {/* Unsplash image */}
            <div className="w-full h-48 md:h-56 rounded-t-xl overflow-hidden relative">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                className="object-cover w-full h-full rounded-t-xl"
                loading="lazy"
                sizes="(min-width: 768px) 100vw, 100vw"
                unoptimized
              />
            </div>
            {/* Icon and content */}
            <div className="flex-1 text-center flex flex-col items-center px-6 md:px-8 py-6 md:py-8">
              <div className="mb-2 flex justify-center">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-[#162030] dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-normal">{item.desc}</p>
            </div>
          </motion.div>
        ))}
        </div>
      </div>
    </>
  )
}