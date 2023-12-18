import {
  AccumulativeShadows,
  Cloud,
  Clouds,
  Gltf,
  OrthographicCamera,
  PerspectiveCamera,
  Plane,
  RandomizedLight,
  Scroll,
  ScrollControls,
  Sparkles,
  useScroll,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Fog, FogExp2, MeshBasicMaterial } from "three";

const FullCityScroll = () => {
  const planeRef = useRef();
  const { scene, camera } = useThree();
  const cameraRef = useRef();
  const meshRef = useRef();

  function onMouseWheel(event) {
    if (camera) {
      const delta = -Math.sign(event.deltaY);
      camera.position.z += delta * 0.3;
    }
  }

  useFrame(() => {
    if (planeRef.current) {
      const material = new MeshBasicMaterial({ color: "#363435" });
      planeRef.current.material = material;
    }
    document.addEventListener("wheel", onMouseWheel, false);
  });

  scene.fog = new Fog(0xffffff, 10, 30);
  scene.fog = new FogExp2(0xffffff, 0.05);

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 5, 110]} />

      <group ref={meshRef}>
        <group>
          <Gltf src="/building_set.glb" position={[8, 0, 0]} />
          <Gltf src="/building_set.glb" position={[8, 0, 20]} />
          <Gltf src="/building_set.glb" position={[8, 0, -20]} />
          <Gltf src="/building_set.glb" position={[8, 0, -40]} />
          <Gltf src="/building_set.glb" position={[8, 0, 40]} />
          <Gltf src="/building_set.glb" position={[8, 0, 60]} />
          <Gltf src="/building_set.glb" position={[8, 0, -60]} />
          <Gltf src="/building_set.glb" position={[8, 0, 80]} />
          <Gltf src="/building_set.glb" position={[8, 0, -80]} />
          <Gltf src="/building_set.glb" position={[8, 0, 100]} />
          <Gltf src="/building_set.glb" position={[8, 0, -100]} />
        </group>
        <group rotation={[0, Math.PI, 0]} position={[-23, 0, -40]}>
          <Gltf src="/building_set.glb" position={[-15, 0, 0]} />
          <Gltf src="/building_set.glb" position={[-15, 0, 20]} />
          <Gltf src="/building_set.glb" position={[-15, 0, -20]} />
          <Gltf src="/building_set.glb" position={[-15, 0, -40]} />
          <Gltf src="/building_set.glb" position={[-15, 0, 40]} />
          <Gltf src="/building_set.glb" position={[-15, 0, 60]} />
          <Gltf src="/building_set.glb" position={[-15, 0, -60]} />
          <Gltf src="/building_set.glb" position={[-15, 0, 80]} />
          <Gltf src="/building_set.glb" position={[-15, 0, -80]} />
          <Gltf src="/building_set.glb" position={[-15, 0, 100]} />
          <Gltf src="/building_set.glb" position={[-15, 0, -100]} />
        </group>
        <Plane
          receiveShadow
          ref={planeRef}
          args={[500, 500]}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.12, 0]}
        />
      </group>
      <AccumulativeShadows temporal frames={100} scale={10}>
        <RandomizedLight amount={8} position={[5, 5, -10]} />
      </AccumulativeShadows>
      {/* <Clouds material={MeshBasicMaterial}>
        <Cloud
          ref={cloudRef}
          position={[0, 5, 30]}
          seed={1}
          scale={5}
          volume={3}
          color="white"
          opacity={0.7}
          growth={10}
        />
      </Clouds> */}
      {/* <Sparkles
        position={[0, 10, 0]}
        count={100}
        speed={1}
        opacity={1}
        size={2}
        scale={10}
        noise={2}
        color={"white"}
      /> */}
    </>
  );
};

export default FullCityScroll;
