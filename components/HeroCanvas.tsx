"use client"

import { motion } from "framer-motion"

export default function HeroCanvas() {
  const backgroundImages = [
    "/images/WhatsApp Image 2025-07-28 at 20.05.19_91d15c84_1753725640296.jpg",
    "/images/WhatsApp Image 2025-07-28 at 20.05.20_e3bc51e4_1753725640295.jpg",
    "/images/WhatsApp Image 2025-07-28 at 20.05.20_5420dfb7_1753725640294.jpg",
    "/images/WhatsApp Image 2025-07-28 at 20.05.20_02bbe960_1753725640296.jpg",
  ]

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Rotating Background Images */}
      {backgroundImages.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: index === 0 ? 0.3 : 0 }}
          animate={{
            opacity: [0, 0.3, 0.3, 0],
          }}
          transition={{
            duration: 16,
            repeat: Number.POSITIVE_INFINITY,
            delay: index * 4,
            ease: "easeInOut",
          }}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900/80 via-purple-900/70 to-pink-900/80" />
        </motion.div>
      ))}

      {/* Animated Background Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-rose-900/60 via-purple-900/50 to-pink-900/60"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(136,19,55,0.6), rgba(88,28,135,0.5), rgba(190,24,93,0.6))",
            "linear-gradient(135deg, rgba(190,24,93,0.6), rgba(136,19,55,0.6), rgba(88,28,135,0.5))",
            "linear-gradient(225deg, rgba(88,28,135,0.5), rgba(190,24,93,0.6), rgba(136,19,55,0.6))",
            "linear-gradient(315deg, rgba(136,19,55,0.6), rgba(88,28,135,0.5), rgba(190,24,93,0.6))",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      {/* Main magical orb */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative w-80 h-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4), rgba(255, 182, 193, 0.3), rgba(147, 51, 234, 0.2))",
            backdropFilter: "blur(20px)",
            border: "2px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 0 60px rgba(255, 182, 193, 0.6), inset 0 0 60px rgba(255, 255, 255, 0.1)",
          }}
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 360],
          }}
          transition={{
            scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            rotate: { duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          }}
        >
          {/* Inner glow */}
          <motion.div
            className="absolute inset-8 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent)",
              backdropFilter: "blur(10px)",
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Central heart */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-8xl"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            💖
          </motion.div>
        </motion.div>
      </div>

      {/* Floating lanterns around the orb */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2
        const radius = 200 + (i % 3) * 50
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        return (
          <motion.div
            key={i}
            className="absolute w-6 h-8 rounded-sm"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              background: `linear-gradient(to bottom, hsl(${45 + i * 15}, 70%, 60%), hsl(${45 + i * 15}, 70%, 40%))`,
              boxShadow: `0 0 20px hsl(${45 + i * 15}, 70%, 50%)`,
              transformOrigin: "center",
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.6, 1, 0.6],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + i * 0.2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        )
      })}

      {/* Floating hearts */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute text-rose-300/60 text-2xl pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -60, -20],
            x: [0, Math.sin(i) * 20, 0],
            opacity: [0.3, 0.8, 0.3],
            rotate: [0, 15, -15, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 6 + i * 0.2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          💕
        </motion.div>
      ))}

      {/* Sparkles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Gradient overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, transparent 20%, rgba(0, 0, 0, 0.1) 80%)",
        }}
      />
    </div>
  )
}