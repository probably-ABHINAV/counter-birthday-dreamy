
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
      {/* Enhanced Rotating Background Images */}
      {backgroundImages.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: index === 0 ? 0.4 : 0, scale: 1.1 }}
          animate={{
            opacity: [0, 0.4, 0.4, 0],
            scale: [1.1, 1, 1, 1.1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            delay: index * 5,
            ease: "easeInOut",
          }}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat filter blur-[2px]"
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900/85 via-purple-900/75 to-pink-900/85" />
        </motion.div>
      ))}

      {/* Enhanced Animated Background Gradient Overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(136,19,55,0.7), rgba(88,28,135,0.6), rgba(190,24,93,0.7))",
            "linear-gradient(135deg, rgba(190,24,93,0.7), rgba(136,19,55,0.7), rgba(88,28,135,0.6))",
            "linear-gradient(225deg, rgba(88,28,135,0.6), rgba(190,24,93,0.7), rgba(136,19,55,0.7))",
            "linear-gradient(315deg, rgba(136,19,55,0.7), rgba(88,28,135,0.6), rgba(190,24,93,0.7))",
          ],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Enhanced Main Magical Orb */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.5), rgba(255, 182, 193, 0.4), rgba(147, 51, 234, 0.3))",
            backdropFilter: "blur(30px)",
            border: "3px solid rgba(255, 255, 255, 0.3)",
            boxShadow: `
              0 0 80px rgba(255, 182, 193, 0.8), 
              inset 0 0 80px rgba(255, 255, 255, 0.2),
              0 0 200px rgba(147, 51, 234, 0.4)
            `,
          }}
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 360],
            boxShadow: [
              "0 0 80px rgba(255, 182, 193, 0.8), inset 0 0 80px rgba(255, 255, 255, 0.2), 0 0 200px rgba(147, 51, 234, 0.4)",
              "0 0 120px rgba(255, 182, 193, 1), inset 0 0 100px rgba(255, 255, 255, 0.3), 0 0 250px rgba(147, 51, 234, 0.6)",
              "0 0 80px rgba(255, 182, 193, 0.8), inset 0 0 80px rgba(255, 255, 255, 0.2), 0 0 200px rgba(147, 51, 234, 0.4)"
            ]
          }}
          transition={{
            scale: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            rotate: { duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            boxShadow: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
          }}
        >
          {/* Enhanced Multi-layered Inner Glow */}
          <motion.div
            className="absolute inset-6 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(255, 255, 255, 0.4), rgba(255, 182, 193, 0.3), transparent)",
              backdropFilter: "blur(15px)",
            }}
            animate={{
              opacity: [0.4, 0.9, 0.4],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute inset-12 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(255, 255, 255, 0.6), transparent)",
              backdropFilter: "blur(8px)",
            }}
            animate={{
              opacity: [0.2, 0.7, 0.2],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 2.8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />

          {/* Enhanced Central Heart with Pulsing Effect */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-9xl filter drop-shadow-2xl"
            animate={{
              scale: [1, 1.3, 1],
              filter: [
                "drop-shadow(0 0 20px rgba(255, 182, 193, 0.8))",
                "drop-shadow(0 0 40px rgba(255, 182, 193, 1))",
                "drop-shadow(0 0 20px rgba(255, 182, 193, 0.8))"
              ]
            }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            💖
          </motion.div>

          {/* Additional Inner Hearts */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={`inner-heart-${i}`}
              className="absolute inset-0 flex items-center justify-center text-6xl opacity-30"
              animate={{
                scale: [0.5, 0.8, 0.5],
                rotate: [0, 120 * (i + 1), 240 * (i + 1)],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4 + i,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.8,
              }}
            >
              💕
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Floating Lanterns with More Variety */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 18) * Math.PI * 2
        const radius = 250 + (i % 4) * 60
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        return (
          <motion.div
            key={i}
            className="absolute w-8 h-10 rounded-lg"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              background: `linear-gradient(to bottom, 
                hsl(${30 + i * 20}, 80%, 65%), 
                hsl(${30 + i * 20}, 80%, 45%))`,
              boxShadow: `
                0 0 25px hsl(${30 + i * 20}, 80%, 55%),
                0 0 50px hsl(${30 + i * 20}, 60%, 40%)
              `,
              transformOrigin: "center",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.7, 1, 0.7],
              rotate: [0, 15, -15, 0],
              scale: [1, 1.2, 1],
              boxShadow: [
                `0 0 25px hsl(${30 + i * 20}, 80%, 55%), 0 0 50px hsl(${30 + i * 20}, 60%, 40%)`,
                `0 0 40px hsl(${30 + i * 20}, 80%, 65%), 0 0 80px hsl(${30 + i * 20}, 60%, 50%)`,
                `0 0 25px hsl(${30 + i * 20}, 80%, 55%), 0 0 50px hsl(${30 + i * 20}, 60%, 40%)`
              ]
            }}
            transition={{
              duration: 5 + i * 0.3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        )
      })}

      {/* Enhanced Floating Hearts with More Variety */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${1.5 + Math.random() * 1}rem`,
            color: `hsl(${320 + Math.random() * 40}, 70%, ${60 + Math.random() * 20}%)`,
            filter: `drop-shadow(0 0 10px hsl(${320 + Math.random() * 40}, 70%, 50%))`,
          }}
          animate={{
            y: [-30, -80, -30],
            x: [0, Math.sin(i) * 30, 0],
            opacity: [0.4, 0.9, 0.4],
            rotate: [0, 20, -20, 0],
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: 7 + i * 0.2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        >
          {i % 3 === 0 ? "💖" : i % 3 === 1 ? "💕" : "💗"}
        </motion.div>
      ))}

      {/* Enhanced Sparkles with Color Variations */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${0.5 + Math.random() * 0.5}rem`,
            height: `${0.5 + Math.random() * 0.5}rem`,
            background: `hsl(${Math.random() * 60 + 300}, 80%, 80%)`,
            boxShadow: `0 0 20px hsl(${Math.random() * 60 + 300}, 80%, 60%)`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 2, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Enhanced Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-white/60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -100],
            opacity: [1, 0],
            scale: [1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}

      {/* Enhanced Gradient Overlay for Depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at center, transparent 15%, rgba(0, 0, 0, 0.1) 85%),
            radial-gradient(circle at 20% 80%, rgba(255, 182, 193, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)
          `,
        }}
      />
    </div>
  )
}
