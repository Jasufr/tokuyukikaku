import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { MeshDistortMaterial } from '@react-three/drei';

const Blob = ({ position, scale, color }) => {
  const meshRef = useRef();

  // useEffect(() => {
  //   if (meshRef.current) {
  //     const geometry = new THREE.SphereGeometry(1, 32, 32);
  //     const positions = geometry.attributes.position.array;
  //     const originalPositions = new Float32Array(positions.length);
  //     positions.forEach((val, idx) => {
  //       originalPositions[idx] = val;
  //     });
  //     meshRef.current.geometry = geometry;
  //     meshRef.current.originalPositions = originalPositions;
  //   }
  // }, []);

  // useFrame(() => {
  //   if (meshRef.current) {
  //     const positions = meshRef.current.geometry.attributes.position.array;
  //     const originalPositions = meshRef.current.originalPositions;

  //     for (let i = 0; i < positions.length; i += 3) {
  //       positions[i] = originalPositions[i] + 0.1 * Math.sin(Date.now() * 0.001 + originalPositions[i]);
  //       positions[i + 1] = originalPositions[i + 1] + 0.1 * Math.sin(Date.now() * 0.001 + originalPositions[i + 1]);
  //       positions[i + 2] = originalPositions[i + 2] + 0.1 * Math.sin(Date.now() * 0.001 + originalPositions[i + 2]);
  //     }
  //     meshRef.current.geometry.attributes.position.needsUpdate = true;
  //   }
  // });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <MeshDistortMaterial
            opacity={.9}
            transparent
            distort={0.4}
            speed={0.5}
            color={color}
          />
    </mesh>
  );
};

export default Blob;
