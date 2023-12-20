import { useSpring } from "@react-spring/three";
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
import { Color, Fog, FogExp2, MeshBasicMaterial } from "three";
import { easing } from "maath";

const FullCityScroll = () => {
  const [changeEnvironmentColor, setChangeEnvironmentColor] = useState("white");
  const planeRef = useRef();
  const { scene, camera } = useThree();
  const cameraRef = useRef();
  const meshRef = useRef();

  const { colorValue } = useSpring({
    colorValue: changeEnvironmentColor,
    config: { duration: 100 },
  });

  const onMouseWheel = (event) => {
    if (camera) {
      const delta = -Math.sign(event.deltaY);
      camera.position.z += delta * 0.1;
    }
  };

  // console.log("colorValue", colorValue);

  useFrame(() => {
    let newColor = "cornsilk";
    if (camera.position.z < 50 && camera.position.z > 0) {
      newColor = "thistle";
    } else if (camera.position.z > -50 && camera.position.z < 0) {
      newColor = "peachpuff";
    } else if (camera.position.z > -100 && camera.position.z < -50) {
      newColor = "lavender";
    }
    const delta = 0.05; // Change this value to adjust speed

    // Example: Transition the color from current color to target color
    const targetColor = new Color(newColor); // Change this to your target color
    const newColorProp = new Color().lerpColors(
      changeEnvironmentColor,
      targetColor,
      delta
    );
    console.log("newColorProp", newColorProp);
    // setChangeEnvironmentColor(newColorProp);
    if (planeRef.current) {
      const material = new MeshBasicMaterial({ color: "#363435" });
      planeRef.current.material = material;
    }
    document.addEventListener("wheel", onMouseWheel, false);
  });

  scene.fog = new Fog(changeEnvironmentColor, 10, 30);
  scene.fog = new FogExp2(changeEnvironmentColor, 0.05);

  // setChangeEnvironmentColor("red");

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 5, 110]} />
      <color attach="background" args={[changeEnvironmentColor]} />
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

      <Sparkles
        position={[0, 2, 100]}
        count={100}
        speed={1}
        opacity={0.8}
        size={5}
        scale={15}
        noise={2}
        color={changeEnvironmentColor}
      />
      <Sparkles
        position={[0, 2, 80]}
        count={100}
        speed={1}
        opacity={0.8}
        size={5}
        scale={15}
        noise={2}
        color={changeEnvironmentColor}
      />
      <Sparkles
        position={[0, 2, 60]}
        count={100}
        speed={1}
        opacity={0.8}
        size={5}
        scale={15}
        noise={2}
        color={changeEnvironmentColor}
      />
      <Sparkles
        position={[0, 2, 40]}
        count={100}
        speed={1}
        opacity={0.8}
        size={5}
        scale={15}
        noise={2}
        color={changeEnvironmentColor}
      />
      <Sparkles
        position={[0, 2, 20]}
        count={100}
        speed={1}
        opacity={0.8}
        size={5}
        scale={15}
        noise={2}
        color={changeEnvironmentColor}
      />
      <Sparkles
        position={[0, 2, 0]}
        count={100}
        speed={1}
        opacity={0.8}
        size={5}
        scale={15}
        noise={2}
        color={changeEnvironmentColor}
      />
      <Sparkles
        position={[0, 2, -20]}
        count={100}
        speed={1}
        opacity={0.8}
        size={5}
        scale={15}
        noise={2}
        color={changeEnvironmentColor}
      />
      <Sparkles
        position={[0, 2, -40]}
        count={100}
        speed={1}
        opacity={0.8}
        size={5}
        scale={15}
        noise={2}
        color={changeEnvironmentColor}
      />
      <Sparkles
        position={[0, 2, -60]}
        count={100}
        speed={1}
        opacity={0.8}
        size={5}
        scale={15}
        noise={2}
        color={changeEnvironmentColor}
      />
      <Sparkles
        position={[0, 2, -80]}
        count={100}
        speed={1}
        opacity={0.8}
        size={5}
        scale={15}
        noise={2}
        color={changeEnvironmentColor}
      />
      <Sparkles
        position={[0, 2, -100]}
        count={100}
        speed={1}
        opacity={0.8}
        size={5}
        scale={15}
        noise={2}
        color={changeEnvironmentColor}
      />
    </>
  );
};

export default FullCityScroll;
