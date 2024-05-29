import { Link } from "wouter";

const Home = () => {

  return (
    <>
      <div className="home">
        {/* Accueil */}
        <div className="bg-[url('./images/tokuyukikaku.jpg')] w-full h-96 2md:h-screen bg-center bg-cover">
          <div className="h-full items-end 2md:items-center flex justify-center 2md:justify-end">
            <div className="bg-white bg-opacity-55 w-full 2md:w-1/3 lg:w-1/4 flex flex-col p-3 2md:rounded-s-sm shadow-md">
              <h1 className="text-darkpink text-3xl">温もりで支える介護</h1>
              <p className="text-lg">やさしさをもって利用者様と接し、心温まる時間を提供します。</p>
            </div>
          </div>
        </div>
        <div>
          {/* About */}
          <div className="about-section relative my-6 lg:my-12">
            {/* Blobs About */}
            <div className="blobs w-full h-full absolute overflow-hidden -z-10">
              <div className="green absolute -top-12 -left-32 w-60 md:w-72">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2FAD41" d="M43.1,-51.3C53.7,-42.5,58.7,-26.8,61.2,-11C63.7,4.8,63.7,20.8,56.3,31.4C48.8,42.1,34,47.4,19.8,51.3C5.5,55.2,-8.2,57.7,-18.8,53.2C-29.4,48.7,-36.9,37.1,-49.2,24.3C-61.6,11.4,-78.8,-2.8,-79.2,-16.3C-79.6,-29.9,-63.2,-42.9,-47.2,-50.8C-31.2,-58.6,-15.6,-61.5,0.3,-61.8C16.2,-62.2,32.5,-60.2,43.1,-51.3Z" transform="translate(100 100)" />
                </svg>
              </div>
              <div className="darkpink absolute top-16 md:top-28 -right-20 w-48 md:w-64">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#ED0066" d="M49.6,-20.8C55.9,3.1,46.6,27.3,27.8,41.8C9,56.3,-19.4,61.1,-39.2,48.1C-59,35.1,-70.1,4.4,-62.1,-21.9C-54.2,-48.1,-27.1,-69.8,-2.7,-68.9C21.7,-68.1,43.4,-44.6,49.6,-20.8Z" transform="translate(100 100)" />
                </svg>
              </div>
              <div className="lightpink absolute -bottom-3 left-24 md:left-80 lg:left-2/3 w-36 md:w-40">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#FFEDF4" d="M66,-49.9C81.1,-33.7,85.8,-6.5,79.5,16.9C73.2,40.4,55.8,60.2,34.2,70.2C12.6,80.3,-13.2,80.7,-35.4,71C-57.7,61.3,-76.3,41.5,-80.5,19.5C-84.6,-2.5,-74.3,-26.7,-58.4,-43.1C-42.6,-59.4,-21.3,-67.9,2.1,-69.5C25.5,-71.2,51,-66.1,66,-49.9Z" transform="translate(100 100)" />
                </svg>
              </div>
            </div>
            <div className="flex gap-10 px-6 2md:px-12 lg:px-24 xl:px-28 py-6">
              <div className="hidden md:block md:w-1/2 lg:w-2/3 bg-[url('./illustrations/helper1.png')] bg-top bg-cover min-h-[500px] rounded-md shadow-md"></div>
              <div className="md:w-1/2 lg:w-1/3 flex flex-col justify-center">
                <h1 className="text-2xl mb-3 text-darkpink">心温まるサポートで幸福と健康を</h1>
                <p className="mb-2">徳有企画では、全ての方々に心からのケアとサポートを提供することを信念とし、ご利用者様、ご家族、地域の皆様の幸福を大切に考えています。</p>
                <p>慎重な考慮と行動に基づき、個々のニーズを理解し、満たすことを重視しています。真の人間関係を築き、支え合う環境を提供し、誠心誠意、そして熱意を持って、皆様に安心で温かみのある日々をお届けします。</p>
                <Link to="/about" className="btn flex self-end items-center gap-1 text-sm mt-2 group px-2 bg-lightgray shadow-inner hover:bg-lightpink transition-all duration-200 rounded-md">
                  <p className="">私たちについて</p>
                  <img src="./icons/right.png" alt="" className="w-8 group-hover:translate-x-0.5 transition-all duration-200" />
                </Link>
              </div>
            </div>
            <div className="absolute top-0 -z-10 w-full h-full">
            </div>
          </div>
          {/* Services */}
          <div className="services-section my-6 lg:my-12 relative bg-lightgray bg-opacity-30">
            {/* Blobs Services */}
            <div className="blobs w-full h-full absolute overflow-hidden -z-10">
              <div className="green absolute -top-8 md:top-2 -right-16 w-72 md:w-96 md:rotate-12">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2FAD41" d="M63.7,-21.9C72.6,6.6,62.9,39.9,48.5,45.3C34.2,50.7,15.1,28.1,-6.9,11.6C-28.9,-4.9,-53.8,-15.2,-53.1,-32.5C-52.5,-49.7,-26.2,-73.8,0.6,-74C27.4,-74.2,54.9,-50.5,63.7,-21.9Z" transform="translate(100 100)" />
                </svg>
              </div>
              <div className="darkpink absolute top-32 md:top-56 right-1/2 md:translate-x-1/2 w-80 md:w-96 -rotate-45">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#ED0066" d="M29.7,-28C38.5,-27.9,45.9,-18.6,48.9,-7.7C51.8,3.2,50.5,15.8,45.1,26.9C39.7,38,30.3,47.6,17.4,55.8C4.5,64,-11.9,70.8,-23.8,66.1C-35.7,61.5,-43.2,45.4,-51.6,30.1C-59.9,14.9,-69.2,0.6,-67.3,-12.2C-65.4,-24.9,-52.4,-35.9,-39.4,-35.3C-26.3,-34.7,-13.1,-22.5,-1.4,-20.8C10.4,-19.2,20.8,-28.2,29.7,-28Z" transform="translate(100 100)" />
                </svg>
              </div>
              <div className="lightpink absolute bottom-72 right-1/4 translate-x-1/2 w-64">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#FFEDF4" d="M44.4,-47.8C55.2,-44,59.7,-27.7,64.4,-10.1C69,7.5,73.6,26.3,68.2,42.7C62.7,59.1,47.2,73.1,28.5,81C9.8,89,-12,91,-31.5,84.7C-51,78.4,-68.2,63.8,-72.7,46.5C-77.3,29.3,-69.2,9.2,-58.2,-2.9C-47.3,-15,-33.4,-19.2,-23.2,-23.1C-13.1,-27.1,-6.5,-30.8,5.2,-36.9C16.9,-43.1,33.7,-51.7,44.4,-47.8Z" transform="translate(100 100)" />
                </svg>
              </div>
            </div>
            <div className="px-6 2md:px-12 lg:px-24 xl:px-28 py-6">
              <div className="md:w-1/2 mb-6">
                <h1 className="text-2xl text-darkpink mb-3">サービス一覧</h1>
                <p>お客様の心身の健康をサポートするために、当社が提供するサービスについて詳しく説明いたします。</p>
              </div>
              {/* Houmon service */}
              <div className="houmon md:flex gap-10 mb-6">
                <div className="hidden md:block w-1/2 bg-[url('./images/houmon.jpg')] bg-center bg-cover rounded-md shadow-md md:min-h-[300px]"></div>
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h1 className="text-xl mb-3">訪問介護</h1>
                  <div className="md:hidden bg-[url('./images/houmon.jpg')] bg-center bg-cover rounded-md shadow-md mb-2 h-40"></div>
                  <p className="mb-2">訪問介護員（ホームヘルパー）などがご自宅に訪問し、介護や日常生活上のお世話を行うサービスです。ホームヘルパーなどのスタッフが、ご自宅を訪問して必要なサービスを行います。</p>
                  <p>食事や排せつなどの介助を行う「身体介護」、調理や掃除などを行う「生活援助」をはじめ、ご自宅での生活に関するサービスや日常生活でのアドバイスをいたします。</p>
                  <Link to="/houmon" className="btn flex self-end items-center gap-1 text-sm mt-2 group px-2 bg-lightgray shadow-inner hover:bg-lightpink transition-all duration-200 rounded-md">
                    <p className="">もっと見る</p>
                    <img src="./icons/right.png" alt="" className="w-8 group-hover:translate-x-0.5 transition-all duration-200" />
                  </Link>
                </div>
              </div>
              {/* Taxi service */}
              <div className="taxi flex gap-10 mb-6">
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h1 className="text-xl mb-3">介護タクシー</h1>
                  <div className="md:hidden bg-[url('./images/kuruma1.jpg')] bg-center bg-cover rounded-md shadow-md mb-2 h-40"></div>
                  <p className="mb-2">介護保険で利用できる介護タクシーは介護保険タクシーとも言います。介護保険タクシーご利用には要介護認定(1～5)と訪問介護契約が必要となります。</p>
                  <p className="mb-2">ケアマネージャー様の作成する通院介助等のケアプランに基づいてご利用いただくことで、介護保険が適用され、身体介助と移送を一本化にしたサービスです。</p>
                  <p>ご利用対象に当てはまらない方々は、一般介護タクシーをご利用することが可能です。</p>
                  <Link to="/taxi" className="btn flex self-end items-center gap-1 text-sm mt-2 group px-2 bg-lightgray shadow-inner hover:bg-lightpink transition-all duration-200 rounded-md">
                    <p className="">もっと見る</p>
                    <img src="./icons/right.png" alt="" className="w-8 group-hover:translate-x-0.5 transition-all duration-200" />
                  </Link>
                </div>
                <div className="hidden md:block w-1/2 bg-[url('./images/kuruma1.jpg')] bg-center bg-cover rounded-md shadow-md min-h-[300px]"></div>
              </div>
              {/* Day service */}
              <div className="dayservice flex gap-10 mb-6">
                <div className="hidden md:block w-1/2 bg-[url('./images/dayservice1.jpg')] bg-bottom bg-cover rounded-md shadow-md min-h-[300px]"></div>
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h1 className="text-xl mb-3">デイサービス</h1>
                  <div className="md:hidden bg-[url('./images/dayservice1.jpg')] bg-center bg-cover rounded-md shadow-md mb-2 h-40"></div>
                  <p className="mb-2">全面床暖房を完備した室内では、フラワーアレンジメント・書道・麻雀など認知症予防に効果があるとされているレクリエーションを用意しています。</p>
                  <p>また、看護師が常駐しているので日々の機能訓練も安心して行っていただけます。</p>
                  <Link to="/dayservice" className="btn flex self-end items-center gap-1 text-sm mt-2 group px-2 bg-lightgray shadow-inner hover:bg-lightpink transition-all duration-200 rounded-md">
                    <p className="">もっと見る</p>
                    <img src="./icons/right.png" alt="" className="w-8 group-hover:translate-x-0.5 transition-all duration-200" />
                  </Link>
                </div>
              </div>
              {/* Kyotaku service */}
              <div className="kyotaku flex gap-10">
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h1 className="text-xl mb-3">居宅介護支援</h1>
                  <div className="md:hidden bg-[url('./images/kyotaku.jpg')] bg-center bg-cover rounded-md shadow-md mb-2 h-40"></div>
                  <p className="mb-2">介護を必要とする高齢者や障害者が自宅で適切な介護サービスを受けられるように、介護支援専門員（ケアマネジャー）が行う支援活動のことを指します。</p>
                  <p>ケアマネジャーは、利用者やその家族と綿密にコミュニケーションを取りながら、利用者様のニーズに合わせたケアプランを作成します。これにより、利用者が自立した生活を維持し、可能な限り自宅で快適に過ごせるようにサポートします。</p>
                  <Link to="/kyotaku" className="btn flex self-end items-center gap-1 text-sm mt-2 group px-2 bg-lightgray shadow-inner hover:bg-lightpink transition-all duration-200 rounded-md">
                    <p className="">もっと見る</p>
                    <img src="./icons/right.png" alt="" className="w-8 group-hover:translate-x-0.5 transition-all duration-200" />
                  </Link>
                </div>
                <div className="hidden md:block w-1/2 bg-[url('./images/kyotaku.jpg')] bg-bottom bg-cover rounded-md shadow-md min-h-[300px]"></div>
              </div>
            </div>
          </div>
          {/* Feedback */}
          <div className="feedback relative my-6 lg:my-12 py-6">
            {/* Blobs Feedback */}
            <div className="blobs w-full h-full absolute overflow-hidden -z-10">
              <div className="green absolute top-8 -left-24 xs:-left-8 w-96 -rotate-45">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#2FAD41" d="M47.8,-71C57.9,-58.5,59.2,-39.1,55.7,-24.2C52.1,-9.3,43.8,1.1,37.8,10C31.7,18.9,28.1,26.3,22.2,27.4C16.3,28.5,8.2,23.4,0.4,22.8C-7.4,22.3,-14.8,26.4,-22,25.7C-29.3,25,-36.4,19.6,-41.1,11.8C-45.8,4,-48,-6.2,-47.7,-18.1C-47.3,-30,-44.5,-43.7,-36.2,-56.7C-27.8,-69.7,-13.9,-82.1,2.5,-85.5C18.9,-89,37.8,-83.5,47.8,-71Z" transform="translate(100 100)" />
                </svg>
              </div>
              <div className="darkpink absolute top-1/3 xs:top-1/2 2md:top-8 left-2/3 xs:left-1/3 -translate-x-1/3 w-52 -rotate-45">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#ED0066" d="M28.9,-39.3C38.9,-32.6,49.3,-26,55.3,-15.9C61.4,-5.9,63.1,7.6,62.6,23.7C62,39.9,59.2,58.8,48.4,66.9C37.6,75.1,18.8,72.5,-0.1,72.7C-19,72.9,-38.1,75.7,-45.3,66.4C-52.6,57.1,-48.1,35.6,-46.9,19.8C-45.7,4,-47.8,-6.1,-45.1,-14.7C-42.4,-23.4,-34.9,-30.6,-26.6,-37.8C-18.3,-45.1,-9.1,-52.5,0.2,-52.7C9.5,-52.9,19,-46,28.9,-39.3Z" transform="translate(100 100)" />
                </svg>
              </div>
              <div className="lightpink absolute -bottom-10 right-1/4 translate-x-1/2 w-80">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#FFEDF4" d="M51.5,-73.2C64.8,-61.2,72.3,-43.5,73.9,-26.8C75.5,-10,71.3,5.9,66.7,22.3C62.2,38.6,57.4,55.5,46.2,63C35.1,70.5,17.5,68.6,1.8,66.1C-13.9,63.6,-27.8,60.5,-37.7,52.6C-47.7,44.7,-53.7,32,-59.7,18.3C-65.8,4.5,-71.8,-10.4,-69.1,-23.7C-66.5,-37,-55.3,-48.8,-42.3,-60.9C-29.3,-73,-14.7,-85.5,2.2,-88.5C19.1,-91.6,38.2,-85.2,51.5,-73.2Z" transform="translate(100 100)" />
                </svg>
              </div>
            </div>
            <div className="xl:flex gap-10 px-6 2md:px-12 lg:px-24 xl:px-28">
              <div className="mb-2 sm:w-2/3 md:w-1/2 xl:w-1/3 xl:mb-0">
                <h1 className="text-darkpink text-2xl mb-3">ご利用者様の声</h1>
                <p>ご利用者様からの声を紹介します。実際に当社のサービスをご利用いただいた方々の感想や体験談をお伝えします。</p>
              </div>
              <div className="w-full xl:w-2/3 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 2lg:grid-cols-4 xl:grid-cols-3 gap-2">
                <div className="flex justify-end  h-40 bg-lightgray bg-opacity-40 p-2 rounded-md shadow-md">
                  <div className="w-1/2 flex justify-center py-2">
                    <p className="text-vertical text-sm">スタッフが<span className="text-darkpink">丁寧</span>に運転してくださって、いつも<span className="text-darkpink">安心</span>して通院ができています。</p>
                  </div>
                  <div className="flex flex-col justify-between w-1/2">
                    <p className="bg-green text-white text-xs py-0.5 px-1.5  self-end rounded-sm shadow-md">介護タクシー</p>
                    <img src="./illustrations/eldery1.png" alt="" className="w-full  max-w-36 max-h-28 object-contain pe-2 pb-2" />
                  </div>
                </div>
                <div className="flex justify-end  h-40 bg-lightgray bg-opacity-40 p-2 rounded-md shadow-md">
                  <div className="w-1/2 flex justify-center py-2">
                    <p className="text-vertical text-sm">
                      友人と<span className="text-darkpink">楽しく</span>お喋りする機会が出来て、嬉しいです。</p>
                  </div>
                  <div className="flex flex-col justify-between w-1/2">
                    <p className="bg-green text-white text-xs py-0.5 px-1.5  self-end rounded-sm shadow-md">デイサービス</p>
                    <img src="./illustrations/eldery2.png" alt="" className="w-full  max-w-36 max-h-28 object-contain pe-2 pb-2" />
                  </div>
                </div>
                <div className="flex justify-end  h-40 bg-lightgray bg-opacity-40 p-2 rounded-md shadow-md">
                  <div className="w-1/2 flex justify-center py-2">
                    <p className="text-vertical text-sm">
                    <span className="text-darkpink">住み慣れた自宅</span>での生活をサポートしていただけて、<span className="text-darkpink">感謝</span>しています。</p>
                  </div>
                  <div className="flex flex-col justify-between w-1/2">
                    <p className="bg-green text-white text-xs py-0.5 px-1.5  self-end rounded-sm shadow-md">訪問介護</p>
                    <img src="./illustrations/eldery3.png" alt="" className="w-full  max-w-36 max-h-28 object-contain pe-2 pb-2" />
                  </div>
                </div>
                <div className="flex justify-end  h-40 bg-lightgray bg-opacity-40 p-2 rounded-md shadow-md">
                  <div className="w-1/2 flex justify-center py-2">
                    <p className="text-vertical text-sm">
                     遠くに住んでいる母の生活が<span className="text-darkpink">安全</span>になり、<span className="text-darkpink">ほっとしました</span>。<br />（ご家族より）</p>
                  </div>
                  <div className="flex flex-col justify-between w-1/2">
                    <p className="bg-green text-white text-xs py-0.5 px-1.5  self-end rounded-sm shadow-md">訪問介護</p>
                    <img src="./illustrations/eldery4.png" alt="" className="w-full  max-w-36 max-h-28 object-contain pe-2 pb-2" />
                  </div>
                </div>
                <div className="flex justify-end  h-40 bg-lightgray bg-opacity-40 p-2 rounded-md shadow-md">
                  <div className="w-1/2 flex justify-center py-2">
                    <p className="text-vertical text-sm">急な通院の予定でも、<span className="text-darkpink">迅速</span>な対応をしてくださり、助かりました。</p>
                  </div>
                  <div className="flex flex-col justify-between w-1/2">
                    <p className="bg-green text-white text-xs py-0.5 px-1.5  self-end rounded-sm shadow-md">介護タクシー</p>
                    <img src="./illustrations/eldery5.png" alt="" className="w-full  max-w-36 max-h-28 object-contain pe-2 pb-2" />
                  </div>
                </div>
                <div className="flex justify-end h-40 bg-lightgray bg-opacity-40 p-2 rounded-md shadow-md">
                  <div className="w-1/2 flex justify-center py-2">
                    <p className="text-vertical text-sm">
                      天気がいい日には<span className="text-darkpink">自然</span>の中を散歩するので、気持ちが<span className="text-darkpink">穏やか</span>になりました。</p>
                  </div>
                  <div className="flex flex-col justify-between w-1/2">
                    <p className="bg-green text-white text-xs py-0.5 px-1.5  self-end rounded-sm shadow-md">デイサービス</p>
                    <img src="./illustrations/eldery6.png" alt="" className="w-full  max-w-36 max-h-28 object-contain pe-2 pb-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recruit */}
          <div className="">
            <div className="flex h-96 relative mt-12 py-6">
              <div className="w-full flex shadow-md">
                <div className="h-full w-1/2 sm:w-1/3 bg-[url('./illustrations/helper2.png')] bg-cover bg-top">
                  <div className="w-full h-full bg-black bg-opacity-40"></div>
                </div>
                <div className="hidden sm:block h-full w-1/3 bg-[url('./illustrations/helper1.png')] bg-cover bg-top">
                  <div className="w-full h-full bg-black bg-opacity-40"></div>
                </div>
                <div className="h-full w-1/2 sm:w-1/3 bg-[url('./illustrations/helper3.png')] bg-cover bg-top">
                  <div className="w-full h-full bg-black bg-opacity-40"></div>
                </div>
                <div className="absolute w-full transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <p className="text-white text-xl px-2 w-full max-w-[420px] xs:w-2/3 text-center mb-3">あなたの笑顔が誰かの笑顔になる職場で、
                    一緒に働きませんか？</p>
                  <div className="p-6 bg-white bg-opacity-70 rounded-full shadow-md w-52 hover:bg-black hover:bg-opacity-70 group transition-colors duration-200">
                    <Link to="/recruit"><h1 className="text-darkpink text-2xl text-center group-hover:text-lightpink transition-colors duration-200">採用情報</h1></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Home;
