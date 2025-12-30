"use client"

import { motion } from "framer-motion"
import { 
  Users2, PencilLine, GraduationCap, 
  Video, ShieldAlert, SplitSquareVertical 
} from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const eduSolutions = [
  {
    title: "20-Point Multi-Touch",
    desc: "Allows up to 20 students to interact with the board at once, perfect for group math races or collaborative drawing.",
    icon: <Users2 className="h-8 w-8 text-[#C52133]" />, 
    image: {
      src: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
      alt: "Élèves utilisant un tableau interactif tactile en classe"
    }
  },
  {
    title: "Digital Ink Technology",
    desc: "Low-latency writing experience that feels like a real marker. Differentiates between pen, finger, and palm erase.",
    icon: <PencilLine className="h-8 w-8 text-[#C52133]" />, 
    image: {
      src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80",
      alt: "Main écrivant sur un écran tactile avec un stylet"
    }
  },
  {
    title: "Lesson Recording & Replay",
    desc: "Capture the entire lesson including audio and screen annotations to share with students who are absent.",
    icon: <Video className="h-8 w-8 text-[#C52133]" />, 
    image: {
      src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      alt: "Enregistrement d'une leçon sur écran interactif"
    }
  },
  {
    title: "K-12 Software Suite",
    desc: "Built-in tools for chemistry, geometry, and geography. Includes interactive timers and random student pickers.",
    icon: <GraduationCap className="h-8 w-8 text-[#C52133]" />, 
    image: {
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80",
      alt: "Logiciel éducatif affiché sur un écran tactile en classe"
    }
  },
  {
    title: "Screen Mirroring (EDLA)",
    desc: "Teachers can cast their tablet or laptop to the screen while walking around the room to maintain classroom control.",
    icon: <SplitSquareVertical className="h-8 w-8 text-[#C52133]" />, 
    image: {
      src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
      alt: "Enseignant projetant une tablette sur un écran tactile en classe"
    }
  },
  {
    title: "Antimicrobial Toughened Glass",
    desc: "7H hardness glass that is scratch-resistant and coated with silver-ion technology to kill 99% of bacteria.",
    icon: <ShieldAlert className="h-8 w-8 text-[#C52133]" />, 
    image: {
      src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      alt: "Gros plan sur un écran tactile en verre renforcé dans une salle de classe"
    }
  }
]

export default function Page() {
  return (
    <div className="px-8 md:px-32">
      <div className="mb-2">
        <span className="text-xs sm:text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wide mb-3 sm:mb-4 block">Solutions interactives</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#162030] dark:text-white mb-3 sm:mb-4 leading-tight">Des solutions pour chaque salle de classe</h2>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-2xl mb-2">Découvrez nos fonctionnalités phares pour dynamiser l'apprentissage, encourager la collaboration et garantir la sécurité dans les environnements éducatifs.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
        {eduSolutions.map((item, i) => (
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
  )
}