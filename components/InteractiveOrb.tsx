"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Wish {
  id: string
  text: string
  timestamp: Date
}

export default function InteractiveOrb() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [wishes, setWishes] = useState<Wish[]>([])
  const [wishText, setWishText] = useState("")
  const [showWishes, setShowWishes] = useState(false)

  const handleMakeWish = () => {
    if (wishText.trim()) {
      const newWish: Wish = {
        id: Date.now().toString(),
        text: wishText.trim(),
        timestamp: new Date(),
      }

      setWishes((prev) => [newWish, ...prev.slice(0, 2)]) // Keep only latest 3
      setWishText("")
      setIsModalOpen(false)

      // Show success animation
      setTimeout(() => setShowWishes(true), 500)
    }
  }

  return (
    <>
      {/* Main Orb */}
      <motion.div
        className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-40"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
      >
        <motion.button
          className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 shadow-lg flex items-center justify-center text-2xl md:text-3xl"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 30px rgba(236, 72, 153, 0.8)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          onMouseEnter={() => setShowWishes(true)}
          onMouseLeave={() => setShowWishes(false)}
        >
          💖{/* Pulse Animation */}
          <motion.div
            className="absolute inset-0 rounded-full bg-rose-300/30"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          {/* Floating Hearts */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-rose-300 text-sm"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 20}%`,
              }}
              animate={{
                y: [-5, -15, -5],
                opacity: [0.7, 1, 0.7],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3 + i,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
              }}
            >
              💕
            </motion.div>
          ))}
        </motion.button>

        {/* Tooltip */}
        <motion.div
          className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black/80 text-white text-sm rounded-lg whitespace-nowrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: showWishes ? 1 : 0, y: showWishes ? 0 : 10 }}
          transition={{ duration: 0.2 }}
        >
          Make a Birthday Wish 💕
        </motion.div>

        {/* Floating Wishes */}
        <AnimatePresence>
          {showWishes && wishes.length > 0 && (
            <div className="absolute bottom-full right-0 mb-4 space-y-2">
              {wishes.slice(0, 3).map((wish, index) => (
                <motion.div
                  key={wish.id}
                  className="bg-gradient-to-r from-rose-100 to-pink-100 backdrop-blur-sm rounded-lg p-3 text-sm text-rose-800 max-w-48 shadow-lg border border-rose-200"
                  initial={{ opacity: 0, x: 20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.8 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-2">
                    <span className="text-rose-500">💖</span>
                    <span>"{wish.text}"</span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Wish Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="bg-gradient-to-br from-white via-rose-50 to-pink-50 rounded-2xl p-6 max-w-md w-full shadow-2xl border border-rose-200"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-rose-800 mb-4 text-center font-serif">
                💖 Make a Birthday Wish 💖
              </h3>

              <p className="text-rose-600 text-center mb-4 italic">What do you wish for her special day?</p>

              <textarea
                value={wishText}
                onChange={(e) => setWishText(e.target.value)}
                placeholder="May this birthday bring you endless joy, love, and beautiful moments..."
                className="w-full h-32 p-3 border border-rose-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white/80"
                maxLength={200}
              />

              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-rose-500">{wishText.length}/200</span>

                <div className="space-x-2">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-rose-600 hover:text-rose-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <motion.button
                    onClick={handleMakeWish}
                    disabled={!wishText.trim()}
                    className="px-6 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Love 💕
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
