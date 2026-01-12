"use client"
import { Button } from "@/components/ui/button"
import { Palette, Trash2, Pen } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Margarine } from "next/font/google"
import { useCountUp } from "@/hooks/use-countup"

const margarine = Margarine({
  weight: "400",
  subsets: ["latin"],
})

const colors = ['#000000', '#dc2626', '#2563eb', '#16a34a', '#ca8a04', '#9333ea', '#ea580c', '#06b6d4']

export default function HeroPlatform() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [drawingEnabled, setDrawingEnabled] = useState<boolean>(false) // Start disabled
    const [showPalette, setShowPalette] = useState(false)
    const [color, setColor] = useState('#000000')
    const [lineWidth, setLineWidth] = useState(5)
    const drawingEnabledRef = useRef<boolean>(drawingEnabled)
    const strokesRef = useRef<Array<{ points: Array<{ x: number; y: number }>; color: string; width: number }>>([])
    const colorRef = useRef(color)
    const lineWidthRef = useRef(lineWidth)
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    // Enable drawing by default on desktop, disable on mobile
    useEffect(() => {
        if (mounted) {
            const isMobile = window.innerWidth < 768
            setDrawingEnabled(!isMobile)
        }
    }, [mounted])

    useEffect(() => {
        drawingEnabledRef.current = drawingEnabled
    }, [drawingEnabled])

    useEffect(() => { colorRef.current = color }, [color])
    useEffect(() => { lineWidthRef.current = lineWidth }, [lineWidth])

    useEffect(() => {
        if (!mounted) return
        const isDark = resolvedTheme === 'dark'
        setColor(isDark ? '#FFFFFF' : '#000000')
    }, [mounted, resolvedTheme])

    useEffect(() => {
        if (!mounted) return
        const isDark = resolvedTheme === 'dark'
        strokesRef.current = strokesRef.current.map(stroke => {
            if (stroke.color === '#FFFFFF' && !isDark) return { ...stroke, color: '#000000' }
            if (stroke.color === '#000000' && isDark) return { ...stroke, color: '#FFFFFF' }
            return stroke
        })
    }, [mounted, resolvedTheme])

    useEffect(() => {
        const canvas = canvasRef.current
        const container = containerRef.current
        if (!canvas || !container) return
        const ctx = canvas.getContext('2d', { alpha: true })
        if (!ctx) return

        const updateCanvasSize = () => {
            const rect = container.getBoundingClientRect()
            const dpr = window.devicePixelRatio || 1
            canvas.width = rect.width * dpr
            canvas.height = rect.height * dpr
            ctx.scale(dpr, dpr)
            canvas.style.width = `${rect.width}px`
            canvas.style.height = `${rect.height}px`
        }

        updateCanvasSize()
        let isDrawing = false

        const getCoordinates = (e: MouseEvent | TouchEvent) => {
            const rect = container.getBoundingClientRect()
            let clientX, clientY
            if ('touches' in e) {
                clientX = e.touches[0].clientX
                clientY = e.touches[0].clientY
            } else {
                clientX = e.clientX
                clientY = e.clientY
            }
            return { x: clientX - rect.left, y: clientY - rect.top }
        }

        const startDrawing = (e: MouseEvent | TouchEvent) => {
            if (!drawingEnabledRef.current) return
            if ('button' in e && e.button !== 0) return
            if ((e.target as HTMLElement).closest('button, a, input')) return
            // Prevent drawing below the buttons section on mobile screens
            const isMobile = window.innerWidth < 768
            const coords = getCoordinates(e)
            if (isMobile) {
                // Find the bottom of the buttons section
                const btnSection = container?.querySelector('.mobile-draw-limit') as HTMLElement
                if (btnSection) {
                    const btnRect = btnSection.getBoundingClientRect()
                    const containerRect = container.getBoundingClientRect()
                    const btnBottom = btnRect.bottom - containerRect.top
                    if (coords.y > btnBottom) return
                }
            }
            isDrawing = true
            strokesRef.current.push({ points: [{ x: coords.x, y: coords.y }], color: colorRef.current, width: lineWidthRef.current })
        }

        const moveDrawing = (e: MouseEvent | TouchEvent) => {
            if (!isDrawing || !drawingEnabledRef.current) return
            if (e.cancelable) e.preventDefault()
            const coords = getCoordinates(e)
            // Prevent drawing below the buttons section on mobile screens
            const isMobile = window.innerWidth < 768
            if (isMobile) {
                const btnSection = container?.querySelector('.mobile-draw-limit') as HTMLElement
                if (btnSection) {
                    const btnRect = btnSection.getBoundingClientRect()
                    const containerRect = container.getBoundingClientRect()
                    const btnBottom = btnRect.bottom - containerRect.top
                    if (coords.y > btnBottom) return
                }
            }
            const currentStroke = strokesRef.current[strokesRef.current.length - 1]
            if (!currentStroke) return
            const lastPoint = currentStroke.points[currentStroke.points.length - 1]
            if (Math.hypot(coords.x - lastPoint.x, coords.y - lastPoint.y) > 3) {
                currentStroke.points.push({ x: coords.x, y: coords.y })
            }
        }

        const stopDrawing = () => { isDrawing = false }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            strokesRef.current.forEach(stroke => {
                if (stroke.points.length < 2) return
                ctx.beginPath()
                ctx.lineCap = 'round'
                ctx.lineJoin = 'round'
                ctx.lineWidth = stroke.width
                const hex = stroke.color.replace('#', '')
                const r = parseInt(hex.substring(0, 2), 16)
                const g = parseInt(hex.substring(2, 4), 16)
                const b = parseInt(hex.substring(4, 6), 16)
                ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.95)`
                ctx.shadowBlur = 4
                ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.6)`
                ctx.moveTo(stroke.points[0].x, stroke.points[0].y)
                for (let i = 1; i < stroke.points.length; i++) {
                    const xc = (stroke.points[i-1].x + stroke.points[i].x) / 2
                    const yc = (stroke.points[i-1].y + stroke.points[i].y) / 2
                    ctx.quadraticCurveTo(stroke.points[i-1].x, stroke.points[i-1].y, xc, yc)
                }
                ctx.stroke()
            })
            requestAnimationFrame(animate)
        }

        window.addEventListener('mousedown', startDrawing); window.addEventListener('mousemove', moveDrawing); window.addEventListener('mouseup', stopDrawing)
        window.addEventListener('touchstart', startDrawing, { passive: false }); window.addEventListener('touchmove', moveDrawing, { passive: false }); window.addEventListener('touchend', stopDrawing)
        window.addEventListener('resize', updateCanvasSize)
        const animId = requestAnimationFrame(animate)
        return () => {
            window.removeEventListener('mousedown', startDrawing); window.removeEventListener('mousemove', moveDrawing); window.removeEventListener('mouseup', stopDrawing)
            window.removeEventListener('touchstart', startDrawing); window.removeEventListener('touchmove', moveDrawing); window.removeEventListener('touchend', stopDrawing)
            window.removeEventListener('resize', updateCanvasSize); cancelAnimationFrame(animId)
        }
    }, [])

    const clearCanvas = () => { strokesRef.current = [] }
    const isDark = mounted && resolvedTheme === 'dark'

    return (
        <div ref={containerRef} className="relative select-none bg-background min-h-screen overflow-auto">
            <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-20" />
            
            {/* Palette Button */}
            <Button
                onClick={(e) => { e.stopPropagation(); setShowPalette(!showPalette) }}
                size="lg"
                className="absolute top-6 right-6 md:top-6 md:right-6 z-40 bg-[#dc2626] hover:bg-[#b91c1c] rounded-full h-14 w-14 p-0 shadow-lg" 
            >
                <Palette className="h-6 w-6 text-white" />
            </Button>

            {/* Pen Toggle Button */}
            <Button
                onClick={(e) => { e.stopPropagation(); setDrawingEnabled(!drawingEnabled) }}
                size="lg"
                className={`absolute top-8 right-24 md:top-22 md:right-8 z-40 rounded-full h-10 w-10 p-0 shadow-lg transition-all ${drawingEnabled ? 'bg-green-600' : 'bg-[#dc2626]'}`}
            >
                <Pen className="h-6 w-6 text-white" />
            </Button>

            {/* Palette Panel */}
            {showPalette && (
                <div className="absolute top-40 right-6 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 border border-gray-200 dark:border-gray-700 z-50 animate-in fade-in slide-in-from-bottom-4 duration-200">
                    <div className="space-y-4 min-w-[200px]">
                        <div>
                            <p className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">Couleur</p>
                            <div className="grid grid-cols-4 gap-2">
                                {colors.map((c) => {
                                    const displayColor = (c === '#000000' && isDark) ? '#FFFFFF' : c
                                    return (
                                        <button
                                            key={c}
                                            onClick={(e) => { e.stopPropagation(); setColor(displayColor) }}
                                            className={`h-10 w-10 rounded-lg transition-all hover:scale-110 ${color === displayColor ? 'ring-2 ring-[#dc2626] ring-offset-2 scale-110' : ''}`}
                                            style={{ backgroundColor: displayColor }}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                        <Button onClick={(e) => { e.stopPropagation(); clearCanvas() }} variant="outline" size="sm" className="w-full">
                            <Trash2 className="h-4 w-4 mr-2" /> Effacer
                        </Button>
                    </div>
                </div>
            )}

            <section className="relative overflow-hidden min-h-[100vh] flex items-start md:items-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                
                
                

                <div className="container px-4 pt-32 pb-20 md:py-20 relative z-10">
                    <div className="max-w-4xl">
                        <motion.h1 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-7xl font-bold mt-32 mb-8 leading-[0.95] tracking-tight text-foreground"
                        >
                            Captivez vos étudiants
                            <br />
                            <span className="text-[#dc2626]">avec l'interactivité</span>
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            className="text-xl text-muted-foreground mb-8 max-w-xl hidden md:block"
                        >
                            Des écrans tactiles qui transforment chaque leçon en expérience mémorable. 
                            Dessinez, annotez et collaborez en temps réel.
                        </motion.p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-20 mobile-draw-limit">
                            <Button asChild size="lg" className="bg-[#dc2626] text-white hover:bg-[#b91c1c] text-lg px-8 h-14">
                                <Link href="/demo">Demander une démo</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="text-lg px-8 h-14 border-2 hover:bg-gray-200 ">
                                <Link href="/solutions">Nos solutions</Link>
                            </Button>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { val: "92%", label: "Engagement" },
                                { val: "2h", label: "Formation" },
                                { val: "K-12", label: "Tous niveaux" },
                                { val: "24/7", label: "Support" }
                            ].map((stat, i) => {
                                // Only animate numbers (with optional % or +)
                                const match = String(stat.val).match(/^(\d+)([\+%]?)$/)
                                const isAnim = !!match
                                const end = match ? Number(match[1]) : 0
                                const suffix = match ? match[2] : ''
                                const { value, ref } = useCountUp({ end, duration: 1200, startOnView: true })
                                return (
                                    <motion.div 
                                        key={i} 
                                        initial={{ opacity: 0, y: 10 }} 
                                        animate={{ opacity: 1, y: 0 }} 
                                        transition={{ delay: 0.5 + i * 0.1 }} 
                                        className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-sm"
                                    >
                                        <div className="text-3xl font-bold text-[#dc2626] mb-1" ref={isAnim ? ref : undefined}>
                                            {isAnim ? value + suffix : stat.val}
                                        </div>
                                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}