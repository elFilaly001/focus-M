"use client"
import { Button } from "@/components/ui/button"
import { Pen } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function HeroPlatform() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [drawingEnabled, setDrawingEnabled] = useState<boolean>(true)
    const drawingEnabledRef = useRef<boolean>(drawingEnabled)
    const strokesRef = useRef<Array<Array<{ x: number; y: number; life: number }>>>([])

    useEffect(() => {
        const key = 'hero:drawingEnabled'
        try {
            const stored = localStorage.getItem(key)
            if (stored !== null) setDrawingEnabled(stored === 'true')
        } catch (e) {}
    }, [])

    useEffect(() => {
        drawingEnabledRef.current = drawingEnabled
        try {
            localStorage.setItem('hero:drawingEnabled', drawingEnabled ? 'true' : 'false')
        } catch (e) {}
    }, [drawingEnabled])

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

        // Helper to get coordinates for both Mouse and Touch
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
            return {
                x: clientX - rect.left,
                y: clientY - rect.top
            }
        }

        const startDrawing = (e: MouseEvent | TouchEvent) => {
            if (!drawingEnabledRef.current) return
            // For mouse, only left click
            if ('button' in e && e.button !== 0) return
            
            // Prevent scrolling on touch
            if (e.cancelable) e.preventDefault()

            isDrawing = true
            const coords = getCoordinates(e)
            strokesRef.current.push([{ ...coords, life: 1 }])
        }

        const moveDrawing = (e: MouseEvent | TouchEvent) => {
            if (!isDrawing || !drawingEnabledRef.current) return
            
            // Prevent scrolling on touch
            if (e.cancelable) e.preventDefault()

            const coords = getCoordinates(e)
            const currentStroke = strokesRef.current[strokesRef.current.length - 1]
            if (!currentStroke) return

            const lastPoint = currentStroke[currentStroke.length - 1]
            const dist = Math.hypot(coords.x - lastPoint.x, coords.y - lastPoint.y)

            if (dist > 3) {
                currentStroke.push({ ...coords, life: 1 })
            }
        }

        const stopDrawing = () => { isDrawing = false }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            
            strokesRef.current = strokesRef.current.filter(stroke => {
                stroke.forEach(p => p.life -= 0.004)
                return stroke.some(p => p.life > 0)
            })

            strokesRef.current.forEach(stroke => {
                if (stroke.length < 2) return
                ctx.beginPath()
                ctx.lineCap = 'round'
                ctx.lineJoin = 'round'
                
                const avgLife = stroke.reduce((acc, p) => acc + p.life, 0) / stroke.length
                ctx.lineWidth = 16 * avgLife
                ctx.strokeStyle = `rgba(220, 38, 38, ${avgLife * 0.3})`
                ctx.shadowBlur = 4
                ctx.shadowColor = `rgba(220, 38, 38, ${avgLife * 0.2})`

                ctx.moveTo(stroke[0].x, stroke[0].y)
                for (let i = 1; i < stroke.length; i++) {
                    const p = stroke[i]
                    const prev = stroke[i - 1]
                    const xc = (prev.x + p.x) / 2
                    const yc = (prev.y + p.y) / 2
                    ctx.quadraticCurveTo(prev.x, prev.y, xc, yc)
                }
                ctx.stroke()
            })
            requestAnimationFrame(animate)
        }

        // Add Mouse Listeners
        window.addEventListener('mousedown', startDrawing)
        window.addEventListener('mousemove', moveDrawing)
        window.addEventListener('mouseup', stopDrawing)

        // Add Touch Listeners
        window.addEventListener('touchstart', startDrawing, { passive: false })
        window.addEventListener('touchmove', moveDrawing, { passive: false })
        window.addEventListener('touchend', stopDrawing)
        window.addEventListener('touchcancel', stopDrawing)

        window.addEventListener('resize', updateCanvasSize)
        const animId = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener('mousedown', startDrawing)
            window.removeEventListener('mousemove', moveDrawing)
            window.removeEventListener('mouseup', stopDrawing)
            window.removeEventListener('touchstart', startDrawing)
            window.removeEventListener('touchmove', moveDrawing)
            window.removeEventListener('touchend', stopDrawing)
            window.removeEventListener('touchcancel', stopDrawing)
            window.removeEventListener('resize', updateCanvasSize)
            cancelAnimationFrame(animId)
        }
    }, [])

    return (
        /* Added 'touch-none' to prevent browser gestures from interfering */
        <div ref={containerRef} className="relative select-none touch-none overflow-hidden bg-white">
            <button
                onClick={() => setDrawingEnabled(!drawingEnabled)}
                className={`absolute top-4 right-4 z-50 p-3 rounded-full shadow-lg transition-all active:scale-90 ${
                    drawingEnabled ? 'bg-[#dc2626] text-white' : 'bg-white text-gray-400 border'
                }`}
            >
                <Pen className="w-5 h-5" />
            </button>

            <canvas 
                ref={canvasRef} 
                className="absolute inset-0 pointer-events-none z-20" 
                style={{ mixBlendMode: 'multiply' }} 
            />

            <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="container mx-auto px-4 py-20 md:py-32 relative">
                    <div className="max-w-6xl mx-auto">
                        <motion.h1 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="font-display text-5xl md:text-7xl font-bold mb-8 leading-[0.95] tracking-tight"
                        >
                            Écrans tactiles
                            <br />
                            <span className="text-[#dc2626]">à la demande</span>
                        </motion.h1>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4 mb-20"
                        >
                            <Button asChild size="lg" className="bg-[#dc2626] hover:bg-[#991b1b] text-white text-lg px-8 h-14">
                                <Link href="/contact">Demander un demo</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="text-lg px-8 h-14 border-2">
                                <Link href="/products">Voir les produits</Link>
                            </Button>
                        </motion.div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { val: "7 jours", label: "Délai typique" },
                                { val: "Toutes tailles", label: "Tailles personnalisées" },
                                { val: "IP65", label: "Options robustes" },
                                { val: "50+", label: "Livraison mondiale" }
                            ].map((stat, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    className="bg-white rounded-xl p-6 border border-border shadow-sm"
                                >
                                    <div className="text-3xl font-bold text-[#dc2626] mb-1">{stat.val}</div>
                                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}