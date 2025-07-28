
"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function MemoryGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)

  const allImages = [
    {
      src: "/images/WhatsApp Image 2025-07-28 at 20.05.19_91d15c84_1753725640296.jpg",
      alt: "Beautiful evening moment with flowers",
      title: "Evening Roses",
      description: "A magical evening filled with love and beautiful flowers that captured the essence of romance",
      mood: "Romantic",
      emoji: "🌹"
    },
    {
      src: "/images/WhatsApp Image 2025-07-28 at 20.05.20_e3bc51e4_1753725640295.jpg",
      alt: "Elegant moment by the window",
      title: "Golden Hour",
      description: "Captured in perfect golden light, radiating natural beauty and grace that takes my breath away",
      mood: "Elegant",
      emoji: "✨"
    },
    {
      src: "/images/WhatsApp Image 2025-07-28 at 20.05.20_5420dfb7_1753725640294.jpg",
      alt: "Graceful pose by glass doors",
      title: "Serene Moment",
      description: "A peaceful moment showcasing natural grace and elegance that speaks to the soul",
      mood: "Peaceful",
      emoji: "🕊️"
    },
    {
      src: "/images/WhatsApp Image 2025-07-28 at 20.05.20_02bbe960_1753725640296.jpg",
      alt: "Birthday celebration with chocolate cake",
      title: "Birthday Celebration",
      description: "Sweet birthday memories with delicious chocolate cake and the brightest smile",
      mood: "Joyful",
      emoji: "🎂"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Enhanced Main Gallery Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {allImages.map((image, index) => (
          <motion.div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-3xl aspect-square"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.08, 
              rotateY: 5,
              z: 50,
            }}
            transition={{ 
              duration: 0.4,
              ease: "easeOut" 
            }}
            onClick={() => setSelectedImage(index)}
            onHoverStart={() => setHoveredImage(index)}
            onHoverEnd={() => setHoveredImage(null)}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative w-full h-full">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Enhanced Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Mood Badge */}
              <motion.div
                className="absolute top-4 left-4 bg-white/20 backdrop-blur-md rounded-full px-3 py-1 border border-white/30"
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: hoveredImage === index ? 1 : 0,
                  x: hoveredImage === index ? 0 : -20
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white text-sm font-medium flex items-center gap-1">
                  {image.emoji} {image.mood}
                </span>
              </motion.div>

              {/* Enhanced Content */}
              <motion.div
                className="absolute bottom-4 left-4 right-4 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: hoveredImage === index ? 1 : 0,
                  y: hoveredImage === index ? 0 : 20
                }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <h4 className="font-bold text-xl mb-2 drop-shadow-lg">{image.title}</h4>
                <p className="text-sm text-white/90 leading-relaxed drop-shadow-md">{image.description}</p>
              </motion.div>

              {/* Enhanced Zoom Icon */}
              <motion.div
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: hoveredImage === index ? 1 : 0,
                  scale: hoveredImage === index ? 1 : 0.8,
                }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-white text-lg">🔍</span>
              </motion.div>

              {/* Sparkle Effects */}
              {hoveredImage === index && (
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full"
                      style={{
                        left: `${10 + (i * 11) % 80}%`,
                        top: `${10 + (i * 13) % 80}%`,
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.2,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Enhanced Featured Large Display */}
      <motion.div
        className="bg-white/15 backdrop-blur-lg rounded-3xl p-8 border border-rose-300/30 mb-12 shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-8">
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(255, 182, 193, 0.5)",
                "0 0 30px rgba(255, 182, 193, 0.8)",
                "0 0 20px rgba(255, 182, 193, 0.5)"
              ]
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            ✨ Featured Memory ✨
          </motion.h3>
          <p className="text-rose-200 text-lg">The moment that captures it all</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            className="relative rounded-3xl overflow-hidden aspect-[4/3] group"
            whileHover={{ scale: 1.03, rotateY: 2 }}
            transition={{ duration: 0.4 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <img
              src={allImages[0].src}
              alt={allImages[0].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Floating Hearts on Hover */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-rose-300 text-2xl"
                  style={{
                    left: `${20 + i * 12}%`,
                    top: `${20 + (i % 3) * 20}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.5, 1, 0.5],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.3,
                  }}
                >
                  💕
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="text-center lg:text-left space-y-6">
            <motion.h4 
              className="text-4xl md:text-5xl font-bold text-white font-serif"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {allImages[0].title}
            </motion.h4>
            
            <motion.p 
              className="text-rose-200 text-xl leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {allImages[0].description}
            </motion.p>

            <motion.button
              className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white px-10 py-4 rounded-full font-bold hover:from-rose-600 hover:via-pink-600 hover:to-purple-600 transition-all duration-500 shadow-xl border-2 border-white/20 backdrop-blur-sm"
              whileHover={{ 
                scale: 1.08,
                boxShadow: "0 0 40px rgba(255, 182, 193, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="text-lg">💖 View All Memories</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Image Modal */}
      {selectedImage !== null && (
        <motion.div
          className="fixed inset-0 bg-black/95 backdrop-blur-lg flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-5xl max-h-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={allImages[selectedImage].src}
                alt={allImages[selectedImage].alt}
                className="w-full h-full object-contain max-h-[80vh]"
              />
              
              {/* Enhanced Close Button */}
              <motion.button
                className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/30"
                onClick={() => setSelectedImage(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-xl">✕</span>
              </motion.button>

              {/* Enhanced Modal Content */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-8 text-center"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center justify-center mb-3">
                  <span className="text-3xl mr-2">{allImages[selectedImage].emoji}</span>
                  <h4 className="text-white text-2xl md:text-3xl font-bold">
                    {allImages[selectedImage].title}
                  </h4>
                </div>
                <p className="text-white/90 text-lg mb-4 max-w-2xl mx-auto">
                  {allImages[selectedImage].description}
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-rose-300 text-sm italic">— {allImages[selectedImage].mood} Memory</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Enhanced Memory Stats */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, staggerChildren: 0.1 }}
        viewport={{ once: true }}
      >
        {[
          { icon: "📸", value: allImages.length, label: "Beautiful Moments", color: "from-blue-500 to-purple-500" },
          { icon: "💖", value: "∞", label: "Love & Joy", color: "from-rose-500 to-pink-500" },
          { icon: "🌟", value: "365", label: "Days of Smiles", color: "from-yellow-500 to-orange-500" },
          { icon: "🎂", value: "July 31", label: "Special Day", color: "from-purple-500 to-pink-500" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className={`bg-white/15 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/30 shadow-xl bg-gradient-to-br ${stat.color} bg-opacity-10`}
            whileHover={{ 
              scale: 1.08, 
              rotateY: 5,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
            transition={{ duration: 0.3 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div 
              className="text-4xl mb-3"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.5
              }}
            >
              {stat.icon}
            </motion.div>
            <motion.div 
              className="text-white font-bold text-2xl mb-1"
              animate={{ 
                textShadow: [
                  "0 0 10px rgba(255,255,255,0.3)",
                  "0 0 20px rgba(255,255,255,0.6)",
                  "0 0 10px rgba(255,255,255,0.3)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.3
              }}
            >
              {stat.value}
            </motion.div>
            <div className="text-rose-200 text-sm font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
