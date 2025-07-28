
"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function MemoryGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const allImages = [
    {
      src: "/images/WhatsApp Image 2025-07-28 at 20.05.19_91d15c84_1753725640296.jpg",
      alt: "Beautiful evening moment with flowers",
      title: "Evening Roses",
      description: "A magical evening filled with love and beautiful flowers",
    },
    {
      src: "/images/WhatsApp Image 2025-07-28 at 20.05.20_e3bc51e4_1753725640295.jpg",
      alt: "Elegant moment by the window",
      title: "Golden Hour",
      description: "Captured in perfect golden light, radiating natural beauty",
    },
    {
      src: "/images/WhatsApp Image 2025-07-28 at 20.05.20_5420dfb7_1753725640294.jpg",
      alt: "Graceful pose by glass doors",
      title: "Serene Moment",
      description: "A peaceful moment showcasing natural grace and elegance",
    },
    {
      src: "/images/WhatsApp Image 2025-07-28 at 20.05.20_02bbe960_1753725640296.jpg",
      alt: "Birthday celebration with chocolate cake",
      title: "Birthday Celebration",
      description: "Sweet birthday memories with delicious chocolate cake",
    },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Main Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {allImages.map((image, index) => (
          <motion.div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="font-semibold text-lg mb-1">{image.title}</h4>
              <p className="text-sm text-white/80">{image.description}</p>
            </div>
            <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-sm">🔍</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Featured Large Display */}
      <motion.div
        className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-rose-300/20 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">
          ✨ Featured Memory ✨
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <motion.div
            className="relative rounded-2xl overflow-hidden aspect-[4/3]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={allImages[0].src}
              alt={allImages[0].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="text-center lg:text-left">
            <h4 className="text-3xl font-bold text-white mb-4">
              {allImages[0].title}
            </h4>
            <p className="text-rose-200 text-lg leading-relaxed mb-6">
              {allImages[0].description}
            </p>
            <motion.button
              className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-rose-600 hover:to-pink-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              💖 View All Memories
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Image Modal */}
      {selectedImage !== null && (
        <motion.div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-4xl max-h-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={allImages[selectedImage].src}
              alt={allImages[selectedImage].alt}
              className="w-full h-full object-contain rounded-2xl"
            />
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <h4 className="text-white text-xl font-semibold mb-2">
                {allImages[selectedImage].title}
              </h4>
              <p className="text-white/80">
                {allImages[selectedImage].description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Memory Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-rose-300/20"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-2xl mb-2">📸</div>
          <div className="text-white font-semibold text-lg">{allImages.length}</div>
          <div className="text-rose-200 text-sm">Beautiful Moments</div>
        </motion.div>
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-rose-300/20"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-2xl mb-2">💖</div>
          <div className="text-white font-semibold text-lg">∞</div>
          <div className="text-rose-200 text-sm">Love & Joy</div>
        </motion.div>
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-rose-300/20"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-2xl mb-2">🌟</div>
          <div className="text-white font-semibold text-lg">365</div>
          <div className="text-rose-200 text-sm">Days of Smiles</div>
        </motion.div>
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-rose-300/20"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-2xl mb-2">🎂</div>
          <div className="text-white font-semibold text-lg">July 31</div>
          <div className="text-rose-200 text-sm">Special Day</div>
        </motion.div>
      </div>
    </div>
  )
}
