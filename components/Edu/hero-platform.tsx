"use client"
import { Button } from "@/components/ui/button"
import { Palette, Trash2 } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const colors = ['#000000', '#dc2626', '#2563eb', '#16a34a', '#ca8a04', '#9333ea', '#ea580c', '#06b6d4']

export default function HeroPlatform() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [drawingEnabled, setDrawingEnabled] = useState<boolean>(true)
    const [showPalette, setShowPalette] = useState(false)
    const [color, setColor] = useState('#000000')
    const [lineWidth, setLineWidth] = useState(5)
    const drawingEnabledRef = useRef<boolean>(drawingEnabled)
    const strokesRef = useRef<Array<{ points: Array<{ x: number; y: number }>; color: string; width: number }>>([])
    const colorRef = useRef(color)
    const lineWidthRef = useRef(lineWidth)
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    useEffect(() => {
        drawingEnabledRef.current = drawingEnabled
    }, [drawingEnabled])

    useEffect(() => { colorRef.current = color }, [color])
    useEffect(() => { lineWidthRef.current = lineWidth }, [lineWidth])

    // Initialize default pen color according to theme: light -> black, dark -> white
    useEffect(() => {
        const prefersDark = typeof window !== 'undefined' && (
            document.documentElement.classList.contains('dark') ||
            window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        )
        setColor(prefersDark ? '#FFFFFF' : '#000000')
    }, [])

    // Track theme so we can swap the black swatch to white in dark mode
    useEffect(() => {
        if (typeof window === 'undefined') return
        const check = () => {
            const hasDark = document.documentElement.classList.contains('dark') ||
                (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
            setIsDarkTheme(Boolean(hasDark))
        }
        check()
        const mq = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
        if (mq && mq.addEventListener) mq.addEventListener('change', check)
        else if (mq && mq.addListener) mq.addListener(check)
        return () => {
            if (mq && mq.removeEventListener) mq.removeEventListener('change', check)
            else if (mq && mq.removeListener) mq.removeListener(check)
        }
    }, [])

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

            isDrawing = true
            const coords = getCoordinates(e)
            strokesRef.current.push({ points: [{ x: coords.x, y: coords.y }], color: colorRef.current, width: lineWidthRef.current })
        }

        const moveDrawing = (e: MouseEvent | TouchEvent) => {
            if (!isDrawing || !drawingEnabledRef.current) return
            if (e.cancelable) e.preventDefault()

            const coords = getCoordinates(e)
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

        window.addEventListener('mousedown', startDrawing)
        window.addEventListener('mousemove', moveDrawing)
        window.addEventListener('mouseup', stopDrawing)
        window.addEventListener('touchstart', startDrawing, { passive: false })
        window.addEventListener('touchmove', moveDrawing, { passive: false })
        window.addEventListener('touchend', stopDrawing)
        window.addEventListener('resize', updateCanvasSize)
        const animId = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener('mousedown', startDrawing)
            window.removeEventListener('mousemove', moveDrawing)
            window.removeEventListener('mouseup', stopDrawing)
            window.removeEventListener('touchstart', startDrawing)
            window.removeEventListener('touchmove', moveDrawing)
            window.removeEventListener('touchend', stopDrawing)
            window.removeEventListener('resize', updateCanvasSize)
            cancelAnimationFrame(animId)
        }
    }, [])

    const clearCanvas = () => {
        strokesRef.current = []
    }

    return (
        <div ref={containerRef} className="relative select-none touch-none bg-background min-h-screen overflow-auto">
            <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-20" />
            
            {/* Palette Button */}
            <Button
                onClick={(e) => {
                    e.stopPropagation()
                    setShowPalette(!showPalette)
                }}
                size="lg"
                className="absolute top-6 right-6 z-50 bg-[#dc2626] hover:bg-[#b91c1c] rounded-full h-14 w-14 p-0 shadow-lg" 
            >
                <Palette className="h-6 w-6 dark:text-white" />
            </Button>

            {/* Palette Panel */}
            {showPalette && (
                <div className="absolute top-24 right-6 bg-white rounded-2xl shadow-2xl p-6 border border-gray-200 z-50 animate-in fade-in slide-in-from-bottom-4 duration-200">
                    <div className="space-y-4 min-w-[200px]">
                        <div>
                            <p className="text-sm font-semibold mb-3 text-gray-700">Couleur</p>
                            <div className="grid grid-cols-4 gap-2">
                                {colors.map((c) => {
                                    const isMappedBlack = c === '#000000' && isDarkTheme
                                    const displayColor = isMappedBlack ? '#FFFFFF' : c
                                    return (
                                        <button
                                            key={c}
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                setColor(displayColor)
                                            }}
                                            className={`h-10 w-10 rounded-lg transition-all hover:scale-110 ${
                                                color === displayColor ? 'ring-2 ring-[var(--color-primary)] ring-offset-2 scale-110' : ''
                                            } ${isMappedBlack ? 'border border-slate-200 dark:border-slate-700' : ''}`}
                                            style={{ backgroundColor: displayColor }}
                                        />
                                    )
                                })}
                            </div>
                        </div>

                        <div>
                                <p className="text-sm font-semibold mb-3 text-gray-700 dark:text-slate-300">Taille</p>
                                <input
                                type="range"
                                min="1"
                                max="20"
                                value={lineWidth}
                                onChange={(e) => setLineWidth(Number(e.target.value))}
                                className="w-full accent-[#dc2626]"
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                                <span>Fin</span>
                                <span>Épais</span>
                            </div>
                        </div>

                                <div className="flex gap-2 pt-2 border-t border-gray-200 dark:border-slate-700">
                                    <Button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            clearCanvas()
                                        }}
                                        variant="outline"
                                        size="sm"
                                        className="flex-1"
                                    >
                                        <Trash2 className="h-4 w-4 mr-2" />
                                        Effacer
                                    </Button>
                                </div>
                    </div>
                </div>
            )}

            <section className="relative overflow-hidden min-h-[100vh] ">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="container mx-auto px-4 py-20 md:py-32 relative">
                    <div className="max-w-6xl mx-auto">
                        <motion.h1 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="font-display text-5xl md:text-7xl font-bold mb-8 leading-[0.95] tracking-tight text-foreground"
                        >
                            Captivez vos étudiants
                            <br />
                            <span className="text-[var(--color-primary)]">avec l'interactivité</span>
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ delay: 0.2 }}
                            className="text-xl text-muted-foreground mb-8 max-w-2xl"
                        >
                            Des écrans tactiles qui transforment chaque leçon en expérience mémorable. 
                            Dessinez, annotez et collaborez en temps réel pour maintenir l'attention de tous les élèves.
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ delay: 0.3 }} 
                            className="flex flex-col sm:flex-row gap-4 mb-20"
                        >
                            <Button asChild size="lg" className="bg-[var(--color-primary)] text-white text-lg px-8 h-14">
                                <Link href="/demo">Réserver une démo en classe</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="text-lg px-8 h-14 border-2">
                                <Link href="/products">Voir les solutions éducatives</Link>
                            </Button>
                        </motion.div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { val: "92%", label: "Engagement étudiant" },
                                { val: "2h", label: "Formation enseignant" },
                                { val: "K-12", label: "Tous niveaux" },
                                { val: "24/7", label: "Support dédié" }
                            ].map((stat, i) => (
                                <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, y: 20 }} 
                                    animate={{ opacity: 1, y: 0 }} 
                                    transition={{ delay: 0.4 + i * 0.1 }} 
                                    className="bg-card rounded-xl p-6 border border-border shadow-sm"
                                >
                                    <div className="text-3xl font-bold text-[var(--color-primary)] mb-1">{stat.val}</div>
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