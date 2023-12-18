import { useScroll, useVideoTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { DoubleSide, RepeatWrapping } from "three";

const ThirdRoomScene = () => {
  const texture = useVideoTexture("texture.mp4");
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.x = -1;
  texture.offset.x = 1;

  const boxRef = useRef();
  const scroll = useScroll();
  const tl = useRef();

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut" },
    });

    tl.current
      .to(boxRef.current.rotation, { y: -1 }, 2)
      .to(boxRef.current.position, { x: 1 }, 2)

      .to(boxRef.current.rotation, { y: 1 }, 6)
      .to(boxRef.current.position, { x: -1 }, 6)

      .to(boxRef.current.rotation, { y: 0 }, 11)
      .to(boxRef.current.rotation, { x: 1 }, 11)
      .to(boxRef.current.position, { x: 0 }, 11)

      .to(boxRef.current.rotation, { y: 0 }, 13)
      .to(boxRef.current.rotation, { x: -1 }, 13)
      .to(boxRef.current.position, { x: 0 }, 13)

      .to(boxRef.current.rotation, { y: 0 }, 16)
      .to(boxRef.current.rotation, { x: 0 }, 16)
      .to(boxRef.current.position, { x: 0 }, 16)

      .to(boxRef.current.rotation, { y: 0 }, 20)
      .to(boxRef.current.rotation, { x: 0 }, 20)
      .to(boxRef.current.position, { x: 0 }, 20)

      .to(boxRef.current.position, { z: -40 }, 21);
  }, []);

  return (
    <>
      <mesh ref={boxRef}>
        <boxGeometry args={[20, 20, 100]} />
        <meshStandardMaterial side={DoubleSide} map={texture} />
      </mesh>
    </>
  );
};

export default ThirdRoomScene;
