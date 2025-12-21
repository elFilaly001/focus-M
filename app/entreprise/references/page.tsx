import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Building, GraduationCap, Briefcase } from "lucide-react"

export const metadata = {
  title: "References - FocusTech",
  description: "See how organizations worldwide trust FocusTech",
}

export default function ReferencesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Trusted by <span className="text-[#dc2626]">Thousands</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Organizations worldwide rely on FocusTech to power their collaborative spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
            <div className="p-8">
              <div className="font-display text-5xl font-bold text-[#dc2626] mb-2">5,000+</div>
              <p className="text-muted-foreground">Active Installations</p>
            </div>
            <div className="p-8">
              <div className="font-display text-5xl font-bold text-[#dc2626] mb-2">50+</div>
              <p className="text-muted-foreground">Countries Served</p>
            </div>
            <div className="p-8">
              <div className="font-display text-5xl font-bold text-[#dc2626] mb-2">98%</div>
              <p className="text-muted-foreground">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground">Real results from real customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8">
              <div className="h-16 w-16 rounded-full bg-[#fef2f2] flex items-center justify-center mb-6">
                <Building className="h-8 w-8 text-[#dc2626]" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Global Tech Corp</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "FocusTech transformed our 50 meeting rooms worldwide. Remote collaboration has never been smoother. The
                ROI was clear within 3 months."
              </p>
              <p className="text-sm font-medium text-[#dc2626]">— CTO, Technology Sector</p>
            </div>

            <div className="bg-white rounded-xl p-8">
              <div className="h-16 w-16 rounded-full bg-[#fef2f2] flex items-center justify-center mb-6">
                <GraduationCap className="h-8 w-8 text-[#dc2626]" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Metropolitan University</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "Our students are more engaged, and our faculty loves the intuitive interface. FocusTech helped us
                modernize 200+ classrooms seamlessly."
              </p>
              <p className="text-sm font-medium text-[#dc2626]">— Dean of Education</p>
            </div>

            <div className="bg-white rounded-xl p-8">
              <div className="h-16 w-16 rounded-full bg-[#fef2f2] flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-[#dc2626]" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Creative Agency Group</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "The interactive capabilities have revolutionized our client presentations. We can brainstorm and
                iterate in real-time like never before."
              </p>
              <p className="text-sm font-medium text-[#dc2626]">— Creative Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">Industries We Serve</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              "Education",
              "Corporate",
              "Healthcare",
              "Government",
              "Finance",
              "Manufacturing",
              "Retail",
              "Technology",
            ].map((industry) => (
              <div
                key={industry}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-border"
              >
                <p className="font-display font-semibold">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
