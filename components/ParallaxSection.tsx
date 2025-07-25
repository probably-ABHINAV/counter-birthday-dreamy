"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

interface ParallaxSectionProps {
  id: string
  title: string
  description: string
  backgroundImage: string
  centerImage: string
  animationType: "candles" | "lanterns" | "balloons" | "fireflies"
}

export default function ParallaxSection({
  id,
  title,
  description,
  backgroundImage,
  centerImage,
  animationType,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.4])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])

  const getAnimationVariants = () => {
    switch (animationType) {
      case "candles":
        return {
          hidden: { opacity: 0, scale: 0.8, y: 50 },
          visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
              duration: 1.2,
              ease: "easeOut",
            },
          },
        }
      case "lanterns":
        return {
          hidden: { opacity: 0, y: 100, rotate: -10 },
          visible: {
            opacity: 1,
            y: 0,
            rotate: 0,
            transition: {
              duration: 1.5,
              ease: "easeOut",
            },
          },
        }
      case "balloons":
        return {
          hidden: { opacity: 0, y: 150, scale: 0.8 },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 2,
              ease: "easeOut",
            },
          },
        }
      case "fireflies":
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: 1.8,
              ease: "easeInOut",
            },
          },
        }
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }
    }
  }

  return (
    <section ref={ref} id={id} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 w-full h-full" style={{ y }}>
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900/80 via-purple-900/60 to-pink-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-rose-900/20 via-transparent to-purple-900/20" />
        </div>
      </motion.div>

      {/* Floating Hearts with Better Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-300/40 text-xl sm:text-2xl"
            style={{
              left: `${5 + i * 12}%`,
              top: `${10 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [-30, -60, -30],
              rotate: [0, 15, -15, 0],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          >
            💕
          </motion.div>
        ))}
      </div>

      {/* Content with Perfect Responsive Layout */}
      <motion.div
        className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ opacity, scale }}
      >
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 font-serif drop-shadow-2xl leading-tight"
          initial={{ y: 80, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          {title}
        </motion.h2>

        {/* Center Image with Perfect Aspect Ratio */}
        <motion.div
          className="relative mb-6 sm:mb-8"
          variants={getAnimationVariants()}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-rose-200 to-pink-300">
              {/* Beautiful placeholder content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-6xl mb-4">
                    {animationType === "candles" && "🕯️"}
                    {animationType === "lanterns" && "🏮"}
                    {animationType === "balloons" && "🎈"}
                    {animationType === "fireflies" && "✨"}
                  </div>
                  <div className="text-rose-800 text-lg font-semibold">{title.split(" — ")[1]}</div>
                </div>
              </div>

              {/* Romantic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 via-transparent to-transparent" />

              {/* Enhanced Border Effect */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-white/20" />
            </div>

            {/* Sparkle Effects */}
            <div className="absolute inset-0">
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full"
                  style={{
                    left: `${10 + ((i * 7) % 80)}%`,
                    top: `${5 + ((i * 11) % 90)}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.25,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Interactive Elements for Lanterns */}
            {animationType === "lanterns" && (
              <div className="absolute inset-0 flex items-center justify-center">
                {Array.from({ length: 4 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-80 cursor-pointer backdrop-blur-sm border border-yellow-300 shadow-lg"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 2) * 20}%`,
                    }}
                    whileHover={{
                      scale: 1.4,
                      y: -20,
                      boxShadow: "0 0 30px rgba(255, 255, 0, 0.9)",
                      transition: { duration: 0.3 },
                    }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    onClick={() => {
                      const wishes = [
                        "May your birthday be filled with endless love and joy! 💕",
                        "You are the most beautiful soul I know! ✨",
                        "Every day with you is a blessing! 🌹",
                        "Your smile lights up my entire world! 💖",
                      ]
                      alert(`✨ ${wishes[i]} ✨`)
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-xs">✨</div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-rose-100 italic drop-shadow-lg leading-relaxed mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          {description}
        </motion.p>

        {/* Romantic Quote */}
        <motion.div
          className="max-w-2xl mx-auto p-4 sm:p-6 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl border border-rose-300/30 shadow-xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center mb-2">
            <span className="text-2xl sm:text-3xl">💖</span>
          </div>
          <p className="text-rose-200 text-sm sm:text-base md:text-lg italic leading-relaxed">
            "Every moment with you is a beautiful dream come true"
          </p>
          <div className="flex items-center justify-center mt-2">
            <span className="text-rose-300 text-xs sm:text-sm">— With all my love</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
