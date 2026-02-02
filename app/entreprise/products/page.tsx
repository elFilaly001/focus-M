"use client"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

const products = [
  {
    id: "i3touch-x2",
    name: "I3TOUCH X2",
    image: "https://app.wadi.dev/api/media/image?path=stores%2F44%2Fpages%2F23694%2Fmicrosoftteams-image-109-1.png_01711362035.png",
    description: "Écran tactile interactif haute performance"
  },
  {
    id: "i3touch-ultra",
    name: "I3TOUCH ULTRA",
    image: "https://app.wadi.dev/api/media/image?path=stores%2F44%2Fpages%2F23694%2F105u-rounded-33.png_01711362055.png",
    description: "Format ultra-large pour collaboration immersive"
  },
  {
    id: "i3touch-x-one",
    name: "I3TOUCH X-ONE",
    subtitle: "ÉCRAN TACTILE INTERACTIF",
    image: "https://app.wadi.dev/api/media/image?path=stores%2F44%2Fpages%2F23694%2Fx-one_front-cover.png_01711362099.png",
    description: "Solution professionnelle polyvalente"
  },
  {
    id: "i3touch-e-one",
    name: "I3TOUCH E-ONE",
    subtitle: "INFRAROUGE TOUCH",
    image: "https://app.wadi.dev/api/media/image?path=stores%2F44%2Fpages%2F23694%2Fe-one_front.png_01711364514.png",
    description: "Conçu pour l'éducation"
  },
  {
    id: "i3sixty-2",
    name: "I3SIXTY 2",
    subtitle: "PAPERBOARD NUMÉRIQUE INTERACTIF",
    image: "https://app.wadi.dev/api/media/image?path=stores%2F44%2Fpages%2F23694%2Fi3sixty-2-2.png_01711364538.png",
    description: "Paperboard numérique mobile"
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold text-[#dc2626] uppercase tracking-wide mb-4">
                Nos Produits
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
                Découvrez notre gamme
              </h1>
              <p className="text-xl text-muted-foreground">
                Des écrans tactiles interactifs pour chaque besoin professionnel et éducatif
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
                >
                  {/* Product Image */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="relative w-full h-full">
                        {/* Placeholder for product image */}
                        <div className="w-full h-full  rounded-lg flex items-center justify-center">
                          <Image src={product.image} alt={product.name}  width={400} height={300} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 text-center">
                    <h3 className="font-bold text-2xl mb-2 text-foreground">
                      {product.name}
                    </h3>
                    {product.subtitle && (
                      <p className="text-sm text-muted-foreground mb-4">
                        {product.subtitle}
                      </p>
                    )}
                    
                    <Button 
                      asChild 
                      variant="outline" 
                      className="mt-4 border-[#dc2626] text-[#dc2626] hover:bg-[#dc2626] hover:text-white transition-all"
                    >
                      <Link href={`/education/products/${product.id}`}>
                        VOIR LE PRODUIT
                      </Link>
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
              Besoin de conseils ?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Notre équipe d'experts est là pour vous aider à choisir la solution adaptée
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
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}