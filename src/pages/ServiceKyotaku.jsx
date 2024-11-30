import { useState } from "react";
import Tabs from "../layout/Tabs";
import { Helmet } from "react-helmet-async";
import ImageWithPlaceholder from "../components/ImageWithPlaceholder";

const ServiceKyotaku = () => {
  const [visibleTab, setVisibleTab] = useState("tab1");

  return (
    <>
      <Helmet>
        <title>徳有企画 | 居宅介護支援</title>
        <meta name="description" content="介護を必要とする高齢者や障害者が自宅で適切な介護サービスを受けられるように、介護支援専門員（ケアマネジャー）が行う支援活動のことを指します。" />

        <meta property="og:title" content="徳有企画 | 居宅介護支援" />
        <meta
          property="og:description"
          content="介護を必要とする高齢者や障害者が自宅で適切な介護サービスを受けられるように、介護支援専門員（ケアマネジャー）が行う支援活動のことを指します。"
        />
        <meta property="og:image" content="/images/kyotaku.webp" />
        <meta property="og:url" content="https://tokuyukikaku.netlify.app/kyotaku" />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="/kyotaku" />
      </Helmet>
      <div className="kyotaku relative">
        {/* Blobs Kyotaku */}
        <div className="blobs w-full h-full absolute overflow-hidden -z-10">
          <div className="green absolute w-56 sm:w-64 -top-8 left-24 sm:left-48 rotate-90">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#2FAD41" d="M43.1,-62.8C52.2,-52.8,53.3,-35.2,59.1,-18.9C64.8,-2.5,75.3,12.7,75.3,28.1C75.3,43.6,64.9,59.4,50.7,67.8C36.4,76.3,18.2,77.6,-0.2,77.8C-18.5,78,-37.1,77.3,-49.2,68.1C-61.3,58.9,-67,41.3,-66.1,25.8C-65.2,10.3,-57.6,-3,-52.4,-16.4C-47.2,-29.9,-44.3,-43.5,-36,-53.8C-27.7,-64.1,-13.8,-71,1.6,-73.2C17,-75.4,34.1,-72.9,43.1,-62.8Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="darkpink absolute w-40 sm:w-52 -bottom-4 -right-2 rotate-90">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#ED0066" d="M46.5,-66.1C57.7,-55.9,62.3,-38.8,66.6,-22.4C70.9,-6,74.9,9.8,72.4,25.4C70,41,61.1,56.4,47.9,64.6C34.8,72.7,17.4,73.6,0.2,73.3C-17,73,-34,71.6,-48.4,63.9C-62.9,56.1,-74.8,42.1,-77.8,26.7C-80.8,11.3,-75,-5.6,-67.8,-20.2C-60.5,-34.8,-51.9,-47.1,-40.3,-57.1C-28.8,-67.2,-14.4,-74.9,1.6,-77.1C17.7,-79.4,35.4,-76.2,46.5,-66.1Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="lightpink absolute w-60 sm:w-72 top-80 -left-8">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFEDF4" d="M40.5,-73.5C52,-63.6,60.4,-51.7,60.2,-39.1C60,-26.5,51.2,-13.2,47.8,-2C44.4,9.3,46.4,18.6,45.3,28.9C44.2,39.3,39.9,50.6,31.9,59.5C23.8,68.4,11.9,74.9,-2.1,78.6C-16.2,82.3,-32.4,83.2,-44,76.3C-55.7,69.5,-62.8,54.9,-66.8,40.9C-70.9,26.9,-71.9,13.5,-66.1,3.3C-60.3,-6.8,-47.8,-13.6,-38.6,-18.7C-29.5,-23.9,-23.7,-27.4,-17.8,-40.6C-11.9,-53.7,-6,-76.4,4.3,-83.9C14.5,-91.3,29.1,-83.4,40.5,-73.5Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
        <div className="px-6 2md:px-12 lg:px-24 xl:px-28 py-6 lg:py-12">
          <div className="flex items-center gap-2 sm:gap-5 2md:gap-10 mb-3 xs:mb-4">
            <h1 className="text-2xl text-darkpink text-nowrap">居宅支援</h1>
            {/* <div aria-label="居宅介護支援のケアマネジャーとご利用者様の写真" role="img" className="bg-[url('/images/kyotaku.webp')] bg-center bg-cover w-full h-14 sm:h-20 rounded-md shadow-md"></div> */}
            <ImageWithPlaceholder
              src="/images/kyotaku.webp"
              placeholderSrc="/images/kyotakuSmall.jpg"
              alt="居宅介護支援のケアマネジャーとご利用者様の写真"
              className="bg-cover bg-center w-full h-14 sm:h-20 rounded-md shadow-md"
              imgClassName="rounded-md"
            />
          </div>
          <Tabs visibleTab={visibleTab} setVisibleTab={setVisibleTab}>
            <div className={`shoukai ${visibleTab === "tab1" ? "block" : "hidden"} mt-4`}>
              <h2 className="mb-3 text-xl">居宅介護支援とは</h2>
              <p className="mb-2">介護を必要とする高齢者や障害者が自宅で適切な介護サービスを受けられるように、介護支援専門員（ケアマネジャー）が行う支援活動のことを指します。</p>
              <div className="mt-4">
                <div className="">
                  <h2 className="mb-3 text-xl">具体的な仕事の内容</h2>
                  <ol className="list-decimal ms-5">
                    <li>
                      <h3 className="text-lg mb-1">ケアプランの作成</h3>
                      <p className="mb-1">介護を必要とする人の状態や希望を把握し、その人に最適な介護サービスを計画する。<br className="hidden lg:block" /> ケアプランには、どのようなサービスをどの程度利用するかが具体的に記載される。</p>
                    </li>
                    <li>
                      <h3 className="text-lg mb-1">サービス提供事業者との調整 </h3>
                      <p className="mb-1">ケアプランに基づき、訪問介護やデイサービス、ショートステイなどの各種介護サービスを提供する事業者と連携し、<br className="hidden lg:block" /> 利用者がスムーズにサービスを受けられるように調整を行う。</p>
                    </li>
                    <li>
                      <h3 className="text-lg mb-1">モニタリング</h3>
                      <p className="mb-1">サービスの提供が始まった後も、利用者の状態やサービスの質を定期的にチェックし、<br className="hidden lg:block" /> 必要に応じてケアプランの見直しやサービスの変更を行う。</p>
                    </li>
                    <li>
                      <h3 className="text-lg mb-1">相談・助言</h3>
                      <p className="mb-1">利用者やその家族からの相談に応じ、介護に関する助言を行う。<br className="hidden lg:block" /> また、介護保険の利用方法や他の福祉サービスについての情報提供も行う。</p>
                    </li>
                    <li>
                      <h3 className="text-lg mb-1">関係機関との連携</h3>
                      <p className="mb-1">医療機関や福祉施設、市町村の窓口など、様々な関係機関と連携し、<br className="hidden lg:block" /> 利用者が包括的な支援を受けられるようにする。</p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className={`riyou ${visibleTab === "tab2" ? "block" : "hidden"} mt-4`}>
              <div className="sm:flex gap-5 2md:gap-10">
                <div className="sm:w-1/2 mb-4 sm:mb-0">
                  <h2 className="mb-3 text-xl">ご利用までのステップ</h2>
                  <ol className="list-decimal ms-5">
                    <li>
                      <h3 className="text-lg mb-1">相談・申し込み</h3>
                      <p className="mb-1">まず、居宅介護支援事業所に相談します。</p>
                      <p className="mb-1">事業所は市町村や地域包括支援センターに問い合わせることで探すことができます。</p>
                    </li>
                    <li>
                      <h3 className="text-lg mb-1">初回訪問とアセスメント</h3>
                      <p className="mb-1">ケアマネジャーが自宅を訪問し、利用者や家族から生活状況、健康状態、介護の希望などを詳しく聞き取ります。</p>
                      <p className="mb-1">このプロセスをアセスメントと呼びます。</p>
                    </li>
                    <li>
                      <h3 className="text-lg mb-1">ケアプランの作成</h3>
                      <p className="mb-1">アセスメントの結果に基づき、ケアマネジャーが利用者に最適なケアプランを作成します。</p>
                      <p className="mb-1">このケアプランには、具体的な介護サービスの内容や頻度が記載されます。</p>
                    </li>
                    <li>
                      <h3 className="text-lg mb-1">ケアプランの説明と同意</h3>
                      <p className="mb-1">ケアマネジャーが作成したケアプランを利用者とその家族に説明し、同意を得ます。</p>
                      <p className="mb-1">この際、ケアプランに関する質問や意見を交換し、必要に応じて修正を行います。</p>
                    </li>
                    <li>
                      <h3 className="text-lg mb-1">サービスの手配と開始</h3>
                      <p className="mb-1">ケアプランに基づいて、訪問介護やデイサービス、ショートステイなどの介護サービスを提供する事業者と契約を結びます。</p>
                      <p className="mb-1">サービスの手配が完了すると、実際にサービスの提供が開始されます。</p>
                    </li>
                    <li>
                      <h3 className="text-lg mb-1">定期的なモニタリングとプランの見直し</h3>
                      <p className="mb-1">サービスが開始された後も、ケアマネジャーは定期的に利用者の状況やサービスの質を確認します。</p>
                      <p className="mb-1">必要に応じてケアプランを見直し、サービス内容の調整を行います。</p>
                    </li>
                  </ol>
                </div>
                <div className="sm:w-1/2">
                  <h2 className="mb-3 text-xl">具体的な利用手順</h2>
                  <ol className="list-decimal ms-5">
                    <li>
                      <h3 className="text-lg mb-1">介護保険の申請</h3>
                      <p className="mb-1">市町村の介護保険課に介護保険の申請を行います。</p>
                    </li>
                    <li>
                      <h3 className="text-lg mb-1">要介護認定</h3>
                      <p className="mb-1">市町村の職員が訪問調査を行い、医師の意見書と合わせて要介護度の認定がされます。</p>
                    </li>
                    <li>
                      <h3 className="text-lg mb-1">ケアマネジャーの選定</h3>
                      <p className="mb-1">要介護認定を受けた後、居宅介護支援事業所からケアマネジャーを選定します。</p>
                    </li>
                    <li>
                      <h3 className="text-lg mb-1">ケアプランの作成</h3>
                      <p className="mb-1">ケアマネジャーがアセスメントを行い、ケアプランを作成します。</p>
                    </li>
                    <li>
                      <h3 className="text-lg mb-1">サービス利用開始</h3>
                      <p className="mb-1">ケアプランに基づき、具体的なサービスの利用を開始します。</p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default ServiceKyotaku;
