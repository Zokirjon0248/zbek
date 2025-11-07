"use client"

import type React from "react"

import { forwardRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"
import FadeUp from "@/components/animations/fade-up"

const ContactSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.phone && formData.message) {
      setSubmitted(true)
      setFormData({ name: "", phone: "", email: "", message: "" })
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section ref={ref} className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4">
        <FadeUp delay={0.1} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Bog'lanish</h2>
          <p className="text-foreground/70">Bizga savollaringiz yoki takliflaringiz bo'lsa, iltimos bizga yozing</p>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
         <FadeUp delay={0.2}>
  <div className="bg-white rounded-xl p-6 text-center shadow-md">
    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
      <Phone className="w-6 h-6 text-primary" />
    </div>
    <h3 className="font-bold text-foreground mb-2">Telefon</h3>
    <a
      href="tel:+998901234567"
      className="text-foreground/70 hover:text-primary transition"
    >
      +998 90 123 45 67
    </a>
  </div>
</FadeUp>


          <FadeUp delay={0.3}>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Email</h3>
              <p className="text-foreground/70">info@gozal.uz</p>
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Manzil</h3>
              <p className="text-foreground/70">Tashkent, O'zbekiston</p>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.3} className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            {submitted && (
              <div className="mb-6 bg-green-50 border-2 border-green-500 rounded-lg p-4 text-center">
                <p className="text-green-700 font-semibold">
                  Xabaringiz qabul qilindi! Tez orada siz bilan bog'lanishimiz.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Ismingiz *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  placeholder="Telefon raqam *"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <Input
                placeholder="Email (ixtiyoriy)"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <Textarea
                placeholder="Sizning xabaringiz *"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
              />

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 font-semibold">
                Xabar Jo'natish
              </Button>
            </form>
          </div>
        </FadeUp>
      </div>
    </section>
  )
})

ContactSection.displayName = "ContactSection"
export default ContactSection
