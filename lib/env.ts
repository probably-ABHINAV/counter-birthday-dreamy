export const env = {
  spotify: {
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  },
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",
}

export function validateSpotifyConfig() {
  const { clientId, clientSecret } = env.spotify

  if (!clientId || !clientSecret) {
    console.warn(
      "Spotify credentials not found. Please set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET environment variables.",
    )
    return false
  }

  return true
}
