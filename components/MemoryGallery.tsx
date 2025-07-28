
"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface Memory {
  id: number
  title: string
  description: string
  image: string
  note: string
}

export default function MemoryGallery() {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null)

  const memories: Memory[] = [
    {
      id: 1,
      title: "Our Amazing Adventure",
      description: "That incredible day at the beach 🏖️",
      image: "/placeholder.svg?height=300&width=400&text=Beach+Memory",
      note: "Remember when we built that epic sandcastle? That was the best day ever! 🏰"
    },
    {
      id: 2,
      title: "Coffee & Laughs",
      description: "Our favorite café moments ☕",
      image: "/placeholder.svg?height=300&width=400&text=Cafe+Memory",
      note: "Those endless conversations over coffee - you always know how to make me laugh! 😄"
    },
    {
      id: 3,
      title: "Sunset Views",
      description: "Watching the world paint itself golden 🌅",
      image: "/placeholder.svg?height=300&width=400&text=Sunset+Memory",
      note: "The way you appreciated every color in that sunset - your wonder for beauty is inspiring! ✨"
    },
    {
      id: 4,
      title: "Celebration Time",
      description: "Dancing like nobody's watching 💃",
      image: "/placeholder.svg?height=300&width=400&text=Party+Memory",
      note: "Your energy is contagious! That night we danced until our feet hurt was pure magic! 🎉"
    }
  ]

  return (
    <section className="relative py-16 px-4">
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            📸 Our Beautiful Memories
          </h2>
          <p className="text-rose-200 text-lg sm:text-xl">
            A collection of moments that make my heart smile 💖
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedMemory(memory)}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-xl">
                <div className="aspect-square bg-gradient-to-br from-rose-300 to-pink-400 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400">
                    <div className="text-center p-4">
                      <div className="text-4xl mb-2">📸</div>
                      <div className="text-white font-medium text-sm drop-shadow-lg">{memory.title}</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-1">{memory.title}</h3>
                  <p className="text-rose-200 text-sm">{memory.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Memory Detail Modal */}
        {selectedMemory && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedMemory(null)}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-2xl max-w-md w-full border border-white/30"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="aspect-square bg-gradient-to-br from-rose-300 to-pink-400 rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">📷</div>
                    <div className="text-white font-medium">{selectedMemory.title}</div>
                  </div>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">{selectedMemory.title}</h3>
                <p className="text-rose-200 mb-4">{selectedMemory.description}</p>
                <div className="bg-rose-500/20 rounded-lg p-4">
                  <p className="text-white italic">"{selectedMemory.note}"</p>
                </div>
                <button
                  onClick={() => setSelectedMemory(null)}
                  className="mt-4 w-full bg-rose-500 hover:bg-rose-600 text-white py-2 rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
