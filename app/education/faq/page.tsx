import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Sparkles, HelpCircle, Lightbulb } from "lucide-react"

export const metadata = {
  title: "FAQ - FocusTech",
  description: "Frequently Asked Questions about FocusTech interactive displays and solutions."
}

export default function FaqPage() {
  return (
    <div className="min-h-screen">
      <section className="py-16 relative">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full -z-10">
          <img
            src="/modern-interactive-display-tech-setup.jpg"
            alt="FAQ background"
            className="w-full h-full object-cover object-center opacity-40"
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-background/50 dark:bg-background/70" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-34">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left: Headline, Description, Contact Info */}
            <div className="flex flex-col justify-center h-full">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Vous avez des questions,<br />Nous avons les réponses</h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                Découvrez des expériences uniques, conçues pour vous immerger au cœur de la destination. Des histoires à vivre pleinement.
              </p>
              <div className="hidden sm:grid mt-12 sm:mt-16 md:mt-24 grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-sm text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-[var(--color-primary)] mb-2">Adresse</h3>
                  <p>FocusTech Siège<br />123 Avenue de l'Innovation<br />Tech City, 10001</p>
                  <p className="mt-2">Lun–Ven | 09:00–18:00</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-primary)] mb-2">Réseaux sociaux</h3>
                  <p>Instagram<br />LinkedIn<br />Facebook<br />X (Twitter)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-primary)] mb-2">Email</h3>
                  <p>contact@focustech.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-primary)] mb-2">Téléphone</h3>
                  <p>+1 234 567 8901</p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form Card */}
            <div className="bg-muted/60 rounded-2xl shadow-lg border border-border p-4 sm:p-6 md:p-8 max-w-xl w-full mx-auto">
              <h2 className="font-display text-2xl font-bold mb-2 text-center">Dites-nous ce dont vous avez besoin</h2>
              <p className="text-muted-foreground text-center mb-6">
                Notre équipe est prête à vous accompagner dans chaque détail, petit ou grand.
              </p>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Prénom" className="rounded-full border px-4 py-2 bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary w-full" />
                  <input type="text" placeholder="Nom" className="rounded-full border px-4 py-2 bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary w-full" />
                  <input type="text" placeholder="Pays" className="rounded-full border px-4 py-2 bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary w-full" />
                  <input type="text" placeholder="Téléphone" className="rounded-full border px-4 py-2 bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary w-full" />
                </div>
                <input type="email" placeholder="Adresse e-mail" className="rounded-full border px-4 py-2 bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary w-full" />
                <div>
                  <label className="block text-sm font-medium mb-2">Type de demande</label>
                  <div className="flex flex-wrap gap-2">
                    <button type="button" className="rounded-full border px-4 py-2 bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary data-[active=true]:bg-primary data-[active=true]:text-white" data-active="false">Réservation</button>
                    <button type="button" className="rounded-full border px-4 py-2 bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary data-[active=true]:bg-primary data-[active=true]:text-white" data-active="true">Général</button>
                    <button type="button" className="rounded-full border px-4 py-2 bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary data-[active=true]:bg-primary data-[active=true]:text-white" data-active="false">Entreprise</button>
                    <button type="button" className="rounded-full border px-4 py-2 bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary data-[active=true]:bg-primary data-[active=true]:text-white" data-active="false">Autres</button>
                  </div>
                </div>
                <textarea placeholder="Message" rows={4} className="rounded-2xl border px-4 py-2 bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary w-full resize-none" />
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="offers" className="accent-primary" />
                  <label htmlFor="offers" className="text-sm text-muted-foreground">Je souhaite recevoir des offres et actualités exclusives</label>
                </div>
                <button type="submit" className="w-full rounded-full border border-primary bg-primary text-white py-2 font-semibold hover:bg-[#991b1b] transition">Envoyer</button>
              </form>
            </div>
          </div>
        </div>
      </section>
        {/* Map Banner */}
        <div className="w-full mt-10 sm:mt-16 px-0 sm:px-4">
          <div className="w-full rounded-none overflow-hidden shadow-lg border-t border-border">
            <iframe
              title="Localisation FocusTech"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9999999999995!2d2.292292615674634!3d48.8583730792876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fddf1b09b0b%3A0x8c0b6e8b8b8b8b8b!2s123%20Avenue%20de%20l'Innovation%2C%20Tech%20City!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[250px] sm:h-[350px]"
            ></iframe>
          </div>
        </div>

      {/* FAQ Section (like the image) */}
      <section className="w-full py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-34">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Left: Title and Description */}
            <div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Questions Fréquemment Posées</h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-2">Contactez-nous si vous avez encore des questions pour rendre votre expérience plus fluide.</p>
            </div>
            {/* Right: FAQ List */}
            <div>
              <div className="divide-y divide-border">
                <Accordion type="single" collapsible className="w-full">
                  {/* FAQ Item 1 */}
                  <AccordionItem value="faq1" className="border-0">
                    <div className="flex items-center py-10">
                      <span className="text-xl font-semibold text-muted-foreground w-12 flex-shrink-0">01</span>
                      <AccordionTrigger className="flex-1 text-lg font-medium text-left px-2 py-0 bg-transparent shadow-none hover:bg-transparent focus:outline-none">
                        Un service de navette aéroport est-il disponible ?
                      </AccordionTrigger>
                    </div>
                    <AccordionContent className="pl-14 pb-6 text-muted-foreground">
                      Oui, nous proposons un service de navette gratuit pour garantir un trajet sans encombre.
                    </AccordionContent>
                  </AccordionItem>
                  {/* FAQ Item 2 */}
                  <AccordionItem value="faq2" className="border-0">
                    <div className="flex items-center py-10">
                      <span className="text-xl font-semibold text-muted-foreground w-12 flex-shrink-0">02</span>
                      <AccordionTrigger className="flex-1 text-lg font-medium text-left px-2 py-0 bg-transparent shadow-none hover:bg-transparent focus:outline-none">
                        À quelle distance se trouve FocusTech du centre-ville ?
                      </AccordionTrigger>
                    </div>
                    <AccordionContent className="pl-14 pb-6 text-muted-foreground">
                      Nous sommes situés à environ 10 minutes en voiture du centre-ville.
                    </AccordionContent>
                  </AccordionItem>
                  {/* FAQ Item 3 */}
                  <AccordionItem value="faq3" className="border-0">
                    <div className="flex items-center py-10">
                      <span className="text-xl font-semibold text-muted-foreground w-12 flex-shrink-0">03</span>
                      <AccordionTrigger className="flex-1 text-lg font-medium text-left px-2 py-0 bg-transparent shadow-none hover:bg-transparent focus:outline-none">
                        Y a-t-il un parking gratuit sur place ?
                      </AccordionTrigger>
                    </div>
                    <AccordionContent className="pl-14 pb-6 text-muted-foreground">
                      Oui, un parking gratuit est disponible pour tous nos visiteurs.
                    </AccordionContent>
                  </AccordionItem>
                  {/* FAQ Item 4 */}
                  <AccordionItem value="faq4" className="border-0">
                    <div className="flex items-center py-10">
                      <span className="text-xl font-semibold text-muted-foreground w-12 flex-shrink-0">04</span>
                      <AccordionTrigger className="flex-1 text-lg font-medium text-left px-2 py-0 bg-transparent shadow-none hover:bg-transparent focus:outline-none">
                        Comment puis-je réserver une démonstration ?
                      </AccordionTrigger>
                    </div>
                    <AccordionContent className="pl-14 pb-6 text-muted-foreground">
                      Vous pouvez réserver une démonstration via notre formulaire de contact ou en nous appelant directement.
                    </AccordionContent>
                  </AccordionItem>
                  {/* FAQ Item 5 */}
                  <AccordionItem value="faq5" className="border-0">
                    <div className="flex items-center py-10">
                      <span className="text-xl font-semibold text-muted-foreground w-12 flex-shrink-0">05</span>
                      <AccordionTrigger className="flex-1 text-lg font-medium text-left px-2 py-0 bg-transparent shadow-none hover:bg-transparent focus:outline-none">
                        Proposez-vous une assistance technique ?
                      </AccordionTrigger>
                    </div>
                    <AccordionContent className="pl-14 pb-6 text-muted-foreground">
                      Oui, notre équipe d’assistance technique est disponible 24h/24 et 7j/7.
                    </AccordionContent>
                  </AccordionItem>
                  {/* FAQ Item 6 */}
                  <AccordionItem value="faq6" className="border-0">
                    <div className="flex items-center py-10">
                      <span className="text-xl font-semibold text-muted-foreground w-12 flex-shrink-0">06</span>
                      <AccordionTrigger className="flex-1 text-lg font-medium text-left px-2 py-0 bg-transparent shadow-none hover:bg-transparent focus:outline-none">
                        Quels sont les horaires d'ouverture de FocusTech ?
                      </AccordionTrigger>
                    </div>
                    <AccordionContent className="pl-14 pb-6 text-muted-foreground">
                      Nous sommes ouverts du lundi au vendredi, de 9h00 à 18h00.
                    </AccordionContent>
                  </AccordionItem>
                  {/* FAQ Item 7 */}
                  <AccordionItem value="faq7" className="border-0">
                    <div className="flex items-center py-10">
                      <span className="text-xl font-semibold text-muted-foreground w-12 flex-shrink-0">07</span>
                      <AccordionTrigger className="flex-1 text-lg font-medium text-left px-2 py-0 bg-transparent shadow-none hover:bg-transparent focus:outline-none">
                        Puis-je visiter vos locaux sans rendez-vous ?
                      </AccordionTrigger>
                    </div>
                    <AccordionContent className="pl-14 pb-6 text-muted-foreground">
                      Nous vous recommandons de prendre rendez-vous afin de garantir la disponibilité d'un conseiller.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
