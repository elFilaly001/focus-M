"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MClubPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <img
                  src="/LOGO/Brandbook-FOCUS-M-1.png"
                  alt="logo"
                  className="w-5 h-5"
                />
                <p className="text-sm font-semibold text-[#dc2626] uppercase tracking-wide">
                  Club
                </p>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
                Bientôt disponible
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Nous préparons quelque chose d'exceptionnel pour vous. Restez à
                l'écoute !
              </p>

              {/* Animated dots */}
              <div className="flex justify-center gap-2 mb-12">
                <motion.div
                  className="w-3 h-3 rounded-full bg-[#dc2626]"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                />
                <motion.div
                  className="w-3 h-3 rounded-full bg-[#dc2626]"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div
                  className="w-3 h-3 rounded-full bg-[#dc2626]"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-10 h-14 bg-[#dc2626] hover:bg-[#b91c1c]"
                >
                  <Link href="/education/home">Retour à l'accueil</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg px-10 h-14 border-2 border-[#dc2626] text-[#dc2626] hover:bg-[#dc2626] hover:text-white"
                >
                  <Link href="/education/contact">Nous contacter</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
