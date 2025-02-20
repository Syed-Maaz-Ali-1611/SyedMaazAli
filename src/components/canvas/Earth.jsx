import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Avatar = () => {
  const avatar = useGLTF("https://models.readyplayer.me/67b3468769dbb866cb2c6d68.glb");

  return (
    <primitive
      object={avatar.scene}
      scale={3} // Increased size of avatar
      position-y={-3} // Adjust the Y position to center the avatar
      rotation-y={0} // Adjust the rotation if needed
    />
  );
};

const AvatarCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6], // Adjust the camera position as needed
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false} // Disable zoom functionality
          maxPolarAngle={Math.PI / 2} // Keep the controls limited to a half-sphere rotation
          minPolarAngle={Math.PI / 2} // Keep the controls limited to a half-sphere rotation
          autoRotate={false} // Disable the auto-rotation
        />
        <ambientLight intensity={0.5} /> {/* Added ambient light */}
        <directionalLight intensity={1} position={[5, 5, 5]} /> {/* Added directional light */}
        <Avatar />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default AvatarCanvas;
