import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface ParticleSystemProps {
  count: number;
}

function ParticleSystem({ count }: ParticleSystemProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });

  // Generate random particle positions in a sphere
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Distribute particles in a wider space
      const radius = 5 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, [count]);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate particles
  useFrame((state) => {
    if (!pointsRef.current) return;

    const time = state.clock.getElapsedTime();

    // Gentle rotation
    pointsRef.current.rotation.y = time * 0.05;
    pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;

    // Parallax effect based on mouse position
    pointsRef.current.rotation.y += mouse.current.x * 0.05;
    pointsRef.current.rotation.x += mouse.current.y * 0.05;

    // Wave effect
    const positionsArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positionsArray[i3 + 1] += Math.sin(time + positionsArray[i3]) * 0.002;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#f59e0b"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

interface WebGLBackgroundProps {
  className?: string;
}

export function WebGLBackground({ className = '' }: WebGLBackgroundProps) {
  // Detect device type and adjust particle count
  const particleCount = useMemo(() => {
    if (typeof window === 'undefined') return 1000;

    const width = window.innerWidth;
    if (width < 768) return 500; // Mobile
    if (width < 1024) return 800; // Tablet
    return 1500; // Desktop
  }, []);

  return (
    <div className={`${className} pointer-events-none`} style={{ opacity: 0.4 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]} // Pixel ratio for better performance
      >
        <ambientLight intensity={0.5} />
        <ParticleSystem count={particleCount} />

        {/* Additional purple particles for gradient effect */}
        <Points
          positions={useMemo(() => {
            const positions = new Float32Array(particleCount * 0.5 * 3);
            for (let i = 0; i < particleCount * 0.5; i++) {
              const i3 = i * 3;
              positions[i3] = (Math.random() - 0.5) * 20;
              positions[i3 + 1] = (Math.random() - 0.5) * 20;
              positions[i3 + 2] = (Math.random() - 0.5) * 10 - 5;
            }
            return positions;
          }, [particleCount])}
          stride={3}
        >
          <PointMaterial
            transparent
            color="#a855f7"
            size={0.04}
            sizeAttenuation={true}
            depthWrite={false}
            opacity={0.4}
            blending={THREE.AdditiveBlending}
          />
        </Points>
      </Canvas>
    </div>
  );
}
