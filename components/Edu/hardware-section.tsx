"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HardwareSection() {
  return (
    <section className="py-32 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm font-semibold text-[#dc2626] uppercase tracking-wide mb-4">Hardware</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white">Enterprise-grade displays</h2>
            <p className="text-xl text-muted-foreground dark:text-muted-foreground max-w-3xl mx-auto">
              Professional interactive hardware designed for developers and modern teams
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/products"
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 border-2 border-border dark:border-neutral-700 hover:border-[#dc2626]/30 transition-all duration-300 p-8"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-100 dark:from-slate-700 dark:to-slate-800 rounded-xl mb-6 overflow-hidden">
                <img src="/modern-tech-display-monitor.jpg" alt="Touch X2" className="w-full h-full object-cover" />
              </div>
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-3xl font-bold text-slate-900 dark:text-white">Touch X2</h3>
                <div className="text-xs font-semibold text-[#dc2626] bg-[#fef2f2] dark:bg-neutral-800 dark:text-[#fecaca] px-3 py-1.5 rounded-full">
                  4K UHD
                </div>
              </div>
              <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed mb-4">
                20-point multi-touch, 4K resolution, wireless screen sharing. Perfect for collaborative development.
              </p>
              <div className="inline-flex items-center text-[#dc2626] font-semibold text-sm">
                View specs <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/products"
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 border-2 border-border dark:border-neutral-700 hover:border-[#dc2626]/30 transition-all duration-300 p-8"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-100 dark:from-slate-700 dark:to-slate-800 rounded-xl mb-6 overflow-hidden">
                <img src="/ultrawide-tech-monitor-display.jpg" alt="Touch Ultra" className="w-full h-full object-cover" />
              </div>
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-3xl font-bold text-slate-900 dark:text-white">Touch Ultra</h3>
                <div className="text-xs font-semibold text-[#dc2626] bg-[#fef2f2] dark:bg-neutral-800 dark:text-white px-3 py-1.5 rounded-full">98"</div>
              </div>
              <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed mb-4">
                Ultra-wide format for immersive collaboration. Ideal for conference rooms and command centers.
              </p>
              <div className="inline-flex items-center text-[#dc2626] font-semibold text-sm">
                View specs <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
