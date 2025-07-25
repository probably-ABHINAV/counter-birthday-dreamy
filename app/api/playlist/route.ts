import { NextResponse } from "next/server"

interface SpotifyTrack {
  id: string
  name: string
  artists: Array<{ name: string }>
  album: {
    name: string
    images: Array<{ url: string; height: number; width: number }>
  }
  duration_ms: number
  external_urls: {
    spotify: string
  }
}

interface SpotifyPlaylist {
  name: string
  description: string
  external_urls: {
    spotify: string
  }
  tracks: {
    items: Array<{
      track: SpotifyTrack
    }>
  }
}

async function getSpotifyAccessToken() {
  const client_id = process.env.SPOTIFY_CLIENT_ID
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET

  if (!client_id || !client_secret) {
    throw new Error("Spotify credentials not configured")
  }

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString("base64")}`,
    },
    body: "grant_type=client_credentials",
  })

  if (!response.ok) {
    throw new Error("Failed to get Spotify access token")
  }

  const data = await response.json()
  return data.access_token
}

function formatDuration(ms: number): string {
  const minutes = Math.floor(ms / 60000)
  const seconds = Math.floor((ms % 60000) / 1000)
  return `${minutes}:${seconds.toString().padStart(2, "0")}`
}

// Enhanced mock data as fallback
const mockPlaylistData = {
  name: "💕 Birthday Love Songs 💕",
  description: "The most romantic songs for your special day!",
  spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd",
  tracks: [
    {
      id: "1",
      name: "Perfect",
      artist: "Ed Sheeran",
      album: "÷ (Divide)",
      duration: "4:23",
      image: "/placeholder.svg?height=300&width=300",
      spotifyUrl: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v",
    },
    {
      id: "2",
      name: "All of Me",
      artist: "John Legend",
      album: "Love in the Future",
      duration: "4:29",
      image: "/placeholder.svg?height=300&width=300",
      spotifyUrl: "https://open.spotify.com/track/3U4isOIWM3VvDubwSI3y7a",
    },
    {
      id: "3",
      name: "Thinking Out Loud",
      artist: "Ed Sheeran",
      album: "x (Multiply)",
      duration: "4:41",
      image: "/placeholder.svg?height=300&width=300",
      spotifyUrl: "https://open.spotify.com/track/lp7hDc4ec4dbZ6irHCKJsX",
    },
    {
      id: "4",
      name: "A Thousand Years",
      artist: "Christina Perri",
      album: "The Twilight Saga: Breaking Dawn",
      duration: "4:45",
      image: "/placeholder.svg?height=300&width=300",
      spotifyUrl: "https://open.spotify.com/track/6Zm6ZnTKGwJGnKdXJN0VJx",
    },
    {
      id: "5",
      name: "Make You Feel My Love",
      artist: "Adele",
      album: "19",
      duration: "3:32",
      image: "/placeholder.svg?height=300&width=300",
      spotifyUrl: "https://open.spotify.com/track/4WXYCTqfZqzKQNdgFU7HL8",
    },
    {
      id: "6",
      name: "At Last",
      artist: "Etta James",
      album: "At Last!",
      duration: "3:01",
      image: "/placeholder.svg?height=300&width=300",
      spotifyUrl: "https://open.spotify.com/track/5JunxkcjfCYcY7xJ29tLai",
    },
    {
      id: "7",
      name: "Can't Help Myself",
      artist: "Four Tops",
      album: "Four Tops Second Album",
      duration: "2:44",
      image: "/placeholder.svg?height=300&width=300",
      spotifyUrl: "https://open.spotify.com/track/3gyAa1hqlbWKpCcZhsJKVw",
    },
  ],
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const playlistId = searchParams.get("id") || "37i9dQZF1DX0XUsuxWHRQd"

    // Try to get Spotify access token
    const accessToken = await getSpotifyAccessToken()

    const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch playlist from Spotify")
    }

    const playlist: SpotifyPlaylist = await response.json()

    // Transform Spotify data to our format
    const transformedPlaylist = {
      name: playlist.name,
      description: playlist.description,
      spotifyUrl: playlist.external_urls.spotify,
      tracks: playlist.tracks.items.slice(0, 10).map((item) => ({
        id: item.track.id,
        name: item.track.name,
        artist: item.track.artists.map((artist) => artist.name).join(", "),
        album: item.track.album.name,
        duration: formatDuration(item.track.duration_ms),
        image: item.track.album.images[0]?.url || "/placeholder.svg?height=300&width=300",
        spotifyUrl: item.track.external_urls.spotify,
      })),
    }

    return NextResponse.json(transformedPlaylist)
  } catch (error) {
    console.log("Spotify API not available, using mock data:", error)

    // Return mock data instead of error
    return NextResponse.json(mockPlaylistData)
  }
}
