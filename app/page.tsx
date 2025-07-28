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
import PerformanceWrapper from "@/components/PerformanceWrapper"

export default function Home() {
  const [isClient, setIsClient] = useState(false)
  const [showBirthdayMessage, setShowBirthdayMessage] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)

  // Personalization
  const name = "Aarushi" // You can customize this name
  // Set birthday date to July 31st, 2025
  const birthdayDate = new Date("2025-07-31T00:00:00")

  const birthdayMessages = [
    `Just wanted to remind you how amazing you are and how lucky I am to know you, ${name}. Your kindness, your smile, and your beautiful soul light up every room you enter. Can't wait to celebrate with you and make this birthday unforgettable! 🌟💕`,
    `${name}, you are the most incredible person I know. Your laughter is music to my ears, and your presence makes every day brighter. Here's to another year of your wonderful existence! 🎈✨`,
    `Every moment with you is a treasure, ${name}. Your compassion, intelligence, and beauty (inside and out) inspire everyone around you. May this new year bring you all the happiness you deserve! 💖🌹`,
    `${name}, you are pure magic! The way you see the world, the love you share, and the joy you bring to others is absolutely extraordinary. Happy early birthday to the most special person! 🎂💫`
  ]

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (showBirthdayMessage) {
      const interval = setInterval(() => {
        setMessageIndex((prev) => (prev + 1) % birthdayMessages.length)
      }, 8000)
      return () => clearInterval(interval)
    }
  }, [showBirthdayMessage, birthdayMessages.length])

  if (!isClient) {
    return <LoadingSpinner />
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-rose-900 via-purple-900 to-pink-900 overflow-x-hidden">
      <div className="relative w-full min-h-screen">
      {/* Enhanced Confetti Effect */}
      <ConfettiEffect />

      {/* Visual Music Player */}
      <MusicPlayer />

      {/* Enhanced Music Info Tooltip */}
      <div className="fixed top-16 sm:top-20 right-4 sm:right-8 z-10 max-w-xs">
        <div className="bg-black/70 backdrop-blur-lg text-white text-xs p-3 rounded-xl border border-white/30 shadow-2xl animate-pulse">
          <div className="flex items-center gap-2">
            <span className="text-lg">🎵</span>
            <span className="font-medium">💡 Visual music player - For actual songs, use the Spotify playlist below!</span>
          </div>
        </div>
      </div>

      {/* Hero Section with Enhanced Magic */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <HeroCanvas />

        {/* Enhanced Countdown Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center max-w-4xl mx-auto px-4">
            <div className="mb-8">
              <div className="relative inline-block">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-200 mb-4 animate-bounce">
                  Hey {name}! 👋✨
                </h2>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
              <p className="text-xl sm:text-2xl text-rose-300 font-semibold animate-pulse">
                Your magical day is approaching! 🎉💖
              </p>
            </div>

            <div className="relative mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-200 to-purple-200 mb-6 font-serif leading-tight drop-shadow-2xl animate-pulse">
                ✨ {name}'s Enchanted Birthday ✨
              </h1>
              <div className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white/20 mb-6 font-serif leading-tight blur-sm -z-10">
                ✨ {name}'s Enchanted Birthday ✨
              </div>
            </div>

            <p className="text-xl sm:text-2xl md:text-3xl text-rose-200 mb-10 italic drop-shadow-lg font-medium">
              Counting down to July 31st 💕🎂
            </p>

            <div className="mb-10">
              <CountdownTimer targetDate={birthdayDate} />
            </div>

            {/* Enhanced Birthday Message Button */}
            <div className="mt-10">
              <button
                onClick={() => setShowBirthdayMessage(!showBirthdayMessage)}
                className="relative bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 hover:from-rose-600 hover:via-pink-600 hover:to-purple-600 text-white font-bold py-4 px-10 rounded-full transform hover:scale-110 transition-all duration-500 shadow-2xl border-2 border-white/20 backdrop-blur-sm"
              >
                <span className="relative z-10 text-lg">
                  {showBirthdayMessage ? "Hide Messages 💖" : "✨ Reveal Your Special Messages 🎁"}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 via-pink-400/30 to-purple-400/30 rounded-full blur-lg animate-pulse"></div>
              </button>

              {showBirthdayMessage && (
                <div className="mt-8 space-y-6">
                  <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/30 max-w-3xl mx-auto shadow-2xl">
                    <div className="flex items-center justify-center mb-4">
                      <div className="flex space-x-2">
                        {birthdayMessages.map((_, index) => (
                          <div
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === messageIndex ? 'bg-rose-400 scale-125' : 'bg-white/40'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-white text-lg md:text-xl leading-relaxed font-medium text-center">
                      "{birthdayMessages[messageIndex]}"
                    </p>
                    <div className="flex justify-center mt-6">
                      <span className="text-rose-300 italic">— With endless love 💕</span>
                    </div>
                  </div>

                  {/* Message Counter */}
                  <div className="text-center text-rose-300/80 text-sm">
                    Message {messageIndex + 1} of {birthdayMessages.length} • Auto-changing every 8 seconds
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Memory Gallery */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
              🌟 Precious Memories 🌟
            </h2>
            <p className="text-rose-200 text-xl mb-8">
              Every photo tells our beautiful story, {name} 💖
            </p>
          </div>
          <MemoryGallery />
        </div>
      </section>

      {/* Enhanced Spotify Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-purple-900/40 via-rose-900/40 to-pink-900/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
              🎵 Our Love Symphony 🎵
            </h2>
            <p className="text-rose-200 text-xl mb-8">
              The soundtrack to your heart, {name} 💕
            </p>

            {/* Enhanced Spotify Call-to-Action */}
            <div className="mb-8">
              <a
                href="https://open.spotify.com/playlist/22JDoeh5R8mCx98ETmtIdr?si=OT8zX_7YRzCJB4oGvpj20Q"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 text-white font-bold py-5 px-10 rounded-full transform hover:scale-110 transition-all duration-500 shadow-2xl text-xl border-2 border-white/20"
              >
                <span className="text-3xl animate-bounce">🎵</span>
                <span className="font-black">🎧 Listen to Our Playlist on Spotify 🎧</span>
                <span className="text-3xl animate-pulse">💕</span>
              </a>
            </div>

            <p className="text-rose-300/90 text-base mb-2 font-medium">
              Click above for the full musical experience! 
            </p>
            <p className="text-rose-400/70 text-sm">
              Individual song previews available below
            </p>
          </div>
          <SpotifyPlaylist playlistId="22JDoeh5R8mCx98ETmtIdr" />
        </div>
      </section>

      {/* Enhanced Parallax Story Panels */}
      <PerformanceWrapper>
        <ParallaxSection
          id="3-days"
          title="3 Days — Floating Wishes"
          description="Dreams and wishes dance in the twilight sky..."
          backgroundImage="/images/twilight-sky.jpg"
          centerImage="/images/floating-lanterns.jpg"
          animationType="lanterns"
        />
      </PerformanceWrapper>

      <PerformanceWrapper>
        <ParallaxSection
          id="5-days"
          title="5 Days — Candlelit Dreams"
          description="Only 5 days until your special day, my love..."
          backgroundImage="/images/WhatsApp Image 2025-07-28 at 20.05.20_e3bc51e4_1753725640295.jpg"
          centerImage="/images/WhatsApp Image 2025-07-28 at 20.05.20_02bbe960_1753725640296.jpg"
          animationType="candles"
        />
      </PerformanceWrapper>

      <ParallaxSection
        id="1-day"
        title="1 Day — Rose Garden Dreams"
        description="Tomorrow, we celebrate the most beautiful soul..."
        backgroundImage="/images/enchanted-garden.jpg"
        centerImage="/images/WhatsApp Image 2025-07-28 at 20.05.19_91d15c84_1753725640296.jpg"
        animationType="balloons"
      />

      <ParallaxSection
        id="birthday-eve"
        title="Birthday Eve — Enchanted Moments"
        description="On the eve of magic, my heart beats for you..."
        backgroundImage="/images/forest-path.jpg"
        centerImage="/images/WhatsApp Image 2025-07-28 at 20.05.20_e3bc51e4_1753725640295.jpg"
        animationType="fireflies"
      />

      {/* Enhanced Calendar Reminder */}
      <CalendarReminder />

      {/* Enhanced Footer */}
      <FooterSocials />

      {/* Enhanced Interactive Wish Orb */}
      <InteractiveOrb />
      </div>
    </main>
  )
}