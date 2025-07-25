"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Environment, Sphere, MeshDistortMaterial } from "@react-three/drei"
import { useRef, Suspense } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import { motion } from "framer-motion"

function FloatingOrb() {
  const orbRef = useRef<THREE.Mesh>(null)
  const lanternsRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.rotation.y += 0.005
      orbRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }

    if (lanternsRef.current) {
      lanternsRef.current.children.forEach((lantern, i) => {
        lantern.position.y = Math.sin(state.clock.elapsedTime + i) * 0.5
        lantern.rotation.y += 0.01
      })
    }
  })

  return (
    <group>
      {/* Main Glass Orb */}
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

      {/* Floating Lanterns */}
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

      {/* Ambient Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffd700" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff69b4" />
    </group>
  )
}

function CanvasLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className="text-white text-xl"
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        ✨ Loading magical scene... ✨
      </motion.div>
    </div>
  )
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Suspense fallback={<CanvasLoader />}>
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <Environment preset="night" />
          <FloatingOrb />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </Suspense>
    </div>
  )
}
