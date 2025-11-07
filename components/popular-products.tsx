"use client"

import { useEffect, useRef, useState } from "react"

interface PopularProduct {
  id: number
  name?: string
  price?: string
  originalPrice?: string
  rating?: number
  reviews?: number
  image: string
  description?: string
  images?: string[]
  category?: string
}

interface PopularProductsProps {
  onProductSelect: (product: PopularProduct) => void
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
    category: "cream",
    images: [
      "/face-cream-moisturizer.jpg",
      "/face-cream-moisturizer-front.jpg",
      "/face-cream-moisturizer-side.jpg",
    ],
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
    category: "serum",
    images: [
      "/serum-essence-cosmetic.jpg",
      "/serum-essence-front.jpg",
      "/serum-essence-side.jpg"
    ],
  },
  {
    id: 3,
    name: "Tabiiy yuz kremi",
    price: "185,000",
    originalPrice: "250,000",
    rating: 4.9,
    reviews: 412,
    image: "/face-cream-moisturizer.jpg",
    description: "Tabiiy komponentlardan tayyorlangan krem",
    category: "cream",
    images: [
      "/face-cream-moisturizer.jpg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
  },
  {
    id: 4,
    name: "Premium serum",
    price: "185,000",
    originalPrice: "250,000",
    rating: 4.9,
    reviews: 412,
    image: "/serum-essence-cosmetic.jpg",
    description: "Premium serum terini yoshartiradi",
    category: "serum",
    images: [
      "/serum-essence-cosmetic.jpg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
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
    <section className="py-12 bg-linear-to-b from-amber-100 to-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            ⭐ Ommabop Mahsulotlar
          </h2>
          <p className="text-muted-foreground mt-2">Eng ko'p sotilayotgan mahsulotlarimiz</p>
        </div>

        <div className="relative flex flex-col items-center">
          {/* Rasm konteyner */}
          <div 
            className="relative w-full max-w-md md:max-w-lg h-80 md:h-96 overflow-hidden rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
            onClick={() => onProductSelect(currentProduct)}
          >
            {popularProducts.map((product, index) => (
              <div
                key={product.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name || `Popular product ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay with product info */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-10 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl md:text-2xl font-bold mb-1">{product.name}</h3>
                    <p className="text-sm md:text-base opacity-90 mb-2">{product.description}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold">{product.price} so'm</span>
                      <span className="text-sm line-through opacity-75">{product.originalPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Navigation dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {popularProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentIndex(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-white w-8" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Batafsil ko'rish hint */}
          <p className="mt-4 text-sm text-muted-foreground">
            Batafsil ma'lumot uchun rasmga bosing
          </p>
        </div>
      </div>
    </section>
  )
}