"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"

interface HeaderProps {
  onNavigate: (section: string) => void
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: "Bosh sahifa", id: "home" },
    { label: "Mahsulotlar", id: "products" },
    { label: "Biz haqida", id: "about" },
    { label: "Bog'lanish", id: "contact" },
  ]

  const handleMenuClick = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      onNavigate(id)
    }
    setIsOpen(false)
  }

  return (
    <header className="bg-[#090C0F] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-bold text-2xl text-primary whitespace-nowrap">ZBEK</div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 ml-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item.id)}
              className="text-white hover:text-primary transition font-medium"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile sheet */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <Button variant="ghost" size="icon" className="md:hidden ml-auto" onClick={() => setIsOpen(true)}>
            <Menu className="w-6 h-6 text-white" />
          </Button>

          <SheetContent side="right" className="w-72 bg-[#090C0F] text-white">
            <SheetHeader className="flex justify-between items-center">
              <SheetTitle className="text-primary text-xl">Menu</SheetTitle>
           
            </SheetHeader>

            <nav className="flex flex-col gap-2 mt-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className="text-left text-white hover:text-primary hover:bg-white/10 transition font-medium py-3 px-4 rounded-lg"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
