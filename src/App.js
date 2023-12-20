import { Canvas } from '@react-three/fiber';
import './App.css';
import AnimationScroll from './sessions/Animation3DSession/AnimationScroll';
import PhysicsBox from './sessions/PhysicsBoxStarterSession/PhysicsBox';
import { Physics } from '@react-three/rapier';
import Alpine from "alpinejs";
import Ripple from "@wilkr/alpine-ripple";
import LiquidWaveEffect from './sessions/HoverWaveEffect/LiquidWaveEffect';
import VideoContents from './sessions/VideoContentsSession/VideoContents';
import FogFlowRoom from './sessions/TestingFogSession/FogFlowRoom';
import { Suspense } from 'react';
import { Loader } from '@react-three/drei';

function App() {

  
  return (
    <>
      <Suspense fallback={<Loader />}>
        
        <FogFlowRoom />
      </Suspense>
      <div className="App">
        {/* <LiquidWaveEffect /> */}
        {/* <PhysicsBox />
        <VideoContents />
        <AnimationScroll /> */}
      </div>
    </>
  );
}

export default App;
