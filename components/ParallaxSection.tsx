
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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85])

  const getAnimationVariants = () => {
    switch (animationType) {
      case "candles":
        return {
          hidden: { opacity: 0, scale: 0.7, y: 80, rotateX: -15 },
          visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            rotateX: 0,
            transition: {
              duration: 1.5,
              ease: "easeOut",
            },
          },
        }
      case "lanterns":
        return {
          hidden: { opacity: 0, y: 120, rotate: -15, scale: 0.8 },
          visible: {
            opacity: 1,
            y: 0,
            rotate: 0,
            scale: 1,
            transition: {
              duration: 2,
              ease: "easeOut",
            },
          },
        }
      case "balloons":
        return {
          hidden: { opacity: 0, y: 200, scale: 0.6, rotate: 10 },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            transition: {
              duration: 2.5,
              ease: "easeOut",
            },
          },
        }
      case "fireflies":
        return {
          hidden: { opacity: 0, scale: 0.8, filter: "blur(5px)" },
          visible: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: {
              duration: 2.2,
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
      {/* Enhanced Parallax Background */}
      <motion.div className="absolute inset-0 w-full h-full" style={{ y }}>
        <div className="relative w-full h-full">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          {/* Enhanced Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900/85 via-purple-900/70 to-pink-900/85"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-rose-900/30 via-transparent to-purple-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Enhanced Floating Hearts */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute pointer-events-none"
            style={{
              left: `${5 + i * 10}%`,
              top: `${5 + (i % 4) * 20}%`,
              fontSize: `${1.2 + Math.random() * 0.8}rem`,
              color: `hsl(${320 + i * 8}, 70%, ${60 + Math.random() * 20}%)`,
              filter: `drop-shadow(0 0 15px hsl(${320 + i * 8}, 70%, 50%))`,
            }}
            animate={{
              y: [-40, -80, -40],
              x: [0, Math.sin(i) * 20, 0],
              rotate: [0, 20, -20, 0],
              scale: [0.7, 1.3, 0.7],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          >
            {i % 4 === 0 ? "💖" : i % 4 === 1 ? "💕" : i % 4 === 2 ? "💗" : "💝"}
          </motion.div>
        ))}

        {/* Enhanced Floating Image Previews */}
        {[
          "/images/WhatsApp Image 2025-07-28 at 20.05.19_91d15c84_1753725640296.jpg",
          "/images/WhatsApp Image 2025-07-28 at 20.05.20_e3bc51e4_1753725640295.jpg",
          "/images/WhatsApp Image 2025-07-28 at 20.05.20_5420dfb7_1753725640294.jpg",
        ].map((image, i) => (
          <motion.div
            key={`image-${i}`}
            className="absolute rounded-2xl overflow-hidden border-3 border-white/40 shadow-2xl backdrop-blur-sm"
            style={{
              width: `${4 + i * 0.5}rem`,
              height: `${4 + i * 0.5}rem`,
              right: `${8 + i * 20}%`,
              top: `${15 + i * 25}%`,
            }}
            animate={{
              y: [-30, -60, -30],
              rotate: [0, 15, -15, 0],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.6, 1, 0.6],
              boxShadow: [
                "0 10px 30px rgba(0,0,0,0.3)",
                "0 20px 60px rgba(255,182,193,0.4)",
                "0 10px 30px rgba(0,0,0,0.3)",
              ]
            }}
            transition={{
              duration: 10 + i * 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 2.5,
            }}
            whileHover={{ scale: 1.5, z: 50 }}
          >
            <img
              src={image}
              alt="Floating memory"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-500/20 to-transparent" />
          </motion.div>
        ))}

        {/* Magical Particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${0.3 + Math.random() * 0.4}rem`,
              height: `${0.3 + Math.random() * 0.4}rem`,
              background: `hsl(${Math.random() * 60 + 300}, 80%, 70%)`,
              boxShadow: `0 0 20px hsl(${Math.random() * 60 + 300}, 80%, 50%)`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Enhanced Content */}
      <motion.div
        className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ opacity, scale }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-200 to-purple-200 mb-8 sm:mb-12 font-serif leading-tight"
          style={{
            textShadow: "0 0 40px rgba(255, 255, 255, 0.5)",
          }}
          initial={{ y: 100, opacity: 0, scale: 0.8 }}
          animate={isInView ? { y: 0, opacity: 1, scale: 1 } : { y: 100, opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        >
          {title}
        </motion.h2>

        {/* Enhanced Center Image */}
        <motion.div
          className="relative mb-8 sm:mb-12"
          variants={getAnimationVariants()}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="relative mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            <div className="relative aspect-[4/3] rounded-3xl sm:rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/30 backdrop-blur-sm">
              <img
                src={centerImage}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />

              {/* Enhanced Romantic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/50 via-transparent to-purple-900/20" />
              
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 5,
                  ease: "easeInOut",
                }}
              />

              {/* Enhanced Border Effect */}
              <div className="absolute inset-0 rounded-3xl sm:rounded-[2rem] border-4 border-white/40" />
            </div>

            {/* Enhanced Sparkle Effects */}
            <div className="absolute inset-0">
              {Array.from({ length: 10 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white"
                  style={{
                    left: `${5 + ((i * 7) % 90)}%`,
                    top: `${5 + ((i * 11) % 90)}%`,
                    width: `${0.3 + Math.random() * 0.4}rem`,
                    height: `${0.3 + Math.random() * 0.4}rem`,
                    boxShadow: `0 0 20px rgba(255, 255, 255, 0.8)`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 2, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Enhanced Interactive Elements for Lanterns */}
            {animationType === "lanterns" && (
              <div className="absolute inset-0 flex items-center justify-center">
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full cursor-pointer backdrop-blur-sm border-2 border-yellow-300 shadow-xl"
                    style={{
                      left: `${15 + i * 12}%`,
                      top: `${25 + (i % 3) * 15}%`,
                    }}
                    whileHover={{
                      scale: 1.6,
                      y: -30,
                      boxShadow: "0 0 50px rgba(255, 255, 0, 0.9)",
                      transition: { duration: 0.3 },
                    }}
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0.8, 1, 0.8],
                      boxShadow: [
                        "0 0 20px rgba(255, 255, 0, 0.6)",
                        "0 0 40px rgba(255, 255, 0, 0.9)",
                        "0 0 20px rgba(255, 255, 0, 0.6)",
                      ],
                    }}
                    transition={{
                      duration: 4 + i * 0.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                    onClick={() => {
                      const wishes = [
                        "May your birthday be filled with endless love and joy! 💕",
                        "You are the most beautiful soul I know! ✨",
                        "Every day with you is a blessing! 🌹",
                        "Your smile lights up my entire world! 💖",
                        "Here's to another year of your wonderful existence! 🎈",
                        "You bring magic wherever you go! ✨",
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

        {/* Enhanced Description */}
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-rose-100 italic leading-relaxed mb-8 font-medium"
          style={{
            textShadow: "0 0 30px rgba(255, 182, 193, 0.6)",
          }}
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
        >
          {description}
        </motion.p>

        {/* Enhanced Romantic Quote */}
        <motion.div
          className="max-w-3xl mx-auto p-6 sm:p-8 bg-white/15 backdrop-blur-lg rounded-3xl border-2 border-rose-300/40 shadow-2xl"
          initial={{ scale: 0.7, opacity: 0, rotateX: -15 }}
          animate={isInView ? { scale: 1, opacity: 1, rotateX: 0 } : { scale: 0.7, opacity: 0, rotateX: -15 }}
          transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 25px 50px rgba(255, 182, 193, 0.3)" 
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="flex items-center justify-center mb-4">
            <motion.span 
              className="text-4xl sm:text-5xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Number.POSITIVE_INFINITY 
              }}
            >
              💖
            </motion.span>
          </div>
          <p className="text-rose-200 text-lg sm:text-xl md:text-2xl italic leading-relaxed font-medium text-center">
            "Every moment with you is a beautiful dream come true"
          </p>
          <div className="flex items-center justify-center mt-4">
            <span className="text-rose-300 text-base sm:text-lg italic">— With all my love</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
