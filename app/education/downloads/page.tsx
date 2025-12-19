import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { FileText, Download, Book, Video } from "lucide-react"

export const metadata = {
  title: "Downloads - FocusTech",
  description: "Download product manuals, specifications, and software",
}

export default function DownloadsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Downloads & <span className="text-[#dc2626]">Resources</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Access product manuals, technical specifications, software updates, and training materials.
            </p>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Product Manuals */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-border">
              <div className="flex items-start gap-6">
                <div className="h-12 w-12 rounded-lg bg-[#fef2f2] flex items-center justify-center flex-shrink-0">
                  <Book className="h-6 w-6 text-[#dc2626]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold mb-2">Product Manuals</h3>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive user guides and installation manuals for all FocusTech products.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:border-[#dc2626] hover:text-[#dc2626] bg-transparent"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Touch X2 Manual (PDF)
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:border-[#dc2626] hover:text-[#dc2626] bg-transparent"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Touch Ultra Manual (PDF)
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:border-[#dc2626] hover:text-[#dc2626] bg-transparent"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Touch X-ONE Manual (PDF)
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Specs */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-border">
              <div className="flex items-start gap-6">
                <div className="h-12 w-12 rounded-lg bg-[#fef2f2] flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-[#dc2626]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold mb-2">Technical Specifications</h3>
                  <p className="text-muted-foreground mb-4">
                    Detailed technical specifications and compatibility information.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:border-[#dc2626] hover:text-[#dc2626] bg-transparent"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Complete Specs Sheet (PDF)
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:border-[#dc2626] hover:text-[#dc2626] bg-transparent"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Compatibility Guide (PDF)
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Software & Drivers */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-border">
              <div className="flex items-start gap-6">
                <div className="h-12 w-12 rounded-lg bg-[#fef2f2] flex items-center justify-center flex-shrink-0">
                  <Download className="h-6 w-6 text-[#dc2626]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold mb-2">Software & Drivers</h3>
                  <p className="text-muted-foreground mb-4">
                    Latest software updates, drivers, and collaboration tools.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:border-[#dc2626] hover:text-[#dc2626] bg-transparent"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      FocusTech Suite (Windows)
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:border-[#dc2626] hover:text-[#dc2626] bg-transparent"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      FocusTech Suite (macOS)
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:border-[#dc2626] hover:text-[#dc2626] bg-transparent"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Touch Drivers
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Training Videos */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-border">
              <div className="flex items-start gap-6">
                <div className="h-12 w-12 rounded-lg bg-[#fef2f2] flex items-center justify-center flex-shrink-0">
                  <Video className="h-6 w-6 text-[#dc2626]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold mb-2">Training Materials</h3>
                  <p className="text-muted-foreground mb-4">
                    Video tutorials and training resources to help you get the most from your FocusTech display.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:border-[#dc2626] hover:text-[#dc2626] bg-transparent"
                  >
                    View Training Portal
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold mb-6">Need Help?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our support team is ready to assist you with any questions.
          </p>
          <Button asChild size="lg" className="bg-[#dc2626] hover:bg-[#991b1b] text-white">
            <a href="/contact">Contact Support</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
