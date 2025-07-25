import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "✨ Dreamy Birthday Countdown ✨",
  description: "A magical countdown to your special day with celestial animations and interactive features",
  keywords: ["birthday", "countdown", "celebration", "interactive", "3D", "magical"],
  authors: [{ name: "Dreamy Birthday Team" }],
  openGraph: {
    title: "✨ Dreamy Birthday Countdown ✨",
    description: "A magical countdown to your special day",
    type: "website",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Dreamy Birthday Countdown",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "✨ Dreamy Birthday Countdown ✨",
    description: "A magical countdown to your special day",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
