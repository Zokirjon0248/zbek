"use client"

import { Flower, Droplet, Wind, Sparkles, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CategoryNavProps {
  onCategorySelect: (category: string | null) => void
  activeCategory: string | null
}

const categories = [
  { icon: Leaf, label: "Kepka", id: "cap" },
  { icon: Sparkles, label: "Hudi", id: "hoodie" },
  { icon: Wind, label: "Futbolka", id: "tshirt" },
  { icon: Flower, label: "Svitshot", id: "sweatshirt" },
  { icon: Droplet, label: "Kolleksiya", id: "collection" },
]


export default function CategoryNav({ onCategorySelect, activeCategory }: CategoryNavProps) {
  return (
    <section className="py-12 bg-liner-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-foreground text-center md:text-left">Kategoriyalar</h2>
        <div className="flex flex-wrap gap-2 md:gap-4 justify-center md:justify-start">
          <Button
            variant={activeCategory === null ? "default" : "outline"}
            onClick={() => onCategorySelect(null)}
            className="px-4 py-2 md:px-7 md:py-6 rounded-full font-medium transition-all duration-300 text-sm md:text-base"
          >
            Barchasi
          </Button>
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                className={`flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-white border-2 border-primary/20 text-foreground hover:border-primary hover:bg-primary/5"
                }`}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
                <span>{category.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
