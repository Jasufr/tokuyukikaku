import {
  Float,
  MeshDistortMaterial,
  // MeshWobbleMaterial,
  // useScroll,
} from "@react-three/drei";
// import { useFrame, useThree } from "@react-three/fiber";
// import { animate, useMotionValue } from "framer-motion";
// import { motion } from "framer-motion-3d";
// import { useEffect, useRef, useState } from "react";
// import { framerMotionConfig } from "../config";
// import { Avatar } from "./Avatar";
// import { Background } from "./Background";
// import { Office } from "./Office";
// import { Projects } from "./Projects";

const Blob = () => {

  return (
    <>
      <group>
          <mesh position={[0, 0, -10]} scale={[1, 1, 1]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={.9}
              transparent
              distort={.5}
              speed={1}
              color={"#ED0066"}
            />
          </mesh>
      </group>
    </>
  )
};

export default Blob;
