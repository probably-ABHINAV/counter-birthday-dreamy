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
  experimental: {
    optimizePackageImports: ['framer-motion']
  },
  // Ensure proper handling of client-side components
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  webpack: (config, { isServer }) => {
    // Handle Three.js on server side
    if (isServer) {
      config.externals = [...(config.externals || []), 'three']
    }
    return config
  }
}

export default nextConfig
