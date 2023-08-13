import React, { useEffect } from "react";
import { OrbitControls, useGLTF, Sky} from "@react-three/drei";

export const Experience = () => {
  const model = useGLTF("./model.glb");

  useEffect(() => {
    model.scene.traverse((child) => {
      if (child.isMesh) {
        if (+child.material.metalness === 1) {
          child.material.metalness = 0.83;
        }
      }
    });
  }, []);
  return (
    <>
      <Sky />
      <OrbitControls
        minDistance={1.1}
        maxDistance={3}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2.5}
        rotateSpeed={0.3}
      />
      <pointLight castShadow position={[-1.3, 0, 1.2]} intensity={0.1} />
      <pointLight castShadow position={[-10, 0.4, 10]} intensity={0.3} />
      <pointLight castShadow position={[10, 0.4, -10]} intensity={0.3} />
      <pointLight castShadow position={[-10, 0.4, -10]} intensity={0.3} />
      <pointLight castShadow position={[10, 0.4, 10]} intensity={0.3} />
      <directionalLight intensity={1} position={[0, 1, 0]} />
      <group receiveShadow scale={1} position={[0, -1, 0]} >
        <primitive object={model.scene} />
      </group>
    </>
  );
};
