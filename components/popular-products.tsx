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
    name: "ZBEK Logo Kepka",
    price: "95,000",
    originalPrice: "120,000",
    rating: 4.9,
    reviews: 842,
    image: "/rasim2.jpg",
    description: "Brendingiz logosi tushirilgan premium sifatli kepkalar.",
    category: "Kepka",
    images: [
      "/rasim1.jpg",
      "/rasim2.jpg",
      "/rasim3.jpg",
    ],
  },
  {
    id: 2,
    name: "Oversize Hudi (Logo bilan)",
    price: "245,000",
    originalPrice: "310,000",
    rating: 5.0,
    reviews: 1294,
    image: "/rasim1.jpg",
    description: "Qalin, sifatli material. Brendingiz uchun maxsus hudi.",
    category: "Hudi",
    images: [
   "/rasim1.jpg",
      "/rasim2.jpg",
      "/rasim3.jpg",
    ],
  },
  {
    id: 3,
    name: "ZBEK Futbolka",
    price: "135,000",
    originalPrice: "180,000",
    rating: 4.8,
    reviews: 902,
    image: "/rasim3.jpg",
    description: "100% paxta. Print sifati uzoq yillarga chidamli.",
    category: "Futbolka",
    images: [
       "/rasim1.jpg",
      "/rasim2.jpg",
      "/rasim3.jpg",
    ],
  },
  {
    id: 4,
    name: "Svitshot (Embroidery Logo)",
    price: "275,000",
    originalPrice: "330,000",
    rating: 4.9,
    reviews: 611,
    image: "/rasim2.jpg",
    description: "Tikilgan (embroidery) logoli premium svitshot.",
    category: "Svitshot",
    images: [
      "/rasim1.jpg",
      "/rasim2.jpg",
      "/rasim3.jpg",
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
    <section className="py-12 bg-white">
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