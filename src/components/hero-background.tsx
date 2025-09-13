import { Canvas } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

function TechConstellation() {
  const pointsRef = useRef<THREE.Points>(null!)
  
  // Generate random positions for particles
  const particleCount = 1000
  const positions = new Float32Array(particleCount * 3)
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8A2BE2"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

function CyberGrid() {
  const gridRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.02
    }
  })

  return (
    <group ref={gridRef}>
      <gridHelper args={[20, 20, "#00FFFF", "#8A2BE2"]} />
      <gridHelper args={[20, 20, "#00FFFF", "#8A2BE2"]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} color="#8A2BE2" intensity={0.5} />
          <pointLight position={[-10, -10, -10]} color="#00FFFF" intensity={0.3} />
          <TechConstellation />
          <CyberGrid />
        </Suspense>
      </Canvas>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-violet/20 via-transparent to-cyber-cyan/20 pointer-events-none" />
    </div>
  )
}