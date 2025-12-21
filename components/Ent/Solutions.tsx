"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Video, PresentationIcon, Building2, TrendingUp, Shield, ImageIcon } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const solutions = [
  {
    icon: Users,
    title: "Salles de réunion",
    description: "Transformez vos réunions avec des écrans interactifs 4K. Partage d'écran sans fil, annotations en temps réel et intégration avec vos outils de visioconférence.",
    features: ["Partage sans fil", "4K Ultra HD", "Multi-touch 20 points"],
    imagePlaceholder: "meeting-room-touchscreen.jpg"
  },
  {
    icon: PresentationIcon,
    title: "Espaces de formation",
    description: "Créez des sessions de formation interactives et engageantes. Idéal pour l'onboarding, le développement des compétences et les présentations clients.",
    features: ["Contenu interactif", "Enregistrement sessions", "Intégration LMS"],
    imagePlaceholder: "training-room-presentation.jpg"
  },
  {
    icon: Building2,
    title: "Halls d'accueil",
    description: "Impressionnez vos visiteurs avec des écrans tactiles informatifs. Affichage dynamique, navigation intuitive et image de marque professionnelle.",
    features: ["Affichage dynamique", "Interface personnalisée", "Gestion à distance"],
    imagePlaceholder: "reception-area-display.jpg"
  }
]

const benefits = [
  {
    icon: TrendingUp,
    title: "Productivité +40%",
    description: "Réduisez le temps de réunion et augmentez la collaboration"
  },
  {
    icon: Video,
    title: "Intégration totale",
    description: "Compatible Teams, Zoom, Google Meet et plus"
  },
  {
    icon: Shield,
    title: "Sécurité enterprise",
    description: "Chiffrement de bout en bout et conformité garantie"
  }
]

export function SolutionsEnterprise() {
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
              Solutions Entreprise
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-[var(--color-foreground)]">
              Des solutions pour chaque espace professionnel
            </h2>
            <p className="text-xl text-[var(--color-muted-foreground)] max-w-3xl mx-auto">
              De la salle de réunion au hall d'accueil, nos écrans tactiles transforment 
              votre environnement de travail en espace collaboratif moderne
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
                {/* Image Placeholder */}
                <div className="relative aspect-video bg-[var(--color-card-light)] overflow-hidden">
                  {/* Placeholder content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--color-muted-foreground)]">
                    <ImageIcon className="h-12 w-12 mb-2 opacity-50" />
                    <span className="text-xs font-mono opacity-50">{solution.imagePlaceholder}</span>
                  </div>
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
                Découvrir tous nos produits
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}