"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) e.stopPropagation(); // CRITICAL: Stop drawing events
    setIsOpen(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => handleClose(), 2000)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm touch-none dark:bg-black/70"
      onPointerDown={(e) => e.stopPropagation()} // Stop drawing on touch start
    >
      <div className="absolute inset-0" onClick={() => handleClose()} />

      <div className="relative w-full h-[350px] max-w-md bg-white rounded-lg shadow-2xl px-8 py-4" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={handleClose}
          className="absolute right-2 top-5 p-3 text-muted-foreground hover:text-foreground active:scale-90"
        >
          <X className="h-6 w-6" />
        </button>

        {!isSubmitted ? (
          <>
            <div className="mb-6">
              <div className="w-[150px] mb-4" >
                <img src="/LOGO/Screenshot_2025-12-19_153602-removebg-preview.png" alt="Newsletter" className="w-full h-full object-contain" />
              </div>
              <h2 className="font-display text-black text-2xl font-bold mb-2">Participer à notre tombola</h2>
              <p className="text-muted-foreground text-sm">Recevez les dernières nouvelles sur nos écrans tactiles.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-12"
              />
              <Button type="submit" className="w-full h-12 bg-[#dc2626] text-white hover:bg-[#991b1b]">
                S'abonner
              </Button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold mb-2">Merci !</h3>
            <p className="text-muted-foreground">Vérifiez votre boîte mail.</p>
          </div>
        )}
      </div>
    </div>
  )
}