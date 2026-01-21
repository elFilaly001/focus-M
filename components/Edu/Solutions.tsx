"use client";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Users,
  Sparkles,
  GraduationCap,
  Heart,
  Lightbulb,
  Activity,
  Sliders,
  Headphones,
  ImageIcon,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const solutions = [
  {
    icon: BookOpen,
    title: "Salles de Classe Connectées",
    description:
      "Transformez vos cours en expériences interactives captivantes. Dessinez, annotez et collaborez en temps réel avec vos étudiants sur un écran tactile intuitif.",
    features: [
      "Annotations en direct",
      "Applications éducatives",
      "Sauvegarde de leçons",
    ],
    imagePlaceholder: "/Solution home/Edu/img1.png",
  },
  {
    icon: Users,
    title: "Espaces Interactifs",
    description:
      "Encouragez le travail d'équipe avec des écrans tactiles multi-utilisateurs. Parfait pour les projets de groupe, les ateliers et les activités collaboratives.",
    features: ["Multi-touch 20 points", "Partage d'écran", "Travail simultané"],
    imagePlaceholder: "/Solution home/Edu/img2.png",
  },
  {
    icon: GraduationCap,
    title: "Amphithéâtres 3.0",
    description:
      "Captez l'attention de grands groupes avec des écrans haute résolution. Idéal pour les présentations, conférences et cours magistraux interactifs.",
    features: ["4K Ultra HD", "Grand format", "Visibilité optimale"],
    imagePlaceholder: "/Solution home/Edu/img3.png",
  },
];

const benefits = [
  {
    icon: Activity,
    title: "Expérience d’apprentissage engageante ",
    description:
      "Stimulez l’attention et la participation grâce à des espaces interactifs",
  },
  {
    icon: Sliders,
    title: "Solutions pédagogiques flexibles",
    description:
      "Répondez aux besoins pédagogiques avec des dispositifs flexibles et inclusifs.",
  },
  {
    icon: Headphones,
    title: "Accompagnement professionnel dédié ",
    description:
      "Formez les équipes pédagogiques et bénéficiez d’un support technique dédié.",
  },
];

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
              Solutions éducatives innovantes
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-[var(--color-foreground)]">
              Repenser l’apprentissage, repenser l’espace
            </h2>
            <p className="text-xl text-[var(--color-muted-foreground)] max-w-3xl mx-auto">
              Découvrez comment nos solutions transforment chaque environnement éducatif en une expérience interactive immersive, pensée pour tous les niveaux et tous les usages.
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
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border aspect-[4/5]"
              >
                <img
                  src={solution.imagePlaceholder}
                  alt={solution.title}
                  className="absolute inset-0 object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient Overlay - Always visible for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  {/* Top Section - Icon & Title */}
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <solution.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-xl text-white leading-tight">
                      {solution.title}
                    </h3>
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
                    <h4 className="font-semibold text-lg mb-1 text-[var(--color-foreground)]">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-[var(--color-muted-foreground)]">
                      {benefit.description}
                    </p>
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
            <Button
              asChild
              size="lg"
              className="bg-[var(--color-primary)] hover:opacity-90 text-white"
            >
              <Link href="/education/solutions">
                Découvrir nos solutions éducatives
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
