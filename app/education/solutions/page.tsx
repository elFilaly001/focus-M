"use client"

import { motion } from "framer-motion"
import { 
  Users2, PencilLine, GraduationCap, 
  Video, ShieldAlert, SplitSquareVertical 
} from "lucide-react"
import { cn } from "@/lib/utils"

const eduSolutions = [
  {
    title: "20-Point Multi-Touch",
    desc: "Allows up to 20 students to interact with the board at once, perfect for group math races or collaborative drawing.",
    icon: <Users2 className="h-8 w-8 text-[#C52133]" />
  },
  {
    title: "Digital Ink Technology",
    desc: "Low-latency writing experience that feels like a real marker. Differentiates between pen, finger, and palm erase.",
    icon: <PencilLine className="h-8 w-8 text-[#C52133]" />
  },
  {
    title: "Lesson Recording & Replay",
    desc: "Capture the entire lesson including audio and screen annotations to share with students who are absent.",
    icon: <Video className="h-8 w-8 text-[#C52133]" />
  },
  {
    title: "K-12 Software Suite",
    desc: "Built-in tools for chemistry, geometry, and geography. Includes interactive timers and random student pickers.",
    icon: <GraduationCap className="h-8 w-8 text-[#C52133]" />
  },
  {
    title: "Screen Mirroring (EDLA)",
    desc: "Teachers can cast their tablet or laptop to the screen while walking around the room to maintain classroom control.",
    icon: <SplitSquareVertical className="h-8 w-8 text-[#C52133]" />
  },
  {
    title: "Antimicrobial Toughened Glass",
    desc: "7H hardness glass that is scratch-resistant and coated with silver-ion technology to kill 99% of bacteria.",
    icon: <ShieldAlert className="h-8 w-8 text-[#C52133]" />
  }
]

export default function Page() {
  return (
    <div className="flex flex-col gap-8 py-16 px-4 md:px-12">
      {eduSolutions.map((item, i) => {
        const isImageLeft = i % 2 === 0;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.85, y: 12 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ type: 'spring', stiffness: 140, damping: 18 }}
            whileHover={{ scale: 1.02, y: -6 }}
            style={{ transformOrigin: 'center' }}
            className={cn(
              "w-full p-10 md:p-14 bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-center gap-8",
              isImageLeft ? "md:flex-row" : "md:flex-row-reverse"
            )}
          >
            {/* Image placeholder */}
            <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 bg-gray-100 dark:bg-[#232b3a] rounded-2xl flex items-center justify-center mb-6 md:mb-0">
              <span className="text-gray-400 dark:text-gray-500 text-lg md:text-xl">Image</span>
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