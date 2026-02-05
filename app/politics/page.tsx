import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Focus M",
  description:
    "Politique de confidentialité de Focus M - Protection et traitement des données personnelles",
};

export default function PoliticsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className=" text-black dark:text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Politique de Confidentialité
          </h1>
          <p className="text-center text-white/80 mt-4">
            Dernière mise à jour : [28/01/2026]
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 md:px-6 py-16 max-w-4xl">
        <div className="space-y-12">
          {/* Introduction */}
          <section>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                La présente politique de confidentialité a pour objectif
                d'informer les utilisateurs du site FOCUS M sur la manière dont
                leurs données personnelles sont collectées, utilisées et
                protégées.
              </p>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* 1. Responsable du traitement */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#162030] dark:text-white mb-4">
              1. Responsable du traitement
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Les données personnelles sont collectées par :
              </p>
              <div className="p-6 bg-muted rounded-lg border border-border space-y-2">
                <p>
                  <strong className="text-foreground">FOCUS M</strong>
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Adresse :</strong>{" "}
                  Rabat, Maroc
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Adresse :</strong>{" "}
                  Angle Avenue Ambassadeur Ben Aîcha, 2ᵉ étage, Casablanca
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Email :</strong> contact@focusm.ma
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Téléphone :</strong>{" "}
                  05222-44289
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-6">
                FOCUS M est responsable du traitement des données personnelles
                au sens de la Commission Nationale de Contrôle de la Protection
                des Données à Caractère Personnel (CNDP).
              </p>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* 2. Données personnelles collectées */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#162030] dark:text-white mb-4">
              2. Données personnelles collectées
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                FOCUS M peut être amené à collecter les données suivantes :
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-[#C52133] mr-2">•</span>
                  <span>Nom et prénom</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C52133] mr-2">•</span>
                  <span>Nom de l'entreprise / organisation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C52133] mr-2">•</span>
                  <span>Adresse email professionnelle</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C52133] mr-2">•</span>
                  <span>Numéro de téléphone</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C52133] mr-2">•</span>
                  <span>Fonction / poste</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C52133] mr-2">•</span>
                  <span>
                    Toute information transmise volontairement via les
                    formulaires de contact ou de demande de devis
                  </span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-6">
                La collecte de données se fait uniquement lorsque l'utilisateur
                remplit un formulaire ou contacte FOCUS M.
              </p>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* 3. Finalités de la collecte */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#162030] dark:text-white mb-4">
              3. Finalités de la collecte
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Les données personnelles collectées sont utilisées pour :
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-[#C52133] mr-2">•</span>
                  <span>Répondre aux demandes de contact ou de devis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C52133] mr-2">•</span>
                  <span>
                    Fournir des informations sur les produits et solutions Focus
                    M
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C52133] mr-2">•</span>
                  <span>Assurer le suivi commercial et la relation client</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C52133] mr-2">•</span>
                  <span>Améliorer le contenu et la qualité du site</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C52133] mr-2">•</span>
                  <span>
                    Respecter les obligations légales et réglementaires
                  </span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-6">
                FOCUS M s'engage à ne collecter que les données strictement
                nécessaires à ces finalités.
              </p>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* 4. Base légale du traitement */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#162030] dark:text-white mb-4">
              4. Base légale du traitement
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Les traitements de données reposent sur :
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-[#C52133] mr-2">•</span>
                  <span>Le consentement de l'utilisateur</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C52133] mr-2">•</span>
                  <span>
                    L'intérêt légitime de FOCUS M dans le cadre de son activité
                    B2B
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C52133] mr-2">•</span>
                  <span>Les obligations légales applicables</span>
                </li>
              </ul>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* 5. Durée de conservation des données */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#162030] dark:text-white mb-4">
              5. Durée de conservation des données
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Les données personnelles sont conservées :
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-[#C52133] mr-2">•</span>
                  <span>
                    Pendant la durée nécessaire au traitement de la demande
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C52133] mr-2">•</span>
                  <span>
                    Jusqu'à 3 ans après le dernier contact pour les prospects
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C52133] mr-2">•</span>
                  <span>
                    Conformément aux obligations légales pour les données liées
                    à la facturation ou aux contrats
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* 6. Destinataires des données */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#162030] dark:text-white mb-4">
              6. Destinataires des données
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Les données personnelles sont destinées uniquement à FOCUS M.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Elles peuvent être transmises à des prestataires techniques
                (hébergement, maintenance, outils CRM) uniquement dans le cadre
                strict de leur mission et dans le respect du CNDP.
              </p>
              <div className="mt-6 p-6 bg-[#C52133]/5 dark:bg-[#C52133]/10 rounded-lg border border-[#C52133]/20">
                <p className="text-[#C52133] font-semibold">
                  FOCUS M ne vend ni ne loue aucune donnée personnelle.
                </p>
              </div>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* 7. Sécurité des données */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#162030] dark:text-white mb-4">
              7. Sécurité des données
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                FOCUS M met en œuvre des mesures techniques et
                organisationnelles appropriées afin de garantir la sécurité, la
                confidentialité et l'intégrité des données personnelles et
                d'empêcher tout accès non autorisé.
              </p>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* 8. Droits des utilisateurs */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#162030] dark:text-white mb-4">
              8. Droits des utilisateurs
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Conformément à la réglementation en vigueur, l'utilisateur
                dispose des droits suivants :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-muted rounded-lg border border-border">
                  <p className="text-foreground font-semibold">Droit d'accès</p>
                </div>
                <div className="p-4 bg-muted rounded-lg border border-border">
                  <p className="text-foreground font-semibold">
                    Droit de rectification
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg border border-border">
                  <p className="text-foreground font-semibold">
                    Droit à l'effacement
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg border border-border">
                  <p className="text-foreground font-semibold">
                    Droit à la limitation du traitement
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg border border-border">
                  <p className="text-foreground font-semibold">
                    Droit d'opposition
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg border border-border">
                  <p className="text-foreground font-semibold">
                    Droit à la portabilité des données
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Pour exercer ces droits, l'utilisateur peut adresser sa demande
                à :
              </p>
              <div className="p-6 bg-[#162030] text-white rounded-lg">
                <p className="flex items-center gap-2">
                  <span>📧</span>
                  <span className="font-semibold">contact@focusm.ma</span>
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-6">
                Une réponse sera apportée dans un délai maximal d'un mois.
              </p>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* 9. Cookies */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#162030] dark:text-white mb-4">
              9. Cookies
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Le site FOCUS M peut utiliser des cookies strictement
                nécessaires à son bon fonctionnement ou à des fins de mesure
                d'audience.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Un bandeau de gestion des cookies permet à l'utilisateur de
                paramétrer son consentement conformément à la réglementation.
              </p>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* 10. Modification de la politique de confidentialité */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#162030] dark:text-white mb-4">
              10. Modification de la politique de confidentialité
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                FOCUS M se réserve le droit de modifier la présente politique à
                tout moment afin de garantir sa conformité avec la législation
                en vigueur.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                La version en ligne est la seule applicable.
              </p>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* 11. Contact */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#162030] dark:text-white mb-4">
              11. Contact
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Pour toute question relative à la protection des données
                personnelles, vous pouvez contacter :
              </p>
              <div className="p-6 bg-muted rounded-lg border border-border space-y-2">
                <p className="text-foreground font-bold">FOCUS M</p>
                <p className="text-muted-foreground flex items-center gap-2">
                  <span>📧</span>
                  <span>contact@focusm.ma</span>
                </p>
                <p className="text-muted-foreground flex items-center gap-2">
                  <span>📞</span>
                  <span>05222-44289</span>
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom spacing */}
        <div className="mt-16" />
      </div>
    </div>
  );
}
