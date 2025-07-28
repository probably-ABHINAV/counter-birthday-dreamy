"use client"

import { useEffect, useState } from "react"
import Confetti from "react-confetti"

export default function ConfettiEffect() {
  const [windowDimension, setWindowDimension] = useState({
    width: 0,
    height: 0,
  })
  const [showConfetti, setShowConfetti] = useState(true)

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateWindowDimensions()
    window.addEventListener("resize", updateWindowDimensions)

    // Stop confetti after 8 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false)
    }, 8000)

    return () => {
      window.removeEventListener("resize", updateWindowDimensions)
      clearTimeout(timer)
    }
  }, [])

  if (!showConfetti) return null

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1000, pointerEvents: 'none' }}>
      <Confetti
        width={windowDimension.width}
        height={windowDimension.height}
        recycle={false}
        numberOfPieces={150}
        gravity={0.3}
        wind={0.02}
        colors={['#f43f5e', '#ec4899', '#a855f7', '#3b82f6', '#10b981', '#f59e0b']}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none'
        }}
      />
    </div>
  )
}