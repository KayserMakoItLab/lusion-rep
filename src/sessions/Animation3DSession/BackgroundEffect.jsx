import { Cloud, Clouds, Sparkles, Stars, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Color, MeshBasicMaterial } from "three";
import { easing } from "maath";

const BackgroundEffect = () => {
  const [changeColor, setChangeColor] = useState("");
  const scroll = useScroll();
  const backgroundColor = useRef();

  console.log("backgroundColor", backgroundColor.current);

  useFrame((state, delta) => {
    if (scroll.offset < 0.3) {
      setChangeColor("#ff0000");
    } else if (0.3 < scroll.offset && scroll.offset < 0.6) {
      setChangeColor("#0000ff");
    } else if (0.6 < scroll.offset) {
      setChangeColor("#000000");
    }
    easing.dampC(backgroundColor.current, new Color(changeColor), 0.2, delta);
  });

  return (
    <>
      <color ref={backgroundColor} attach={"background"} />
      {scroll.offset < 0.3 && (
        <>
          {/* <Clouds material={MeshBasicMaterial}>
          <Cloud
            segments={40}
            bounds={[100, 2, 2]}
            volume={10}
            color="orange"
          />
          <Cloud seed={1} scale={1} volume={5} color="hotpink" fade={100} />
        </Clouds> */}
        </>
      )}
      {0.3 < scroll.offset && scroll.offset < 0.6 && (
        <>
          <Sparkles
            count={200}
            speed={1}
            opacity={1}
            size={2}
            scale={2}
            noise={2}
          />
          {/* <Clouds material={MeshBasicMaterial}>
            <Cloud
              segments={20}
              bounds={[20, 2, 2]}
              volume={10}
              color="white"
            />
            <Cloud seed={1} scale={1} volume={5} color="hotpink" fade={100} />
          </Clouds> */}
        </>
      )}
      {0.6 < scroll.offset && (
        <Stars
          radius={100}
          depth={5}
          count={5000}
          factor={4}
          saturation={10}
          fade
          speed={1}
        />
      )}
    </>
  );
};

export default BackgroundEffect;
