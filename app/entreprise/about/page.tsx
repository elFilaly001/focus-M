import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Target, Users, Lightbulb, Award } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "À propos - Focus M",
  description: "Découvrez Focus M et notre mission pour révolutionner les écrans interactifs",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              À propos de <span className="text-[#dc2626]">Focus M</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Nous façonnons l'avenir de la collaboration interactive avec des écrans de pointe qui
              permettent aux entreprises et aux éducateurs du monde entier de travailler mieux ensemble.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img src="/modern-office-collaboration-technology.jpg" alt="Notre mission" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="font-display text-4xl font-bold mb-6">Notre mission</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Chez Focus M, nous pensons que la collaboration doit être simple, inspirante et accessible à tous.
                Notre mission est de réduire les obstacles entre les idées et leur réalisation grâce à des
                technologies interactives innovantes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous créons des solutions qui s'intègrent naturellement à votre flux de travail, permettant aux équipes
                de se connecter, de créer et d'innover sans que la complexité technique ne soit un frein.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Nos valeurs fondamentales</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Les principes qui guident tout ce que nous faisons</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="h-16 w-16 rounded-full bg-[#fef2f2] flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-[#dc2626]" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Repousser sans cesse les limites pour proposer des technologies de nouvelle génération
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <div className="h-16 w-16 rounded-full bg-[#fef2f2] flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-[#dc2626]" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-muted-foreground">Concevoir des outils qui rapprochent les personnes et renforcent le travail d'équipe</p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <div className="h-16 w-16 rounded-full bg-[#fef2f2] flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-[#dc2626]" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Simplicité</h3>
              <p className="text-muted-foreground">Rendre les technologies puissantes accessibles et faciles à utiliser</p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <div className="h-16 w-16 rounded-full bg-[#fef2f2] flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-[#dc2626]" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Excellence</h3>
              <p className="text-muted-foreground">Fournir des produits de qualité qui dépassent les attentes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl font-bold mb-6 text-center">Notre histoire</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Focus M est né d'une constatation simple : les salles de réunion et les salles de classe traditionnelles
                n'évoluaient pas au rythme des façons réelles de travailler et d'apprendre. Nous avons vu des équipes
                coincées avec des outils déconnectés, des enseignants limités par des technologies obsolètes et des
                heures perdues à résoudre des problèmes techniques.
              </p>
              <p>
                Nos fondateurs, une équipe d'ingénieurs et d'enseignants, ont voulu créer quelque chose de meilleur. Pas
                seulement un nouvel écran, mais un écosystème complet pensé pour la collaboration moderne. Chaque
                fonctionnalité, interaction et intégration a été conçue pour réduire les frictions et favoriser le flux.
              </p>
              <p>
                Aujourd'hui, Focus M équipe des milliers de salles de réunion, d'espaces pédagogiques et d'environnements
                collaboratifs dans le monde. Mais ce n'est qu'un début : notre équipe continue d'innover en écoutant
                ses clients et en repoussant les limites du possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#dc2626] to-[#991b1b] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Prêt à transformer votre espace&nbsp;?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Découvrez l'avenir de la collaboration grâce à une démo personnalisée.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link href="/demo">Planifiez votre démo</Link>
          </Button>
        </div>
      </section>

    </div>
  )
}
