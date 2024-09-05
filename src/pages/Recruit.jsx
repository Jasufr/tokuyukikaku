import { Helmet } from "react-helmet-async";

const Recruit = () => {
  return (
    <>
      <Helmet>
        <title>徳有企画 | 採用情報</title>
        <meta name="description" content="介護職員（常勤・非常勤ヘルパー）及び介護タクシードライバーを募集中。朝食･昼食･夕食作り､各所掃除･洗濯･おむつ交換､お買物､入浴介助などの介護業務を､シフト制で分担して対応していきます｡" />
        <link rel="canonical" href="/recruit" />
      </Helmet>
      <div className="relative py-6 lg:py-12">
        {/* Blobs Recruit */}
        <div className="blobs w-full h-full absolute overflow-hidden -z-10">
          <div className="green absolute -top-2 left-2/3 2md:left-1/2 w-48 rotate-45">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#2FAD41" d="M51.1,-64.2C64.2,-49.9,71.4,-31.9,75.6,-12.6C79.8,6.6,81.1,27.1,73.3,43.9C65.5,60.7,48.5,73.7,29.4,80.6C10.3,87.5,-11,88.2,-27.4,80.1C-43.8,72.1,-55.2,55.3,-61.4,38.4C-67.6,21.6,-68.5,4.7,-66.5,-12.6C-64.5,-29.9,-59.6,-47.5,-48,-62.1C-36.4,-76.6,-18.2,-88.2,0.4,-88.7C19,-89.1,38,-78.6,51.1,-64.2Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="darkpink absolute bottom-8 -left-24 w-60 2md:w-72 rotate-12">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#ED0066" d="M32.9,-48.6C42.4,-38.5,49.5,-28.4,56.2,-16.3C63,-4.1,69.3,10.3,67.5,23.8C65.7,37.4,55.7,50.2,43.1,58.9C30.5,67.7,15.3,72.4,-1.2,74.1C-17.7,75.8,-35.5,74.5,-44.3,64.6C-53.1,54.6,-53,35.9,-56.5,19.7C-59.9,3.4,-67,-10.3,-64.9,-22.4C-62.8,-34.6,-51.6,-45.1,-39.3,-54.3C-26.9,-63.5,-13.5,-71.3,-0.9,-70.1C11.8,-68.9,23.5,-58.7,32.9,-48.6Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="lightpink absolute top-1/2 -translate-y-1/2 left-1/2 2md:-translate-x-1/3 w-96 -rotate-45">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFEDF4" d="M27,-41.9C33.5,-32.5,36.1,-22.6,38.4,-13C40.7,-3.5,42.7,5.5,42.2,15.7C41.6,26,38.5,37.4,31.1,45.8C23.6,54.3,11.8,59.8,-1,61.1C-13.7,62.4,-27.5,59.6,-42.3,53.5C-57.2,47.5,-73.1,38.2,-80.4,24.1C-87.7,10.1,-86.4,-8.8,-75.9,-19.6C-65.4,-30.4,-45.7,-33.1,-31.5,-39.9C-17.3,-46.7,-8.7,-57.7,0.8,-58.8C10.3,-60,20.6,-51.2,27,-41.9Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
        <div className="px-6 2md:px-12 lg:px-24 xl:px-28">
          <div className="flex gap-10">
            <div className="sm:w-4/5 2md:w-3/5">
              <h1 className="text-2xl text-darkpink mb-3">採用情報</h1>
              {/* 介護職員 */}
              <div>
                <h2 className="text-xl mb-3 font-bold">介護職員</h2>
                <p className="mb-2">介護職員（常勤・非常勤ヘルパー）及び介護タクシードライバーを募集中</p>
                <p className="mb-2">朝食･昼食･夕食作り､各所掃除･洗濯･おむつ交換､お買物､入浴介助などの介護業務を､シフト制で分担して対応していきます｡</p>
                <p className="text-[px]">※直行直帰OK！</p>
              </div>
              <div className="flex w-full h-32 mt-6 sm:hidden shadow-md rounded-md">
                <div aria-label="ご利用者様とヘルパーが散歩するイラスト" role="img" className="bg-[url('/illustrations/helper2.png')] bg-cover bg-top w-1/3 rounded-l-md"></div>
                <div aria-label="ご利用者様に買い物のお手伝いをするヘルパーのイラスト" role="img" className="bg-[url('/illustrations/helper1.png')] bg-cover bg-top w-1/3"></div>
                <div aria-label="ご利用者様とケアするヘルパーのイラスト" role="img" className="bg-[url('/illustrations/helper3.png')] bg-cover bg-top w-1/3 rounded-r-md"></div>
              </div>
              <div className="mt-6 mb-3">
                <h2 className="text-lg mb-3">募集要項</h2>
                <table>
                  <tbody>
                    <tr>
                      <th className="bg-lightpink bg-opacity-80 border border-darkstone p-2  text-start min-w-[120px]" scope="row">給与</th>
                      <td className="bg-white bg-opacity-50 p-2 border border-darkstone">
                        <ul className="">
                          <li className="">非常勤ヘルパー時給 1700円～2550円（一律処遇改善手当300円を含む）</li>
                          <li className="mb-1">常勤ヘルパー月給 260,000円～400,000円</li>
                          <li className="list-none">※経験･資格等考慮のうえ決定</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th className="bg-lightpink bg-opacity-80 border border-darkstone p-2 text-start" scope="row">勤務時間</th>
                      <td className="bg-white bg-opacity-50 p-2 border border-darkstone">
                        <ul>
                          <li>非常勤ヘルパー 8 : 00～18 : 30の間でシフト制 ＜週1日～･1日1h～勤務OK＞</li>
                          <li className="mb-1">常勤ヘルパー 8 : 00～17 : 00又は9 : 00～18 : 00（週休二日制）</li>
                          <li>★家庭環境等､考慮致します</li>
                          <li>★直行直帰可</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th className="bg-lightpink bg-opacity-80 border border-darkstone p-2 text-start" scope="row">対象となる方</th>
                      <td className="bg-white bg-opacity-50 p-2 border border-darkstone" >
                        <ul>
                          <li>･要普通自動車免許(AT限定可)</li>
                          <li>･ヘルパー2級以上必須（経験は問いません､資格取得見込み者もご相談ください）</li>
                          <li>･学歴不問</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th className="bg-lightpink bg-opacity-80 border border-darkstone p-2 text-start" scope="row">特別手当</th>
                      <td className="bg-white bg-opacity-50 p-2 border border-darkstone">
                        <ul>
                          <li>弊社は東京都の介護職員処遇改善加算Ⅰ・介護職員等特定処遇改善加算Ⅱ及び介護職員ベースアップ等加算を取得しております。</li>
                          <li>処遇改善(特別手当)手当として、常勤ヘルパーは毎月66,000円～150,000円(経験及び勤務年数による)支給。
                            非常勤ヘルパーは訪問1件に付き300円支給。（自費利用の場合は、特別手当がつきません。）</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* 介護支援専門員 */}
              <div>
                <h2 className="text-xl mb-3 font-bold">介護支援専門員（ケアマネジャー）</h2>
                <p className="mb-2">介護支援専門員業務全般
                </p>
                <p className="mb-2">【訪問範囲】西東京市　＊電動自転車での移動です。</p>
              </div>
              <div className="mt-6">
                <h2 className="text-lg mb-3">募集要項</h2>
                <table>
                  <tbody>
                    <tr>
                      <th className="bg-lightpink bg-opacity-80 border border-darkstone p-2  text-start min-w-[120px]" scope="row">給与</th>
                      <td className="bg-white bg-opacity-50 p-2 border border-darkstone">
                        <ul className="">
                          <li className="">基本給 : 198,000円〜250,000円</li>
                          <li className="mb-1">定額的に支払われる手当 : 特別手当 52,000円〜312,000円</li>
                          <li className="">固定残業代 : なし</li>
                          <li className="font-bold">合計 : 250,000円〜562,000円</li>
                          <li className="">※フルタイム求人の場合は月額（換算額）、パート求人の場合は時間額を表示しています。</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th className="bg-lightpink bg-opacity-80 border border-darkstone p-2 text-start" scope="row">勤務時間</th>
                      <td className="bg-white bg-opacity-50 p-2 border border-darkstone">
                        <ul>
                          <li>就業時間1 : 9 : 00〜18 : 00</li>
                          <li className="">就業時間2 : 8 : 00〜17 : 00</li>
                          <li className="mb-1">又は : 8 : 30〜17 : 30の時間の間の8時間程度</li>
                          <li>時間外労働時間 : なし</li>
                          <li>休憩時間 : 60分</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th className="bg-lightpink bg-opacity-80 border border-darkstone p-2 text-start" scope="row">対象となる方</th>
                      <td className="bg-white bg-opacity-50 p-2 border border-darkstone" >
                        <ul>
                          <li>･免許・資格名 : 介護支援専門員（ケアマネージャー）</li>
                          <li>･学歴不問</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th className="bg-lightpink bg-opacity-80 border border-darkstone p-2 text-start" scope="row">特別手当</th>
                      <td className="bg-white bg-opacity-50 p-2 border border-darkstone">
                        <ul>
                          <li></li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="hidden sm:block w-1/5 2md:w-2/5 rounded-md shadow-md">
              <div aria-label="ご利用者様とヘルパーが散歩するイラスト" role="img" className="bg-[url('/illustrations/helper2.png')] bg-cover bg-top h-1/3 rounded-t-md"></div>
              <div aria-label="ご利用者様に買い物のお手伝いをするヘルパーのイラスト" role="img" className="bg-[url('/illustrations/helper1.png')] bg-cover bg-top h-1/3"></div>
              <div aria-label="ご利用者様とケアするヘルパーのイラスト" role="img" className="bg-[url('/illustrations/helper3.png')] bg-cover bg-top h-1/3 rounded-b-md"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recruit;
