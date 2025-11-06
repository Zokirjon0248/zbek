"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ScaleInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export default function ScaleIn({ children, delay = 0, duration = 0.5, className = "" }: ScaleInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.style.opacity = "0"
      ref.current.style.transform = "scale(0.9)"

      setTimeout(() => {
        ref.current!.style.transition = `all ${duration}s ease-out`
        ref.current!.style.opacity = "1"
        ref.current!.style.transform = "scale(1)"
      }, delay * 1000)
    }
  }, [delay, duration])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
