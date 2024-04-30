import { Environment, Html } from "@react-three/drei";
import MainLayout from "../layout/MainLayout";
import { Canvas } from "@react-three/fiber";
import BlobDarkPink from "../components/BlobDarkPink";
import BlobLightPink from "../components/BlobLightPink";
import BlobGreen from "../components/BlobGreen";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="bg-[url('./images/tokuyukikaku.jpg')] w-full h-96 2md:h-screen bg-center bg-cover">
          <div className="h-full items-end 2md:items-center flex justify-center 2md:justify-end">
            <div className="bg-white bg-opacity-55 w-full 2md:w-1/3 lg:w-1/4 flex flex-col p-3 2md:rounded-s-sm shadow-md">
              <h1 className="text-darkpink text-3xl">心の温もり。</h1>
              <p className="text-lg">幸福を大切にし、安心感を提供することを使命とし、心からのケアとサポートを通じて、共に歩んでいきます。</p>
            </div>
          </div>
        </div>
        <div>
          hello
          <div className="h-80 bg-darkpink">hello
            {/* <Canvas>
              <Environment preset="sunset" />
              <BlobDarkPink />
              <BlobLightPink />
              <BlobGreen />
            </Canvas> */}
          </div>
          <div className="h-80 bg-lightpink">hello
            {/* <Canvas>
              <Environment preset="sunset" />
              <BlobDarkPink />
            </Canvas> */}
          </div>
          <div className="h-80 bg-darkpink">hello</div>
          <div className="h-80 bg-lightpink">hello
            {/* <Canvas>
              <Environment preset="sunset" />
              <BlobDarkPink />
            </Canvas> */}
          </div>
        </div>
      <div className="absolute top-0 left-0">
        {/* <Canvas>
        <Environment preset="sunset" />
        <BlobDarkPink />
        <BlobLightPink />
        <BlobGreen />
      </Canvas> */}
      </div>
      </div>


    </>
  );
};

export default Home;
