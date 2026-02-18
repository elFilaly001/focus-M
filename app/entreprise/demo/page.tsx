import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Users } from "lucide-react";
import { DemoForm } from "@/components/Ent/DemoForm";

export const metadata = {
  title: "Réservez une Démo - Focus M",
  description:
    "Planifiez une démonstration personnalisée des écrans interactifs Focus M",
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Réservez votre <span className="text-[#dc2626]">démo</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Découvrez FocusM en personne avec une démonstration personnalisée
              adaptée à vos besoins.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div>
              <h2 className="font-display text-3xl font-bold mb-6">
                Planifiez votre démo
              </h2>
              <DemoForm />
              <p className="text-sm text-muted-foreground text-center mt-4">
                * Champs obligatoires. Nous vous contacterons dans les 24
                heures pour confirmer votre démo.
              </p>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold mb-6">
                  À quoi vous attendre
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Nos spécialistes produits vous guideront à travers une
                  démonstration complète des capacités de Focus M,
                  personnalisée selon votre cas d'usage spécifique.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-[#dc2626]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      Une session de formation dédiée
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Une présentation structurée pour comprendre en profondeur
                      les fonctionnalités et les usages de la solution.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-[#dc2626]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      Une expérience personnalisée
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Une démonstration adaptée à votre secteur, à vos enjeux
                      métiers et à votre environnement de travail.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-[#dc2626]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      Un calendrier flexible
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Des créneaux de démonstration disponibles en ligne
ou au showroom, selon vos contraintes et disponibilités.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted rounded-xl p-8 border border-border">
                <h3 className="font-display text-xl font-bold mb-4">
                  Pendant votre démo
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-[#dc2626] mr-2">•</span>
                    <span>
                      Découvrez la technologie tactile interactive en action
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#dc2626] mr-2">•</span>
                    <span>
                      Explorez les fonctionnalités de collaboration et les
                      intégrations logicielles
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#dc2626] mr-2">•</span>
                    <span>
                      Apprenez-en plus sur les options de déploiement et de
                      support
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#dc2626] mr-2">•</span>
                    <span>
                      Obtenez des réponses à toutes vos questions techniques
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#dc2626] mr-2">•</span>
                    <span>
                      Recevez un devis personnalisé pour votre organisation
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
