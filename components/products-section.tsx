"use client"
import { motion } from "framer-motion"
import { Monitor, Wifi, Layers, Shield, Users, Wrench, ArrowRight } from "lucide-react"

export function ProductsSection() {
    const features = [
        {
            icon: <Monitor />,
            title: "Tailles et verres sur mesure",
            desc: "Configurez les tailles, le verre de protection (Gorilla Glass) et les traitements anti-reflet adaptés à vos besoins.",
            link: "/products"
        },
        {
            icon: <Wifi />,
            title: "Intégration facile",
            desc: "Compatible avec tous vos logiciels existants : Microsoft Teams, Zoom, Google Classroom et solutions tierces.",
            link: "/products"
        },
        {
            icon: <Layers />,
            title: "Tactile multi-touch",
            desc: "Technologie capacitive haute précision supportant jusqu'à 10 points de contact simultanés pour une collaboration fluide.",
            link: "/products"
        },
        {
            icon: <Shield />,
            title: "Robuste et certifié",
            desc: "Écrans certifiés IP65 pour environnements exigeants. Résistance aux chocs et usage intensif.",
            link: "/products"
        },
        {
            icon: <Users />,
            title: "Solutions complètes",
            desc: "Pour l'éducation et les entreprises. Systèmes modulaires adaptés à vos salles de classe et espaces collaboratifs.",
            link: "/products"
        },
        {
            icon: <Wrench />,
            title: "Support et garantie",
            desc: "Garantie 3 ans, support technique local et maintenance préventive pour une tranquillité d'esprit totale.",
            link: "/contact"
        }
    ]

    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="mb-20 text-center md:text-left">
                        {/* <p className="text-sm font-semibold text-[#dc2626] uppercase tracking-wide mb-4">Produits</p> */}
                        <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
                            Solutions tactiles pour tous les usages
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl">
                            Choisissez parmi des écrans tactiles grand public, commerciaux et industriels adaptés à vos besoins spécifiques.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#dc2626] to-[#f87171] flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                                    <div className="text-white [&>svg]:w-7 [&>svg]:h-7">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="font-display text-2xl font-bold mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    {feature.desc}
                                </p>
                                <a 
                                    href={feature.link} 
                                    className="inline-flex items-center text-[#dc2626] font-medium text-sm group-hover:gap-2 transition-all"
                                >
                                    En savoir plus 
                                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}