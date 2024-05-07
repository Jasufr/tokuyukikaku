const Recruit = () => {
  return (
    <>
      <div className="px-6 2md:px-12 lg:px-24 xl:px-28 py-6 lg:py-12">
        <div className="flex gap-10">
          <div className="sm:w-4/5 2md:w-3/5">
            <h1 className="text-2xl text-darkpink mb-2">採用情報</h1>
            <div>
              <h1 className="text-xl mb-2">お仕事内容</h1>
              <p className="mb-2">介護職員（常勤・非常勤ヘルパー）及び介護タクシードライバーを募集中</p>
              <p className="mb-2">朝食･昼食･夕食作り､各所掃除･洗濯･おむつ交換､お買物､入浴介助などの介護業務を､シフト制で分担して対応していきます｡</p>
              <p className="text-[px]">※直行直帰OK！</p>
            </div>
            <div className="flex w-full h-32 mt-6 sm:hidden shadow-md rounded-md">
              <div className="bg-[url('./illustrations/helper2.jpg')] bg-cover bg-top w-1/3 rounded-l-md"></div>
              <div className="bg-[url('./illustrations/helper1.jpg')] bg-cover bg-top w-1/3"></div>
              <div className="bg-[url('./illustrations/helper3.jpg')] bg-cover bg-top w-1/3 rounded-r-md"></div>
            </div>
            <div className="mt-6">
              <h1 className="text-xl mb-2">募集要項</h1>
              <table>
                <tbody>
                  <tr>
                    <th className="bg-lightpink border border-darkstone p-2  text-start min-w-[120px]" scope="row">給与</th>
                    <td className="bg-white p-2 border border-darkstone">
                      <ul className="">
                        <li className="">非常勤ヘルパー時給 1700円～2550円（一律処遇改善手当300円を含む）</li>
                        <li className="mb-1">常勤ヘルパー月給 260,000円～400,000円</li>
                        <li className="list-none">※経験･資格等考慮のうえ決定</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th className="bg-lightpink border border-darkstone p-2 text-start" scope="row">勤務時間</th>
                    <td className="bg-white p-2 border border-darkstone">
                      <ul>
                        <li>非常勤ヘルパー 8：00～18：30の間でシフト制 ＜週1日～･1日1h～勤務OK＞</li>
                        <li className="mb-1">常勤ヘルパー 8：00～17：00又は9：00～18：00（週休二日制）</li>
                        <li>★家庭環境等､考慮致します</li>
                        <li>★直行直帰可</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th className="bg-lightpink border border-darkstone p-2 text-start" scope="row">対象となる方</th>
                    <td className="bg-white p-2 border border-darkstone" >
                      <ul>
                        <li>･要普通自動車免許(AT限定可)</li>
                        <li>･ヘルパー2級以上必須（経験は問いません､資格取得見込み者もご相談ください）</li>
                        <li>･学歴不問</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th className="bg-lightpink border border-darkstone p-2 text-start" scope="row">特別手当</th>
                    <td className="bg-white p-2 border border-darkstone">
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
          </div>
          <div className="hidden sm:block w-1/5 2md:w-2/5 rounded-md shadow-md">
            <div className="bg-[url('./illustrations/helper2.jpg')] bg-cover bg-top h-1/3 rounded-t-md"></div>
            <div className="bg-[url('./illustrations/helper1.jpg')] bg-cover bg-top h-1/3"></div>
            <div className="bg-[url('./illustrations/helper3.jpg')] bg-cover bg-top h-1/3 rounded-b-md"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recruit;
