"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface ShowcaseItem {
  id: number;
  type: 'guest' | 'product' | 'event' | 'other';
  title: string;
  description: string;
  image: string;
  link?: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: 1,
    type: 'guest',
    title: 'Invité Spécial',
    description: 'Rencontre avec un expert en éducation digitale',
    image: '/placeholder.jpg',
  },
  {
    id: 2,
    type: 'product',
    title: 'Nouveau Produit',
    description: 'Découvrez notre dernière innovation',
    image: '/placeholder.jpg',
  },
  {
    id: 3,
    type: 'event',
    title: 'Événement à Venir',
    description: 'Webinaire sur les technologies éducatives',
    image: '/placeholder.jpg',
  },
];

export function ShowcaseSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Showcase de la Semaine
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Découvrez nos temps forts de la semaine : invités, produits innovants et événements spéciaux.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    {item.type === 'guest' ? 'Invité' : item.type === 'product' ? 'Produit' : item.type === 'event' ? 'Événement' : 'Autre'}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {item.description}
                </p>
                {item.link && (
                  <button className="text-primary hover:text-primary/80 font-semibold transition-colors">
                    En savoir plus →
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            Contenu mis à jour chaque semaine
          </p>
        </motion.div>
      </div>
    </section>
  );
}