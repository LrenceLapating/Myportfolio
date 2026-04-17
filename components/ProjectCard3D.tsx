"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, RoundedBox, MeshWobbleMaterial } from "@react-three/drei";
import { Suspense } from "react";

function Project3DCard({ color }: { color: string }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <RoundedBox args={[2, 2.5, 0.3]} radius={0.1} smoothness={4}>
        <MeshWobbleMaterial
          color={color}
          attach="material"
          factor={0.3}
          speed={2}
          roughness={0.3}
          metalness={0.8}
        />
      </RoundedBox>
    </Float>
  );
}

export function ProjectCard3D({ color }: { color: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black" />;
  }

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ antialias: true }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Project3DCard color={color} />
      </Suspense>
    </Canvas>
  );
}
