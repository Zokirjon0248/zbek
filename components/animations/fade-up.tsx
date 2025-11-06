"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface FadeUpProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export default function FadeUp({ children, delay = 0, duration = 0.6, className = "" }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.style.opacity = "0"
      ref.current.style.transform = "translateY(30px)"

      setTimeout(() => {
        ref.current!.style.transition = `all ${duration}s ease-out`
        ref.current!.style.opacity = "1"
        ref.current!.style.transform = "translateY(0)"
      }, delay * 1000)
    }
  }, [delay, duration])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
