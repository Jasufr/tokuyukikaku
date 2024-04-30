import { Canvas } from "@react-three/fiber";
import MainLayout from "./layout/MainLayout";
// import Blob from "./components/BlobDarkPink";
import { ContactShadows, Environment, Html, MeshDistortMaterial, Scroll, ScrollControls } from "@react-three/drei";
import { Link, Route } from "wouter";
import Home from "./pages/Home";
import About from "./pages/About";
import BlobGreen from "./components/BlobGreen";
import BlobDarkPink from "./components/BlobDarkPink";
import { Experience } from "./components/Experience";
import { ScrollManager } from "./components/ScrollManager";
import { Suspense, useState } from "react";
import { Interface } from "./components/Interface";

const Blob = (props) => (
  <mesh receiveShadow castShadow {...props} scale={[1, 1, 1]}>
    <sphereGeometry />
    <MeshDistortMaterial
      opacity={.9}
      transparent
      distort={.6}
      speed={1.2}
      color={"#2FAD41"}
    />
  </mesh>
);

const Text = () => {
  return (
    <Html>
      <div className="about">
        About Page
        <div className="h-80 bg-darkpink">hello</div>
        <div className="h-80 bg-darkpink">hello</div>
        <div className="h-80 bg-darkpink">hello</div>
        <div className="h-80 bg-darkpink">hello</div>
        <div className="h-80 bg-darkpink">hello</div>
        <div className="h-80 bg-darkpink">hello</div>
        <div className="h-80 bg-darkpink">hello</div>
        <div className="h-80 bg-darkpink">hello</div>
        <div className="h-80 bg-darkpink">hello</div>
      </div>
    </Html>
  )
};

function Apppp() {
  const [section, setSection] = useState(0);

  return (
    <>
      <Canvas eventSource={document.getElementById("root")} camera={{ position: [0, 0, 20], fov: 50 }}>
        {/* <color attach="background" args={["#e0e0e0"]} /> */}
        <ContactShadows scale={100} position={[0, -7.5, 0]} blur={1} far={100} opacity={0.85} />
        <Environment preset="sunset" />
        <Route path="/">
            <BlobDarkPink />
        </Route>
        <Route path="/about">
          <Blob />
        </Route>
      </Canvas>
      <MainLayout />
    </>
  )
}


export default Apppp
