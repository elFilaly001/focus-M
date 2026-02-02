"use client"

import { motion } from "framer-motion"
import React from "react"

interface ContactHeroProps {
  className?: string
}

export function ContactHero({ className }: ContactHeroProps) {
  return (
    <section className={"py-16 relative " + (className || "")}> 
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <img
          src="/modern-interactive-display-tech-setup.jpg"
          alt="FAQ background"
          className="w-full h-full object-cover object-center opacity-40"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/50 dark:bg-background/70" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-34">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left: Headline, Description, Contact Info */}
          <motion.div
            className="flex flex-col justify-center h-full"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.h1
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
            >
              Vous avez des questions,<br />Nous avons les réponses
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            >
              Découvrez des expériences uniques, conçues pour vous immerger au cœur de la destination. Des histoires à vivre pleinement.
            </motion.p>
            <motion.div
              className="hidden sm:grid mt-12 sm:mt-16 md:mt-24 grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            >
              <div>
                <h3 className="font-semibold text-[var(--color-primary)] mb-2">Adresse</h3>
                <p>Focus M Siège<br />123 Avenue de l'Innovation<br />Tech City, 10001</p>
                <p className="mt-2">Lun–Ven | 09:00–18:00</p>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-primary)] mb-2">Réseaux sociaux</h3>
                <p>Instagram<br />LinkedIn<br />Facebook<br />X (Twitter)</p>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-primary)] mb-2">Email</h3>
                <p>contact@focusm.ma</p>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-primary)] mb-2">Téléphone</h3>
                <p>+1 234 567 8901</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form Card */}
          <motion.div
            className="bg-muted/60 rounded-2xl shadow-lg border border-border p-4 sm:p-6 md:p-8 max-w-xl w-full mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          >
            <motion.h2
              className="font-display text-2xl font-bold mb-2 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
            >
              Dites-nous ce dont vous avez besoin
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
            >
              Notre équipe est prête à vous accompagner dans chaque détail, petit ou grand.
            </motion.p>
            <motion.form
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Prénom" className="rounded-full border px-4 py-2 bg-background/80 dark:bg-[#080c13] focus:outline-none focus:ring-2 focus:ring-primary w-full" />
                <input type="text" placeholder="Nom" className="rounded-full border px-4 py-2 bg-background/80 dark:bg-[#080c13] focus:outline-none focus:ring-2 focus:ring-primary w-full" />
                <input type="text" placeholder="Pays" className="rounded-full border px-4 py-2 bg-background/80 dark:bg-[#080c13] focus:outline-none focus:ring-2 focus:ring-primary w-full" />
                <input type="text" placeholder="Téléphone" className="rounded-full border px-4 py-2 bg-background/80 dark:bg-[#080c13] focus:outline-none focus:ring-2 focus:ring-primary w-full" />
              </div>
              <input type="email" placeholder="Adresse e-mail" className="rounded-full border px-4 py-2 bg-background/80 dark:bg-[#080c13] focus:outline-none focus:ring-2 focus:ring-primary w-full" />
              <div>
                <label className="block text-sm font-medium mb-2">Type de demande</label>
                <div className="flex flex-wrap gap-2">
                  <button type="button" className="rounded-full border px-4 py-2 bg-background/80 dark:bg-[#080c13] focus:outline-none focus:ring-2 focus:ring-primary data-[active=true]:bg-primary data-[active=true]:text-white" data-active="false">Réservation</button>
                  <button type="button" className="rounded-full border px-4 py-2 bg-background/80 dark:bg-[#080c13] focus:outline-none focus:ring-2 focus:ring-primary data-[active=true]:bg-primary data-[active=true]:text-white" data-active="true">Général</button>
                  <button type="button" className="rounded-full border px-4 py-2 bg-background/80 dark:bg-[#080c13] focus:outline-none focus:ring-2 focus:ring-primary data-[active=true]:bg-primary data-[active=true]:text-white" data-active="false">Entreprise</button>
                  <button type="button" className="rounded-full border px-4 py-2 bg-background/80 dark:bg-[#080c13] focus:outline-none focus:ring-2 focus:ring-primary data-[active=true]:bg-primary data-[active=true]:text-white" data-active="false">Autres</button>
                </div>
              </div>
              <textarea placeholder="Message" rows={4} className="rounded-2xl border px-4 py-2 bg-background/80 dark:bg-[#080c13] focus:outline-none focus:ring-2 focus:ring-primary w-full resize-none" />
              <div className="flex items-center gap-2">
                <input type="checkbox" id="offers" className="accent-primary" />
                <label htmlFor="offers" className="text-sm text-muted-foreground">Je souhaite recevoir des offres et actualités exclusives</label>
              </div>
              <button type="submit" className="w-full rounded-full border border-primary bg-primary text-white py-2 font-semibold hover:bg-[#991b1b] transition">Envoyer</button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
