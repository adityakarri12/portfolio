
import { Canvas } from '@react-three/fiber';
import { Suspense, useRef, useMemo } from 'react';
import { OrbitControls, Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingCodeBlock = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh position={position}>
        <boxGeometry args={[1.5, 1, 0.1]} />
        <meshStandardMaterial 
          color="#00D9FF" 
          transparent 
          opacity={0.7}
          emissive="#00D9FF"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
};

const SimpleParticles = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const particleCount = 30;
  
  // Generate positions once using useMemo
  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < particleCount; i++) {
      pos.push(new THREE.Vector3(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      ));
    }
    return pos;
  }, [particleCount]);

  // Set up matrices once when component mounts
  useMemo(() => {
    if (meshRef.current) {
      const matrix = new THREE.Matrix4();
      positions.forEach((position, index) => {
        matrix.setPosition(position);
        meshRef.current!.setMatrixAt(index, matrix);
      });
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  }, [positions]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, particleCount]}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshBasicMaterial color="#8B5CF6" />
    </instancedMesh>
  );
};

const Scene3D = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00D9FF" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
          
          <SimpleParticles />
          
          <FloatingCodeBlock position={[-4, 2, -2]} />
          <FloatingCodeBlock position={[4, -1, -3]} />
          <FloatingCodeBlock position={[0, 3, -4]} />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
