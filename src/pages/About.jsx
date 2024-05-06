const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-us px-6 2md:px-12 lg:px-24 xl:px-28 py-6 lg:py-12 flex gap-10 items-center">
          <div className="w-3/5">
            <h1 className="text-2xl mb-2 text-darkpink">私たちについて</h1>
            <p>当社は、高齢者や障がいを持つ方々、そしてそのご家族の方々に寄り添い、心身の健康と幸福をサポートすることを使命としています。私たちは、利用者様、ご家族の皆様、地域のコミュニティ、そして当社のスタッフ全員の幸福と福祉を真摯に考えています。
              介護に取り組む私たちは、慎重な考慮と行動に基づいて、個々のニーズを理解し、満たすことを最優先にしています。一人ひとりの利用者様に最適なケアプランを提供し、彼らの生活を豊かで充実したものにすることを誓います。
              また、私たちは真の人間関係を築き、お互いに学び合い、支え合う環境を大切にしています。地域のコミュニティとの協力を通じて、お互いに成長し、より良い未来を築いていくことを目指しています。</p>
          </div>
          <div className="bg-[url('./images/dayservice2.jpg')] bg-center bg-cover rounded-md shadow-md w-2/5 min-h-[325px]"></div>
        </div>
        <div className="annai py-6 lg:py-12 bg-lightgray bg-opacity-30">
          <div className="px-6 2md:px-12 lg:px-24 xl:px-28">
            <h1 className="text-2xl mb-2 text-darkpink">会社案内</h1>
            <div className="flex gap-10">
              <table className="w-3/4">
                <tbody>
                  <tr>
                    <th className="bg-lightpink p-2 text-start border border-darkstone" scope="row">社名（事業所番号）</th>
                    <td className="bg-white p-2 border border-darkstone">合同会社徳有企画 （139540041）</td>
                  </tr>
                  <tr>
                    <th className="bg-lightpink p-2 text-start border border-darkstone" scope="row">設立年月日</th>
                    <td className="bg-white p-2 border border-darkstone">2222年（令和22年）2月22日</td>
                  </tr>
                  <tr>
                    <th className="bg-lightpink p-2 text-start border border-darkstone" scope="row">代表者</th>
                    <td className="bg-white p-2 border border-darkstone">長谷川 燕華</td>
                  </tr>
                  <tr>
                    <th className="bg-lightpink p-2 text-start border border-darkstone" scope="row">従業員数</th>
                    <td className="bg-white p-2 border border-darkstone">27名</td>
                  </tr>
                  <tr>
                    <th className="bg-lightpink p-2 text-start border border-darkstone" scope="row">事業内容</th>
                    <td className="bg-white p-2 border border-darkstone">訪問介護、地域密着型通所介護、介護タクシー、居宅介護支援</td>
                  </tr>
                </tbody>
              </table>
              <div className="w-1/4 bg-darkstone h-64">
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default About;
