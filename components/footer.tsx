"use client"

interface FooterProps {
  onNavigate: (section: string) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-linear-to-r from-primary to-accent text-primary-foreground py-12 border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Biz Haqida</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <button onClick={() => onNavigate("about")} className="hover:opacity-100 transition">
                  Biz Haqida
                </button>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Jamoa
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Xaridorlari
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Mahsulotlar</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <button onClick={() => onNavigate("products")} className="hover:opacity-100 transition">
                  Mahsulotlar
                </button>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Serum
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Maska
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Xizmatlar</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Bepul Yetkazib Berish
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  24/7 Qo'llab-Quvvatlash
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Oson Qaytarish
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Bog'lanish</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <button onClick={() => onNavigate("contact")} className="hover:opacity-100 transition">
                  Bog'lanish
                </button>
              </li>
              <li>Email: info@gozal.uz</li>
              <li>Telefon: +998 90 123 45 67</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>Barcha huquqlar himoyalangan © 2025 GoZal</p>
        </div>
      </div>
    </footer>
  )
}
