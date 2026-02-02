import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | Focus M",
  description:
    "Mentions légales du site Focus M - Informations juridiques et conditions d'utilisation",
};

export default function MentionLegalPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="text-black dark:text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Mentions Légales
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 md:px-6 py-16 max-w-4xl">
        <div className="space-y-12">
          {/* Informations générales */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#162030] dark:text-white mb-4">
              Informations générales
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Le présent site internet{" "}
                <strong className="text-foreground">www.focus-m.ma</strong> est
                édité par <strong className="text-foreground">FOCUS M</strong>,
                société spécialisée dans les solutions d'affichage
                professionnel, écrans tactiles et dispositifs interactifs à
                destination des entreprises, établissements éducatifs et
                institutions.
              </p>
              <div className="mt-6 space-y-2 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Raison sociale :</strong>{" "}
                  FOCUS M
                </p>
                <p>
                  <strong className="text-foreground">Siège social :</strong>{" "}
                  [Rabat – Maroc]
                </p>
                <p>
                  <strong className="text-foreground">Adresse e-mail :</strong>{" "}
                  contact@focusm.ma
                </p>
                <p>
                  <strong className="text-foreground">Téléphone :</strong>{" "}
                  05222-44289
                </p>
              </div>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#162030] dark:text-white mb-4">
              Propriété intellectuelle
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                L'ensemble du contenu présent sur le site{" "}
                <strong className="text-foreground">www.focus-m.ma</strong>,
                incluant, de façon non limitative, les textes, images,
                graphismes, logos, icônes, vidéos, ainsi que la structure du
                site, est la propriété exclusive de FOCUS M ou de ses
                partenaires.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Toute reproduction, représentation, modification, publication ou
                adaptation, totale ou partielle, de tout ou partie des éléments
                du site, quel que soit le moyen ou le procédé utilisé, est
                interdite sauf autorisation écrite préalable de FOCUS M.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Toute exploitation non autorisée du site ou de l'un quelconque
                des éléments qu'il contient pourra être considérée comme
                constitutive d'une contrefaçon et poursuivie conformément aux
                dispositions légales en vigueur au Maroc.
              </p>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* Données personnelles */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#162030] dark:text-white mb-4">
              Données personnelles
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                FOCUS M s'engage à garantir la confidentialité des informations
                personnelles collectées via son site internet, conformément à la
                loi n°09-08 relative à la protection des personnes physiques à
                l'égard du traitement des données à caractère personnel.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Les données recueillies via les formulaires de contact, demandes
                d'information ou de devis sont utilisées exclusivement à des
                fins de communication, de suivi commercial et d'amélioration des
                services proposés par FOCUS M.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Les utilisateurs disposent d'un droit d'accès, de rectification
                et de suppression de leurs données personnelles.
              </p>
              <div className="mt-6 p-6 bg-muted rounded-lg border border-border">
                <p className="text-sm font-semibold text-foreground mb-2">
                  Pour exercer ces droits, vous pouvez contacter :
                </p>
                <p className="text-muted-foreground">contact@focusm.ma</p>
              </div>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* Cookies */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#162030] dark:text-white mb-4">
              Cookies
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Le site FOCUS M peut être amené à utiliser des cookies afin de
                faciliter la navigation, mesurer la fréquentation du site et
                améliorer l'expérience utilisateur.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                L'utilisateur peut configurer son navigateur afin de refuser les
                cookies ou être informé de leur dépôt.
              </p>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* Limitation de responsabilité */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#162030] dark:text-white mb-4">
              Limitation de responsabilité
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                FOCUS M s'efforce d'assurer au mieux l'exactitude et la mise à
                jour des informations diffusées sur son site. Toutefois, FOCUS M
                ne saurait être tenue responsable des erreurs, omissions ou de
                tout dommage direct ou indirect résultant de l'utilisation des
                informations présentes sur le site.
              </p>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* Liens hypertextes */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#162030] dark:text-white mb-4">
              Liens hypertextes
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Le site{" "}
                <strong className="text-foreground">www.focus-m.ma</strong> peut
                contenir des liens vers des sites tiers.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                FOCUS M n'exerce aucun contrôle sur ces sites et décline toute
                responsabilité quant à leur contenu ou à leurs pratiques.
              </p>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* Droit applicable */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#162030] dark:text-white mb-4">
              Droit applicable
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Les présentes mentions légales sont régies par le droit
                marocain.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                En cas de litige, et à défaut de résolution amiable, les
                tribunaux compétents du ressort du siège social de FOCUS M
                seront seuls compétents.
              </p>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* Contact */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#162030] dark:text-white mb-4">
              Contact
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Pour toute question relative aux présentes mentions légales ou à
                l'utilisation du site, vous pouvez contacter :
              </p>
              <div className="mt-6 p-6 bg-[#C52133]/5 dark:bg-[#C52133]/10 rounded-lg border border-[#C52133]/20">
                <p className="text-[#C52133] dark:text-[#C52133] font-semibold">
                  contact@focusm.ma
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
