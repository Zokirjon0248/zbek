"use client"

import { useEffect, useRef } from "react"

interface BlurTextProps {
  text: string
  delay?: number
  duration?: number
  className?: string
}

export default function BlurText({ text, delay = 0, duration = 0.5, className = "" }: BlurTextProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.style.opacity = "0"
      ref.current.style.filter = "blur(10px)"

      setTimeout(() => {
        ref.current!.style.transition = `all ${duration}s ease-out`
        ref.current!.style.opacity = "1"
        ref.current!.style.filter = "blur(0px)"
      }, delay * 1000)
    }
  }, [delay, duration])

  return (
    <div ref={ref} className={className}>
      {text}
    </div>
  )
}
