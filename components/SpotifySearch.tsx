"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

interface SearchResult {
  id: string
  name: string
  description: string
  image: string
  tracks: { total: number }
}

interface SpotifySearchProps {
  onPlaylistSelect: (playlistId: string) => void
}

export default function SpotifySearch({ onPlaylistSelect }: SpotifySearchProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)

  const searchPlaylists = async () => {
    if (!query.trim()) return

    setLoading(true)
    try {
      const response = await fetch(`/api/spotify/search?q=${encodeURIComponent(query)}&type=playlist`)
      if (response.ok) {
        const data = await response.json()
        setResults(data.playlists?.items?.slice(0, 5) || [])
      }
    } catch (error) {
      console.error("Search failed:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    searchPlaylists()
  }

  return (
    <div className="bg-white/5 rounded-lg p-4 mb-4">
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="flex space-x-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for birthday playlists..."
            className="flex-1 bg-white/10 border border-white/20 rounded px-3 py-2 text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="bg-green-500 hover:bg-green-600 disabled:opacity-50 text-white px-4 py-2 rounded text-sm transition-colors"
          >
            {loading ? "🔍" : "Search"}
          </button>
        </div>
      </form>

      {results.length > 0 && (
        <div className="space-y-2">
          {results.map((playlist) => (
            <motion.button
              key={playlist.id}
              onClick={() => onPlaylistSelect(playlist.id)}
              className="w-full text-left p-2 bg-white/5 hover:bg-white/10 rounded transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500/20 rounded flex items-center justify-center text-xs">🎵</div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">{playlist.name}</p>
                  <p className="text-white/60 text-xs truncate">{playlist.tracks.total} tracks</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      )}
    </div>
  )
}
