import { Canvas } from "@react-three/fiber";
import MainLayout from "./layout/MainLayout";
import BlobDarkPink from "./components/BlobDarkPink";
import { Environment, Html } from "@react-three/drei";
import BlobLightPink from "./components/BlobLightPink";
import { Link, Route, useRoute } from "wouter";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlobGreen from "./components/BlobGreen";
import { useEffect, useState } from "react";

function App() {
  const [contentHeight, setContentHeight] = useState(0);
  const [blobPositions, setBlobPositions] = useState({
    darkPink: [0, 0, 0],
    lightPink: [2, 0, 0],
    green: [4, 0, 0]
  });


  // Get the height of the content within the Route
  const [, params] = useRoute("/:page");

  useEffect(() => {
    const contentElement = document.getElementById("content");
    if (contentElement) {
      setContentHeight(contentElement.clientHeight);
    }
  }, [params]);


  console.log(params);
  // useEffect(() => {
  //   if (params?.page === "about") {
  //     setBlobPositions({
  //       darkPink: [-2, 0, 0],
  //       lightPink: [0, 0, 0],
  //       green: [2, 0, 0]
  //     });
  //   }
  // }, [params]);

  // useEffect(() => {
  //   // Update blob positions based on the current route
  //   switch (params.page) {
  //     case "about":
  //       setBlobPositions({
  //         darkPink: [-2, 0, 0],
  //         lightPink: [0, 0, 0],
  //         green: [2, 0, 0]
  //       });
  //       break;
  //     case "contact":
  //       setBlobPositions({
  //         darkPink: [0, 0, 0],
  //         lightPink: [2, 0, 0],
  //         green: [4, 0, 0]
  //       });
  //       break;
  //     default:
  //       setBlobPositions({
  //         darkPink: [0, 0, 0],
  //         lightPink: [2, 0, 0],
  //         green: [4, 0, 0]
  //       });
  //   }
  // }, [params]);

  return (
    <>
      <div id="content">
        <MainLayout>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>

        </MainLayout>
      </div>
      <div className="w-full absolute top-0" style={{ height: contentHeight }}>

        <Canvas>
          <Environment preset="sunset" />
          <group
            scale={[0.2, 0.2, 0.2]}
          >
            <BlobDarkPink position={blobPositions.darkPink} />
            <BlobLightPink position={blobPositions.lightPink} />
            <BlobGreen position={blobPositions.green} />
          </group>
        </Canvas>
      </div>
    </>
  )
}

export default App
