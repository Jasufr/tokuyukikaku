import { Canvas } from "@react-three/fiber";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Environment } from "@react-three/drei";
import Blob from "../components/Blob";


const MainLayout = ({ children }) => {

  return (
    <div>
      <Navbar />
      <div className="mt-24 ">{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
