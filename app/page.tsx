"use client"

import { useState, useRef } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import CategoryNav from "@/components/category-nav"
import ProductGrid from "@/components/product-grid"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import ProductModal from "@/components/product-modal"
import Footer from "@/components/footer"
import PopularProducts from "@/components/popular-products"

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const productsRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const handleNavigation = (section: string) => {
    switch (section) {
      case "products":
        productsRef.current?.scrollIntoView({ behavior: "smooth" })
        break
      case "about":
        aboutRef.current?.scrollIntoView({ behavior: "smooth" })
        break
      case "contact":
        contactRef.current?.scrollIntoView({ behavior: "smooth" })
        break
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={handleNavigation} />
      <main className="w-full">
        <HeroSection onNavigate={handleNavigation} />

        <PopularProducts onProductSelect={setSelectedProduct} />

        <CategoryNav onCategorySelect={setSelectedCategory} activeCategory={selectedCategory} />

    

        <ProductGrid
        ref={productsRef}
          title="Yangi Mahsulotlar"
          subtitle="Eng so'nggi mahsulotlar"
          onProductSelect={setSelectedProduct}
          category={selectedCategory}
        />

        <AboutSection ref={aboutRef} />
        <ContactSection ref={contactRef} />
      </main>
      <Footer onNavigate={handleNavigation} />
      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  )
}
