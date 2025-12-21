"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterPopup } from "@/components/newsletter-popup"
import HeroPlatform  from "@/components/Ent/hero-platform"
import { Button } from "@/components/ui/button"
import { Database, Cpu, Zap, ArrowRight, Terminal, Lock, Globe2 } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ProductsSection } from "@/components/products-section"
import { AboutIntroSection } from "@/components/About-us"
import { SolutionsEnterprise } from "@/components/Ent/Solutions"

export default function Home() {
  return (
    <div className="min-h-screen">

      <HeroPlatform />

      <AboutIntroSection />

      <SolutionsEnterprise/>

      {/* <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-semibold text-[#dc2626] uppercase tracking-wide mb-4">Quick Start</p>
                <h2 className="font-display text-5xl font-bold mb-6">Get up and running in minutes</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Install the SDK, initialize your workspace, and start building. Full TypeScript support with
                  auto-completion.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-8 w-8 rounded-full bg-[#dc2626] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Install the SDK</h4>
                      <p className="text-sm text-muted-foreground">Add to your project with npm, yarn, or pnpm</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="h-8 w-8 rounded-full bg-[#dc2626] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Initialize workspace</h4>
                      <p className="text-sm text-muted-foreground">Configure your environment and API keys</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="h-8 w-8 rounded-full bg-[#dc2626] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Start building</h4>
                      <p className="text-sm text-muted-foreground">Use our components or build custom experiences</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-[#1e1e1e] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
                  <div className="flex items-center space-x-2 px-4 py-3 border-b border-gray-800">
                    <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                    <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                    <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
                    <span className="text-xs text-gray-400 ml-2">main.ts</span>
                  </div>
                  <div className="p-6 font-mono text-sm overflow-x-auto">
                    <div className="text-gray-500">{"// Install the SDK"}</div>
                    <div className="text-gray-300">npm install @focustech/sdk</div>
                    <div className="h-4" />
                    <div className="text-gray-500">{"// Initialize workspace"}</div>
                    <div>
                      <span className="text-purple-400">import</span>{" "}
                      <span className="text-gray-300">{"{ FocusTech }"}</span>{" "}
                      <span className="text-purple-400">from</span>{" "}
                      <span className="text-green-400">'@focustech/sdk'</span>
                    </div>
                    <div className="h-4" />
                    <div>
                      <span className="text-purple-400">const</span> <span className="text-blue-400">client</span>{" "}
                      <span className="text-gray-300">= </span>
                      <span className="text-purple-400">new</span> <span className="text-yellow-400">FocusTech</span>
                      <span className="text-gray-300">{"({"}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-300">apiKey</span>
                      <span className="text-gray-300">: </span>
                      <span className="text-green-400">process.env.FOCUSTECH_API_KEY</span>
                    </div>
                    <div>
                      <span className="text-gray-300">{"})"}</span>
                    </div>
                    <div className="h-4" />
                    <div className="text-gray-500">{"// Create a collaborative workspace"}</div>
                    <div>
                      <span className="text-purple-400">const</span> <span className="text-blue-400">workspace</span>{" "}
                      <span className="text-gray-300">= </span>
                      <span className="text-purple-400">await</span> <span className="text-gray-300">client.</span>
                      <span className="text-yellow-400">createWorkspace</span>
                      <span className="text-gray-300">{"({"}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-300">name</span>
                      <span className="text-gray-300">: </span>
                      <span className="text-green-400">'My Workspace'</span>
                      <span className="text-gray-300">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-300">realtime</span>
                      <span className="text-gray-300">: </span>
                      <span className="text-orange-400">true</span>
                    </div>
                    <div>
                      <span className="text-gray-300">{"})"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-sm font-semibold text-[#dc2626] uppercase tracking-wide mb-4">Hardware</p>
              <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">Enterprise-grade displays</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Professional interactive hardware designed for developers and modern teams
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Link
                href="/products"
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white border-2 border-border hover:border-[#dc2626]/30 transition-all duration-300 p-8"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-100 rounded-xl mb-6 overflow-hidden">
                  <img src="/modern-tech-display-monitor.jpg" alt="Touch X2" className="w-full h-full object-cover" />
                </div>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-3xl font-bold">Touch X2</h3>
                  <div className="text-xs font-semibold text-[#dc2626] bg-[#fef2f2] px-3 py-1.5 rounded-full">
                    4K UHD
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  20-point multi-touch, 4K resolution, wireless screen sharing. Perfect for collaborative development.
                </p>
                <div className="inline-flex items-center text-[#dc2626] font-semibold text-sm">
                  View specs <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link
                href="/products"
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white border-2 border-border hover:border-[#dc2626]/30 transition-all duration-300 p-8"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-100 rounded-xl mb-6 overflow-hidden">
                  <img src="/ultrawide-tech-monitor-display.jpg" alt="Touch Ultra" className="w-full h-full object-cover" />
                </div>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-3xl font-bold">Touch Ultra</h3>
                  <div className="text-xs font-semibold text-[#dc2626] bg-[#fef2f2] px-3 py-1.5 rounded-full">98"</div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ultra-wide format for immersive collaboration. Ideal for conference rooms and command centers.
                </p>
                <div className="inline-flex items-center text-[#dc2626] font-semibold text-sm">
                  View specs <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-32 bg-gradient-to-br from-[#dc2626] via-[#b91c1c] to-[#991b1b] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">Ready to build?</h2>
            <p className="text-xl mb-12 text-white/90 leading-relaxed">
              Join thousands of teams building the future of collaboration on our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-10 h-14 font-semibold">
                <Link href="/demo">Start building</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-10 h-14 border-2 border-white text-white hover:bg-white hover:text-[#dc2626] bg-transparent font-semibold"
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
