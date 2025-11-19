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
    name: "ZBEK Logo Kepka",
    price: "95,000",
    originalPrice: "120,000",
    rating: 4.9,
    reviews: 842,
    image: "/rasim1.jpg",
    description: "Brendingiz logosi tushirilgan premium sifatli kepkalar.",
    category: "cap",
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
    image: "/rasim2.jpg",
    description: "Qalin, sifatli material. Brendingiz uchun maxsus hudi.",
    category: "hoodie",
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
    category: "tshirt",
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
    image: "/rasim1.jpg",
    description: "Tikilgan (embroidery) logoli premium svitshot.",
    category: "sweatshirt",
    images: [
      "/rasim1.jpg",
      "/rasim2.jpg",
      "/rasim3.jpg",
    ],
  },
  {
    id: 5,
    name: "ZBEK Logo Kepka",
    price: "95,000",
    originalPrice: "120,000",
    rating: 4.9,
    reviews: 842,
    image: "/rasim2.jpg",
    description: "Brendingiz logosi tushirilgan premium sifatli kepkalar.",
    category: "collection",
    images: [
      "/rasim1.jpg",
      "/rasim2.jpg",
      "/rasim3.jpg",
    ],
  },
  {
    id: 6,
    name: "Oversize Hudi (Logo bilan)",
    price: "245,000",
    originalPrice: "310,000",
    rating: 5.0,
    reviews: 1294,
    image: "/rasim1.jpg",
    description: "Qalin, sifatli material. Brendingiz uchun maxsus hudi.",
    category: "hoodie",
    images: [
   "/rasim1.jpg",
      "/rasim2.jpg",
      "/rasim3.jpg",
    ],
  },
  {
    id: 7,
    name: "ZBEK Futbolka",
    price: "135,000",
    originalPrice: "180,000",
    rating: 4.8,
    reviews: 902,
    image: "/rasim3.jpg",
    description: "100% paxta. Print sifati uzoq yillarga chidamli.",
    category: "collection",
    images: [
       "/rasim1.jpg",
      "/rasim2.jpg",
      "/rasim3.jpg",
    ],
  },
  {
    id: 8,
    name: "Svitshot (Embroidery Logo)",
    price: "275,000",
    originalPrice: "330,000",
    rating: 4.9,
    reviews: 611,
    image: "/rasim1.jpg",
    description: "Tikilgan (embroidery) logoli premium svitshot.",
    category: "sweatshirt",
    images: [
      "/rasim1.jpg",
      "/rasim2.jpg",
      "/rasim3.jpg",
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