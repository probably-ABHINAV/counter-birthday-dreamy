"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface Track {
  id: string
  name: string
  artist: string
  album: string
  duration: string
  image: string
  spotifyUrl: string
}

interface PlaylistData {
  name: string
  description: string
  spotifyUrl: string
  tracks: Track[]
}

interface SpotifyPlaylistProps {
  playlistId?: string
}

// Mock playlist data for visual player
const mockPlaylistData: PlaylistData = {
  name: "💕 Our Love Story Playlist 💕",
  description: "The perfect songs for your special day, my love!",
  spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd",
  tracks: [
    {
      id: "1",
      name: "Perfect",
      artist: "Ed Sheeran",
      album: "÷ (Divide)",
      duration: "4:23",
      image: "/placeholder.svg?height=300&width=300&text=Perfect",
      spotifyUrl: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v",
    },
    {
      id: "2",
      name: "All of Me",
      artist: "John Legend",
      album: "Love in the Future",
      duration: "4:29",
      image: "/placeholder.svg?height=300&width=300&text=All+of+Me",
      spotifyUrl: "https://open.spotify.com/track/3U4isOIWM3VvDubwSI3y7a",
    },
    {
      id: "3",
      name: "Thinking Out Loud",
      artist: "Ed Sheeran",
      album: "x (Multiply)",
      duration: "4:41",
      image: "/placeholder.svg?height=300&width=300&text=Thinking+Out+Loud",
      spotifyUrl: "https://open.spotify.com/track/lp7hDc4ec4dbZ6irHCKJsX",
    },
    {
      id: "4",
      name: "A Thousand Years",
      artist: "Christina Perri",
      album: "The Twilight Saga: Breaking Dawn",
      duration: "4:45",
      image: "/placeholder.svg?height=300&width=300&text=A+Thousand+Years",
      spotifyUrl: "https://open.spotify.com/track/6Zm6ZnTKGwJGnKdXJN0VJx",
    },
    {
      id: "5",
      name: "Make You Feel My Love",
      artist: "Adele",
      album: "19",
      duration: "3:32",
      image: "/placeholder.svg?height=300&width=300&text=Make+You+Feel+My+Love",
      spotifyUrl: "https://open.spotify.com/track/4WXYCTqfZqzKQNdgFU7HL8",
    },
  ],
}

