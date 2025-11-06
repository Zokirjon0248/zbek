"use client"

import { Star } from "lucide-react"
import { useState, useEffect, forwardRef, useImperativeHandle, useRef } from "react"
import { Button } from "@/components/ui/button"
import FadeUp from "@/components/animations/fade-up"

interface Product {
  id: number
  name: string
  price: string
  originalPrice: string
  rating: number
  reviews: number
  image: string
  category: string
  description: string
  images?: string[]
}

const allProducts: Product[] = [
  {
    id: 1,
    name: "Yuz uchun kremi",
    price: "245,000",
    originalPrice: "320,000",
    rating: 4.8,
    reviews: 324,
    image: "/face-cream-moisturizer.jpg",
    category: "cream",
    description: "Eng yaxshi yuz kremi, terini nemli va sog'lom qiladi",
    images: [
      "/face-cream-moisturizer-front.jpg",
      "/face-cream-moisturizer-side.jpg",
      "/face-cream-moisturizer-back.jpg",
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
    category: "serum",
    description: "Tabiiy komponentlardan tayyorlangan serum",
    images: ["/serum-essence-front.jpg", "/serum-essence-side.jpg", "/serum-essence-back.jpg"],
  },
  {
    id: 3,
    name: "Yuz uchun maska",
    price: "125,000",
    originalPrice: "165,000",
    rating: 4.7,
    reviews: 287,
    image: "/face-mask-skincare.jpg",
    category: "mask",
    description: "Quvvat beruvchi va ta'mirlaydi yuzni",
    images: ["/face-mask-skincare-front.jpg", "/face-mask-skincare-side.jpg", "/face-mask-skincare-back.jpg"],
  },
  {
    id: 4,
    name: "Organik yog'",
    price: "95,000",
    originalPrice: "130,000",
    rating: 4.6,
    reviews: 156,
    image: "/organic-oil-skincare.jpg",
    category: "natural",
    description: "100% tabiiy organik yog'",
    images: ["/organic-oil-front.jpg", "/organic-oil-side.jpg", "/placeholder.svg?height=400&width=400"],
  },
  {
    id: 5,
    name: "Toza qiluvchi toner",
    price: "75,000",
    originalPrice: "110,000",
    rating: 4.8,
    reviews: 203,
    image: "/placeholder.svg?height=240&width=240",
    category: "cleansing",
    description: "Terini sof qiladi va tayyorlab yuboradi",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
  },
  {
    id: 6,
    name: "Yuz uchun gel",
    price: "165,000",
    originalPrice: "220,000",
    rating: 4.7,
    reviews: 189,
    image: "/placeholder.svg?height=240&width=240",
    category: "cleansing",
    description: "Yumshoq gel, terini zarb bermaydi",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
  },
  {
    id: 7,
    name: "Serum konsentratsiya",
    price: "295,000",
    originalPrice: "380,000",
    rating: 4.9,
    reviews: 456,
    image: "/placeholder.svg?height=240&width=240",
    category: "serum",
    description: "Premium serum yuqori konsentratsiyasi bilan",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
  },
  {
    id: 8,
    name: "Krem SPF 50",
    price: "215,000",
    originalPrice: "290,000",
    rating: 4.8,
    reviews: 342,
    image: "/placeholder.svg?height=240&width=240",
    category: "cream",
    description: "Quyosh nuridan himoya qiluvchi krem",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
  },
]

interface ProductGridProps {
  title: string
  subtitle: string
  onProductSelect: (product: Product) => void
  category?: string | null
}

const ProductGrid = forwardRef<HTMLDivElement, ProductGridProps>(
  ({ title, subtitle, onProductSelect, category }, ref) => {
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts)
    const localRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => localRef.current!)

    useEffect(() => {
      if (category) {
        setFilteredProducts(allProducts.filter((p) => p.category === category))
      } else {
        setFilteredProducts(allProducts)
      }
    }, [category])

    return (
      <section ref={localRef} className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <FadeUp delay={0.1} className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{title}</h2>
            <p className="text-muted-foreground">{subtitle}</p>
          </FadeUp>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Bu kategoriyada mahsulot yo'q</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product, index) => (
                <FadeUp key={product.id} delay={index * 0.1}>
                  <div
                    onClick={() => onProductSelect(product)}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer hover:scale-105"
                  >
                    <div className="relative bg-secondary h-48 md:h-56 overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute bottom-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-bold">
                        -30%
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="font-bold text-foreground mb-2 line-clamp-2 text-sm md:text-base">
                        {product.name}
                      </h3>

                      <div className="flex items-center gap-1 mb-2">
                        <div className="flex items-center gap-0.5">
                          <Star className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs md:text-sm font-semibold text-foreground">{product.rating}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">({product.reviews})</span>
                      </div>

                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-base md:text-lg font-bold text-primary">{product.price}</span>
                        <span className="text-xs md:text-sm text-muted-foreground line-through">
                          {product.originalPrice}
                        </span>
                      </div>

                      <Button
                        size="sm"
                        className="w-full bg-primary hover:bg-primary/90 font-semibold text-xs md:text-sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          onProductSelect(product)
                        }}
                      >
                        Batafsil Ko'rish
                      </Button>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          )}
        </div>
      </section>
    )
  }
)

ProductGrid.displayName = "ProductGrid"

export default ProductGrid