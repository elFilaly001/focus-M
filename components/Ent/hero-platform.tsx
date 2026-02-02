"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function HeroPlatformEnterprise() {

  const pathname = usePathname()
  
    function getAssociatLink(link: string) {
    if (pathname?.includes('/entreprise')) {
      return `/entreprise${link}`;
    } else if (pathname?.includes('/education')) {
      return `/education${link}`;
    } else {
      return `/entreprise${link}`;
    }
  }
    return (
        <div className="relative bg-background min-h-screen overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                    <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="https://media.istockphoto.com/id/1036766612/video/african-american-business-man-holding-a-presentation-in-the-glass-conference-room.mp4?s=mp4-640x640-is&k=20&c=7S7-7Ef0aNIM_DCXqgP7fcGxzpWCVAs7zcad0PbN4sU=" type="video/mp4" />
                    </video>
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
            </div>

            <section className="relative overflow-hidden min-h-[100vh] z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="container px-4 py-20 md:py-32 relative">
                    <div className="max-w-6xl mx-auto">

                        <motion.h1 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="font-display text-5xl md:text-7xl font-bold mb-8 leading-[0.95] tracking-tight text-white"
                        >
                            Donnez une nouvelle dimension
                            <br />
                            <span className="text-[#dc2626]">à vos espaces professionnels</span>
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ delay: 0.2 }}
                            className="text-xl text-white/90 mb-8 max-w-2xl"
                        >
                            Des solutions interactives pensées pour structurer les échanges, valoriser vos environnements et accompagner la performance de votre organisation.
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ delay: 0.3 }} 
                            className="flex flex-col sm:flex-row gap-4 mb-20"
                        >
                            <Button asChild size="lg" className="bg-[#dc2626] hover:bg-[#b91c1c] text-white text-lg px-8 h-14">
                                <Link href={getAssociatLink('/demo')}>Réserver une démo</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="text-lg px-8 h-14 border-2 bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 dark:border-white/40">
                                <Link href={getAssociatLink('/solutions')}>Voir les solutions</Link>
                            </Button>
                        </motion.div>

                       
                    </div>
                </div>
            </section>
        </div>
    )
}