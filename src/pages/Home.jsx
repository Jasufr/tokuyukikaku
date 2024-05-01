import { Environment, Html } from "@react-three/drei";
import MainLayout from "../layout/MainLayout";
import { Canvas } from "@react-three/fiber";
import BlobDarkPink from "../components/BlobDarkPink";
import BlobLightPink from "../components/BlobLightPink";
import BlobGreen from "../components/BlobGreen";
import { Link } from "wouter";
import { Camera } from "three";

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
          <div className="pt-12 relative">
            <div className="flex gap-10 px-28">
              <div className="w-2/3 bg-[url('./illustrations/helper1.jpg')] bg-top bg-cover min-h-[500px] rounded-md shadow-md"></div>
              {/* <img src="./illustrations/helper1.jpg" alt="" className="w-1/2 h-" /> */}
              <div className="w-1/3 flex flex-col justify-center">
                <h1 className="text-2xl mb-2">心温まるサポートで幸福と健康を</h1>
                <p>徳有企画では、全ての方々に心からのケアとサポートを提供することをモットーにしています。私たちは、ご利用者の皆様、ご家族の方々、地域の皆様、そしてスタッフの幸福と健康を大切に考えています。介護に取り組む私たちの姿勢は、慎重な考慮と行動に基づき、個々のニーズを理解し、満たすことを重視しています。真の人間関係を築き、学び合い、支え合う環境を作り出すことを目指しています。誠心誠意、そして熱意を持って、皆様に安心で温かみのある日々を提供できるよう努めています。</p>
                <div></div>
                <Link to="/about" className="btn flex self-end items-center gap-1 text-sm mt-2 group px-2 bg-lightgray shadow-inner hover:bg-lightpink transition-all duration-200 rounded-md">
                  <p className="">私たちについて</p>
                  <img src="./icons/right.png" alt="" className="w-8 group-hover:" />
                </Link>
              </div>
            </div>
            <div className="absolute top-0 z-10 w-full h-full">
              <Canvas className="w-full object-contain" camera={{ fov: 50, aspect: window.innerWidth / window.innerHeight }}>
                <ambientLight intensity={2} />
                <group position={[3, .3, 1]} scale={[0.4, 0.4, 0.4]}>
                {/* <group> */}
                  <BlobDarkPink />
                </group>
                <group position={[2, 1, 0]} scale={[0.5, 0.5, 0.5]}>
                  <BlobLightPink />
                </group>
                <group position={[-2, -1, 0]} scale={[0.5, 0.5, 0.5]}>
                  <BlobGreen />
                </group>
              </Canvas>
            </div>

          </div>
          <div className="mt-12">hello
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
