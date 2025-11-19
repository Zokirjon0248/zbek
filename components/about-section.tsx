"use client";

import { forwardRef } from "react";
import { CheckCircle } from "lucide-react";
import FadeUp from "@/components/animations/fade-up";

const AboutSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Matn qismi */}
          <div>
            <FadeUp delay={0}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Biz haqimizda
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                Zbek — O'zbekistonda brendlar, tadbirkorlar va ijodkorlar uchun
                maxsus kiyimlar ishlab beruvchi xizmatdir. Biz kepka, hudi,
                futbolka, svitshot, to'plamlar va boshqa kiyimlarga siz xohlagan
                logotip yoki dizaynni professional tarzda bosib chiqaramiz.
              </p>

              <p className="text-foreground/80 mb-6 leading-relaxed">
                Har bir buyurtma biz uchun alohida loyiha. Kiyim sifatini, bosma
                ravshanligini va rang chidamliligini yuqori darajada ta'minlaymiz.
                Cheklangan kolleksiya, xodimlar uchun forma yoki brending uchun
                merch – barchasini sifatli va tezkor tayyorlab beramiz.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-foreground">
                    Tezkor ishlab chiqarish (1–2 kun)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-foreground">
                    Premium sifatdagi mato va bosma usullari
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-foreground">
                    Minimal partiya — 10 dona ham tayyorlaymiz
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-foreground">
                    Butun O'zbekiston bo'ylab yetkazib berish
                  </span>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Statistika kartochkalari */}
          <div className="grid grid-cols-2 gap-4">
            <FadeUp delay={0.3}>
              <div className="bg-primary/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  50,000+
                </div>
                <p className="text-foreground/70">Baxtli Xaridorlari</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.4}>
              <div className="bg-accent/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">1000+</div>
                <p className="text-foreground/70">Mahsulot Navlari</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.5}>
              <div className="bg-primary/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">5★</div>
                <p className="text-foreground/70">Reytingi</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.6}>
              <div className="bg-accent/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <p className="text-foreground/70">Qabul</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";
export default AboutSection;