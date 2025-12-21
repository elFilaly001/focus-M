"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function FinalCTASection() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-[#dc2626] via-[#b91c1c] to-[#7f1d1d] text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >

            {/* Headline */}
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Prêt à transformer
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
                votre espace de travail ?
              </span>
            </h2>

            {/* Description */}
            <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
              Des milliers d'entreprises et établissements font déjà confiance à nos solutions interactives
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-[#dc2626] hover:bg-white/90 text-lg px-10 h-16 font-semibold group shadow-xl"
              >
                <Link href="/demo">
                  Demander une démo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-10 h-16 border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold"
              >
                <Link href="/contact">Contactez-nous</Link>
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="h-6 w-6 text-white/80" />
                <div className="text-4xl md:text-5xl font-bold">1000+</div>
              </div>
              <p className="text-white/70 text-sm md:text-base">Clients satisfaits</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="h-6 w-6 text-white/80" />
                <div className="text-4xl md:text-5xl font-bold">98%</div>
              </div>
              <p className="text-white/70 text-sm md:text-base">Taux de satisfaction</p>
            </div>

            <div className="text-center col-span-2 md:col-span-1">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="h-6 w-6 text-white/80" />
                <div className="text-4xl md:text-5xl font-bold">50+</div>
              </div>
              <p className="text-white/70 text-sm md:text-base">Pays dans le monde</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}