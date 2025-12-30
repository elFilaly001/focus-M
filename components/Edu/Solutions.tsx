"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, Sparkles, GraduationCap, Heart, Lightbulb, ImageIcon } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const solutions = [
  {
    icon: BookOpen,
    title: "Salles de classe",
    description: "Transformez vos cours en expériences interactives captivantes. Dessinez, annotez et collaborez en temps réel avec vos étudiants sur un écran tactile intuitif.",
    features: ["Annotations en direct", "Applications éducatives", "Sauvegarde de leçons"],
    imagePlaceholder: "/modern-tech-display-monitor.jpg"
  },
  {
    icon: Users,
    title: "Espaces collaboratifs",
    description: "Encouragez le travail d'équipe avec des écrans tactiles multi-utilisateurs. Parfait pour les projets de groupe, les ateliers et les activités collaboratives.",
    features: ["Multi-touch 20 points", "Partage d'écran", "Travail simultané"],
    imagePlaceholder: "/ultrawide-tech-monitor-display.jpg"
  },
  {
    icon: GraduationCap,
    title: "Amphithéâtres",
    description: "Captez l'attention de grands groupes avec des écrans haute résolution. Idéal pour les présentations, conférences et cours magistraux interactifs.",
    features: ["4K Ultra HD", "Grand format", "Visibilité optimale"],
    imagePlaceholder: "/modern-tech-display-monitor.jpg"
  }
]

const benefits = [
  {
    icon: Heart,
    title: "Engagement +92%",
    description: "Les étudiants restent concentrés et participent activement"
  },
  {
    icon: Lightbulb,
    title: "Apprentissage adaptatif",
    description: "S'adapte à tous les styles d'apprentissage et niveaux"
  },
  {
    icon: Sparkles,
    title: "Formation incluse",
    description: "Support complet pour les enseignants, formation de 2h offerte"
  }
]

export function SolutionsEducation() {
  return (
    <section className="py-20 bg-[var(--color-background)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wide mb-4">
              Solutions Éducatives
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-[var(--color-foreground)]">
              Des solutions pour chaque espace d'apprentissage
            </h2>
            <p className="text-xl text-[var(--color-muted-foreground)] max-w-3xl mx-auto">
              De la maternelle à l'université, nos écrans tactiles transforment 
              chaque leçon en expérience interactive mémorable
            </p>
          </motion.div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
                <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-[var(--color-card)] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border"
              >
                {/* Solution Image */}
                <div className="relative aspect-video bg-[var(--color-card-light)] overflow-hidden">
                  <img
                    src={solution.imagePlaceholder}
                    alt={solution.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-[var(--color-card-light)] dark:bg-[var(--color-card)] flex items-center justify-center">
                      <solution.icon className="h-6 w-6 text-[var(--color-primary)]" />
                    </div>
                    <h3 className="font-semibold text-xl text-[var(--color-foreground)]">{solution.title}</h3>
                  </div>
                  
                  <p className="text-[var(--color-muted-foreground)] mb-4 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {solution.features.map((feature) => (
                      <span 
                          key={feature}
                          className="text-xs bg-[var(--color-card-light)] dark:bg-[var(--color-card)] text-[var(--color-primary)] px-3 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benefits Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--color-card)] rounded-2xl p-8 shadow-sm border border-border"
          >
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-[var(--color-foreground)]">{benefit.title}</h4>
                    <p className="text-sm text-[var(--color-muted-foreground)]">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" className="bg-[var(--color-primary)] hover:opacity-90 text-white">
              <Link href="/products">
                Découvrir nos solutions éducatives
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}