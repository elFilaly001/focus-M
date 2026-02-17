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
            "absolute z-20 flex flex-col items-center justify-center " +
            "w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 " +
            "left-1/2 -translate-x-1/2 top-10 " +
            "md:left-8 md:top-10 md:-translate-x-0 " +
            "lg:left-[12%] lg:top-16 xl:left-[15%] xl:top-20"
          }
        >
          <div className="text-white text-center pointer-events-auto w-full">
            <motion.div
              animate={{ scale: hoveredSide === "education" ? 1.05 : 1 }}
              transition={{ duration: 0.18 }}
              className="flex flex-col items-center"
            >
              <GraduationCap className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mb-4" style={{ color: '#dc2626' }} />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-[#dc2626]">
                Éducation
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 mb-3 hidden md:block text-[#dc2626]">
                Solutions interactives
              </p>
              <div className="inline-flex items-center gap-2 font-bold justify-center hidden md:inline-flex text-base lg:text-lg text-[#dc2626]">
                Découvrir <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
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
            "absolute z-20 flex flex-col items-center justify-center " +
            "w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 " +
            "left-1/2 -translate-x-1/2 top-[65%] " +
            "md:bottom-8 md:right-8 md:left-auto md:top-auto md:-translate-x-0 " +
            "lg:bottom-16 lg:right-[12%] xl:bottom-20 xl:right-[15%]"
          }
        >
          <div className="text-white text-center pointer-events-auto w-full">
            <motion.div
              animate={{ scale: hoveredSide === "enterprise" ? 1.05 : 1 }}
              transition={{ duration: 0.18 }}
              className="flex flex-col items-center"
            >
              <Building2 className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mb-4" style={{ color: '#273b5d' }} />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-[#273b5d]">
                Entreprise
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 mb-3 hidden md:block text-[#273b5d]">
                Solutions professionnelles
              </p>
              <div className="inline-flex items-center gap-2 font-bold justify-center hidden md:inline-flex text-base lg:text-lg text-[#273b5d]">
                Découvrir <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
            </motion.div>
          </div>
        </Link>
      </div>
    </section>
  );
}