export default function SpotifyPlaylist({ playlistId }: SpotifyPlaylistProps) {
  const [playlist, setPlaylist] = useState<PlaylistData | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(263) // Default duration in seconds (4:23)
  const [volume, setVolume] = useState(0.7)

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        setLoading(true)
        setPlaylist(mockPlaylistData)
        setCurrentTrack(mockPlaylistData.tracks[0])
        // Set duration based on current track
        const track = mockPlaylistData.tracks[0]
        if (track?.duration) {
          const [minutes, seconds] = track.duration.split(":").map(Number)
          setDuration(minutes * 60 + seconds)
        }
      } catch (err) {
        console.log("Using mock playlist data")
        setPlaylist(mockPlaylistData)
        setCurrentTrack(mockPlaylistData.tracks[0])
      } finally {
        setLoading(false)
      }
    }

    fetchPlaylist()
  }, [playlistId])

  // Simulate audio playback with visual feedback only
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isPlaying && currentTime < duration) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false)
            return 0
          }
          return prev + 1
        })
      }, 1000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isPlaying, currentTime, duration])

  const togglePlayPause = () => {
    if (currentTime >= duration) {
      setCurrentTime(0)
    }
    setIsPlaying(!isPlaying)
  }

  const handleTrackSelect = (track: Track) => {
    setCurrentTrack(track)
    setIsPlaying(false)
    setCurrentTime(0)
    // Set duration based on selected track
    if (track?.duration) {
      const [minutes, seconds] = track.duration.split(":").map(Number)
      setDuration(minutes * 60 + seconds)
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number.parseFloat(e.target.value)
    if (!Number.isNaN(time)) {
      setCurrentTime(time)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = Number.parseFloat(e.target.value)
    if (!Number.isNaN(vol)) {
      setVolume(vol)
    }
  }

  const formatTime = (time: number) => {
    if (!time || Number.isNaN(time)) return "0:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  if (loading) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
        <div className="animate-pulse">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <span role="img" aria-label="music">
                🎵
              </span>
            </div>
            <div className="h-4 bg-white/20 rounded w-32"></div>
          </div>
          <div className="h-12 bg-white/20 rounded mb-4"></div>
          <div className="space-y-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={`loading-${i}`} className="h-8 bg-white/20 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (!playlist) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
        <div className="text-center">
          <div className="text-rose-400 mb-2 text-2xl">
            <span role="img" aria-label="music">
              🎵
            </span>
          </div>
          <p className="text-white/80 text-sm">Creating your love playlist...</p>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-rose-300/20 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="flex items-center mb-4 sm:mb-6">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
          <span role="img" aria-label="music">
            🎵
          </span>
        </div>
        <div className="flex-1">
          <h3 className="text-white font-semibold text-lg sm:text-xl">{playlist.name}</h3>
          <p className="text-white/60 text-xs sm:text-sm">{playlist.description}</p>
          <p className="text-rose-300/80 text-xs italic mt-1">
            ✨ Visual music player - Click Spotify links to hear songs
          </p>
        </div>
      </div>

      {/* Current Track Player */}
      {currentTrack && (
        <motion.div
          className="bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-xl p-4 mb-6 border border-rose-300/30"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xl" role="img" aria-label="heart">
                💕
              </span>
              {/* Animated vinyl record effect when playing */}
              {isPlaying && (
                <motion.div
                  className="absolute inset-2 border-2 border-white/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-base font-semibold truncate">{currentTrack.name}</p>
              <p className="text-white/70 text-sm truncate">{currentTrack.artist}</p>
              <p className="text-white/50 text-xs truncate">{currentTrack.album}</p>
            </div>
            <motion.button
              onClick={togglePlayPause}
              className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-xl transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              <span role="img" aria-label={isPlaying ? "pause" : "play"}>
                {isPlaying ? "⏸️" : "▶️"}
              </span>
            </motion.button>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-white/60 text-xs w-10">{formatTime(currentTime)}</span>
              <div className="flex-1 relative">
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime || 0}
                  onChange={handleSeek}
                  className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                  aria-label="Seek"
                />
                {/* Progress fill */}
                <div
                  className="absolute top-0 left-0 h-1 bg-gradient-to-r from-rose-400 to-pink-400 rounded-lg pointer-events-none"
                  style={{ width: duration > 0 ? `${(currentTime / duration) * 100}%` : "0%" }}
                />
              </div>
              <span className="text-white/60 text-xs w-10">{formatTime(duration)}</span>
            </div>

            {/* Volume Control */}
            <div className="flex items-center space-x-2">
              <span className="text-white/60 text-xs" role="img" aria-label="volume">
                🔊
              </span>
              <div className="relative w-20">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume || 0}
                  onChange={handleVolumeChange}
                  className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                  aria-label="Volume"
                />
                <div
                  className="absolute top-0 left-0 h-1 bg-gradient-to-r from-rose-400 to-pink-400 rounded-lg pointer-events-none"
                  style={{ width: `${(volume || 0) * 100}%` }}
                />
              </div>
              <span className="text-white/60 text-xs">{Math.round((volume || 0) * 100)}%</span>
            </div>
          </div>

          {/* Now Playing Status */}
          <div className="mt-3 text-center">
            <p className="text-rose-200/80 text-xs">
              <span role="img" aria-label={isPlaying ? "playing" : "paused"}>
                {isPlaying ? "🎵" : "⏸️"}
              </span>{" "}
              {isPlaying ? "Now Playing (Visual Mode)" : "Paused"}
            </p>
          </div>
        </motion.div>
      )}

      {/* Track List */}
      <div className="space-y-2 mb-6 max-h-48 overflow-y-auto">
        {playlist.tracks.map((track, index) => (
          <motion.button
            key={track.id}
            className={`w-full text-left p-3 rounded-lg transition-colors ${
              currentTrack?.id === track.id ? "bg-rose-500/20 border border-rose-300/30" : "hover:bg-white/5"
            }`}
            onClick={() => handleTrackSelect(track)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label={`Select ${track.name} by ${track.artist}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-2 h-2 rounded-full ${currentTrack?.id === track.id ? "bg-rose-400" : "bg-white/40"}`}
                  aria-hidden="true"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">{track.name}</p>
                  <p className="text-white/60 text-xs truncate">{track.artist}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-white/40 text-xs">{track.duration}</span>
                {currentTrack?.id === track.id && isPlaying && (
                  <div className="flex space-x-1" aria-hidden="true">
                    <motion.div
                      className="w-1 h-3 bg-rose-400 rounded"
                      animate={{ scaleY: [1, 1.5, 1] }}
                      transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                    />
                    <motion.div
                      className="w-1 h-2 bg-rose-400 rounded"
                      animate={{ scaleY: [1, 2, 1] }}
                      transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, delay: 0.1 }}
                    />
                    <motion.div
                      className="w-1 h-4 bg-rose-400 rounded"
                      animate={{ scaleY: [1, 1.2, 1] }}
                      transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <motion.a
          href={playlist.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-xl transition-colors flex items-center justify-center space-x-2 font-medium"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span role="img" aria-label="music">
            🎵
          </span>
          <span>Listen on Spotify</span>
        </motion.a>

        {currentTrack && (
          <motion.a
            href={currentTrack.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-xl transition-colors flex items-center justify-center space-x-2 text-sm font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span role="img" aria-label="play">
              ▶️
            </span>
            <span>Play &quot;{currentTrack.name}&quot; on Spotify</span>
          </motion.a>
        )}

        {/* Romantic Message */}
        <div className="text-center pt-2">
          <p className="text-rose-200/80 text-xs italic">
            &quot;These songs remind me of you every day&quot;{" "}
            <span role="img" aria-label="heart">
              💖
            </span>
          </p>
          <p className="text-rose-300/60 text-xs mt-1">Click the Spotify links above to hear the actual songs!</p>
        </div>
      </div>
    </motion.div>
  )
}
