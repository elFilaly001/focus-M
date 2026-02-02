"use client"

import { useState } from "react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function DemoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(formRef.current as HTMLFormElement)
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      sector: formData.get('sector'),
      screenCount: formData.get('screenCount'),
      preferredDate: formData.get('preferredDate'),
      additionalInfo: formData.get('additionalInfo'),
    }

    try {
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "Demande envoyée",
          description: "Nous vous contacterons bientôt pour planifier votre démo.",
        })
        // Reset form ---
        formRef.current?.reset()
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send demo request')
      }
    } catch (error) {
      console.error('Demo form submission error:', error);
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
          <label htmlFor="firstName" className="block text-sm font-medium mb-2">Prénom *</label>
          <Input id="firstName" name="firstName" placeholder="Jean" required />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-2">Nom *</label>
          <Input id="lastName" name="lastName" placeholder="Dupont" required />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">Email Professionnel *</label>
        <Input id="email" name="email" type="email" placeholder="jean@entreprise.com" required />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">Numéro de Téléphone *</label>
        <Input id="phone" name="phone" type="tel" placeholder="+212 1 23 45 67 89" required />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-2">Nom de l'Entreprise *</label>
        <Input id="company" name="company" placeholder="Votre Entreprise" required />
      </div>
      <div>
        <label htmlFor="sector" className="block text-sm font-medium mb-2">Secteur d'Activité</label>
        <Input id="sector" name="sector" placeholder="ex: Éducation, Entreprise, Santé" />
      </div>
      <div>
        <label htmlFor="screenCount" className="block text-sm font-medium mb-2">Nombre d'Écrans Nécessaires</label>
        <Input id="screenCount" name="screenCount" type="number" placeholder="1" min="1" />
      </div>
      <div>
        <label htmlFor="preferredDate" className="block text-sm font-medium mb-2">Date Préférée</label>
        <Input
          id="preferredDate"
          name="preferredDate"
          type="date"
          min={new Date().toISOString().split("T")[0]}
        />
      </div>
      <div>
        <label htmlFor="additionalInfo" className="block text-sm font-medium mb-2">Informations Complémentaires</label>
        <Textarea id="additionalInfo" name="additionalInfo" placeholder="Vos besoins spécifiques..." rows={4} />
      </div>
      <Button type="submit" size="lg" className="w-full bg-primary hover:bg-[#991b1b] text-white" disabled={isSubmitting}>
        {isSubmitting ? "Envoi en cours..." : "Réserver ma démo"}
      </Button>
    </form>
  )
}