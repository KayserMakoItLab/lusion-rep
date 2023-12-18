import { Scroll, ScrollControls, useGLTF } from "@react-three/drei";
import Man from "./Man";
import { Canvas } from "@react-three/fiber";

const AnimationScroll = () => {
  return (
    <>
      <Canvas>
        <ambientLight />
        <directionalLight />
        <ScrollControls pages={6} damping={0.1}>
          <Man />
          {/* <Scroll></Scroll> */}
          <Scroll html style={{ width: "100%" }}>
            <h1
              className="title"
              style={{
                color: "#cdcbca",
                position: "absolute",
                top: `65vh`,
                left: "50%",
                fontSize: "13em",
                transform: `translate(-50%,-50%)`,
              }}
            >
              GRIFFIN
            </h1>

            {/* <div className="row" style={{ position: "absolute", top: `132vh` }}>
            <h2>Be a Man of the Future.</h2>
            <p style={{ maxWidth: "400px" }}>
              Featuring a sleek, metallic design inspired by advanced
              technology, this aftershave bottle is as stylish as it is
              functional. But it's not just a pretty face - inside, you'll find
              a nourishing and protective aftershave formula that will leave
              your skin feeling refreshed and hydrated.
            </p>
            <button>Read more</button>
          </div>

          <div className="row" style={{ position: "absolute", top: `230vh` }}>
            <div
              className="col"
              style={{ position: "absolute", right: `40px`, width: "540px" }}
            >
              <h2 style={{ maxWidth: "440px" }}>Tech-Savvy Side</h2>
              <p style={{ maxWidth: "440px" }}>
                Featuring a sleek, metallic design inspired by advanced
                technology, this aftershave bottle is as stylish as it is
                functional. But it's not just a pretty face - inside, you'll
                find a nourishing and protective aftershave formula that will
                leave your skin feeling refreshed and hydrated.
              </p>
              <button>Read more</button>
            </div>
          </div>

          <h2
            style={{
              position: "absolute",
              top: "350vh",
              left: "50%",
              transform: `translate(-50%,-50%)`,
            }}
          >
            Cutting-Edge of Grooming
          </h2>

          <button
            style={{
              position: "absolute",
              top: `590vh`,
              left: "50%",
              transform: `translate(-50%,-50%)`,
            }}
          >
            Buy now
          </button> */}
          </Scroll>
        </ScrollControls>
        {/* <Environment background preset="warehouse" /> */}
      </Canvas>
    </>
  );
};

export default AnimationScroll;
