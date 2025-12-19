"use client"
import { useRef, useState, useEffect } from 'react'
import { Palette, Eraser, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const colors = [
  '#000000', // Black
  '#dc2626', // Red
  '#2563eb', // Blue
  '#16a34a', // Green
  '#ca8a04', // Yellow
  '#9333ea', // Purple
  '#ea580c', // Orange
  '#06b6d4', // Cyan
]

export function DrawingCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [color, setColor] = useState('#000000')
  const [lineWidth, setLineWidth] = useState(5)
  const [showPalette, setShowPalette] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Set initial styles
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
  }, [])

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    setIsDrawing(true)
    const rect = canvas.getBoundingClientRect()
    ctx.beginPath()
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top)
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    ctx.strokeStyle = color
    ctx.lineWidth = lineWidth
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top)
    ctx.stroke()
  }

  const stopDrawing = () => {
    setIsDrawing(false)
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        className="w-full h-full bg-white rounded-2xl border-2 border-gray-200 cursor-crosshair shadow-xl"
      />

      {/* Palette Button */}
      <Button
        onClick={() => setShowPalette(!showPalette)}
        size="lg"
        className="absolute bottom-6 right-6 bg-[#dc2626] hover:bg-[#b91c1c] rounded-full h-14 w-14 p-0 shadow-lg"
      >
        <Palette className="h-6 w-6" />
      </Button>

      {/* Palette Panel */}
      {showPalette && (
        <div className="absolute bottom-24 right-6 bg-white rounded-2xl shadow-2xl p-6 border border-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="space-y-4 min-w-[200px]">
            {/* Color Selection */}
            <div>
              <p className="text-sm font-semibold mb-3 text-gray-700">Couleur</p>
              <div className="grid grid-cols-4 gap-2">
                {colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`h-10 w-10 rounded-lg transition-all hover:scale-110 ${
                      color === c ? 'ring-2 ring-[#dc2626] ring-offset-2 scale-110' : ''
                    }`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>

            {/* Brush Size */}
            <div>
              <p className="text-sm font-semibold mb-3 text-gray-700">Taille</p>
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

            {/* Tools */}
            <div className="flex gap-2 pt-2 border-t border-gray-200">
              <Button
                onClick={() => setColor('#FFFFFF')}
                variant="outline"
                size="sm"
                className="flex-1"
              >
                <Eraser className="h-4 w-4 mr-2" />
                Gomme
              </Button>
              <Button
                onClick={clearCanvas}
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
    </div>
  )
}