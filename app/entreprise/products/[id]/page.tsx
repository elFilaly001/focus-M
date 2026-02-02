"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useParams } from "next/navigation"

// Product data (in real app, this would come from API/database)
const productData: Record<string, any> = {
  "i3touch-x-one": {
    name: "I3TOUCH X-ONE",
    tagline: "Performance interactive",
    description: "Découvrez l'I3TOUCH X-ONE, l'écran I3TOUCH le plus performant du marché. Interactif à la dernière génération avec une interface intuitive et un logiciel d'exploitation facile à utiliser qui rend l'écran accessible à tous. Avec un rapport qualité-prix exceptionnel, l'I3TOUCH X-ONE représente l'investissement idéal pour une entreprise qui veut aller plus loin en favorisant l'efficacité du travail et une meilleure collaboration.",
    image: "https://app.wadi.dev/api/media/image?path=stores%2F44%2Fpages%2F23694%2Fmicrosoftteams-image-109-1.png_01711362035.png",
    features: [
      {
        title: "Plus qu'une expérience manuscrite",
        description: "Écrivez facilement sur l'écran tactile à l'aide du doigt ou du stylet tactile ergonomique et personnalisez vos annotations grâce aux multiples options disponibles : épaisseur, couleur, gomme...",
        image: "/education-interactive-touchscreen.jpg"
      },
      {
        title: "Branchez-vous sur les possibilités",
        description: "Utilisez tous les ports et câbles de l'écran I3TOUCH et connectez-vous avec ou sans fil aux outils UML ou SD avec les outils informatiques que vous utilisez déjà. De plus, avec l'accessoire OPS externe, nous proposons également avec OPS une performance exceptionnelle de votre PC et tout dans la même barre d'application.",
        image: "/modern-office-collaboration-technology.jpg"
      },
      {
        title: "Capacités multitâches",
        description: "Avec l'outil de découpage de l'écran et de configuration, une réunion interactive peut être configurée en deux ou trois espaces de travail simultanément. Cet outil permet de combiner plusieurs sources sur l'écran en les configurant, en échelleant et en positionnant indépendamment pour construire votre scénario de visioconférence idéal et gagner une meilleure visibilité.",
        image: "/ultrawide-98-inch-interactive-display.jpg"
      }
    ],
    specs: [
      "Écran tactile 4K Ultra HD",
      "Multi-touch 20 points",
      "Android intégré",
      "Connectivité complète (HDMI, USB, WiFi)",
      "Hautparleurs intégrés",
      "Caméra HD optionnelle"
    ],
    accessories: [
      {
        name: "DCAMERA PRO",
        description: "Caméra 4K Ultra HD avec suivi automatique et microphones intégrés pour une visioconférence parfaite",
        image: "/placeholder.jpg"
      },
      {
        name: "DROM",
        description: "Module OPS haute performance pour transformer votre écran en station de travail complète",
        image: "/placeholder.jpg"
      },
      {
        name: "EUROM",
        description: "Extension de mémoire et processeur pour des performances accrues",
        image: "/placeholder.jpg"
      },
      {
        name: "DCOMPUTER",
        description: "Ordinateur intégré pour une solution tout-en-un",
        image: "/placeholder.jpg"
      },
      {
        name: "ELVIFT",
        description: "Support électrique ajustable en hauteur",
        image: "/placeholder.jpg"
      },
      {
        name: "I3SLIDE",
        description: "Support mobile pour déplacer facilement votre écran",
        image: "/placeholder.jpg"
      }
    ]
  },
}

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params?.id as string
  const product = productData[productId] || productData["i3touch-x-one"]

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-foreground">
                  {product.tagline}
                </h1>
                <h2 className="text-2xl font-semibold text-[#dc2626] mb-6">
                  {product.name}
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-[#dc2626] hover:bg-[#b91c1c] text-white">
                    Réserver une démo
                  </Button>
                  <Button size="lg" variant="outline">
                    Fiche produit
                  </Button>
                </div>
              </motion.div>

              {/* Right Column - Product Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-2xl shadow-2xl flex items-center justify-center">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-2xl" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {product.features.map((feature: any, index: number) => (
        <section 
          key={index}
          className={`py-20 ${index % 2 === 0 ? 'bg-muted/30' : 'bg-background'}`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}>
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={index % 2 === 1 ? 'lg:col-start-2' : ''}
                >
                  <div className="aspect-video bg-muted rounded-2xl overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}
                >
                  <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Intelligence Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Intelligence adaptative
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  L'innovation d'un capteur de mouvement et de luminosité adaptative 
                  votre expérience utilisateur à toutes les conditions d'éclairage d'une salle.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-black rounded-2xl"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-green-950 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="aspect-square bg-green-800/30 rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-9xl">🌿</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Respect de l'environnement et de votre budget
                </h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  Un système de contrôle d'affichage permet à l'écran d'ajuster sa luminosité en fonction de la luminosité environnante et de réduire considérablement la consommation d'énergie et de l'impact environnemental.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Optimisé par la suite logicielle I3STUDIO
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                I3STUDIO est une suite logicielle puissante d'une analytique pointue qui travaille pour votre écran. Optimisé pour les écrans I3TOUCH, le système d'exploitation Android permet de naviguer facilement dans les paramètres du système et vos applications, d'effectuer des communications vers votre réseau commercial avec un niveau de sécurité élevé et de personnaliser votre écran en guide général de dépannement.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "📊", name: "I3LEARNHUB", description: "Plateforme d'apprentissage interactive" },
                { icon: "📝", name: "ANNOTATE", description: "Annotation et collaboration en temps réel" },
                { icon: "🎯", name: "PRESENTER SUITE 10", description: "Présentations professionnelles interactives" }
              ].map((software, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-8 bg-card border border-border rounded-2xl"
                >
                  <div className="text-5xl mb-4">{software.icon}</div>
                  <h4 className="font-bold text-xl mb-2 text-foreground">{software.name}</h4>
                  <p className="text-sm text-muted-foreground">{software.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Compléter la solution
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.accessories.map((accessory: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <span className="text-4xl">📦</span>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-xl mb-2 text-foreground">{accessory.name}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{accessory.description}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      En savoir plus
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#dc2626] via-[#b91c1c] to-[#991b1b] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Intéressé par {product.name} ?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Contactez notre équipe pour une démonstration personnalisée
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-10 h-14">
                <Link href="/demo">Réserver une démo</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-10 h-14 border-2 border-white text-white hover:bg-white hover:text-[#dc2626] bg-transparent"
              >
                <Link href="/contact">Obtenir une devis</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}