"use client"

import { motion } from "framer-motion"

interface MusicVisualizerProps {
  isPlaying: boolean
  bars?: number
}

export default function MusicVisualizer({ isPlaying, bars = 5 }: MusicVisualizerProps) {
  return (
    <div className="flex items-end space-x-1 h-6">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className="w-1 bg-gradient-to-t from-rose-400 to-pink-400 rounded-full"
          style={{ height: `${20 + (i % 3) * 10}%` }}
          animate={
            isPlaying
              ? {
                  scaleY: [1, 1.5 + Math.random() * 0.5, 1],
                  opacity: [0.7, 1, 0.7],
                }
              : { scaleY: 1, opacity: 0.3 }
          }
          transition={{
            duration: 0.5 + Math.random() * 0.3,
            repeat: isPlaying ? Number.POSITIVE_INFINITY : 0,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
