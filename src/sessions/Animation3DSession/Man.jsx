import {
  Box,
  Float,
  Gltf,
  OrbitControls,
  ScreenQuad,
  useAnimations,
  useGLTF,
  useScroll,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react";
import BackgroundEffect from "./BackgroundEffect";
import ThirdRoomScene from "./ThirdRoomScene";

const Man = () => {
  const meshRef = useRef();
  const scroll = useScroll();
  const tl = useRef();

  const { scene, animations } = useGLTF("griffin_animated.glb");
  const { ref, actions, names } = useAnimations(animations);

  useEffect(() => {
    // Reset and fade in animation after an index has been changed
    actions[names[0]].reset().fadeIn(0.5).play();
    // In the clean-up phase, fade it out
    return () => actions[names[0]].fadeOut(0.5);
  }, [actions, names]);

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut" },
    });

    tl.current
      .to(meshRef.current.rotation, { y: -1 }, 2)
      .to(meshRef.current.position, { x: 1 }, 2)

      .to(meshRef.current.rotation, { y: 1 }, 6)
      .to(meshRef.current.position, { x: -1 }, 6)

      .to(meshRef.current.rotation, { y: 0 }, 11)
      .to(meshRef.current.rotation, { x: 1 }, 11)
      .to(meshRef.current.position, { x: 0 }, 11)

      .to(meshRef.current.rotation, { y: 0 }, 13)
      .to(meshRef.current.rotation, { x: -1 }, 13)
      .to(meshRef.current.position, { x: 0 }, 13)

      .to(meshRef.current.rotation, { y: 0 }, 16)
      .to(meshRef.current.rotation, { x: 0 }, 16)
      .to(meshRef.current.position, { x: 0 }, 16)

      .to(meshRef.current.rotation, { y: 0 }, 20)
      .to(meshRef.current.rotation, { x: 0 }, 20)
      .to(meshRef.current.position, { x: 0 }, 20)

      .to(meshRef.current.position, { x: 0 }, 21);
  }, []);

  return (
    <>
      <ThirdRoomScene />
      <Float
        speed={2} // Animation speed, defaults to 1
        rotationIntensity={1} // XYZ rotation intensity, defaults to 1
        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-0.5, 0.5]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <group ref={ref}>
          <Gltf
            position={[0, -1, 0]}
            ref={meshRef}
            src="griffin_animated.glb"
            animations={true}
          />
        </group>
      </Float>
      {/* <OrbitControls /> */}
      <BackgroundEffect />
    </>
  );
};

export default Man;
