import { useState } from "react";
import Tabs from "../layout/Tabs";

const ServiceTaxi = () => {
  const [visibleTab1, setVisibleTab1] = useState("tab1");
  const [visibleTab2, setVisibleTab2] = useState("tab1");

  return (
    <>
      <div className="houmon relative">
        {/* Blobs Houmon */}
        <div className="blobs w-full h-full absolute overflow-hidden -z-10">
          <div className="green absolute -bottom-4 xs:-bottom-6 left-1/3 -translate-x-1/2 w-40 xs:w-48 rotate-90">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#2FAD41" d="M51.6,-67.6C64.8,-61.3,72.2,-43.6,73.1,-27C74,-10.4,68.5,5,63.2,20.3C57.9,35.5,52.8,50.6,42.3,51.8C31.8,53,15.9,40.2,1.4,38.3C-13,36.3,-26.1,45,-38.9,44.6C-51.8,44.2,-64.6,34.7,-64.2,23.7C-63.8,12.8,-50.2,0.4,-39.9,-7.3C-29.5,-14.9,-22.4,-17.9,-16.3,-26.5C-10.1,-35.1,-5.1,-49.4,7,-59C19.1,-68.7,38.3,-73.9,51.6,-67.6Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="darkpink absolute top-1/2 -translate-y-1/2 -right-8 2md:right-0 w-48 xs:w-56 rotate-12">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#ED0066" d="M42.5,-63.7C53.2,-50.8,58.5,-35.8,64,-20.4C69.6,-5.1,75.2,10.6,68.8,19.9C62.5,29.3,44,32.3,30.5,38.7C17.1,45.2,8.5,55.1,-3.9,60.5C-16.4,65.8,-32.7,66.7,-44.5,59.7C-56.2,52.7,-63.4,37.8,-62.3,24.2C-61.3,10.6,-52.1,-1.7,-47.1,-14.7C-42,-27.8,-41.1,-41.6,-34,-55.6C-26.8,-69.7,-13.4,-83.9,1.3,-85.7C15.9,-87.4,31.9,-76.6,42.5,-63.7Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="lightpink absolute -top-10 -left-20 lg:-left-8 w-60 xs:w-72">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFEDF4" d="M41.9,-51.1C51.9,-41.5,56,-26,61.5,-8.7C67.1,8.6,74.1,27.7,68.5,41.6C62.9,55.5,44.7,64.2,25.7,71.6C6.7,79,-13.2,85,-29.8,79.9C-46.4,74.7,-59.7,58.4,-65.1,41.3C-70.5,24.2,-68.1,6.3,-62.4,-8.4C-56.7,-23.1,-47.8,-34.7,-36.8,-44.1C-25.9,-53.5,-12.9,-60.8,1.5,-62.6C15.9,-64.4,31.9,-60.7,41.9,-51.1Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
        <div className="px-6 2md:px-12 lg:px-24 xl:px-28 py-6 lg:py-12">
          {/* 保険タクシー */}
          <div className="flex items-center gap-5 2md:gap-10 mb-3 xs:mb-4">
            <h1 className="text-2xl text-darkpink text-nowrap">介護タクシー</h1>
            <div className="bg-[url('./images/kuruma1.jpg')] bg-center bg-cover w-full h-14 sm:h-20 rounded-md shadow-md"></div>
          </div>
          <Tabs id="1" visibleTab={visibleTab1} setVisibleTab={setVisibleTab1}>
            <div className={`shoukai ${visibleTab1 === "tab1" ? "block" : "hidden"} my-4`}>
              <h1 className="text-2xl mb-2 text-darkpink">介護保険タクシー</h1>
              <div className="xs:flex gap-5 2md:gap-10">
                <div className="xs:w-1/2 mb-4 xs:mb-0">
                  <h1 className="mb-3 text-xl">介護保険タクシーとは</h1>
                  <p className="mb-2">介護保険で利用できる介護タクシーは介護保険タクシーとも言います。</p>
                  <p className="mb-2">介護保険タクシーご利用には要介護認定(1～5)と訪問介護契約が必要となります。（ご利用対象に当てはまらない方々は一般介護タクシーを利用することができます）</p>
                  <p>ケアマネージャーさまの作成する通院介助等のケアプランに基づいてご利用いただくことで、介護保険が適用され、身体介助と移送を一本化にしたサービスです。(障害者総合支援法にも適用されます）</p>
                </div>
                <div className="xs:w-1/2">
                  <h1 className="mb-3 text-xl">サービス内容</h1>
                  <p className="mb-2">通院介助等のケアプランに基づく身体介助全般に対応。</p>
                  <p className="mb-2">ベッド上の介助から始ります、おむつ交換・排泄介助・更衣介助・移乗介助・移動介助・階段の昇降介助・乗降介助・病院受付までの移動介助・帰宅後のケアまで。</p>
                  <p>院内介助も対応できます。</p>
                </div>
              </div>
              <h1 className="text-2xl mt-4 mb-2 text-darkpink">一般介護タクシー</h1>
              <div>
                <h1 className="mb-3 text-xl">一般介護タクシーとは</h1>
                <p className="">西東京市を拠点に東京都全域介護保険外（自費利用）でも安心安全安い介護タクシーをご利用いただけます。</p>
                <div className="mt-4">
                  <h1 className="mb-3 text-xl">ご利用対象</h1>
                  <p className="mb-2">（1）介護保険法第19条に規定する要介護認定又は要支援認定を受けている方。
                    （2）身体障害者福祉法第4条に規定する身体障害者手帳の交付を受けている方。
                    （3）上記（1）,（2）に該当する方のほか、肢体不自由、内部障害、知的障害及び精神障害その他の障害を有する等により単独での移動が困難な方であって、単独でタクシーその他の公共交通機関を利用することが困難な方。 </p>
                </div>
              </div>
            </div>

            <div className={`riyou ${visibleTab1 === "tab2" ? "block" : "hidden"} my-4`}>
              <h1 className="text-2xl mb-2 text-darkpink">介護保険タクシー</h1>
              <div className="xs:flex gap-5 2md:gap-10">
                <div className="xs:w-1/2 mb-4 xs:mb-0">
                  <h1 className="mb-3 text-xl">ご利用方法</h1>
                  <p className="mb-2">当事業所が利用者様と訪問介護契約を結び、ケアマネージャーさまが作成した通院介助等のケアプランに基づいてサービス開始。</p>
                  <p><span className="font-bold">対応地域：</span>西東京市・小平市(一部)・武蔵野市(一部)</p>
                  <p><span className="font-bold">営業時間：</span>7時30分～18時30分（時間外応相談）月曜日～土曜日</p>
                </div>
                <div className="xs:w-1/2">
                  <h1 className="mb-2 text-xl">ご利用料金</h1>
                  <table>
                    <tbody>
                      <tr>
                        <th className="bg-lightpink p-2 text-start border border-darkstone min-w-24" scope="row">運賃</th>
                        <td className="bg-white p-2 border border-darkstone">１キロ　300円 + 介護保険利用者様負担額</td>
                      </tr>
                      <tr>
                        <th className="bg-lightpink p-2 text-start border border-darkstone min-w-24" scope="row">迎車料金</th>
                        <td className="bg-white p-2 border border-darkstone">無料</td>
                      </tr>
                      <tr>
                        <th className="bg-lightpink p-2 text-start border border-darkstone min-w-24" scope="row">利用中の車椅子使用料</th>
                        <td className="bg-white p-2 border border-darkstone">無料</td>
                      </tr>
                      <tr>
                        <th className="bg-lightpink p-2 text-start border border-darkstone min-w-24" scope="row">リクライニング車椅子使用料</th>
                        <td className="bg-white p-2 border border-darkstone">一回　1,000円</td>
                      </tr>
                      <tr>
                        <th className="bg-lightpink p-2 text-start border border-darkstone min-w-24" scope="row">寝台(ストレッチャー)使用料</th>
                        <td className="bg-white p-2 border border-darkstone">一回　2,000円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <h1 className="text-2xl mt-4 mb-2 text-darkpink">一般介護タクシー</h1>
              <div>
                <div>
                  <h1>ご利用料金</h1>
                  <table>
                    <caption className="">
                      距離制運賃：
                    </caption>
                    <tbody>
                      <tr>
                        <th className="bg-lightpink p-2 text-start border border-darkstone min-w-24" colSpan={2}>小型車</th>
                      </tr>
                      <tr>
                        <th className="bg-white p-2 text-start border border-darkstone min-w-24" scope="row">初乗り運賃</th>
                        <td className="bg-white p-2 border border-darkstone">２キロ　７００円</td>
                      </tr>
                      <tr>
                        <th className="bg-white p-2 text-start border border-darkstone min-w-24" scope="row">加算運賃</th>
                        <td className="bg-white p-2 border border-darkstone">２８８メートル　９０円</td>
                      </tr>
                      <tr>
                        <th className="bg-white p-2 text-start border border-darkstone min-w-24" scope="row">時速１０キロ以下の走行時間について１分４５秒までごとに</th>
                        <td className="bg-white p-2 border border-darkstone">９０円</td>
                      </tr>
                      <tr>
                        <th className="bg-lightpink p-2 text-start border border-darkstone min-w-24" colSpan={2}>大型車</th>
                      </tr>
                      <tr>
                        <th className="bg-white p-2 text-start border border-darkstone min-w-24" scope="row">初乗り運賃</th>
                        <td className="bg-white p-2 border border-darkstone">２キロ　７３０円</td>
                      </tr>
                      <tr>
                        <th className="bg-white p-2 text-start border border-darkstone min-w-24" scope="row">加算運賃</th>
                        <td className="bg-white p-2 border border-darkstone">２７６メートル　９０円</td>
                      </tr>
                      <tr>
                        <th className="bg-white p-2 text-start border border-darkstone min-w-24" scope="row">時速１０キロ以下の走行時間について１分４０秒までごとに</th>
                        <td className="bg-white p-2 border border-darkstone">９０円</td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <caption className="">
                      時間制運賃：
                    </caption>
                    <tbody>
                      <tr>
                        <th className="bg-lightpink p-2 text-start border border-darkstone min-w-24" colSpan={2}>小型車</th>
                      </tr>
                      <tr>
                        <th className="bg-white p-2 text-start border border-darkstone min-w-24" scope="row">初乗り運賃</th>
                        <td className="bg-white p-2 border border-darkstone">３０分まで　２７６０円</td>
                      </tr>
                      <tr>
                        <th className="bg-white p-2 text-start border border-darkstone min-w-24" scope="row">加算運賃</th>
                        <td className="bg-white p-2 border border-darkstone">３０分までごとに　２７６０円</td>
                      </tr>
                      <tr>
                        <th className="bg-lightpink p-2 text-start border border-darkstone min-w-24" colSpan={2}>大型車</th>
                      </tr>
                      <tr>
                        <th className="bg-white p-2 text-start border border-darkstone min-w-24" scope="row">初乗り運賃</th>
                        <td className="bg-white p-2 border border-darkstone">３０分まで　２８８０円</td>
                      </tr>
                      <tr>
                        <th className="bg-white p-2 text-start border border-darkstone min-w-24" scope="row">加算運賃</th>
                        <td className="bg-white p-2 border border-darkstone">３０分までごとに　２８８０円</td>
                      </tr>
                    </tbody>
                  </table>
                  <div>
                    <p><span className="font-bold">深夜・早朝割増：</span>２２時から５時まで２割増</p>
                    <p><span className="font-bold">迎車料金：</span>１キロを限度として実車扱い(350円～365円)</p>
                    <p><span className="font-bold">予約料金：</span>無料</p>
                  </div>
                  <table>
                    <caption className="">
                    介助料金：
                    </caption>
                    <tbody>
                      <tr>
                        <th className="bg-lightpink p-2 text-start border border-darkstone min-w-24" scope="row">基本料金（車椅子対応車両）</th>
                        <td className="bg-white p-2 border border-darkstone">1,100円</td>
                      </tr>
                      <tr>
                        <th className="bg-lightpink p-2 text-start border border-darkstone min-w-24" scope="row">室内（外）移動介助（乗降介助含む１５分ごと）</th>
                        <td className="bg-white p-2 border border-darkstone">1,100円</td>
                      </tr>
                      <tr>
                        <th className="bg-lightpink p-2 text-start border border-darkstone min-w-24" scope="row">階段の昇降介助（５階まで介護員１名）</th>
                        <td className="bg-white p-2 border border-darkstone">1,500円～5,500円</td>
                      </tr>
                      <tr>
                        <th className="bg-lightpink p-2 text-start border border-darkstone min-w-24" scope="row">ベッド上おむつ交換・更衣介助</th>
                        <td className="bg-white p-2 border border-darkstone">3,300円</td>
                      </tr>
                    </tbody>
                  </table>
                  <div>
                    <p>※その他の介助は応相談</p>
                    <p>※介助中にメーター料金は発生致しません</p>
                  </div>
                </div>
              </div>
            </div>
          </Tabs>
          {/* 一般タクシー */}
          {/* <div className="flex items-center gap-5 2md:gap-10 mb-3 xs:mb-4">
            <h1 className="text-2xl text-darkpink text-nowrap">一般介護タクシー</h1>
            <div className="bg-[url('./images/kuruma2.jpg')] bg-center bg-cover w-full h-14 sm:h-20 rounded-md shadow-md"></div>
          </div>
          <Tabs id="2" visibleTab={visibleTab2} setVisibleTab={setVisibleTab2}>
            <div className={`shoukai ${visibleTab2 === "tab1" ? "block" : "hidden"} mt-4`}>
              <h1 className="mb-3 text-xl">一般介護タクシーとは</h1>
              <p className="">西東京市を拠点に東京都全域介護保険外（自費利用）でも安心安全安い介護タクシーをご利用いただけます。</p>
              <div className="mt-4">
                <h1 className="mb-3 text-xl">ご利用対象</h1>
                <p className="mb-2">（1）介護保険法第19条に規定する要介護認定又は要支援認定を受けている方。
                  （2）身体障害者福祉法第4条に規定する身体障害者手帳の交付を受けている方。
                  （3）上記（1）,（2）に該当する方のほか、肢体不自由、内部障害、知的障害及び精神障害その他の障害を有する等により単独での移動が困難な方であって、単独でタクシーその他の公共交通機関を利用することが困難な方。 </p>
              </div>
            </div>

            <div className={`riyou ${visibleTab2 === "tab2" ? "block" : "hidden"} mt-4`}>
              <h1 className="mb-3 text-xl">ご利用対象</h1>
              <p>要介護1～5の方または特定疾病が原因で介護を必要とする方。</p>
              <p className="mb-2">このサービスを利用できるのは、要介護認定を受けて「要介護（1～5）と認定された方」、あるいは「特定疾病が原因で介護を必要とする40～64歳の方」です。</p>
              <p>※要支援（1～2）の方は 介護予防訪問介護 の対象となります。 </p>
              <h1 className="mt-4 mb-3 text-xl">ご利用までの流れ</h1>
              <div className="xs:flex gap-5 2md:gap-10">
                <div className="xs:w-1/2 mb-4 xs:mb-0">
                  <h1 className="mb-2 text-lg">介護認定を受けていない方</h1>
                  <ul className="list-disc list-inside">
                    <li>居宅介護支援事業所のケアマネージャーまでご相談ください。ご本人やご家族の代行で、役所へ申請手続きを致します。</li>
                    <li>ケアマネージャーがご自宅へ伺い、お話をおききし、介護保険やケアプランなどについて、ご説明させて頂きます。ご利用がお決まりになったら、居宅介護支援事業所との契約を行ないます。</li>
                    <li>役所に介護保険の申請を行い、後日、認定員がご自宅に伺って、介護認定調査が行なわれます。その後、認定結果が郵便にて送られてきます。</li>
                    <li>ケアマネージャーが、ケアプランを作成し、各介護サービスのご利用の手続きに入ります。</li>
                    <li>各サービスの事業所との契約をし、各介護サービスのご利用が始まります。</li>
                  </ul>
                </div>
                <div className="xs:w-1/2">
                  <h1 className="mb-2 text-lg">介護認定を受けられていてご利用してない方</h1>
                  <ul className="list-disc list-inside">
                    <li>居宅介護支援事業所のケアマネージャーまでご相談ください。</li>
                    <li>ケアマネージャーがご自宅へ伺い、お話をおききし、介護保険やケアプランなどについて、ご説明させて頂きます。ご利用がお決まりになったら、居宅介護支援事業所との契約を行ないます。</li>
                    <li>ケアマネージャーが、ケアプランを作成し、各介護サービスのご利用の手続きに入ります。 </li>
                    <li>各サービスの事業所との契約をし、各介護サービスのご利用が始まります。 </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-center">※他事業所で、サービスをお受けしている方でも、当社のサービスに関心がございましたら、<br className="hidden md:block" />お気軽にご相談ください。</p>
            </div>
          </Tabs> */}
        </div>
      </div>
    </>
  );
};

export default ServiceTaxi;
