"use client"

import { useState } from "react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { fr } from "date-fns/locale"

export function DemoForm() {

  // Helper to get tomorrow's date at midnight for proper comparison
  function getTomorrowDate() {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(0, 0, 0, 0)
    return tomorrow
  }

  // Helper to check if a date is a weekend (Saturday = 6, Sunday = 0)
  function isWeekend(date: Date) {
    const day = date.getDay()
    return day === 0 || day === 6
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [calendarOpen, setCalendarOpen] = useState(false)
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
      preferredDate: selectedDate ? format(selectedDate, 'yyyy-MM-dd') : null,
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
        setSelectedDate(undefined)
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
        <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal bg-input dark:bg-[#080c13] border-input h-9 px-3 py-1",
                !selectedDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {selectedDate ? format(selectedDate, "PPP", { locale: fr }) : "Sélectionner une date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={(date) => {
                setSelectedDate(date)
                setCalendarOpen(false)
              }}
              disabled={(date) => date < getTomorrowDate() || isWeekend(date)}
              locale={fr}
              modifiers={{
                weekend: (date) => isWeekend(date),
              }}
              modifiersClassNames={{
                weekend: "text-red-400 opacity-50 line-through",
              }}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <p className="text-xs text-muted-foreground mt-1">Disponible du lundi au vendredi uniquement</p>
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