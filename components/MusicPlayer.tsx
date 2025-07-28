"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [audioAvailable, setAudioAvailable] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(210) // 3:30 default
  const [isLoaded, setIsLoaded] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(console.error)
      }
      setIsPlaying(!isPlaying)
      setIsMuted(false)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = 0.3 // Set to 30% volume
      audio.loop = true
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleLoadedMetadata = () => {
      setDuration(audio.duration)
      setIsLoaded(true)
      setAudioAvailable(true)
    }

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
    }

    const handleError = () => {
      console.log("Audio file not found - music player showing visual mode only")
      setIsLoaded(false)
      setAudioAvailable(false)
      setDuration(210) // 3:30 default duration
    }

    const handleCanPlay = () => {
      setAudioAvailable(true)
      setIsLoaded(true)
    }

    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('error', handleError)
    audio.addEventListener('canplay', handleCanPlay)

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('error', handleError)
      audio.removeEventListener('canplay', handleCanPlay)
    }
  }, [])

  return (
    <div className="fixed top-4 sm:top-8 right-4 sm:right-8 z-20 flex gap-2">
      {/* Background Audio - Visual Mode Only */}
      <audio
        ref={audioRef}
        muted={true}
        style={{ display: 'none' }}
        onError={() => {
          setIsPlaying(false)
          setAudioAvailable(false)
        }}
      >
        {/* Audio source removed - purely visual player */}
      </audio>

      {/* Visual Music Animation */}
      <motion.div
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white"
        animate={isPlaying ? {
          boxShadow: [
            "0 0 0 0 rgba(236, 72, 153, 0.7)",
            "0 0 0 10px rgba(236, 72, 153, 0)",
            "0 0 0 20px rgba(236, 72, 153, 0)",
          ]
        } : {}}
        transition={{
          duration: 2,
          repeat: isPlaying ? Number.POSITIVE_INFINITY : 0,
          ease: "easeOut"
        }}
        title="Visual Music Animation"
      >
        <motion.span
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={{
            duration: 3,
            repeat: isPlaying ? Number.POSITIVE_INFINITY : 0,
            ease: "linear"
          }}
          className="text-xl"
        >
          🎵
        </motion.span>
      </motion.div>

      {/* Play/Pause Visual Animation */}
      <motion.button
        onClick={togglePlay}
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title={isPlaying ? "Pause Visual Animation" : "Start Visual Animation"}
      >
        {isPlaying ? "⏸️" : "▶️"}
      </motion.button>
    </div>
  )
}