import { useState } from "react";
import Tabs from "../layout/Tabs";
import { Helmet } from "react-helmet-async";
import ImageWithPlaceholder from "../components/ImageWithPlaceholder";

const ServiceTaxi = () => {
  const [visibleTab1, setVisibleTab1] = useState("tab1");

  return (
    <>
      <Helmet>
        <title>徳有企画 | 介護タクシー</title>
        <meta name="description" content="介護保険で利用できる介護タクシーは介護保険タクシーとも言います。介護保険タクシーご利用には要介護認定(1～5)と訪問介護契約が必要となります。（ご利用対象に当てはまらない方々は一般介護タクシーを利用することができます）" />

        <meta property="og:title" content="徳有企画 | 介護タクシー" />
        <meta
          property="og:description"
          content="介護保険で利用できる介護タクシーは介護保険タクシーとも言います。介護保険タクシーご利用には要介護認定(1～5)と訪問介護契約が必要となります。（ご利用対象に当てはまらない方々は一般介護タクシーを利用することができます）"
        />
        <meta property="og:image" content="/images/kuruma1.webp" />
        <meta property="og:url" content="https://tokuyukikaku.netlify.app/taxi" />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="/taxi" />
      </Helmet>
      <div className="houmon relative">
        {/* Blobs Houmon */}
        <div className="blobs w-full h-full absolute overflow-hidden -z-10">
          <div className="green absolute top-96 -right-8 w-44 sm:w-64 rotate-45">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#2FAD41" d="M30.8,-41.9C39.4,-36.1,45.5,-26.5,54.1,-14.2C62.7,-2,73.8,12.8,74.9,29C76,45.1,67.1,62.6,53,66.3C38.8,70,19.4,59.9,2.1,57.1C-15.3,54.2,-30.5,58.6,-41.8,54C-53.2,49.4,-60.6,35.7,-59.4,23.2C-58.1,10.6,-48.3,-0.9,-44.6,-15.2C-40.9,-29.4,-43.5,-46.4,-37.1,-52.8C-30.7,-59.3,-15.3,-55.2,-2.1,-52.3C11.1,-49.4,22.2,-47.6,30.8,-41.9Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="darkpink absolute -top-4 right-1/4 translate-x-1/2 w-52 sm:w-72 -rotate-90">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#ED0066" d="M38.7,-55.1C47.5,-47,49.9,-32,57.9,-16.6C65.9,-1.3,79.4,14.5,78.8,28.5C78.2,42.5,63.5,54.8,48,63.3C32.5,71.8,16.2,76.5,0.7,75.6C-14.8,74.6,-29.7,68,-45.3,59.5C-60.9,51,-77.3,40.7,-82.2,26.5C-87.1,12.3,-80.5,-5.9,-72.3,-21.1C-64,-36.3,-54.1,-48.6,-41.8,-55.5C-29.5,-62.5,-14.7,-64,0.1,-64.2C15,-64.4,30,-63.2,38.7,-55.1Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="lightpink absolute w-60 sm:w-80 bottom-6 -left-20">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFEDF4" d="M38.4,-53.8C48.7,-45.3,55.2,-32.7,60.2,-19.1C65.3,-5.6,68.7,8.9,65.4,21.9C62,34.8,51.9,46.1,39.8,53.6C27.8,61.1,13.9,64.7,-0.2,65C-14.3,65.3,-28.7,62.3,-40.2,54.6C-51.6,46.9,-60.3,34.7,-63.8,21.3C-67.3,8,-65.8,-6.4,-62.9,-22.1C-60.1,-37.8,-56.1,-54.7,-45.4,-63C-34.7,-71.3,-17.4,-71.1,-1.7,-68.8C14,-66.5,28.1,-62.2,38.4,-53.8Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
        <div className="px-6 2md:px-12 lg:px-24 xl:px-28 py-6 lg:py-12">
          {/* 保険タクシー */}
          <div className="flex items-center gap-2 sm:gap-5 2md:gap-10 mb-3 xs:mb-4">
            <h1 className="text-2xl text-darkpink text-nowrap">介護タクシー</h1>
            {/* <div aria-label="介護タクシーの車の写真" role="img" className="bg-[url('/images/kuruma1.webp')] bg-center bg-cover w-full h-14 sm:h-20 rounded-md shadow-md"></div> */}
            <ImageWithPlaceholder
              src="/images/kuruma1.webp"
              placeholderSrc="/images/kuruma1Small.jpg"
              alt="介護タクシーの車の写真"
              className="bg-cover bg-center w-full h-14 sm:h-20 rounded-md shadow-md"
              imgClassName="rounded-md"
            />
          </div>
          <Tabs id="1" visibleTab={visibleTab1} setVisibleTab={setVisibleTab1}>
            <div className={`shoukai ${visibleTab1 === "tab1" ? "block" : "hidden"} my-4`}>
              <h2 className="text-2xl mb-2 text-darkpink">介護保険タクシー</h2>
              <div className="sm:flex gap-5 2md:gap-10">
                <div className="sm:w-1/2 mb-4 sm:mb-0">
                  <h3 className="mb-3 text-xl">介護保険タクシーとは</h3>
                  <p className="mb-2">介護保険で利用できる介護タクシーは介護保険タクシーとも言います。</p>
                  <p className="mb-2">介護保険タクシーご利用には要介護認定(1～5)と訪問介護契約が必要となります。（ご利用対象に当てはまらない方々は一般介護タクシーを利用することができます）</p>
                  <p>ケアマネージャーさまの作成する通院介助等のケアプランに基づいてご利用いただくことで、介護保険が適用され、身体介助と移送を一本化にしたサービスです。(障害者総合支援法にも適用されます）</p>
                </div>
                <div className="sm:w-1/2">
                  <h3 className="mb-3 text-xl">サービス内容</h3>
                  <p className="mb-2">通院介助等のケアプランに基づく身体介助全般に対応。</p>
                  <p className="mb-2">ベッド上の介助から始ります、おむつ交換・排泄介助・更衣介助・移乗介助・移動介助・階段の昇降介助・乗降介助・病院受付までの移動介助・帰宅後のケアまで。</p>
                  <p>院内介助も対応できます。</p>
                </div>
              </div>
              <h2 className="text-2xl mt-4 mb-2 text-darkpink">一般介護タクシー</h2>
              <div>
                <h3 className="mb-3 text-xl">一般介護タクシーとは</h3>
                <p className="">西東京市を拠点に東京都全域介護保険外（自費利用）でも安心安全な介護タクシーをご利用いただけます。</p>
                <div className="mt-4">
                  <h3 className="mb-3 text-xl">ご利用対象</h3>
                  <ol className="list-decimal list-inside">
                    <li className="mb-1">介護保険法第19条に規定する要介護認定又は要支援認定を受けている方</li>
                    <li className="mb-1">身体障害者福祉法第4条に規定する身体障害者手帳の交付を受けている方</li>
                    <li className="mb-1">上記 ①と② に該当する方のほか、肢体不自由、内部障害、知的障害及び精神障害その他の障害を有する等により単独での移動が困難な方であって、単独でタクシーその他の公共交通機関を利用することが困難な方</li>
                  </ol>
                </div>
                <div className="mt-4 text-cente">
                  <p><span className="font-bold">車両：</span>スズキエブリィワゴン・ニッサンキャラバンを使用しております、車いす又はリクライニング車いす、ストレッチャーにも対応できます。</p>
                  <p><span className="font-bold">運転手：</span>二種免許はもちろん、介護福祉士又はヘルパー2級の資格が取得しております、ご安心してお任せください。</p>
                </div>
              </div>
            </div>

            <div className={`riyou ${visibleTab1 === "tab2" ? "block" : "hidden"} my-4`}>
              <h2 className="text-2xl mb-2 text-darkpink">介護保険タクシー</h2>
              <div className="sm:flex gap-5 2md:gap-10">
                <div className="sm:w-1/2 mb-4 sm:mb-0">
                  <h3 className="mb-3 text-xl">ご利用方法</h3>
                  <p className="mb-2">当事業所が利用者様と訪問介護契約を結び、ケアマネージャーさまが作成した通院介助等のケアプランに基づいてサービスが開始します。</p>
                  <p className="mb-2 font-bold">お客様の状況・状態によって料金が異なりますので、お気軽にお電話・メールにて、ご相談ください。</p>
                  <p><span className="font-bold">対応地域：</span>西東京市・小平市(一部)・武蔵野市(一部)</p>
                  <p><span className="font-bold">営業時間：</span>7 : 30～18 : 30（時間外応相談）月曜日～土曜日</p>
                </div>
                <div className="sm:w-1/2">
                  <h3 className="mb-2 text-xl">ご利用料金</h3>
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <th className="bg-lightpink bg-opacity-80 p-2 text-start border border-darkstone min-w-24" scope="row">運賃</th>
                        <td className="bg-white bg-opacity-50 p-2 border border-darkstone">1.5キロまで　500円、その後1キロ　300円　+　介護保険利用者様負担額</td>
                      </tr>
                      <tr>
                        <th className="bg-lightpink bg-opacity-80 p-2 text-start border border-darkstone min-w-24" scope="row">迎車料金</th>
                        <td className="bg-white bg-opacity-50 p-2 border border-darkstone">無料</td>
                      </tr>
                      <tr>
                        <th className="bg-lightpink bg-opacity-80 p-2 text-start border border-darkstone min-w-24" scope="row">利用中の車椅子使用料</th>
                        <td className="bg-white bg-opacity-50 p-2 border border-darkstone">無料</td>
                      </tr>
                      <tr>
                        <th className="bg-lightpink bg-opacity-80 p-2 text-start border border-darkstone min-w-24" scope="row">リクライニング車椅子使用料</th>
                        <td className="bg-white bg-opacity-50 p-2 border border-darkstone">一回　1,000円</td>
                      </tr>
                      <tr>
                        <th className="bg-lightpink bg-opacity-80 p-2 text-start border border-darkstone min-w-24" scope="row">寝台(ストレッチャー)使用料</th>
                        <td className="bg-white bg-opacity-50 p-2 border border-darkstone">一回　2,000円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <h2 className="text-2xl mt-4 mb-2 text-darkpink">一般介護タクシー</h2>
              <div>
                <div>
                  <h3 className="text-xl mb-3">ご利用料金</h3>
                  <div className="sm:flex gap-5 2md:gap-10">
                    <div className="sm:w-1/2 mb-4 sm:mb-0">
                      <table className="w-full">
                        <caption className="text-start font-bold text-darkstone text-lg ms-2 mb-2">
                          距離制運賃：
                        </caption>
                        <tbody>
                          <tr>
                            <th className="bg-lightpink bg-opacity-80 p-2 text-start border border-darkstone min-w-24" colSpan={2}>小型車</th>
                          </tr>
                          <tr>
                            <th className="bg-white bg-opacity-50 p-2 text-start border border-darkstone min-w-24" scope="row">初乗り運賃</th>
                            <td className="bg-white bg-opacity-50 p-2 border border-darkstone">1.091キロ　500円</td>
                          </tr>
                          <tr>
                            <th className="bg-white bg-opacity-50 p-2 text-start border border-darkstone min-w-24" scope="row">加算運賃</th>
                            <td className="bg-white bg-opacity-50 p-2 border border-darkstone">233メートル　100円</td>
                          </tr>
                          <tr>
                            <th className="bg-white bg-opacity-50 p-2 text-start border border-darkstone min-w-24" scope="row">時速10キロ以下の走行時間について1分45秒までごとに</th>
                            <td className="bg-white bg-opacity-50 p-2 border border-darkstone">90円</td>
                          </tr>
                          <tr>
                            <th className="bg-lightpink bg-opacity-80 p-2 text-start border border-darkstone min-w-24" colSpan={2}>大型車</th>
                          </tr>
                          <tr>
                            <th className="bg-white bg-opacity-50 p-2 text-start border border-darkstone min-w-24" scope="row">初乗り運賃</th>
                            <td className="bg-white bg-opacity-50 p-2 border border-darkstone">1.091キロ　530円</td>
                          </tr>
                          <tr>
                            <th className="bg-white bg-opacity-50 p-2 text-start border border-darkstone min-w-24" scope="row">加算運賃</th>
                            <td className="bg-white bg-opacity-50 p-2 border border-darkstone">220メートル　100円</td>
                          </tr>
                          <tr>
                            <th className="bg-white bg-opacity-50 p-2 text-start border border-darkstone min-w-24" scope="row">時速10キロ以下の走行時間について1分40秒までごとに</th>
                            <td className="bg-white bg-opacity-50 p-2 border border-darkstone">100円</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="sm:w-1/2">
                      <table className="w-full">
                        <caption className="text-start font-bold text-darkstone text-lg ms-2 mb-2">
                          時間制運賃：
                        </caption>
                        <tbody>
                          <tr>
                            <th className="bg-lightpink bg-opacity-80 p-2 text-start border border-darkstone min-w-24" colSpan={2}>小型車</th>
                          </tr>
                          <tr>
                            <th className="bg-white bg-opacity-50 p-2 text-start border border-darkstone min-w-24" scope="row">初乗り運賃</th>
                            <td className="bg-white bg-opacity-50 p-2 border border-darkstone">30分まで　3430円</td>
                          </tr>
                          <tr>
                            <th className="bg-white bg-opacity-50 p-2 text-start border border-darkstone min-w-24" scope="row">加算運賃</th>
                            <td className="bg-white bg-opacity-50 p-2 border border-darkstone">30分までごとに　3430円</td>
                          </tr>
                          <tr>
                            <th className="bg-lightpink bg-opacity-80 p-2 text-start border border-darkstone min-w-24" colSpan={2}>大型車</th>
                          </tr>
                          <tr>
                            <th className="bg-white bg-opacity-50 p-2 text-start border border-darkstone min-w-24" scope="row">初乗り運賃</th>
                            <td className="bg-white bg-opacity-50 p-2 border border-darkstone">30分まで　3610円</td>
                          </tr>
                          <tr>
                            <th className="bg-white bg-opacity-50 p-2 text-start border border-darkstone min-w-24" scope="row">加算運賃</th>
                            <td className="bg-white bg-opacity-50 p-2 border border-darkstone">30分までごとに　3610円</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="mt-2 ms-1">
                        <p><span className="font-bold">迎車料金：</span>1回　500円</p>
                        <p><span className="font-bold">予約料金：</span>無料</p>
                      </div>
                    </div>
                  </div>
                  <div className="m-auto md:w-1/2 mt-4 ">
                    <table className="w-full">
                      <caption className="text-start font-bold text-darkstone text-lg ms-2 mb-2">
                        介助料金：
                      </caption>
                      <tbody>
                        <tr>
                          <th className="bg-lightpink bg-opacity-80 p-2 text-start border border-darkstone min-w-24" scope="row">基本料金（車椅子対応車両）</th>
                          <td className="bg-white bg-opacity-50 p-2 border border-darkstone">1,100円</td>
                        </tr>
                        <tr>
                          <th className="bg-lightpink bg-opacity-80 p-2 text-start border border-darkstone min-w-24" scope="row">室内（外）<br />移動介助（乗降介助含む１５分ごと）</th>
                          <td className="bg-white bg-opacity-50 p-2 border border-darkstone">1,100円</td>
                        </tr>
                        <tr>
                          <th className="bg-lightpink bg-opacity-80 p-2 text-start border border-darkstone min-w-24" scope="row">階段の昇降介助（５階まで介護員１名）</th>
                          <td className="bg-white bg-opacity-50 p-2 border border-darkstone">1,500円～5,500円</td>
                        </tr>
                        <tr>
                          <th className="bg-lightpink bg-opacity-80 p-2 text-start border border-darkstone min-w-24" scope="row">ベッド上おむつ交換・更衣介助</th>
                          <td className="bg-white bg-opacity-50 p-2 border border-darkstone">3,300円</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="ms-1 mt-2">
                      <p className="mb-1">※その他の介助は応相談</p>
                    </div>
                  </div>

                </div>
                <div className="mt-4 sm:text-center">
                  <p className="mb-1">※高速道路使用料金及び駐車料金が発生した場合はお客様負担となります。</p>
                  <p className="mb-1">※キャンセルはご利用の1時間前まで : 無料（日曜日のキャンセルは前日18：00まで無料）</p>
                  <p className="mb-1">※車両到着後キャンセル料金 : 小型車1000円、大型車1030円</p>
                  <p className="mb-1">※利用中の車いすの貸し出し : 無料</p>
                  <p className="mb-1">※リクライニング車椅子の貸出料金 : 1,000円</p>
                  <p className="mb-1">※ストレッチャーの利用料金 : 2,000円</p>
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default ServiceTaxi;
