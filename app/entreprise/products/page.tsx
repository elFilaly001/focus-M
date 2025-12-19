import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Code2, Zap, Database, Shield } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Platform - FocusTech",
  description: "Explore our interactive collaboration platform and hardware solutions",
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-32 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm font-semibold text-[#dc2626] uppercase tracking-wide mb-4 text-center">
              Platform Overview
            </p>
            <h1 className="font-display text-6xl md:text-7xl font-bold mb-8 leading-[0.95] tracking-tight text-center text-balance">
              Build on our
              <br />
              <span className="text-[#dc2626]">collaboration infrastructure</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
              Everything you need to build real-time collaborative experiences. From APIs to hardware, all in one
              platform.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Platform capabilities</h2>
              <p className="text-xl text-muted-foreground">Everything included for all teams</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              <div className="rounded-2xl border-2 border-border bg-white p-8">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#dc2626] to-[#f87171] flex items-center justify-center mb-6">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Complete API</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  REST & GraphQL APIs, webhooks, real-time events, and full SDK support
                </p>
              </div>

              <div className="rounded-2xl border-2 border-border bg-white p-8">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#dc2626] to-[#f87171] flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Real-time Sync</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Operational transform, conflict resolution, and sub-50ms latency globally
                </p>
              </div>

              <div className="rounded-2xl border-2 border-border bg-white p-8">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#dc2626] to-[#f87171] flex items-center justify-center mb-6">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Data Infrastructure</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Distributed storage, automatic backups, and 99.99% durability SLA
                </p>
              </div>

              <div className="rounded-2xl border-2 border-border bg-white p-8">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#dc2626] to-[#f87171] flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Enterprise Security</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  SOC 2 Type II, end-to-end encryption, SAML SSO, and audit logs
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 border-border p-12">
              <div className="text-center mb-12">
                <h3 className="font-display text-3xl font-bold mb-4">Everything you need to scale</h3>
                <p className="text-lg text-muted-foreground">Built for teams of all sizes</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 max-w-5xl mx-auto">
                {[
                  "Unlimited API requests",
                  "Real-time collaboration",
                  "Advanced analytics & insights",
                  "Custom integrations",
                  "Webhook subscriptions",
                  "Team management & SSO",
                  "Priority support",
                  "99.99% uptime SLA",
                  "Custom branding",
                  "On-premise deployment",
                  "Dedicated account manager",
                  "Professional services",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-[#dc2626] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <Button asChild size="lg" className="bg-[#dc2626] hover:bg-[#991b1b] text-white">
                  <Link href="/demo">Get started</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 hover:border-[#dc2626] hover:text-[#dc2626] bg-transparent"
                >
                  <Link href="/contact">Talk to sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-sm font-semibold text-[#dc2626] uppercase tracking-wide mb-3">Hardware</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Interactive display systems</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Purpose-built hardware optimized for our platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Touch X2 */}
              <Link
                href="/products/touch-x2"
                className="group bg-white rounded-3xl overflow-hidden border-2 border-border hover:border-[#dc2626]/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <img
                    src="/premium-4k-interactive-display.jpg"
                    alt="Touch X2"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display text-3xl font-bold">Touch X2</h3>
                    <div className="text-xs font-semibold text-[#dc2626] bg-[#fef2f2] px-3 py-1.5 rounded-full">
                      4K UHD
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    20-point multi-touch, wireless collaboration, AI-powered features. Available in 65", 75", and 86".
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-[#dc2626] mr-2" />
                      <span>4K resolution @ 60Hz</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-[#dc2626] mr-2" />
                      <span>Zero-latency touch response</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-[#dc2626] mr-2" />
                      <span>Integrated camera & speakers</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center text-[#dc2626] font-semibold">
                    Technical specs{" "}
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              {/* Touch Ultra */}
              <Link
                href="/products/touch-ultra"
                className="group bg-white rounded-3xl overflow-hidden border-2 border-border hover:border-[#dc2626]/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <img
                    src="/ultrawide-98-inch-interactive-display.jpg"
                    alt="Touch Ultra"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display text-3xl font-bold">Touch Ultra</h3>
                    <div className="text-xs font-semibold text-[#dc2626] bg-[#fef2f2] px-3 py-1.5 rounded-full">
                      98"
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Ultra-wide format for immersive collaboration. Perfect for conference rooms and command centers.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-[#dc2626] mr-2" />
                      <span>98" ultra-wide display</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-[#dc2626] mr-2" />
                      <span>Multi-source input</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-[#dc2626] mr-2" />
                      <span>Enterprise management</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center text-[#dc2626] font-semibold">
                    Technical specs{" "}
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              {/* Touch X-ONE */}
              <Link
                href="/products/touch-x-one"
                className="group bg-white rounded-3xl overflow-hidden border-2 border-border hover:border-[#dc2626]/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <img
                    src="/professional-interactive-screen.jpg"
                    alt="Touch X-ONE"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display text-3xl font-bold">Touch X-ONE</h3>
                    <div className="text-xs font-semibold text-[#dc2626] bg-[#fef2f2] px-3 py-1.5 rounded-full">
                      Pro
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Professional-grade system for corporate and educational environments. Reliable and easy to deploy.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-[#dc2626] mr-2" />
                      <span>Multiple size options</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-[#dc2626] mr-2" />
                      <span>Easy IT management</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-[#dc2626] mr-2" />
                      <span>Extended warranty options</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center text-[#dc2626] font-semibold">
                    Technical specs{" "}
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              {/* Touch E-ONE */}
              <Link
                href="/products/touch-e-one"
                className="group bg-white rounded-3xl overflow-hidden border-2 border-border hover:border-[#dc2626]/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <img
                    src="/education-interactive-touchscreen.jpg"
                    alt="Touch E-ONE"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display text-3xl font-bold">Touch E-ONE</h3>
                    <div className="text-xs font-semibold text-[#dc2626] bg-[#fef2f2] px-3 py-1.5 rounded-full">
                      Education
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Purpose-built for educational environments with collaboration tools and simplified management.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-[#dc2626] mr-2" />
                      <span>Education-focused software</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-[#dc2626] mr-2" />
                      <span>Student engagement tools</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-[#dc2626] mr-2" />
                      <span>Volume pricing available</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center text-[#dc2626] font-semibold">
                    Technical specs{" "}
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Start building with our platform today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#dc2626] hover:bg-[#991b1b] text-white text-lg px-10 h-14">
                <Link href="/demo">Start building</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-10 h-14 border-2 hover:border-[#dc2626] hover:text-[#dc2626] bg-transparent"
              >
                <Link href="/contact">Contact sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
