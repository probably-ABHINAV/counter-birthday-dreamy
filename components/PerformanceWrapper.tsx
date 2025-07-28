
"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

interface PerformanceWrapperProps {
  children: React.ReactNode
  className?: string
}

export default function PerformanceWrapper({ children, className = "" }: PerformanceWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Add GPU acceleration
    element.style.transform = "translateZ(0)"
    element.style.willChange = "auto"
    
    // Optimize scroll performance
    const handleScroll = () => {
      if (element) {
        element.style.willChange = "scroll-position"
      }
    }

    const handleScrollEnd = () => {
      if (element) {
        element.style.willChange = "auto"
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("scrollend", handleScrollEnd, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("scrollend", handleScrollEnd)
    }
  }, [])

  return (
    <div 
      ref={ref}
      className={`gpu-accelerated ${className}`}
      style={{
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        perspective: "1000px"
      }}
    >
      {children}
    </div>
  )
}
