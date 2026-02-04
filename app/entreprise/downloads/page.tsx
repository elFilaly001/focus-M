import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { FileText, Download, Book, Video } from "lucide-react"

export const metadata = {
  title: "Téléchargements - Focus M",
  description: "Téléchargez les manuels produits, fiches techniques et logiciels",
}

export default function DownloadsPage() {
  return (
    <div className="min-h-screen">
      {/* Section Héros */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Téléchargements & <span className="text-[#dc2626]">Ressources</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Accédez aux manuels produits, fiches techniques, mises à jour logicielles et supports de formation.
            </p>
          </div>
        </div>
      </section>

      {/* Section Téléchargements */}
      <section className="py-20 bg-white dark:bg-[#162030]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Manuels produits */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#1e293b] dark:to-[#162030] rounded-xl p-8 border border-border dark:border-[#22304a]">
              <div className="flex items-start gap-6">
                <div className="h-12 w-12 rounded-lg bg-[#fef2f2] dark:bg-[#2c2323] flex items-center justify-center flex-shrink-0">
                  <Book className="h-6 w-6 text-[#dc2626]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold mb-2">Manuels produits</h3>
                  <p className="text-muted-foreground mb-4">
                    Guides d'utilisation complets et manuels d'installation pour tous les produits Focus M.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:border-[#dc2626] hover:text-[#dc2626] bg-transparent"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Manuel Touch X2 (PDF)
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:border-[#dc2626] hover:text-[#dc2626] bg-transparent"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Manuel Touch Ultra (PDF)
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:border-[#dc2626] hover:text-[#dc2626] bg-transparent"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Manuel Touch X-ONE (PDF)
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Ajoutez d'autres sections ici si nécessaire, en respectant les classes dark: */}
          </div>
        </div>
      </section>

      {/* Assistance CTA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold mb-6">Besoin d'aide ?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Notre équipe support est à votre disposition pour toute question.
          </p>
          <Button asChild size="lg" className="bg-[#dc2626] hover:bg-[#991b1b] text-white">
            <a href="/contact">Contacter le support</a>
          </Button>
        </div>
      </section>

    </div>
  )
}
