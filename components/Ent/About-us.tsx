"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Globe, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/use-countup";

export function AboutIntroSection() {
  return (
    <section className="py-20 bg-[var(--color-background)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wide mb-4">
                À propos de Focus-M
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-[var(--color-foreground)]">
                Votre partenaire en solutions interactives pour l’entreprise
              </h2>
              {/* <p className="text-lg text-[var(--color-muted-foreground)] mb-6 leading-relaxed">
                Depuis plus de 15 ans, Focus-M accompagne les entreprises et
                organisations dans leur transformation digitale. Notre expertise
                en écrans interactifs et solutions collaboratives allie
                innovation technologique, performance opérationnelle et services
                personnalisés.
              </p>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 leading-relaxed">
                De la salle de classe à la salle de réunion, nous créons des
                expériences interactives qui inspirent, engagent et transforment
                la façon dont vous collaborez.
              </p>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 leading-relaxed">
                Nous vous accompagnons sur l’ensemble du projet : conseil, vente
                ou location longue durée des équipements, installation,
                formation des utilisateurs et support technique, pour des
                solutions fiables, évolutives et adaptées à vos enjeux métiers.
              </p> */}

              <p className="text-lg text-[var(--color-muted-foreground)] mb-6 leading-relaxed">
                Depuis plus de 20 ans, Focus-M accompagne les entreprises et organisations dans leur transformation digitale. Notre expertise en écrans interactifs et solutions collaboratives associe innovation technologique, performance opérationnelle et accompagnement sur mesure.
              </p>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 leading-relaxed">
                Des espaces de réunion aux environnements de travail collaboratifs, salle de conseil, salle de contrôle nous concevons des expériences interactives qui favorisent l’engagement, la collaboration et l’efficacité collective.
              </p>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 leading-relaxed">
                Nous intervenons à chaque étape du projet conseil, vente ou location longue durée, installation, formation des utilisateurs et support technique  pour déployer des solutions fiables, évolutives et parfaitement alignées avec vos enjeux métiers. 
              </p>
              <p className="text-lg text-[var(--color-muted-foreground)] mb-8 leading-relaxed">
                Choisir les solutions Focus-M, c’est faire le choix d’une gestion intelligente et centralisée de vos équipements interactifs. Grâce à nos plateformes de pilotage à distance, vous gardez une visibilité complète sur votre parc : supervision en temps réel, paramétrage, mises à jour, maintenance préventive et reporting détaillé. Vous optimisez ainsi la performance de vos espaces, anticipez les besoins techniques et maîtrisez vos coûts, tout en garantissant une continuité d’usage fluide pour vos équipes. Focus-M vous offre bien plus qu’une technologie : un contrôle total, une exploitation simplifiée et une prise de décision éclairée.
              </p>
            </motion.div>

            {/* Right Column - Stats & Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8 mt-32">
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.7 }}
                  className="bg-gradient-to-br from-[var(--color-card-light)] to-[var(--color-card)] dark:from-[var(--color-card)] dark:to-[var(--color-card)] rounded-xl p-6 border border-border"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="h-6 w-6 text-[var(--color-primary)]" />
                    {(() => {
                      const { value, ref } = useCountUp({
                        end: 20,
                        duration: 1200,
                        startOnView: true,
                      });
                      return (
                        <div
                          className="text-3xl font-bold text-[var(--color-primary)]"
                          ref={ref}
                        >
                          {value}+{" "}
                        </div>
                      );
                    })()}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Années d'expertise
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.7, delay: 0.08 }}
                  className="bg-gradient-to-br from-[var(--color-card-light)] to-[var(--color-card)] dark:from-[var(--color-card)] dark:to-[var(--color-card)] rounded-xl p-6 border border-border"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="h-6 w-6 text-[var(--color-primary)]" />
                    {(() => {
                      const { value, ref } = useCountUp({
                        end: 500000,
                        duration: 1200,
                        startOnView: true,
                      });
                      return (
                        <div
                          className="text-3xl font-bold text-[var(--color-primary)]"
                          ref={ref}
                        >
                          {value}+{" "}
                        </div>
                      );
                    })()}
                  </div>
                  <p className="text-sm text-muted-foreground">Solutions installées</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.7, delay: 0.16 }}
                  className="bg-gradient-to-br from-[var(--color-card-light)] to-[var(--color-card)] dark:from-[var(--color-card)] dark:to-[var(--color-card)] rounded-xl p-6 border border-border"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Globe className="h-6 w-6 text-[var(--color-primary)]" />
                    {(() => {
                      const { value, ref } = useCountUp({
                        end: 1000,
                        duration: 1200,
                        startOnView: true,
                      });
                      return (
                        <div
                          className="text-3xl font-bold text-[var(--color-primary)]"
                          ref={ref}
                        >
                          {value}+{" "}
                        </div>
                      );
                    })()}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Entreprises accompagnées
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.7, delay: 0.24 }}
                  className="bg-gradient-to-br from-[var(--color-card-light)] to-[var(--color-card)] dark:from-[var(--color-card)] dark:to-[var(--color-card)] rounded-xl p-6 border border-border"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="h-6 w-6 text-[var(--color-primary)]" />
                    {(() => {
                      const { value, ref } = useCountUp({
                        end: 100,
                        duration: 1200,
                        startOnView: true,
                      });
                      return (
                        <div
                          className="text-3xl font-bold text-[var(--color-primary)]"
                          ref={ref}
                        >
                          {value}%
                        </div>
                      );
                    })()}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Taux de satisfaction
                  </p>
                </motion.div>
              </div>

              {/* Key Points */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45 }}
                  className="flex items-start gap-3"
                >
                  <div className="h-6 w-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 dark:text-white">
                      Expertise reconnue
                    </h4>
                    {/* <p className="text-sm text-muted-foreground dark:text-slate-300">
                        Leaders dans l'intégration de solutions tactiles innovantes
                      </p> */}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: 0.06 }}
                  className="flex items-start gap-3"
                >
                  <div className="h-6 w-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 dark:text-white">
                      Support 24/7
                    </h4>
                    {/* <p className="text-sm text-muted-foreground dark:text-slate-300">
                        Une équipe dédiée à votre service à tout moment
                      </p> */}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: 0.12 }}
                  className="flex items-start gap-3"
                >
                  <div className="h-6 w-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 dark:text-white">
                      Installation gratuite
                    </h4>
                    {/* <p className="text-sm text-muted-foreground dark:text-slate-300">
                        Formation complète et accompagnement personnalisé
                      </p> */}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
