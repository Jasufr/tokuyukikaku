import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useLocation } from 'wouter';
import Blob from './Blob';

const Blobs = () => {
  const [positionGreen, setPositionGreen] = useState([0, 0, 0])
  const [location] = useLocation();


  // const canvas = document.querySelector("#content");
  // console.log(canvas.offsetHeight);
  useEffect(() => {
    switch (location) {
      case "/":
        setPositionGreen([0, -2, 2]);
        break;
        case "/about":
          setPositionGreen([0, -1, 2]);
          break;
        }
  }, [location])
  // const [viewport, setViewport] = useState({ width: window.innerWidth, height: window.innerHeight });

  // useEffect(() => {
  //   const handleResize = () => {
  //     setViewport({ width: window.innerWidth, height: window.innerHeight });
  //   };
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  // const getBlobConfigs = () => {
  //   const baseScale = Math.min(viewport.width, viewport.height) / 800;
  //   return {
  //     '/': [{ position: [0, -20, -10], scale: [2 * baseScale, 2 * baseScale, 2 * baseScale], color: '#ff69b4' }],
  //     '/about': [{ position: [10, -5, -10], scale: [1.5 * baseScale, 1.5 * baseScale, 1.5 * baseScale], color: '#69b4ff' }],
  //     // Add configurations for other paths
  //   };
  // };

  // const blobConfigs = getBlobConfigs();
  // const blobs = blobConfigs[location] || blobConfigs['/'];

  return (
    <Canvas
      className='canvas'
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
      }}
    >
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      {/* {blobs.map((config, index) => (
        <Blob key={index} {...config} />
      ))} */}
      <Blob position={positionGreen} scale={1} color={"#2FAD41"} />
    </Canvas>
  );
};

export default Blobs;
