/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['images.unsplash.com', 'placeholder.svg'],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placeholder.svg',
        port: '',
        pathname: '/**',
      }
    ]
  },
  // Simplified config without problematic optimizations
  swcMinify: true,
  reactStrictMode: true,
}

export default nextConfig
