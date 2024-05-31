import { useState } from "react";
import Tabs from "../layout/Tabs";

const ServiceDay = () => {
  const [visibleTab, setVisibleTab] = useState("tab1");

  return (
    <>
      <div className="day relative">
        {/* Blobs Kyotaku */}
        <div className="blobs w-full h-full absolute overflow-hidden -z-10">
          <div className="green absolute w-80 md:w-96 top-96 -left-28 -rotate-45">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#2FAD41" d="M40.7,-52.3C48.6,-42,47.7,-25.1,47.9,-10.5C48,4.1,49,16.5,44.5,27.1C40.1,37.7,30.1,46.4,17.9,52.2C5.7,58,-8.7,60.8,-24,58.5C-39.2,56.1,-55.2,48.6,-55.5,37.3C-55.8,25.9,-40.4,10.8,-32.7,-1.1C-25.1,-12.9,-25.1,-21.4,-20.9,-32.4C-16.7,-43.3,-8.4,-56.8,4,-61.6C16.5,-66.4,32.9,-62.6,40.7,-52.3Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="darkpink absolute w-80 bottom-12 -right-24 2md:-right-16 -rotate-12">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#ED0066" d="M42.2,-55.5C48.6,-45,43.3,-25.8,40.2,-11.8C37.1,2.3,36.1,11.3,32.7,20.5C29.3,29.7,23.5,39.2,14.3,44.9C5.2,50.7,-7.4,52.7,-21.4,51C-35.4,49.2,-51,43.8,-60.2,32.5C-69.5,21.2,-72.4,3.9,-66.9,-9.1C-61.4,-22.2,-47.4,-31,-34.9,-40.4C-22.3,-49.9,-11.1,-59.9,3.4,-63.9C17.9,-68,35.9,-66,42.2,-55.5Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="lightpink absolute w-72 -top-12 lg-top-8 -right-12 lg:right-0 -rotate-12">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFEDF4" d="M40.4,-49.8C48.9,-40.9,50.1,-25,52.7,-9.4C55.3,6.1,59.3,21.3,54.6,33.4C49.8,45.4,36.4,54.2,22.4,57.7C8.3,61.2,-6.3,59.3,-21.4,55.3C-36.5,51.3,-52.1,45.2,-63.2,33C-74.4,20.9,-81.1,2.7,-74.8,-9.7C-68.5,-22.2,-49.1,-28.8,-34.5,-36.6C-19.9,-44.4,-9.9,-53.2,3,-56.8C15.9,-60.3,31.8,-58.6,40.4,-49.8Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
        <div className="px-6 2md:px-12 lg:px-24 xl:px-28 py-6 lg:py-12">
          <div className="flex items-center gap-2 sm:gap-5 2md:gap-10 mb-3 xs:mb-4">
            <h1 className="text-2xl text-darkpink text-nowrap">デイサービス</h1>
            <div aria-label="デイサービスの室内の写真" role="img" className="bg-[url('./images/dayservice1.jpg')] bg-center bg-cover w-full h-14 sm:h-20 rounded-md shadow-md"></div>
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
                    <div aria-label="デイサービスの室内の座席の写真" role="img" className="bg-[url('./images/dayservice4.JPG')] bg-center bg-cover w-full min-h-52 rounded-md shadow-md"></div>
                    <div aria-label="デイサービスの室内の座席の写真" role="img" className="bg-[url('./images/dayservice5.JPG')] bg-center bg-cover w-full min-h-52 rounded-md shadow-md"></div>
                    <div aria-label="デイサービスの室内の座席の写真" role="img" className="bg-[url('./images/dayservice3.JPG')] bg-center bg-cover w-full min-h-52 rounded-md shadow-md"></div>
                  </div>
                  <div className="mt-4 flex flex-col sm:flex-row gap-3 bg-lightgray rounded-md bg-opacity-30 p-3">
                    <h2 className="hidden sm:block pt-2 text-vertical text-lg font-bold text-darkstone">品数豊富な日替わり昼食</h2>
                    <h2 className="sm:hidden pt-0 text-lg font-bold text-darkstone">品数豊富な日替わり昼食</h2>
                    <div aria-label="デイサービスの食事の写真" role="img" className="bg-[url('./images/dayservice8.jpg')] bg-center bg-cover w-full min-h-56 sm:min-h-[500px] rounded-md shadow-md"></div>
                  </div>
                  <div className="mt-4 flex flex-col sm:flex-row gap-3 in-h-96 min-h-[500px] bg-lightgray rounded-md bg-opacity-30 p-3">
                    <h2 className="hidden sm:block pt-2 text-vertical text-lg font-bold text-darkstone">広いバスタブとお手洗い完備</h2>
                    <h2 className="sm:hidden pt-0 text-lg font-bold text-darkstone">広いバスタブとお手洗い完備</h2>
                    <div aria-label="デイサービスの風呂の写真" role="img" className="bg-[url('./images/dayservice6.jpg')] bg-bottom bg-cover sm:w-2/3 min-h-56 rounded-md shadow-md"></div>
                    <div aria-label="デイサービスのお手洗いの写真" role="img" className="bg-[url('./images/dayservice7.jpg')] bg-center bg-cover sm:w-1/3 min-h-56 rounded-md shadow-md"></div>
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
                <div className="md:flex gap-10 mt-4">
                  <div className="mb-4 md:md-0 md:w-1/2">
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
                      <p>※詳細なご料金は<a className="text-darkpink hover:text-darkstone transition-colors duration-200 ease-in-out" href="./pdfs/test.pdf" target="_blank">こちら</a>からご覧ください。</p>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <h1 className="mb-3 text-xl">一日の流れ</h1>
                    <ul className="list-disc list-inside relative w-full px-2">
                      <div className="h-full w-0.5 bg-darkstone absolute bg-opacity-20 top-0 -z-10 left-2.5"></div>
                      <li className=" text-green mb-8 relative"><span className="font-bold">到着</span><span className="absolute -top-1.5 font-bold text-sm right-0 bg-lightgray bg-opacity-100 py-2 min-w-16 text-center rounded-md shadow-md">8：30</span></li>
                      <li className="text-green mb-8 relative"><span className="">バイタルチェック <span className="max-[375px]:absolute left-6 top-6">入浴</span></span><span className="absolute -top-1.5 font-bold text-sm right-0 bg-lightgray bg-opacity-100 py-2 min-w-16 text-center rounded-md shadow-md">9：00</span></li>
                      <li className="text-green mb-8 relative"><span className="">体操</span><span className="absolute -top-1.5 font-bold text-sm right-0 bg-lightgray bg-opacity-100 py-2 min-w-16 text-center rounded-md shadow-md">11：00</span></li>
                      <li className="text-green mb-8 relative"><span className="font-bold">昼食</span><span className="absolute -top-1.5 font-bold text-sm right-0 bg-lightgray bg-opacity-100 py-2 min-w-16 text-center rounded-md shadow-md">12：00</span></li>
                      <li className="text-green mb-8 relative"><span className="">レクレーション <span className="max-[375px]:absolute left-6 top-6">個別機能訓練</span></span><span className="absolute -top-1.5 font-bold text-sm right-0 bg-lightgray bg-opacity-100 py-2 min-w-16 text-center rounded-md shadow-md">14：00</span></li>
                      <li className="text-green mb-8 relative"><span className="">おやつ</span><span className="absolute -top-1.5 font-bold text-sm right-0 bg-lightgray bg-opacity-100 py-2 min-w-16 text-center rounded-md shadow-md">15：00</span></li>
                      <li className="text-green relative"><span className="font-bold">帰宅</span><span className="absolute -top-1.5 font-bold text-sm right-0 bg-lightgray bg-opacity-100 py-2 min-w-16 text-center rounded-md shadow-md">16：45</span></li>
                    </ul>
                    <div className="mt-4">
                      <p><span className="font-bold">住所：</span>西東京市向台町6丁目 10-10</p>
                      <p><span className="font-bold">受付時間：</span>08：00 ～ 17：30</p>
                    </div>
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
