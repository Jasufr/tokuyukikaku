import { useState } from "react";
import Tabs from "../layout/Tabs";

const ServiceDay = () => {
  const [visibleTab, setVisibleTab] = useState("tab1");

  return (
    <>
      <div className="day relative">
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
          <div className="flex items-center gap-5 2md:gap-10 mb-3 xs:mb-4">
            <h1 className="text-2xl text-darkpink text-nowrap">デイサービス</h1>
            <div className="bg-[url('./images/dayservice1.jpg')] bg-center bg-cover w-full h-14 sm:h-20 rounded-md shadow-md"></div>
          </div>
          <Tabs visibleTab={visibleTab} setVisibleTab={setVisibleTab}>
            <div className={`shoukai ${visibleTab === "tab1" ? "block" : "hidden"} mt-4`}>
              <h1 className="mb-3 text-xl">デイサービスとは</h1>
              <p className="mb-2">全面床暖房を完備した室内では、フラワーアレンジメント・書道・麻雀など認知症予防に効果があるとされているレクリエーションを用意しています。<br /> また、看護師が常駐しているので、日々の機能訓練も安心して行っていただけます。</p>
              <div className="mt-4">
                <div className="">
                  <h1 className="mb-3 text-xl">室内の様子</h1>
                  <div className="flex flex-col sm:flex-row gap-3 in-h-96 min-h-[500px] bg-lightgray rounded-md bg-opacity-30 p-3">
                    <h2 className="hidden sm:block pt-2 text-vertical text-lg font-bold text-darkstone">全面床暖房付きデイルーム</h2>
                    <h2 className="sm:hidden pt-0 text-lg font-bold text-darkstone">全面床暖房付きデイルーム</h2>
                    <div className="bg-[url('./images/dayservice4.JPG')] bg-center bg-cover w-full min-h-52 rounded-md shadow-md"></div>
                    <div className="bg-[url('./images/dayservice5.JPG')] bg-center bg-cover w-full min-h-52 rounded-md shadow-md"></div>
                    <div className="bg-[url('./images/dayservice3.JPG')] bg-center bg-cover w-full min-h-52 rounded-md shadow-md"></div>
                  </div>
                  <div className="mt-4 flex flex-col sm:flex-row gap-3 bg-lightgray rounded-md bg-opacity-30 p-3">
                    <h2 className="hidden sm:block pt-2 text-vertical text-lg font-bold text-darkstone">品数豊富な日替わり昼食</h2>
                    <h2 className="sm:hidden pt-0 text-lg font-bold text-darkstone">品数豊富な日替わり昼食</h2>
                    <div className="bg-[url('./images/dayservice8.jpg')] bg-center bg-cover w-full min-h-56 sm:min-h-[500px] rounded-md shadow-md"></div>
                  </div>
                  <div className="mt-4 flex flex-col sm:flex-row gap-3 in-h-96 min-h-[500px] bg-lightgray rounded-md bg-opacity-30 p-3">
                    <h2 className="hidden sm:block pt-2 text-vertical text-lg font-bold text-darkstone">広いバスタブとお手洗い完備</h2>
                    <h2 className="sm:hidden pt-0 text-lg font-bold text-darkstone">広いバスタブとお手洗い完備</h2>
                    <div className="bg-[url('./images/dayservice6.jpg')] bg-bottom bg-cover sm:w-2/3 min-h-56 rounded-md shadow-md"></div>
                    <div className="bg-[url('./images/dayservice7.jpg')] bg-center bg-cover sm:w-1/3 min-h-56 rounded-md shadow-md"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`riyou ${visibleTab === "tab2" ? "block" : "hidden"} mt-4`}>
              <div className="">
                <div>
                  <h1 className="mt-4 mb-3 text-xl">ご利用までの流れ</h1>
                  <div className="xs:flex gap-5 2md:gap-10">
                    <div className="xs:w-1/2 mb-4 xs:mb-0">
                      <h1 className="mb-2 text-lg">介護認定を受けていない方</h1>
                      <ul className="list-square list-inside">
                        <li className="mb-1">居宅介護支援事業所のケアマネージャーまでご相談ください。ご本人やご家族の代行で、役所へ申請手続きを致します。</li>
                        <li className="mb-1">ケアマネージャーがご自宅へ伺い、お話をおききし、介護保険やケアプランなどについて、ご説明させて頂きます。ご利用がお決まりになったら、居宅介護支援事業所との契約を行ないます。</li>
                        <li className="mb-1">役所に介護保険の申請を行い、後日、認定員がご自宅に伺って、介護認定調査が行なわれます。その後、認定結果が郵便にて送られてきます。</li>
                        <li className="mb-1">ケアマネージャーが、ケアプランを作成し、各介護サービスのご利用の手続きに入ります。</li>
                        <li className="mb-1">各サービスの事業所との契約をし、各介護サービスのご利用が始まります。</li>
                      </ul>
                    </div>
                    <div className="xs:w-1/2">
                      <h1 className="mb-2 text-lg">介護認定を受けられていてご利用してない方</h1>
                      <ul className="list-square list-inside">
                        <li className="mb-1">居宅介護支援事業所のケアマネージャーまでご相談ください。</li>
                        <li className="mb-1">ケアマネージャーがご自宅へ伺い、お話をおききし、介護保険やケアプランなどについて、ご説明させて頂きます。ご利用がお決まりになったら、居宅介護支援事業所との契約を行ないます。</li>
                        <li className="mb-1">ケアマネージャーが、ケアプランを作成し、各介護サービスのご利用の手続きに入ります。</li>
                        <li className="mb-1">各サービスの事業所との契約をし、各介護サービスのご利用が始まります。</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="mb-1">※契約の際に、詳しくご説明させていただきます。</p>
                    <p className="">※他事業所で、サービスをお受けしている方でも、当社のサービスに関心がございましたら、<br className="hidden md:block" />お気軽にご相談ください。</p>
                  </div>
                </div>
                <div className="flex gap-10">
                  <div className="w-1/2">
                    <h1 className="mb-3 text-xl">ご利用料金</h1>
                    <table className="w-full">
                      <caption className="text-start font-bold text-darkstone text-lg ms-2 mb-2">
                        8時間以上9時間未満、1割負担の場合（1日につき）
                      </caption>
                      <tbody>
                        <tr>
                          <th className="bg-lightpink bg-opacity-80 p-2 text-start border border-darkstone" scope="row">要介護 1</th>
                          <td className="text-end bg-white bg-opacity-50 p-2 border border-darkstone">837円</td>
                        </tr>
                        <tr>
                          <th className="bg-lightpink bg-opacity-80 p-2 text-start border border-darkstone" scope="row">要介護 2</th>
                          <td className="text-end bg-white bg-opacity-50 p-2 border border-darkstone">988円</td>
                        </tr>
                        <tr>
                          <th className="bg-lightpink bg-opacity-80 p-2 text-start border border-darkstone" scope="row">要介護 3</th>
                          <td className="text-end bg-white bg-opacity-50 p-2 border border-darkstone">1145円</td>
                        </tr>
                        <tr>
                          <th className="bg-lightpink bg-opacity-80 p-2 text-start border border-darkstone" scope="row">要介護 4</th>
                          <td className="text-end bg-white bg-opacity-50 p-2 border border-darkstone">1303円</td>
                        </tr>
                        <tr>
                          <th className="bg-lightpink bg-opacity-80 p-2 text-start border border-darkstone" scope="row">要介護 5</th>
                          <td className="text-end bg-white bg-opacity-50 p-2 border border-darkstone">1458円</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="mt-4">
                      <p className="text-start font-bold text-darkstone text-lg ms-2 mb-2">入浴介助料　43円</p>
                      <p>上記の料金は一例になります。<br /> その他の時間や加算については、お問い合わせ時や面接の際にご説明させていただきます。</p>
                    </div>
                    <table className="w-full mt-4">
                      <caption className="text-start font-bold text-darkstone text-lg ms-2 mb-2">その他サービス</caption>
                      <tbody>
                        <tr>
                          <th className="bg-lightpink bg-opacity-80 p-2 text-start border border-darkstone" scope="row">昼食+おやつ</th>
                          <td className="text-end bg-white bg-opacity-50 p-2 border border-darkstone">750円</td>
                        </tr>
                        <tr>
                          <th className="bg-lightpink bg-opacity-80 p-2 text-start border border-darkstone" scope="row">
                            <p className="mb-1">おむつ（1枚）</p>
                            <p className="mb-1">リハビリパンツ（1枚）</p>
                            <p>パット（1枚</p>
                          </th>
                          <td className="text-end bg-white bg-opacity-50 p-2 border border-darkstone">
                            <p className="mb-1">100円</p>
                            <p className="mb-1">100円</p>
                            <p>50円</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="mt-4 text-center">
                      <p>※詳細なご料金は<a className="text-darkpink hover:text-darkstone transition-colors duration-200 ease-in-out" href="./pdfs/test.pdf" target="_blank">こちら</a>からご覧になれます。</p>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <h1 className="mb-3 text-xl">一日の流れ</h1>
                  </div>
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default ServiceDay;
