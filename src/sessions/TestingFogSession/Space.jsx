import {
  Box,
  Float,
  Gltf,
  Sparkles,
  Stars,
  useScroll,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { DoubleSide, Fog, FogExp2 } from "three";

const Space = () => {
  const [value, setValue] = useState(0);
  const meshRef = useRef();
  const scroll = useScroll();
  const { scene, camera } = useThree();

  useFrame(({ mouse }, delta) => {
    const v = scroll.offset;

    if (value === 0) {
      setValue(v);
    } else {
      const newValue = value - v;
      if (value === v) {
        // meshRef.current.position.z;
      } else if (newValue > 0 && meshRef.current.position.z > 4) {
        console.log("left");
        meshRef.current.position.z -= v * 10;
      } else if (newValue < 0 && meshRef.current.position.z < 760) {
        meshRef.current.position.z += v * 10;
      }
    }
    setValue(v);

    // const x = -mouse.x * 2 - 1; // Normalize mouse x position
    // const y = -mouse.y * 2 - 1;

    // camera.position.x = x * 2; // Adjust the multiplier as needed
    // camera.position.y = y * 2;
  });

  // scene.fog = new Fog(0xffffff, 30, 50);
  scene.fog = new FogExp2(0xffffff, 0.05);

  return (
    <>
      <group ref={meshRef}>
        <Gltf src="building_set.glb" />
        <Box args={[50, 50, 100]} position={[50, 0, -100]} castShadow={true}>
          <meshStandardMaterial attach="material" color="#cca3ff" />
        </Box>
        <Box args={[50, 50, 100]} position={[-50, 0, -100]} castShadow={true}>
          <meshStandardMaterial attach="material" color="#cca3ff" />
        </Box>
        <Float>
          <Box args={[1, 1]} position={[2, 0, 0]} castShadow={true}>
            <meshStandardMaterial attach="material" color="#cca3ff" />
          </Box>
        </Float>
        <Float>
          <Box args={[1, 1]} position={[-4, 0, -10]} castShadow={true}>
            <meshStandardMaterial attach="material" color="#cca3ff" />
          </Box>
        </Float>
        <Float>
          <Box args={[1, 1]} position={[8, 2, -40]} castShadow={true}>
            <meshStandardMaterial attach="material" color="#cca3ff" />
          </Box>
        </Float>
        <Float>
          <Box args={[1, 1]} position={[-8, -2, -80]} castShadow={true}>
            <meshStandardMaterial attach="material" color="#cca3ff" />
          </Box>
        </Float>
        <Float>
          <Box args={[1, 1]} position={[4, 0, -150]} castShadow={true}>
            <meshStandardMaterial attach="material" color="#cca3ff" />
          </Box>
        </Float>
        <Float>
          <Box args={[1, 1]} position={[-8, 2, -200]} castShadow={true}>
            <meshStandardMaterial attach="material" color="#cca3ff" />
          </Box>
        </Float>
        <Float>
          <Box args={[1, 1]} position={[4, -4, -250]} castShadow={true}>
            <meshStandardMaterial attach="material" color="#cca3ff" />
          </Box>
        </Float>
        <Float>
          <Box args={[1, 1]} position={[-2, 2, -280]} castShadow={true}>
            <meshStandardMaterial attach="material" color="#cca3ff" />
          </Box>
        </Float>
        <Float>
          <Box args={[1, 1]} position={[-2, -2, -300]} castShadow={true}>
            <meshStandardMaterial attach="material" color="#cca3ff" />
          </Box>
        </Float>
        <Float>
          <Box args={[1, 1]} position={[1, 2, -350]} castShadow={true}>
            <meshStandardMaterial attach="material" color="#cca3ff" />
          </Box>
        </Float>
        {/* <mesh position={[0, 0, -395]}>
          <boxGeometry args={[40, 40, 800]} />
          <meshStandardMaterial color={"#ffffff"} />
        </mesh> */}
        <pointLight color={"#bf8bff"} intensity={1000} position={[0, 0, 100]} />
        <pointLight
          color={"#bf8bff"}
          intensity={1000}
          position={[0, 0, -100]}
        />
        <pointLight color={"#bf8bff"} intensity={1000} position={[0, 0, 0]} />
        <pointLight color={"#bf8bff"} intensity={1000} position={[0, 0, 200]} />
        <pointLight
          color={"#bf8bff"}
          intensity={1000}
          position={[0, 0, -200]}
        />
        <pointLight color={"#bf8bff"} intensity={1000} position={[0, 0, 300]} />
        <pointLight
          color={"#bf8bff"}
          intensity={1000}
          position={[0, 0, -300]}
        />
      </group>
      <Sparkles
        position={[0, 0, 0]}
        count={200}
        speed={1}
        opacity={1}
        size={2}
        scale={10}
        noise={2}
        color={"#e5d0ff"}
      />
    </>
  );
};

export default Space;
