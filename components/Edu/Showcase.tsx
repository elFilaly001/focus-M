"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface ShowcaseItem {
  id: number;
  type: 'kids' | 'coworking' | 'classroom' | 'lab' | 'other';
  title: string;
  description: string;
  image: string;
  link?: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: 1,
    type: 'kids',
    title: 'Espace Enfants',
    description: 'Un environnement ludique et sécurisé pour les plus jeunes, favorisant l\'apprentissage par le jeu',
    image: '/placeholder.jpg',
  },
  {
    id: 2,
    type: 'coworking',
    title: 'Espace Coworking',
    description: 'Des postes de travail flexibles et connectés pour la collaboration et la productivité',
    image: '/placeholder.jpg',
  },
  {
    id: 3,
    type: 'classroom',
    title: 'Salle de Classe Interactive',
    description: 'Une salle équipée de technologies avancées pour un enseignement moderne et engageant',
    image: '/placeholder.jpg',
  },
];

export function ShowcaseSection() {
  return (
    <section className="py-20 bg-[var(--color-background)] relative overflow-hidden">
      {/* Festive decorations */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-pink-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-400 rounded-full opacity-10 animate-pulse delay-500"></div>
        <div className="absolute bottom-10 right-1/3 w-24 h-24 bg-green-400 rounded-full opacity-10 animate-pulse delay-1500"></div>
      </div> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Showcase des Espaces Organisés
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Découvrez nos espaces organisés et équipés pour différents besoins : enfants, coworking, salles de classe et plus encore !
          </motion.p>
        </div>

        

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            ✨ Espaces organisés et équipés pour tous vos besoins ✨
          </p>
        </motion.div>
      </div>
    </section>
  );
}