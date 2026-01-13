"use client";

import { motion } from "framer-motion";
import {
  Users2,
  PencilLine,
  GraduationCap,
  Video,
  ShieldAlert,
  SplitSquareVertical,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { HeroSolution } from "@/components/Edu/HeroSolution";
import { HowItWorks } from "@/components/ui/HowItWorks";

const eduSolutions = [
  {
    title: "20-Point Multi-Touch",
    desc: "Allows up to 20 students to interact with the board at once, perfect for group math races or collaborative drawing.",
    icon: <Users2 className="h-8 w-8 text-[#C52133]" />,
    image: {
      src: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
      alt: "Élèves utilisant un tableau interactif tactile en classe",
    },
  },
  {
    title: "Digital Ink Technology",
    desc: "Low-latency writing experience that feels like a real marker. Differentiates between pen, finger, and palm erase.",
    icon: <PencilLine className="h-8 w-8 text-[#C52133]" />,
    image: {
      src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80",
      alt: "Main écrivant sur un écran tactile avec un stylet",
    },
  },
  {
    title: "Lesson Recording & Replay",
    desc: "Capture the entire lesson including audio and screen annotations to share with students who are absent.",
    icon: <Video className="h-8 w-8 text-[#C52133]" />,
    image: {
      src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      alt: "Enregistrement d'une leçon sur écran interactif",
    },
  },
  {
    title: "K-12 Software Suite",
    desc: "Built-in tools for chemistry, geometry, and geography. Includes interactive timers and random student pickers.",
    icon: <GraduationCap className="h-8 w-8 text-[#C52133]" />,
    image: {
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80",
      alt: "Logiciel éducatif affiché sur un écran tactile en classe",
    },
  },
  {
    title: "Screen Mirroring (EDLA)",
    desc: "Teachers can cast their tablet or laptop to the screen while walking around the room to maintain classroom control.",
    icon: <SplitSquareVertical className="h-8 w-8 text-[#C52133]" />,
    image: {
      src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
      alt: "Enseignant projetant une tablette sur un écran tactile en classe",
    },
  },
  {
    title: "Antimicrobial Toughened Glass",
    desc: "7H hardness glass that is scratch-resistant and coated with silver-ion technology to kill 99% of bacteria.",
    icon: <ShieldAlert className="h-8 w-8 text-[#C52133]" />,
    image: {
      src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      alt: "Gros plan sur un écran tactile en verre renforcé dans une salle de classe",
    },
  },
];

export default function Page() {
  return (
    <>
      <div className="mb-8">
        <HeroSolution />
      </div>
    </>
  );
}
