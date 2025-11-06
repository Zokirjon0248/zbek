"use client"

import { useEffect, useRef, useState } from "react"
import FadeUp from "@/components/animations/fade-up"

interface PopularProduct {
  id: number
  name?: string
  price?: string
  originalPrice?: string
  rating?: number
  reviews?: number
  image: string
  description?: string
}

interface PopularProductsProps {
  onProductSelect: React.Dispatch<any>;
}

const popularProducts: PopularProduct[] = [
  {
    id: 1,
    name: "Yuz uchun kremi",
    price: "245,000",
    originalPrice: "320,000",
    rating: 4.8,
    reviews: 324,
    image: "/face-cream-moisturizer.jpg",
    description: "Eng yaxshi yuz kremi, terini nemli va sog'lom qiladi",
  },
  {
    id: 2,
    name: "Serum turi",
    price: "185,000",
    originalPrice: "250,000",
    rating: 4.9,
    reviews: 412,
    image: "/serum-essence-cosmetic.jpg",
    description: "Tabiiy komponentlardan tayyorlangan serum",
  },
  {
    id: 3,
    name: "Serum turi",
    price: "185,000",
    originalPrice: "250,000",
    rating: 4.9,
    reviews: 412,
    image: "/face-cream-moisturizer.jpg",
    description: "Tabiiy komponentlardan tayyorlangan serum",
  },
  {
    id: 4,
    name: "Serum turi",
    price: "185,000",
    originalPrice: "250,000",
    rating: 4.9,
    reviews: 412,
    image: "/serum-essence-cosmetic.jpg",
    description: "Tabiiy komponentlardan tayyorlangan serum",
  },
]

export default function PopularProducts({ onProductSelect }: PopularProductsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollInterval = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    scrollInterval.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % popularProducts.length)
    }, 4000)

    return () => {
      if (scrollInterval.current) clearInterval(scrollInterval.current)
    }
  }, [])

  const currentProduct = popularProducts[currentIndex]

  return (
    <section className="py-12 bg-linear-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4">
        <FadeUp delay={0.1} className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            ⭐ Mahsulotlar
          </h2>
        </FadeUp>

        <div className="relative flex flex-col items-center">
          <div
            className="w-full max-w-md md:max-w-lg overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            onClick={() => onProductSelect(currentProduct)} // ✅ mahsulotni yuborish
          >
            {popularProducts.map((product, index) => (
              <div
                key={product.id}
                className={`transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0 absolute"
                }`}
              >
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name || `Popular product ${index + 1}`}
                  className="w-full h-80 md:h-96 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="absolute bottom-4 flex gap-2">
            {popularProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-primary/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
