"use client"

import type React from "react"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Environment, Sphere, MeshDistortMaterial } from "@react-three/drei"
import { useRef, useState, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { motion } from "framer-motion"

// Safe fallback component that doesn't use Three.js
function FallbackHero() {
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
      <motion.div
        className="relative w-64 h-64 rounded-full bg-gradient-to-r from-rose-500/30 via-pink-500/30 to-purple-500/30 backdrop-blur-sm border border-white/20"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360],
        }}
        transition={{
          scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
        }}
      >
        {/* Central orb */}
        <motion.div
          className="absolute inset-8 rounded-full bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md"
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Floating elements around the orb */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2
          const radius = 120
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius

          return (
            <motion.div
              key={i}
              className="absolute w-4 h-6 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-sm"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transformOrigin: "center",
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.6, 1, 0.6],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          )
        })}

        {/* Central heart */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-6xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          💖
        </motion.div>
      </motion.div>
    </div>
  )
}

// Three.js component that only loads when safe
function ThreeJSHero() {
  const [ThreeComponent, setThreeComponent] = useState<React.ComponentType | null>(null)

  useEffect(() => {
    // Only load Three.js components after mount and with error handling
    const loadThreeJS = async () => {
      try {
        const FloatingOrb = () => {
          const orbRef = useRef<any>(null)
          const lanternsRef = useRef<any>(null)

          useFrame((state) => {
            if (orbRef.current) {
              orbRef.current.rotation.y += 0.005
              orbRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
            }

            if (lanternsRef.current) {
              lanternsRef.current.children.forEach((lantern: any, i: number) => {
                lantern.position.y = Math.sin(state.clock.elapsedTime + i) * 0.5
                lantern.rotation.y += 0.01
              })
            }
          })

          return (
            <group>
              <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                <Sphere ref={orbRef} args={[2, 64, 64]} position={[0, 0, 0]}>
                  <MeshDistortMaterial
                    color="#ffffff"
                    transparent
                    opacity={0.3}
                    distort={0.1}
                    speed={2}
                    roughness={0}
                    metalness={0.1}
                  />
                </Sphere>
              </Float>

              <group ref={lanternsRef}>
                {Array.from({ length: 8 }).map((_, i) => {
                  const angle = (i / 8) * Math.PI * 2
                  const radius = 6
                  const x = Math.cos(angle) * radius
                  const z = Math.sin(angle) * radius

                  return (
                    <Float key={i} speed={1 + i * 0.1} rotationIntensity={0.2} floatIntensity={0.3}>
                      <mesh position={[x, Math.random() * 4 - 2, z]}>
                        <boxGeometry args={[0.3, 0.4, 0.3]} />
                        <meshStandardMaterial
                          color={`hsl(${45 + i * 15}, 70%, 60%)`}
                          emissive={`hsl(${45 + i * 15}, 70%, 30%)`}
                          emissiveIntensity={0.5}
                        />
                      </mesh>
                    </Float>
                  )
                })}
              </group>

              <ambientLight intensity={0.4} />
              <pointLight position={[10, 10, 10]} intensity={1} color="#ffd700" />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff69b4" />
            </group>
          )
        }

        const ThreeJSCanvas = () => (
          <div className="absolute inset-0 w-full h-full">
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
              <Environment preset="night" />
              <FloatingOrb />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
          </div>
        )

        setThreeComponent(() => ThreeJSCanvas)
      } catch (error) {
        console.log("Three.js not available, using fallback")
        // Keep using fallback
      }
    }

    // Add a delay to ensure everything is mounted
    const timer = setTimeout(loadThreeJS, 1000)
    return () => clearTimeout(timer)
  }, [])

  return ThreeComponent ? <ThreeComponent /> : <FallbackHero />
}

export default function HeroCanvas() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Always show fallback until fully mounted
  if (!isMounted) {
    return <FallbackHero />
  }

  return <ThreeJSHero />
}
