"use client"

import { de } from "date-fns/locale"
import { motion } from "framer-motion"
import { 
  Briefcase, Globe2, ShieldCheck, 
  Cpu, LayoutDashboard, Share2 
} from "lucide-react"
import Image from "next/image"

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

export default function Page() {
  return (
    <div className="flex flex-col gap-8 py-16 px-4 md:px-12">
      {corpSolutions.map((item, i) => {
        const isImageLeft = i % 2 === 0;
        return (
          <motion.div
            key={i}
            // combine slide (x) + pop (scale) entrance
            initial={{ opacity: 0, x: isImageLeft ? -80 : 80, scale: 0.92, y: 8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ type: 'spring', stiffness: 140, damping: 18 }}
            whileHover={{ scale: 1.02, y: -6, transition: { type: 'spring', stiffness: 320, damping: 12 } }}
            style={{ transformOrigin: 'center' }}
            className={
              [
                "w-full p-10 md:p-14 bg-white dark:bg-[#162030] text-[#162030] dark:text-white border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-8",
                isImageLeft ? "md:flex-row" : "md:flex-row-reverse"
              ].join(" ")
            }
          >
            {/* Unsplash image */}
            <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 bg-gray-100 dark:bg-gray-900 rounded-2xl flex items-center justify-center mb-6 md:mb-0 overflow-hidden">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                width={160}
                height={160}
                className="object-cover w-full h-full rounded-2xl"
                loading="lazy"
                sizes="(min-width: 768px) 10rem, 8rem"
                unoptimized
              />
            </div>
            {/* Icon and content */}
            <div className="flex-1">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-[#162030] dark:text-white">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  )
}