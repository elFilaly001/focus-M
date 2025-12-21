import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Target, Users, Lightbulb, Award } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About Us - FocusTech",
  description: "Learn about FocusTech and our mission to revolutionize interactive displays",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-[#dc2626]">FocusTech</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're pioneering the future of interactive collaboration with cutting-edge display technology that
              empowers businesses and educators worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img src="/modern-office-collaboration-technology.jpg" alt="Our Mission" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="font-display text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                At FocusTech, we believe that collaboration should be effortless, inspiring, and accessible to everyone.
                Our mission is to break down barriers between ideas and implementation through innovative interactive
                technology.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We develop solutions that seamlessly integrate with your workflow, enabling teams to connect, create,
                and innovate without technical complexity getting in the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="h-16 w-16 rounded-full bg-[#fef2f2] flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-[#dc2626]" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Constantly pushing boundaries to deliver next-generation technology
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <div className="h-16 w-16 rounded-full bg-[#fef2f2] flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-[#dc2626]" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-muted-foreground">Building tools that bring people together and amplify teamwork</p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <div className="h-16 w-16 rounded-full bg-[#fef2f2] flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-[#dc2626]" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Simplicity</h3>
              <p className="text-muted-foreground">Making powerful technology accessible and easy to use</p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <div className="h-16 w-16 rounded-full bg-[#fef2f2] flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-[#dc2626]" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Excellence</h3>
              <p className="text-muted-foreground">Delivering quality products that exceed expectations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl font-bold mb-6 text-center">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                FocusTech was founded with a simple observation: traditional meeting rooms and classrooms weren't
                keeping pace with how people actually work and learn. We saw teams struggling with disconnected tools,
                educators limited by outdated technology, and countless hours wasted on technical difficulties.
              </p>
              <p>
                Our founders, a team of engineers and educators, set out to create something better. Not just another
                display, but a complete ecosystem designed from the ground up for modern collaboration. Every feature,
                every interaction, every integration was carefully crafted to remove friction and enable flow.
              </p>
              <p>
                Today, FocusTech powers thousands of meeting rooms, classrooms, and collaborative spaces around the
                world. But we're just getting started. Our team continues to innovate, listening to our customers and
                pushing the boundaries of what's possible with interactive technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#dc2626] to-[#991b1b] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Experience the future of collaboration with a personalized demo.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link href="/demo">Schedule Your Demo</Link>
          </Button>
        </div>
      </section>

    </div>
  )
}
