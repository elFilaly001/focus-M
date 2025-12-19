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
    const hasSeenPopup = localStorage.getItem("newsletter-popup-seen")
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem("newsletter-popup-seen", "true")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Newsletter signup:", email)
    setIsSubmitted(true)
    setTimeout(() => {
      handleClose()
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-2xl">
        <button onClick={handleClose} className="absolute right-4 top-4 text-muted-foreground hover:text-foreground">
          <X className="h-5 w-5" />
        </button>

        <div className="p-8">
          {!isSubmitted ? (
            <>
              <div className="mb-6">
                <div className="h-12 w-12 rounded bg-gradient-to-br from-[#dc2626] to-[#f87171] mb-4" />
                <h2 className="font-display text-2xl font-bold mb-2">Stay Updated</h2>
                <p className="text-muted-foreground">
                  Get the latest news about our interactive display solutions and exclusive offers.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
                <Button type="submit" className="w-full bg-[#dc2626] hover:bg-[#991b1b] text-white">
                  Subscribe Now
                </Button>
              </form>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </>
          ) : (
            <div className="py-8 text-center">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Thanks for subscribing!</h3>
              <p className="text-muted-foreground">Check your inbox for confirmation.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
