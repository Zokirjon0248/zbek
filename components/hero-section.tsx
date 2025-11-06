"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  onNavigate: (section: string) => void
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Fade in animation on mount
    if (titleRef.current) {
      titleRef.current.style.opacity = "0"
      titleRef.current.style.transform = "translateY(20px)"
      setTimeout(() => {
        titleRef.current!.style.transition = "all 0.8s ease-out"
        titleRef.current!.style.opacity = "1"
        titleRef.current!.style.transform = "translateY(0)"
      }, 100)
    }

    if (imageRef.current) {
      imageRef.current.style.opacity = "0"
      imageRef.current.style.scale = "0.9"
      setTimeout(() => {
        imageRef.current!.style.transition = "all 0.8s ease-out"
        imageRef.current!.style.opacity = "1"
        imageRef.current!.style.scale = "1"
      }, 300)
    }

    // Scroll animation
    const handleScroll = () => {
      if (titleRef.current && imageRef.current) {
        const scrollY = window.scrollY
        titleRef.current.style.transform = `translateY(${scrollY * 0.1}px)`
        imageRef.current.style.transform = `translateY(${-scrollY * 0.15}px) scale(${1 + scrollY * 0.0001})`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="bg-gradient-to-r from-primary/90 via-primary to-accent/80 py-16 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="flex-1">
          <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Go'zallikni Yangilang
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
            Eng yaxshi kosmetika va go'zallik mahsulotlari siz uchun maxsus tanlab olindi.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
            onClick={() => onNavigate("products")}
          >
            Sotib Olishni Boshlang
          </Button>
        </div>

        <div ref={imageRef} className="flex-1 flex justify-center">
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl"></div>
            <img
              src="/beauty-cosmetics-jar-product-purple.jpg"
              alt="Beauty Product"
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>
    </section>
  )
}
