import { Canvas } from "@react-three/fiber";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Environment } from "@react-three/drei";
import Blob from "../components/Blob";


const MainLayout = ({ children }) => {
  // console.log(children);
  // console.log(children.props.className);
  // const position = () => {
  //   if (children.props.className === "home") {
  //     [0, 0, 0];
  //   } else {
  //     [10, 5, 10];
  //   }
  // }
  return (
    <div>
      <Navbar />
      <div className="absolute w-full h-full">
        <Canvas camera={{ position: [0, 0, 0], fov: 42 }}>
          <Environment preset="sunset" />
          <Blob />
        </Canvas>
      </div>

      <div className="mt-24">{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
