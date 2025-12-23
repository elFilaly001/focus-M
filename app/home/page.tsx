"use client"
import { Building2, GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

export default function DiagonalSplitSection() {
    const [hoveredSide, setHoveredSide] = useState<'enterprise' | 'education' | null>(null)

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            {/* THE ROTATED WORLD CONTAINER 
               - We make it 150% of the screen size (w-[150vmax]) so corners don't show when rotated.
               - We rotate it -45deg.
               - Now, "Left" becomes "Bottom-Left" and "Right" becomes "Top-Right".
            */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vmax] h-[150vmax] flex flex-col transform rotate-[-45deg]"
            >
                {/* 1. TOP HALF (Which visually becomes the RIGHT/RED side) */}
                <Link
                    href="/education/home"
                    className="relative flex-1 bg-[#dc2626] group overflow-hidden"
                    onMouseEnter={() => setHoveredSide('education')}
                    onMouseLeave={() => setHoveredSide(null)}
                >
                    {/* Background Pattern */}
                    {/* <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" /> */}

                    {/* CONTENT CONTAINER
                        We have to Counter-Rotate (+45deg) the text so it looks straight to the user.
                    */}
                    <div className="absolute left-[38%] top-[55%] w-full max-w-md -translate-x-1/2 rotate-[45deg] text-center text-white pointer-events-none">
                        <motion.div
                            animate={{ scale: hoveredSide === 'education' ? 1.05 : 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <GraduationCap className="h-20 w-20 mx-auto mb-6" />
                            <h2 className="text-6xl font-bold mb-4">Éducation</h2>
                            <p className="text-xl opacity-90 mb-6">Solutions interactives</p>
                            <div className="inline-flex items-center gap-2 font-bold">
                                Découvrir <ArrowRight className="h-5 w-5" />
                            </div>
                        </motion.div>
                    </div>
                </Link>

                {/* 2. THE SEPARATOR IMAGE 
                   It sits exactly between the two flex divs.
                   Since we are in a rotated world, a horizontal image here creates a diagonal line on screen.
                */}
                <div className="relative z-20 h-0 top-[-3%] pointer-events-none flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 3852.4 501.9"
                        className="w-[60%] max-w-none z-30"
                        role="img"
                        aria-label="Divider"
                    >
                        <path fill="#ffffff" d="M2238,419.6c-22.1-5.4-41.8-15.5-54.6-34.2c-20.7-30.2-14.4-70.4-15.4-107.1s-18.7-80.7-55.3-83.4
    c-17.4-1.3-33.8,7.7-48.6,16.9c-46.1,28.7-88.8,62.8-127,101.4c41.4-70.3,79.2-142.8,113.1-217c11.8-25.9,20.8-61.9-2.5-78.3
    c-24.7-17.4-56.9,6.9-77.1,29.4c-86.5,96.4-173,192.8-259.5,289.3c-24.6,27.4-50.6,55.8-85.1,68.6c-25.4,9.4-53.1,9.5-80.2,9.5
    c-152.1,0-304.2-0.1-456.2-0.2c-152.8-0.1-305.7-0.1-458.5-0.2s-305.7-0.1-458.5-0.2c-39.7,0-79.5,0-119.2,0
    c-10.4,0-47.5-5-52.8,2.6c-3.2,4.7,0,23.6,0,29.6c0,10.7,0,21.4,0,32.1c511.3,0.4,1022.6,0.8,1533.8,1.1c41.1,0,83.7-0.3,120.8-17.9
    c29.1-13.8,52.3-37.2,74.7-60.3c81.8-84.5,160.5-171.9,236.1-262.1c-38.5,63-72,129-100,197.3c-5.4,13.2-10.7,27.9-5.9,41.3
    c12.6,35.3,65.8,18.3,95.6-4.4c50.7-38.8,101.5-77.6,152.2-116.4c1.4,84.5,14.3,187.2,91.9,220.7c27.6,11.9,58.6,12.1,88.6,12
    c521.5-0.2,1043-0.4,1564.5-0.6c0-21.5,0-43.1,0-64.6c-516,0.4-1032,0.7-1548.1,1.1C2283.1,425.7,2259.4,424.8,2238,419.6z"/>
                    </svg>

                </div>

                {/* Decorative image placed between halves so it can overlap the red side but sit under the SVG */}
                <img
                    src="/LOGO/m1.png"
                    alt="bg"
                    className="absolute left-[57.3%] top-[56%] -translate-x-1/2 -translate-y-1/2 w-[50%] max-w-none rotate-[45deg] object-cover pointer-events-none z-10"
                />
                <Link
                    href="/entreprise/home"
                    className="relative flex-1 group overflow-hidden"
                    onMouseEnter={() => setHoveredSide('enterprise')}
                    onMouseLeave={() => setHoveredSide(null)}
                >
                    {/* <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] z-20 " /> */}

                    <div className="absolute top-[15%] right-[20%] w-full max-w-md -translate-x-1/2 rotate-[45deg] text-center text-white pointer-events-none z-20">
                        <motion.div
                            animate={{ scale: hoveredSide === 'enterprise' ? 1.05 : 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Building2 className="h-20 w-20 mx-auto mb-6" />
                            <h2 className="text-6xl font-bold mb-4">Pro</h2>
                            <p className="text-xl opacity-90 mb-6">Solutions professionnelles</p>
                            <div className="inline-flex items-center gap-2 font-bold">
                                Découvrir <ArrowRight className="h-5 w-5" />
                            </div>
                        </motion.div>
                    </div>
                </Link>

            </div>
        </section>
    )
}