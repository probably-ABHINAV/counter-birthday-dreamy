"use client"

import { useState, useEffect } from "react"
import CountdownTimer from "@/components/CountdownTimer"
import ParallaxSection from "@/components/ParallaxSection"
import InteractiveOrb from "@/components/InteractiveOrb"
import FooterSocials from "@/components/FooterSocials"
import LoadingSpinner from "@/components/LoadingSpinner"
import HeroCanvas from "@/components/HeroCanvas"
import ConfettiEffect from "@/components/ConfettiEffect"
import MemoryGallery from "@/components/MemoryGallery"
import MusicPlayer from "@/components/MusicPlayer"
import CalendarReminder from "@/components/CalendarReminder"
import SpotifyPlaylist from "@/components/SpotifyPlaylist"

export default function Home() {
  const [isClient, setIsClient] = useState(false)
  const [showBirthdayMessage, setShowBirthdayMessage] = useState(false)

  // Personalization
  const name = "Aarushi" // You can customize this name
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
      <div className="relative w-full min-h-screen">
      {/* Confetti Effect */}
      <ConfettiEffect />

      {/* Visual Music Player */}
      <MusicPlayer />

      {/* Music Info Tooltip */}
      <div className="fixed top-16 sm:top-20 right-4 sm:right-8 z-10 max-w-xs">
        <div className="bg-black/60 backdrop-blur-sm text-white text-xs p-2 rounded-lg border border-white/20 opacity-75">
          💡 Visual music player - For actual songs, use the Spotify playlist below!
        </div>
      </div>

      {/* Hero Section with Pure CSS Magic */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <HeroCanvas />

        {/* Countdown Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center max-w-4xl mx-auto px-4">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-rose-200 mb-2">
                Hey {name}! 👋
              </h2>
              <p className="text-lg sm:text-xl text-rose-300">
                Your special day is coming up! 🎉
              </p>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-serif leading-tight drop-shadow-2xl">
              ✨ {name}'s Magical Birthday ✨
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-rose-200 mb-8 italic drop-shadow-lg">
              Counting down to July 31st 💕
            </p>
            <CountdownTimer targetDate={birthdayDate} />

            {/* Birthday Message Reveal Button */}
            <div className="mt-8">
              <button
                onClick={() => setShowBirthdayMessage(!showBirthdayMessage)}
                className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                {showBirthdayMessage ? "Hide Message 💖" : "Click to reveal your birthday message 🎁"}
              </button>

              {showBirthdayMessage && (
                <div className="mt-6 bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 max-w-2xl mx-auto">
                  <p className="text-white text-lg leading-relaxed">
                    "Just wanted to remind you how amazing you are and how lucky I am to know you, {name}. 
                    Your kindness, your smile, and your beautiful soul light up every room you enter. 
                    Can't wait to celebrate with you and make this birthday unforgettable! 🌟💕"
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        </section>

      {/* Memory Gallery */}
      <MemoryGallery />

      {/* Spotify Playlist Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              🎵 Our Love Songs 🎵
            </h2>
            <p className="text-rose-200 text-lg mb-4">
              The soundtrack to your heart, {name} 💕
            </p>

            {/* Main Spotify Call-to-Action */}
            <div className="mb-6">
              <a
                href="https://open.spotify.com/playlist/22JDoeh5R8mCx98ETmtIdr?si=OT8zX_7YRzCJB4oGvpj20Q"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg text-lg"
              >
                <span className="text-2xl">🎵</span>
                🎧 Listen to Our Playlist on Spotify 🎧
                <span className="text-2xl">💕</span>
              </a>
            </div>

            <p className="text-rose-300/80 text-sm italic mb-2">
              Click the button above to hear the actual songs, or browse them below! 
            </p>
            <p className="text-rose-400/70 text-xs">
              Individual song links are also available in the playlist below
            </p>
          </div>
          <SpotifyPlaylist playlistId="22JDoeh5R8mCx98ETmtIdr" />
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

      {/* Calendar Reminder */}
      <CalendarReminder />

      {/* Footer with Social Integrations */}
      <FooterSocials />

      {/* Interactive Wish Orb */}
      <InteractiveOrb />
      </div>
    </main>
  )
}