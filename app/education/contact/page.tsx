import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"

export const metadata = {
  title: "Contact Us - FocusTech",
  description: "Get in touch with FocusTech",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Get in <span className="text-[#dc2626]">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
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
              <h2 className="font-display text-3xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <Input type="tel" placeholder="+1 (555) 123-4567" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <Input placeholder="Your Company" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea placeholder="Tell us about your project..." rows={5} />
                </div>
                <Button type="submit" size="lg" className="w-full bg-[#dc2626] hover:bg-[#991b1b] text-white">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Reach out to us through any of these channels. Our team is ready to help you find the perfect
                  interactive display solution.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-[#fef2f2] flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-[#dc2626]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-[#fef2f2] flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#dc2626]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@focustech.com</p>
                    <p className="text-muted-foreground">support@focustech.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-[#fef2f2] flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#dc2626]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Headquarters</h3>
                    <p className="text-muted-foreground">123 Tech Boulevard</p>
                    <p className="text-muted-foreground">San Francisco, CA 94107</p>
                    <p className="text-muted-foreground">United States</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="font-semibold mb-4">Regional Offices</h3>
                <div className="space-y-3 text-sm">
                  <p className="text-muted-foreground">
                    <strong>Europe:</strong> London, UK
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Asia:</strong> Singapore
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Middle East:</strong> Dubai, UAE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
