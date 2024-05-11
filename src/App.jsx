import { Canvas } from "@react-three/fiber";
import MainLayout from "./layout/MainLayout";
import BlobDarkPink from "./components/BlobDarkPink";
import { Environment, Html } from "@react-three/drei";
import BlobLightPink from "./components/BlobLightPink";
import { Link, Route, useRoute } from "wouter";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServiceHoumon from "./pages/ServiceHoumon";
import ServiceTaxi from "./pages/ServiceTaxi";
import ServiceDay from "./pages/ServiceDay";
import ServiceKyotaku from "./pages/ServiceKyotaku";
import BlobGreen from "./components/BlobGreen";
import { useEffect, useState, useMemo, useRef } from "react";
import Recruit from "./pages/Recruit";
import Privacy from "./pages/Privacy";

function App() {
  const [contentHeight, setContentHeight] = useState(0);
  const [blobPositions, setBlobPositions] = useState({
    darkPink: [0, 0, 0],
    lightPink: [2, 0, 0],
    green: [4, 0, 0]
  });


  // Get the height of the content within the Route
  const [params] = useRoute("/:page");

  useEffect(() => {
    const contentElement = document.getElementById("content");
    if (contentElement) {
      setContentHeight(contentElement.clientHeight);
    }
  }, [params]);


  // console.log(params);


  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // viewport
        rootMargin: '0px', // no margin
        threshold: 0.5, // 50% of target visible
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Clean up the observer
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);



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
            {/* <div
            ref={targetRef}
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: isVisible ? 'green' : 'red',
              margin: '50px',
            }}
            >{isVisible? 'visible' : 'not visible'}</div> */}
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/houmon">
            <ServiceHoumon />
          </Route>
          <Route path="/taxi">
            <ServiceTaxi />
          </Route>
          <Route path="/dayservice">
            <ServiceDay />
          </Route>
          <Route path="/kyotaku">
            <ServiceKyotaku />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/recruit">
            <Recruit />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
        <a href="#" className="fixed bottom-0 right-0 w-8 z-50 m-4"><img src="./icons/up.png" alt="" /></a>
        </MainLayout>
      </div>
      {/* <div className="w-full absolute top-0 z-10" style={{ height: contentHeight }}>

        <Canvas camera={{ fov: 50 }}>
          <Environment preset="sunset" />
          <group
            scale={[0.2, 0.2, 0.2]}
          > <group position={[7, 2, 0]}>
              <BlobDarkPink />
            </group>
            <BlobLightPink position={blobPositions.lightPink} />
            <BlobGreen position={blobPositions.green} />
          </group>
        </Canvas>
      </div> */}
    </>
  )
}

export default App
