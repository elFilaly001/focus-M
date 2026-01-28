"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "Message envoyé",
          description: "Nous vous répondrons dès que possible.",
        })
        // Reset form
        formRef.current?.reset()
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-2">Prénom</label>
          <Input id="firstName" name="firstName" placeholder="Jean" required />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-2">Nom</label>
          <Input id="lastName" name="lastName" placeholder="Dupont" required />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">E-mail</label>
        <Input id="email" name="email" type="email" placeholder="jean@example.com" required />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">Téléphone</label>
        <Input id="phone" name="phone" type="tel" placeholder="+212 1 23 45 67 89" />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-2">Société</label>
        <Input id="company" name="company" placeholder="Votre entreprise" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
        <Textarea id="message" name="message" placeholder="Parlez-nous de votre projet..." rows={5} required />
      </div>
      <Button type="submit" size="lg" className="w-full bg-primary hover:bg-[#991b1b] text-white" disabled={isSubmitting}>
        {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
      </Button>
    </form>
  )
}