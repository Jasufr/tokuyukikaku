import { Environment, Stars, useScroll } from "@react-three/drei";
import { motion } from "framer-motion-3d"
import { useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import Blob from "./Blob";

export const Experience = () => {

  const { viewport } = useThree();
  const data = useScroll();
  const [section, setSection] = useState(0);

  useFrame(() => {
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 3) {
      curSection = 3;
    }

    if (curSection !== section) {
      setSection(curSection);
    }

  });
  return (
    <>
      <Stars />
      <Environment preset="sunset" />
      <motion.group
        animate={"" + section}
        transition={{
          duration: 0.6,
        }}
        variants={{
          0: {
            scaleX: 0,
            scaleY: 0,
            scaleZ: 0,
            y: 0,
            x: 0,
            z: 0,
            //  rotateX: 0,
            //  rotateY: 0,
            //  rotateZ: 0,
          },
          1: {
            scaleX: .6,
            scaleY: .6,
            scaleZ: .6,
            x: 0.5,
            y: -viewport.height - 0.5,
            z: 1,
            //  rotateX: 0,
            //  rotateY: -1,
            //  rotateZ: 0.1,
          },
        }}
      >
        <motion.group>
          <Blob />
        </motion.group>
      </motion.group>
    </>
  );
};
