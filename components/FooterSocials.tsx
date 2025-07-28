"use client"

import { motion } from "framer-motion"
import SpotifyPlaylist from "./SpotifyPlaylist"

export default function FooterSocials() {
  const romanticImages = [
    {
      src: "/images/WhatsApp Image 2025-07-28 at 20.05.19_91d15c84_1753725640296.jpg",
      alt: "Beautiful evening moment with flowers",
      title: "Evening Roses",
    },
    {
      src: "/images/WhatsApp Image 2025-07-28 at 20.05.20_e3bc51e4_1753725640295.jpg",
      alt: "Elegant moment by the window",
      title: "Golden Hour",
    },
    {
      src: "/images/WhatsApp Image 2025-07-28 at 20.05.20_5420dfb7_1753725640294.jpg",
      alt: "Graceful pose by glass doors",
      title: "Serene Moment",
    },
    {
      src: "/images/WhatsApp Image 2025-07-28 at 20.05.20_02bbe960_1753725640296.jpg",
      alt: "Birthday celebration with chocolate cake",
      title: "Sweet Celebration",
    },
  ]

  const birthdayImages = [
    {
      src: "/images/WhatsApp Image 2025-07-28 at 20.05.20_02bbe960_1753725640296.jpg",
      alt: "Birthday celebration with chocolate cake",
      title: "Birthday Celebration",
    },
    {
      src: "/images/WhatsApp Image 2025-07-28 at 20.05.19_91d15c84_1753725640296.jpg",
      alt: "Special evening with flowers",
      title: "Special Day",
    },
    {
      src: "/images/WhatsApp Image 2025-07-28 at 20.05.20_e3bc51e4_1753725640295.jpg",
      alt: "Beautiful birthday moment",
      title: "Birthday Joy",
    },
    {
      src: "/images/WhatsApp Image 2025-07-28 at 20.05.20_5420dfb7_1753725640294.jpg",
      alt: "Elegant birthday celebration",
      title: "Birthday Elegance",
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
                  <div className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
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
                  <div className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
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
