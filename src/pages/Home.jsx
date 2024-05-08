import { Environment, Html } from "@react-three/drei";
import MainLayout from "../layout/MainLayout";
import { Canvas, useThree } from "@react-three/fiber";
import BlobDarkPink from "../components/BlobDarkPink";
import BlobLightPink from "../components/BlobLightPink";
import BlobGreen from "../components/BlobGreen";
import { Link } from "wouter";
import { Camera } from "three";


const Home = () => {
  // const canvasWidth = viewport.width;
  // const canvasHeight = viewport.height;

  // const blob1Position = [-canvasWidth / 2, canvasHeight / 2, 0, 1]; // Top left
  // const blob2Position = [canvasWidth / 2, canvasHeight / 2, 0]; // Top right
  // const blob3Position = [canvasWidth / 2, -canvasHeight / 2, 0]; // Bottom right


  return (
    <>
      <div className="home">
        {/* Accueil */}
        <div className="bg-[url('./images/tokuyukikaku.jpg')] w-full h-96 2md:h-screen bg-center bg-cover">
          <div className="h-full items-end 2md:items-center flex justify-center 2md:justify-end">
            <div className="bg-white bg-opacity-55 w-full 2md:w-1/3 lg:w-1/4 flex flex-col p-3 2md:rounded-s-sm shadow-md">
              <h1 className="text-darkpink text-3xl">心の温もり。</h1>
              <p className="text-lg">幸福を大切にし、安心感を提供することを使命とし、心からのケアとサポートを通じて、共に歩んでいきます。</p>
            </div>
          </div>
        </div>
        <div>
          {/* About */}
          <div className="about-section relative my-6 lg:my-12">
            <div className="flex gap-10 px-6 2md:px-12 lg:px-24 xl:px-28 py-6">
              <div className="hidden md:block md:w-1/2 lg:w-2/3 bg-[url('./illustrations/helper1.jpg')] bg-top bg-cover min-h-[500px] rounded-md shadow-md"></div>
              {/* <img src="./illustrations/helper1.jpg" alt="" className="w-1/2 h-" /> */}
              <div className="md:w-1/2 lg:w-1/3 flex flex-col justify-center">
                <h1 className="text-2xl mb-2 text-darkpink">心温まるサポートで幸福と健康を</h1>
                <p>徳有企画では、全ての方々に心からのケアとサポートを提供することをモットーにしています。私たちは、ご利用者の皆様、ご家族の方々、地域の皆様、そしてスタッフの幸福と健康を大切に考えています。介護に取り組む私たちの姿勢は、慎重な考慮と行動に基づき、個々のニーズを理解し、満たすことを重視しています。真の人間関係を築き、学び合い、支え合う環境を作り出すことを目指しています。誠心誠意、そして熱意を持って、皆様に安心で温かみのある日々を提供できるよう努めています。</p>
                <Link to="/about" className="btn flex self-end items-center gap-1 text-sm mt-2 group px-2 bg-lightgray shadow-inner hover:bg-lightpink transition-all duration-200 rounded-md">
                  <p className="">私たちについて</p>
                  <img src="./icons/right.png" alt="" className="w-8 group-hover:translate-x-0.5 transition-all duration-200" />
                </Link>
              </div>
            </div>
            <div className="absolute top-0 -z-10 w-full h-full">
              {/* <Canvas className="w-full object-contain" camera={{ fov: 50, aspect: window.innerWidth / window.innerHeight }}>
                <ambientLight intensity={2} />
                <group position={[3, .3, 1]} scale={[0.4, 0.4, 0.4]}>
                  <BlobDarkPink />
                </group>
                <group position={[2, 1, 0]} scale={[0.5, 0.5, 0.5]}>
                  <BlobLightPink />
                </group>
                <group position={[-2, -1, 0]} scale={[0.5, 0.5, 0.5]}>
                  <BlobGreen />
                </group>
              </Canvas> */}
            </div>
          </div>
          {/* Services */}
          <div className="services-section my-6 lg:my-12 relative bg-lightgray bg-opacity-30">
            <div className="px-6 2md:px-12 lg:px-24 xl:px-28 py-6">
              <div className="md:w-1/2 mb-6">
                <h1 className="text-2xl text-darkpink mb-2">サービス一覧</h1>
                <p>お客様の心身の健康をサポートするために、当社が提供するサービスについて詳しく説明いたします。</p>
              </div>
              {/* Houmon service */}
              <div className="houmon md:flex gap-10 mb-6">
                <div className="hidden md:block w-1/2 bg-[url('./images/kuruma1.jpg')] bg-center bg-cover rounded-md shadow-md md:min-h-[300px]"></div>
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h1 className="text-xl mb-2">訪問介護</h1>
                  <div className="md:hidden bg-[url('./images/kuruma1.jpg')] bg-center bg-cover rounded-md shadow-md mb-2 h-40"></div>
                  <p>訪問介護員（ホームヘルパー）などがご自宅に訪問し、介護や日常生活上のお世話を行うサービスです。ホームヘルパーなどのスタッフが、ご自宅を訪問して必要なサービスを行います。食事や排せつなどの介助を行う「身体介護」、調理や掃除などを行う「生活援助」をはじめ、ご自宅での生活に関するサービスや日常生活でのアドバイスをいたします。</p>
                  <Link to="/houmon" className="btn flex self-end items-center gap-1 text-sm mt-2 group px-2 bg-lightgray shadow-inner hover:bg-lightpink transition-all duration-200 rounded-md">
                    <p className="">もっと見る</p>
                    <img src="./icons/right.png" alt="" className="w-8 group-hover:translate-x-0.5 transition-all duration-200" />
                  </Link>
                </div>
              </div>
              {/* Taxi service */}
              <div className="taxi flex gap-10 mb-6">
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h1 className="text-xl mb-2">介護タクシー</h1>
                  <div className="md:hidden bg-[url('./images/kuruma2.jpg')] bg-center bg-cover rounded-md shadow-md mb-2 h-40"></div>
                  <p>介護保険で利用できる介護タクシーは介護保険タクシーとも言います。介護保険タクシーご利用には要介護認定(1～5)と訪問介護契約が必要となります、ケアマネージャーさまの作成する通院介助等のケアプランに基づいてご利用いただくことで、介護保険が適用され、身体介助と移送を一本化にしたサービスです。(障害者総合支援法にも適用されます）</p>
                  <Link to="/taxi" className="btn flex self-end items-center gap-1 text-sm mt-2 group px-2 bg-lightgray shadow-inner hover:bg-lightpink transition-all duration-200 rounded-md">
                    <p className="">もっと見る</p>
                    <img src="./icons/right.png" alt="" className="w-8 group-hover:translate-x-0.5 transition-all duration-200" />
                  </Link>
                </div>
                <div className="hidden md:block w-1/2 bg-[url('./images/kuruma2.jpg')] bg-center bg-cover rounded-md shadow-md min-h-[300px]"></div>
              </div>
              {/* Day service */}
              <div className="dayservice flex gap-10 mb-6">
                <div className="hidden md:block w-1/2 bg-[url('./images/dayservice1.jpg')] bg-bottom bg-cover rounded-md shadow-md min-h-[300px]"></div>
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h1 className="text-xl mb-2">デイサービス</h1>
                  <div className="md:hidden bg-[url('./images/dayservice1.jpg')] bg-center bg-cover rounded-md shadow-md mb-2 h-40"></div>
                  <p>全面床暖房を完備した室内では、フラワーアレンジメント・書道・麻雀など認知症予防に効果があるとされているレクリエーションを用意しています。また、看護師が常駐しているので、日々の機能訓練も安心して行っていただけます。</p>
                  <Link to="/dayservice" className="btn flex self-end items-center gap-1 text-sm mt-2 group px-2 bg-lightgray shadow-inner hover:bg-lightpink transition-all duration-200 rounded-md">
                    <p className="">もっと見る</p>
                    <img src="./icons/right.png" alt="" className="w-8 group-hover:translate-x-0.5 transition-all duration-200" />
                  </Link>
                </div>
              </div>
              {/* Kyotaku service */}
              <div className="kyotaku flex gap-10">
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h1 className="text-xl mb-2">居宅介護支援</h1>
                  <div className="md:hidden bg-darkstone bg-center bg-cover rounded-md shadow-md mb-2 h-40"></div>
                  <p>ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ。</p>
                  <Link to="/kyotaku" className="btn flex self-end items-center gap-1 text-sm mt-2 group px-2 bg-lightgray shadow-inner hover:bg-lightpink transition-all duration-200 rounded-md">
                    <p className="">もっと見る</p>
                    <img src="./icons/right.png" alt="" className="w-8 group-hover:translate-x-0.5 transition-all duration-200" />
                  </Link>
                </div>
                <div className="hidden md:block w-1/2 bg-darkstone bg-center bg-cover rounded-md shadow-md min-h-[300px]"></div>
              </div>
            </div>
          </div>
          {/* Feedback */}
          <div className="feedback xl:flex gap-10 my-6 lg:my-12 px-6 2md:px-12 lg:px-24 xl:px-28 py-6">
            <div className="mb-2 sm:w-2/3 md:w-1/2 xl:w-1/3 xl:mb-0">
              <h1 className="text-darkpink text-2xl mb-2">ご利用者様の声</h1>
              <p>ご利用者様からの声を紹介します。実際に当社のサービスをご利用いただいた方々の感想や体験談をお伝えします。</p>
            </div>
            <div className="w-full xl:w-2/3 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 2lg:grid-cols-4 xl:grid-cols-3 gap-2">
              <div className="flex justify-end  h-40 bg-lightgray bg-opacity-40 p-2 rounded-md shadow-md">
                <div className="w-1/2 flex justify-center py-2">
                  <p className="text-vertical text-sm">スタッフの方々がいつも<span className="text-darkpink">笑顔</span>で接してくれるので、<span className="text-darkpink">安心</span>しています。</p>
                </div>
                <div className="flex flex-col justify-between w-1/2">
                  <p className="bg-green text-white text-xs py-0.5 px-1.5  self-end rounded-sm shadow-md">介護タクシー</p>
                  <img src="./illustrations/eldery1.png" alt="" className="w-full  max-w-36 max-h-28 object-contain pe-2 pb-2" />
                </div>
              </div>
              <div className="flex justify-end  h-40 bg-lightgray bg-opacity-40 p-2 rounded-md shadow-md">
                <div className="w-1/2 flex justify-center py-2">
                  <p className="text-vertical text-sm">身体の不自由な部分も、<span className="text-darkpink">丁寧</span>にサポートしてもらえるので、安心しています。</p>
                </div>
                <div className="flex flex-col justify-between w-1/2">
                  <p className="bg-green text-white text-xs py-0.5 px-1.5  self-end rounded-sm shadow-md">デイサービス</p>
                  <img src="./illustrations/eldery2.png" alt="" className="w-full  max-w-36 max-h-28 object-contain pe-2 pb-2" />
                </div>
              </div>
              <div className="flex justify-end  h-40 bg-lightgray bg-opacity-40 p-2 rounded-md shadow-md">
                <div className="w-1/2 flex justify-center py-2">
                  <p className="text-vertical text-sm">日々の暮らしを<span className="text-darkpink">楽しめる場</span>が提供されているので、とても<span className="text-darkpink">嬉しい</span>です。</p>
                </div>
                <div className="flex flex-col justify-between w-1/2">
                  <p className="bg-green text-white text-xs py-0.5 px-1.5  self-end rounded-sm shadow-md">訪問介護</p>
                  <img src="./illustrations/eldery3.png" alt="" className="w-full  max-w-36 max-h-28 object-contain pe-2 pb-2" />
                </div>
              </div>
              <div className="flex justify-end  h-40 bg-lightgray bg-opacity-40 p-2 rounded-md shadow-md">
                <div className="w-1/2 flex justify-center py-2">
                  <p className="text-vertical text-sm">スタッフの方々が、いつも私の話を<span className="text-darkpink">聞いてくれる</span>ので、孤独を感じることがありません。</p>
                </div>
                <div className="flex flex-col justify-between w-1/2">
                  <p className="bg-green text-white text-xs py-0.5 px-1.5  self-end rounded-sm shadow-md">訪問介護</p>
                  <img src="./illustrations/eldery4.png" alt="" className="w-full  max-w-36 max-h-28 object-contain pe-2 pb-2" />
                </div>
              </div>
              <div className="flex justify-end  h-40 bg-lightgray bg-opacity-40 p-2 rounded-md shadow-md">
                <div className="w-1/2 flex justify-center py-2">
                  <p className="text-vertical text-sm">こちらのサービスを利用してから、体調が<span className="text-darkpink">安定</span>し、心も穏やかになりました。<span className="text-darkpink">感謝</span>します。</p>
                </div>
                <div className="flex flex-col justify-between w-1/2">
                  <p className="bg-green text-white text-xs py-0.5 px-1.5  self-end rounded-sm shadow-md">介護タクシー</p>
                  <img src="./illustrations/eldery5.png" alt="" className="w-full  max-w-36 max-h-28 object-contain pe-2 pb-2" />
                </div>
              </div>
              <div className="flex justify-end h-40 bg-lightgray bg-opacity-40 p-2 rounded-md shadow-md">
                <div className="w-1/2 flex justify-center py-2">
                  <p className="text-vertical text-sm">サービスを利用してから、日々が<span className="text-darkpink">豊か</span>になりました。</p>
                </div>
                <div className="flex flex-col justify-between w-1/2">
                  <p className="bg-green text-white text-xs py-0.5 px-1.5  self-end rounded-sm shadow-md">デイサービス</p>
                  <img src="./illustrations/eldery6.png" alt="" className="w-full  max-w-36 max-h-28 object-contain pe-2 pb-2" />
                </div>
              </div>
            </div>
          </div>
          {/* Recruit */}
          <div className="">
            <div className="flex h-96 relative mt-12 py-6">
              <div className="w-full flex shadow-md">
                 <div className="h-full w-1/2 sm:w-1/3 bg-[url('./illustrations/helper2.jpg')] bg-cover bg-top">
                <div className="w-full h-full bg-black bg-opacity-40"></div>
              </div>
              <div className="hidden sm:block h-full w-1/3 bg-[url('./illustrations/helper1.jpg')] bg-cover bg-top">
                <div className="w-full h-full bg-black bg-opacity-40"></div>
              </div>
              <div className="h-full w-1/2 sm:w-1/3 bg-[url('./illustrations/helper3.jpg')] bg-cover bg-top">
                <div className="w-full h-full bg-black bg-opacity-40"></div>
              </div>
              <div className="absolute w-full transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <p className="text-white text-xl px-2 w-full max-w-[420px] xs:w-2/3 text-center mb-2">あなたの笑顔が誰かの笑顔になる職場で、
                  一緒に働きませんか？</p>
                <div className="p-6 bg-white bg-opacity-70 rounded-full shadow-md w-52 hover:bg-black hover:bg-opacity-70 group transition-colors duration-200">
                  <Link to="/recruit"><h1 className="text-darkpink text-2xl text-center group-hover:text-lightpink transition-colors duration-200">採用情報</h1></Link>
                </div>
              </div>
            </div>
              </div>

          </div>
          {/* <Canvas>
              <Environment preset="sunset" />
              <BlobDarkPink />
            </Canvas> */}
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
