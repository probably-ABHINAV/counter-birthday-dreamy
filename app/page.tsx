"use client"

import { useState, useEffect } from "react"
import CountdownTimer from "@/components/CountdownTimer"
import ParallaxSection from "@/components/ParallaxSection"
import InteractiveOrb from "@/components/InteractiveOrb"
import FooterSocials from "@/components/FooterSocials"
import LoadingSpinner from "@/components/LoadingSpinner"
import HeroCanvas from "@/components/HeroCanvas"

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  // Set birthday date to July 31st, 2025
  const birthdayDate = new Date("2025-07-31T00:00:00")

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <LoadingSpinner />
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-rose-900 via-purple-900 to-pink-900 overflow-x-hidden">
      {/* Hero Section with Safe 3D Scene */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <HeroCanvas />

        {/* Countdown Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-serif leading-tight">
              ✨ Her Magical Birthday ✨
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-rose-200 mb-8 italic">Counting down to July 31st 💕</p>
            <CountdownTimer targetDate={birthdayDate} />
          </div>
        </div>

        {/* Ambient Audio Control */}
        <div className="absolute top-4 sm:top-8 right-4 sm:right-8 z-20">
          <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300">
            🎵
          </button>
        </div>
      </section>

      {/* Parallax Story Panels */}
      <ParallaxSection
        id="5-days"
        title="5 Days — Candlelit Dreams"
        description="Only 5 days until your special day, my love..."
        backgroundImage="/placeholder.svg?height=1080&width=1920&text=Romantic+Background"
        centerImage="/placeholder.svg?height=450&width=600&text=Candles"
        animationType="candles"
      />

      <ParallaxSection
        id="3-days"
        title="3 Days — Floating Wishes"
        description="Dreams and wishes dance in the twilight sky..."
        backgroundImage="/placeholder.svg?height=1080&width=1920&text=Twilight+Sky"
        centerImage="/placeholder.svg?height=450&width=600&text=Lanterns"
        animationType="lanterns"
      />

      <ParallaxSection
        id="1-day"
        title="1 Day — Rose Garden Dreams"
        description="Tomorrow, we celebrate the most beautiful soul..."
        backgroundImage="/placeholder.svg?height=1080&width=1920&text=Rose+Garden"
        centerImage="/placeholder.svg?height=450&width=600&text=Roses"
        animationType="balloons"
      />

      <ParallaxSection
        id="birthday-eve"
        title="Birthday Eve — Enchanted Moments"
        description="On the eve of magic, my heart beats for you..."
        backgroundImage="/placeholder.svg?height=1080&width=1920&text=Enchanted+Garden"
        centerImage="/placeholder.svg?height=450&width=600&text=Magic"
        animationType="fireflies"
      />

      {/* Footer with Social Integrations */}
      <FooterSocials />

      {/* Interactive Wish Orb */}
      <InteractiveOrb />
    </main>
  )
}
