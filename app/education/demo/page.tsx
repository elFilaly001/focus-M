import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Users } from "lucide-react";

export const metadata = {
  title: "Réserver une Démo - FocusTech",
  description:
    "Planifiez une démonstration personnalisée des écrans interactifs FocusTech",
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Réservez Votre <span className="text-[#dc2626]">Démo</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Découvrez FocusTech en direct avec une démonstration personnalisée
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
                Planifiez Votre Démo
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Prénom *
                    </label>
                    <Input placeholder="Jean" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nom *
                    </label>
                    <Input placeholder="Dupont" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Professionnel *
                  </label>
                  <Input
                    type="email"
                    placeholder="jean@entreprise.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Numéro de Téléphone *
                  </label>
                  <Input type="tel" placeholder="+33 6 12 34 56 78" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nom de l'Entreprise *
                  </label>
                  <Input placeholder="Votre Entreprise" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Secteur d'Activité
                  </label>
                  <Input placeholder="ex: Éducation, Entreprise, Santé" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nombre d'Écrans Nécessaires
                  </label>
                  <Input type="number" placeholder="1" min="1" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Date Préférée
                  </label>
                  <Input type="date" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Informations Complémentaires
                  </label>
                  <Textarea
                    placeholder="Parlez-nous de votre projet, vos besoins spécifiques ou vos questions..."
                    rows={4}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#dc2626] hover:bg-[#991b1b] text-white"
                >
                  Demander une Démo
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  * Champs obligatoires. Nous vous contacterons sous 24 heures
                  pour confirmer votre démo.
                </p>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold mb-6">
                  À Quoi S'Attendre
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Nos spécialistes produits vous guideront à travers une
                  démonstration complète des capacités de FocusTech,
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
                      Une présentation structurée pour comprendre en profondeur les fonctionnalités et les usages de la solution.
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
                      Une démonstration adaptée à votre secteur, à vos enjeux métiers et à votre environnement de travail.
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
                      Des créneaux de démonstration disponibles en ligne ou sur site, selon vos contraintes et disponibilités.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted rounded-xl p-8 border border-border">
                <h3 className="font-display text-xl font-bold mb-4">
                  Pendant Votre Démo
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-[#dc2626] mr-2">•</span>
                    <span>
                      Voir la technologie tactile interactive en action
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#dc2626] mr-2">•</span>
                    <span>
                      Explorer les fonctionnalités de collaboration et les
                      intégrations logicielles
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#dc2626] mr-2">•</span>
                    <span>
                      Découvrir les options de déploiement et de support
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#dc2626] mr-2">•</span>
                    <span>
                      Obtenir des réponses à toutes vos questions techniques
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#dc2626] mr-2">•</span>
                    <span>
                      Recevoir un devis personnalisé pour votre organisation
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
