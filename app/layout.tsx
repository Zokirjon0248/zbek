import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// O'zbek tiliga mos font
const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "ZBEK - Brendingiz Mahsulotlari",
  description: "ZBEK brendi orqali sifatli kepka, hudi, futbolka va boshqa mahsulotlar",
  generator: "ZBEK Official",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz" dir="ltr">
      <body className={`${inter.className} antialiased bg-[#090C0F] text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
