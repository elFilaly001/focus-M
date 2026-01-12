"use client";
import { Building2, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function DiagonalSplitSection() {
  const [hoveredSide, setHoveredSide] = useState<
    "enterprise" | "education" | null
  >(null);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="w-full h-full home-bg">
        {/* Education: centered on phone, top-left on md/lg */}
        <Link
          href="/education/home"
          onMouseEnter={() => setHoveredSide("education")}
          onMouseLeave={() => setHoveredSide(null)}
          className={
            "absolute z-20 flex items-center justify-center w-48 sm:w-56 sm:h-56 md:w-64 md:h-64 " +
            "left-1/2 -translate-x-1/2 top-10 md:left-8 md:top-10 md:-translate-x-0 lg:left-[12%] lg:top-22"
          }
        >
          <div className="text-white text-center pointer-events-auto">
            <motion.div
              animate={{ scale: hoveredSide === "education" ? 1.05 : 1 }}
              transition={{ duration: 0.18 }}
            >
              <GraduationCap className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 mb-4 mx-auto" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                Éducation
              </h2>
              <p className="text-sm sm:text-base md:text-xl opacity-90 mb-3 hidden md:block">
                Solutions interactives
              </p>
              <div className="inline-flex items-center gap-2 font-bold justify-center hidden md:inline-flex">
                Découvrir <ArrowRight className="h-5 w-5" />
              </div>
            </motion.div>
          </div>
        </Link>

        {/* Enterprise: centered lower on phone, bottom-right on md/lg */}
        <Link
          href="/entreprise/home"
          onMouseEnter={() => setHoveredSide("enterprise")}
          onMouseLeave={() => setHoveredSide(null)}
          className={
            "absolute z-20 flex items-center justify-center w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 " +
            "left-1/2 -translate-x-1/2 top-[65%] md:bottom-8 md:right-8 md:left-auto md:top-auto md:-translate-x-0 lg:bottom-22 lg:right-[12%]"
          }
        >
          <div className="text-white text-center pointer-events-auto">
            <motion.div
              animate={{ scale: hoveredSide === "enterprise" ? 1.05 : 1 }}
              transition={{ duration: 0.18 }}
            >
              <Building2 className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 mb-4 mx-auto" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                Pro
              </h2>
              <p className="text-sm sm:text-base md:text-xl opacity-90 mb-3 hidden md:block">
                Solutions professionnelles
              </p>
              <div className="inline-flex items-center gap-2 font-bold justify-center hidden md:inline-flex">
                Découvrir <ArrowRight className="h-5 w-5" />
              </div>
            </motion.div>
          </div>
        </Link>
      </div>
    </section>
  );
}
