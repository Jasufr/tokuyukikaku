import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { Suspense, useState } from "react";
import { ScrollManager } from "./components/ScrollManager";
import { MotionConfig } from "framer-motion";
import { framerMotionConfig } from "./config";
import MainLayout from "./layout/MainLayout";

function Appp() {
  const [section, setSection] = useState(0);

  return (
    <>
    <MotionConfig transition={{
      ...framerMotionConfig,
    }}>
      {/* <MainLayout> */}
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
        <color attach="background" args={["black"]} />
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager section={section} onSectionChange={setSection} />
          <Scroll>
            <Suspense>
              {/* {started && (<Experience section={section} sunPosition={sunPosition} />)} */}
              <Experience section={section} />
            </Suspense>
          </Scroll>
          <Scroll html>
            {/* {started && (<Interface setSection={setSection} />)} */}
            <Interface setSection={setSection} />
          </Scroll>
        </ScrollControls>
      </Canvas>
      {/* <Menu onSectionChange={setSection} /> */}
      {/* </MainLayout> */}
    </MotionConfig>
    {/* <Leva hidden /> */}
    </>
  );
}

export default Appp;
