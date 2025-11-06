"use client"

import type React from "react"
import { useState } from "react"
import { X, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Product {
  id: number
  name: string
  price: string
  originalPrice: string
  rating: number
  reviews: number
  image: string
  description: string
  images: string[]
}

interface ProductModalProps {
  product: Product
  onClose: () => void
}


export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({ name: "", phone: "", info: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleImageChange = (direction: "next" | "prev") => {
    if (direction === "next") {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
    }
  }

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.phone) {
      setSubmitted(true)
      setTimeout(() => {
        onClose()
        setShowForm(false)
        setSubmitted(false)
      }, 2000)
    }
  }

  return (
    
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl max-w-4xl w-full my-4 sm:my-6 md:my-8 animate-in fade-in duration-300 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8">
          {/* Image Gallery */}
          <div>
            <div className="relative bg-gray-100 rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-4 h-56 sm:h-72 md:h-80 lg:h-96">
              <img
                src={product.images[currentImageIndex] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => handleImageChange("prev")}
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-1.5 sm:p-2 rounded-full transition"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => handleImageChange("next")}
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-1.5 sm:p-2 rounded-full transition"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Image Thumbnails */}
            <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-md sm:rounded-lg overflow-hidden border-2 transition ${
                    idx === currentImageIndex ? "border-primary" : "border-gray-200"
                  }`}
                >
                  <img src={img || "/placeholder.svg"} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="flex items-center gap-0.5 sm:gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                      i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="font-semibold text-gray-900 text-sm sm:text-base">{product.rating}</span>
              <span className="text-gray-500 text-sm sm:text-base">({product.reviews} sharx)</span>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">{product.description}</p>

            {/* Price */}
            <div className="mb-4 sm:mb-6">
              <div className="flex items-baseline gap-2 sm:gap-3 mb-1 sm:mb-2">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">{product.price}</span>
                <span className="text-lg sm:text-xl text-gray-500 line-through">{product.originalPrice}</span>
              </div>
              <p className="text-green-600 font-semibold text-sm sm:text-base">30% chegirma</p>
            </div>

            {/* Buttons */}
            {!showForm ? (
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 font-semibold text-sm sm:text-base h-11 sm:h-12"
                onClick={() => setShowForm(true)}
              >
                Zakaz Berish
              </Button>
            ) : (
              <div className="space-y-3 sm:space-y-4">
                {submitted ? (
                  <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 sm:p-6 text-center">
                    <p className="text-green-700 font-semibold text-base sm:text-lg">Zakaz qabul qilindi!</p>
                    <p className="text-green-600 mt-1 sm:mt-2 text-sm sm:text-base">Tez orada siz bilan bog'lanishimiz</p>
                  </div>
                ) : (
                  <>
                    <Input
                      placeholder="Ismingiz *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="text-sm sm:text-base h-10 sm:h-11"
                    />
                    <Input
                      placeholder="Telefon raqamingiz *"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="text-sm sm:text-base h-10 sm:h-11"
                    />
                    <Button
                      size="lg"
                      className="w-full bg-green-600 hover:bg-green-700 font-semibold text-sm sm:text-base h-11 sm:h-12"
                      onClick={handleSubmitOrder}
                    >
                      Zakaz Berish
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full bg-transparent text-sm sm:text-base h-11 sm:h-12"
                      onClick={() => setShowForm(false)}
                    >
                      Bekor Qilish
                    </Button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}