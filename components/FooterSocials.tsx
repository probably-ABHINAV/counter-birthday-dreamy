"use client"

import { motion } from "framer-motion"
import SpotifyPlaylist from "./SpotifyPlaylist"

export default function FooterSocials() {
  const romanticImages = [
    {
      src: "/placeholder.svg?height=200&width=200&text=Romantic+Sunset",
      alt: "Romantic sunset",
      title: "Our First Date",
    },
    {
      src: "/placeholder.svg?height=200&width=200&text=Rose+Petals",
      alt: "Rose petals",
      title: "Valentine's Day",
    },
    {
      src: "/placeholder.svg?height=200&width=200&text=Floating+Lanterns",
      alt: "Floating lanterns",
      title: "Anniversary Night",
    },
    {
      src: "/placeholder.svg?height=200&width=200&text=Candlelight+Dinner",
      alt: "Candlelight dinner",
      title: "Romantic Dinner",
    },
  ]

  const birthdayImages = [
    {
      src: "/placeholder.svg?height=200&width=200&text=Birthday+Roses",
      alt: "Birthday roses",
      title: "Birthday Roses",
    },
    {
      src: "/placeholder.svg?height=200&width=200&text=Birthday+Candles",
      alt: "Birthday candles",
      title: "Wish Candles",
    },
    {
      src: "/placeholder.svg?height=200&width=200&text=Celebration",
      alt: "Celebration",
      title: "Celebration",
    },
    {
      src: "/placeholder.svg?height=200&width=200&text=Garden+Party",
      alt: "Garden party",
      title: "Garden Party",
    },
  ]

  return (
    <footer className="relative bg-gradient-to-t from-black/90 via-black/60 to-transparent py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-serif">
            🎵 Our Love Story Playlist 🎵
          </h2>
          <p className="text-rose-200 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Songs that remind me of you, beautiful memories we share together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Spotify Integration */}
          <div className="lg:col-span-1">
            <SpotifyPlaylist playlistId="22JDoeh5R8mCx98ETmtIdr" />
          </div>

          {/* Romantic Memories */}
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-rose-300/20 shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                💕
              </div>
              <h3 className="text-white font-semibold text-lg sm:text-xl">Beautiful Memories</h3>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
              {romanticImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden bg-gradient-to-br from-rose-200 to-pink-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-2">
                        <div className="text-2xl mb-2">💕</div>
                        <div className="text-rose-800 text-xs font-medium">{image.title}</div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-2 left-2 right-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.title}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-2 sm:py-3 rounded-lg sm:rounded-xl hover:from-rose-600 hover:to-pink-600 transition-all font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Our Moments 💖
            </motion.button>
          </motion.div>

          {/* Birthday Dreams */}
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-rose-300/20 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                🎂
              </div>
              <h3 className="text-white font-semibold text-lg sm:text-xl">Birthday Dreams</h3>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
              {birthdayImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden bg-gradient-to-br from-purple-200 to-pink-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-2">
                        <div className="text-2xl mb-2">🎂</div>
                        <div className="text-purple-800 text-xs font-medium">{image.title}</div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-2 left-2 right-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.title}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 sm:py-3 rounded-lg sm:rounded-xl transition-colors font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Birthday Surprise Ideas ✨
            </motion.button>
          </motion.div>
        </div>

        {/* Enhanced Copyright */}
        <motion.div
          className="text-center mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-rose-300/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-3">
            <span className="text-2xl sm:text-3xl">💖</span>
          </div>
          <p className="text-rose-200/90 text-sm sm:text-base mb-2">
            Made with endless love ✨ for the most beautiful soul 💖
          </p>
          <p className="text-rose-300/70 text-xs sm:text-sm">July 31st - A day as special as you are</p>
        </motion.div>
      </div>
    </footer>
  )
}
