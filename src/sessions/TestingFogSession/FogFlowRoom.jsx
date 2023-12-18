import { Canvas, useFrame } from "@react-three/fiber";
import "./fog-flow-room.css";
import {
  Box,
  CubeCamera,
  Environment,
  Gltf,
  OrbitControls,
  Plane,
  Scroll,
  ScrollControls,
  Sky,
  SoftShadows,
  Sparkles,
  useScroll,
} from "@react-three/drei";
import { Color, DoubleSide, MeshBasicMaterial } from "three";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Space from "./Space";
import FullCityScroll from "./FullCityScroll";

const FogFlowRoom = () => {
  return (
    <>
      <div className="container">
        <Canvas resize={{ scroll: true }}>
          {/* <color attach={"background"} /> */}
          <ambientLight intensity={1} />
          <directionalLight
            // color={"#bf8bff"}
            position={[0, 0, 10]}
            castShadow
          />
          <FullCityScroll />

          {/* <OrbitControls /> */}
          {/* <Sky /> */}
        </Canvas>
      </div>
    </>
  );
};

export default FogFlowRoom;
