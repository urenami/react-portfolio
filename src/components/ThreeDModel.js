import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const ThreeDModel = () => {
  return (
    <Canvas camera={{ position: [2, 2, 5], fov: 50 }}>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <directionalLight position={[-2, 5, 2]} intensity={0.5} />

      {/* Orbit Controls for interaction */}
      <OrbitControls enableZoom={false} />

      {/* Mesh object */}
      <mesh rotation={[0.2, 0.4, 0]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>

      {/* Ground plane for better visual balance */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="lightgrey" />
      </mesh>
    </Canvas>
  );
};

export default ThreeDModel;
