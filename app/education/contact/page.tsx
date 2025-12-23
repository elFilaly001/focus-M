import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"

export const metadata = {
  title: "Contact - Focus M",
  description: "Contactez Focus M",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Contactez-<span className="text-[#dc2626]">nous</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Des questions ? Nous serions ravis de vous répondre. Envoyez-nous un message et nous répondrons dès que possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-3xl font-bold mb-6">Envoyez-nous un message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Prénom</label>
                    <Input placeholder="Jean" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Nom</label>
                    <Input placeholder="Dupont" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">E-mail</label>
                  <Input type="email" placeholder="jean@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Téléphone</label>
                  <Input type="tel" placeholder="+1 (555) 123-4567" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Société</label>
                  <Input placeholder="Votre entreprise" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea placeholder="Parlez-nous de votre projet..." rows={5} />
                </div>
                <Button type="submit" size="lg" className="w-full bg-[#dc2626] hover:bg-[#991b1b] text-white">
                  Envoyer le message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold mb-6">Informations de contact</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Contactez-nous via l'un de ces canaux. Notre équipe est prête à vous aider à trouver la solution
                  d'écran interactif idéale.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-[#fef2f2] flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-[#dc2626]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Téléphone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Lun-Ven 9h-18h (EST)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-[#fef2f2] flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#dc2626]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">E-mail</h3>
                    <p className="text-muted-foreground">info@focustech.com</p>
                    <p className="text-muted-foreground">support@focustech.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-[#fef2f2] flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#dc2626]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Siège social</h3>
                    <p className="text-muted-foreground">123 Tech Boulevard</p>
                    <p className="text-muted-foreground">San Francisco, CA 94107</p>
                    <p className="text-muted-foreground">États-Unis</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="font-semibold mb-4">Bureaux régionaux</h3>
                <div className="space-y-3 text-sm">
                  <p className="text-muted-foreground">
                    <strong>Europe :</strong> Londres, Royaume-Uni
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Asie :</strong> Singapour
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Moyen-Orient :</strong> Dubaï, ÉAU
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
