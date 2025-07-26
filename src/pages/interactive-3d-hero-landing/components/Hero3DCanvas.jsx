import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text, Environment } from '@react-three/drei';


const AnimatedGeometry = ({ position, geometry, color }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      {geometry}
      <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
    </mesh>
  );
};

const FloatingElements = () => {
  return (
    <>
      <AnimatedGeometry 
        position={[-3, 2, -2]} 
        geometry={<boxGeometry args={[1, 1, 1]} />}
        color="#0066FF"
      />
      <AnimatedGeometry 
        position={[3, -1, -1]} 
        geometry={<sphereGeometry args={[0.8, 32, 32]} />}
        color="#00AAFF"
      />
      <AnimatedGeometry 
        position={[0, 3, -3]} 
        geometry={<torusGeometry args={[1, 0.3, 16, 100]} />}
        color="#004ACC"
      />
      <AnimatedGeometry 
        position={[-2, -2, 1]} 
        geometry={<octahedronGeometry args={[1]} />}
        color="#0066FF"
      />
    </>
  );
};

const Scene = () => {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(0, 0, 8);
  }, [camera]);

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#0066FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00AAFF" />
      <spotLight 
        position={[0, 10, 0]} 
        angle={0.3} 
        penumbra={1} 
        intensity={1}
        color="#FFFFFF"
      />
      
      <FloatingElements />
      
      <Text
        position={[0, 0, 0]}
        fontSize={1.5}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
      >
        CharlieVerse
      </Text>
      
      <Environment preset="night" />
    </>
  );
};

const Hero3DCanvas = ({ isLoading, onLoadComplete }) => {
  const [controlsEnabled, setControlsEnabled] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div className="relative w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        className="w-full h-full"
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Scene />
        <OrbitControls
          enabled={controlsEnabled}
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          minDistance={5}
          maxDistance={15}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
        />
      </Canvas>
      
      {/* 3D Controls Overlay */}
      <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
        <button
          onClick={() => setControlsEnabled(!controlsEnabled)}
          className={`w-12 h-12 rounded-lg backdrop-blur-md border border-border transition-all duration-normal ${
            controlsEnabled 
              ? 'bg-primary/20 text-primary glow-blue-sm' :'bg-background/20 text-text-secondary hover:text-primary'
          }`}
          title={controlsEnabled ? 'Disable Controls' : 'Enable Controls'}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-current rounded-full relative">
              <div className="absolute inset-1 border border-current rounded-full" />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero3DCanvas;