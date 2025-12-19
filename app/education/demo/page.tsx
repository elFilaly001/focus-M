import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, Users } from "lucide-react"

export const metadata = {
  title: "Book a Demo - FocusTech",
  description: "Schedule a personalized demo of FocusTech interactive displays",
}

export default function DemoPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Book Your <span className="text-[#dc2626]">Demo</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Experience FocusTech firsthand with a personalized demonstration tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div>
              <h2 className="font-display text-3xl font-bold mb-6">Schedule Your Demo</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name *</label>
                    <Input placeholder="John" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name *</label>
                    <Input placeholder="Doe" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Work Email *</label>
                  <Input type="email" placeholder="john@company.com" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <Input type="tel" placeholder="+1 (555) 123-4567" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name *</label>
                  <Input placeholder="Your Company" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Industry</label>
                  <Input placeholder="e.g., Education, Corporate, Healthcare" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Number of Displays Needed</label>
                  <Input type="number" placeholder="1" min="1" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Date</label>
                  <Input type="date" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Additional Information</label>
                  <Textarea
                    placeholder="Tell us about your project, specific requirements, or questions you have..."
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-[#dc2626] hover:bg-[#991b1b] text-white">
                  Request Demo
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  * Required fields. We'll contact you within 24 hours to confirm your demo.
                </p>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold mb-6">What to Expect</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our product specialists will guide you through a comprehensive demonstration of FocusTech's
                  capabilities, customized to your specific use case.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-[#fef2f2] flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-[#dc2626]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">45-Minute Session</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      A thorough walkthrough of features, integrations, and capabilities relevant to your needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-[#fef2f2] flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-[#dc2626]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Personalized Experience</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Tailored to your industry, team size, and specific collaboration challenges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-[#fef2f2] flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-[#dc2626]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Available for virtual or in-person demos at your convenience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-border">
                <h3 className="font-display text-xl font-bold mb-4">During Your Demo</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-[#dc2626] mr-2">•</span>
                    <span>See interactive touch technology in action</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#dc2626] mr-2">•</span>
                    <span>Explore collaboration features and software integrations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#dc2626] mr-2">•</span>
                    <span>Learn about deployment and support options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#dc2626] mr-2">•</span>
                    <span>Get answers to all your technical questions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#dc2626] mr-2">•</span>
                    <span>Receive a customized quote for your organization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
