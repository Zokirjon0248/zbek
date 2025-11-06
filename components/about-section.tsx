"use client"

import { forwardRef } from "react"
import { CheckCircle } from "lucide-react"
import FadeUp from "@/components/animations/fade-up"

const AboutSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeUp delay={0.1}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Biz Haqida</h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                GoZal - O'zbekistonning eng ishonchli va sifatli kosmetika va go'zallik mahsulotlari do'konidir. Biz
                2018 yildan beri xodimlari va hazratimizdagi mijozlarimiz uchun eng yaxshi xizmat ko'rsatishga
                bag'ishlandi.
              </p>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Bizning mahsulotlari hamma xorazm va tarmoqlar uchun xohlangan, shuningdek eng yuqori sifat
                standartlariga javob beradi. Biz faqat tabiiy va sertifikatlangan komponentlardan foydalanimiz.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-foreground">100% Tabiiy Komponentlar</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-foreground">Xalqaro Sertifikatsiya</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-foreground">24/7 Qo'llab-Quvvatlash</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-foreground">Bepul Yetkazib Berish</span>
                </div>
              </div>
            </div>
          </FadeUp>

          <div className="grid grid-cols-2 gap-4">
            <FadeUp delay={0.2}>
              <div className="bg-primary/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
                <p className="text-foreground/70">Baxtli Xaridorlari</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="bg-accent/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">1000+</div>
                <p className="text-foreground/70">Mahsulot Navlari</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.4}>
              <div className="bg-primary/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">5★</div>
                <p className="text-foreground/70">Reytingi</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.5}>
              <div className="bg-accent/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <p className="text-foreground/70">Qabul</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
})

AboutSection.displayName = "AboutSection"
export default AboutSection
