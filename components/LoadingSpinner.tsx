"use client"

import { motion } from "framer-motion"

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-rose-900 via-purple-900 to-pink-900">
      <motion.div className="relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        {/* Main spinner */}
        <motion.div
          className="w-16 h-16 border-4 border-rose-300/30 border-t-rose-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        {/* Inner heart */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-rose-500 text-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
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

      <motion.p
        className="text-white/80 text-lg mt-4 font-serif"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Loading magical moments...
      </motion.p>

      {/* Floating hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-300/40 text-sm"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.4, 0.8, 0.4],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            💕
          </motion.div>
        ))}
      </div>
    </div>
  )
}
