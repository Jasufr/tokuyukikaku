import { Helmet } from "react-helmet-async";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>徳有企画 | 個人情報保護方針</title>
        <meta name="description" content="合同会社德有企画(以下「当社」という)は、利用者及びその家族の個人情報を適切に取り扱うことを社会的責務と考え、個人情報の保護に努めます。" />

        <meta property="og:title" content="徳有企画 | 個人情報保護方針" />
        <meta
          property="og:description"
          content="合同会社德有企画(以下「当社」という)は、利用者及びその家族の個人情報を適切に取り扱うことを社会的責務と考え、個人情報の保護に努めます。"
        />
        <meta property="og:image" content="/icons/logo.webp" />
        <meta property="og:url" content="https://tokuyukikaku.netlify.app/privacy" />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="/privacy" />
      </Helmet>
      <div className="privacy px-6 2md:px-12 lg:px-24 xl:px-28 py-6 lg:py-12">
        <h1 className="text-2xl text-darkpink mb-4">個人情報保護方針</h1>
        <p className="mb-8">合同会社德有企画(以下「当社」という)は、利用者及びその家族の個人情報を適切に取り扱うことを社会的責務と考え、個人情報の保護に努めます。</p>
        <ul className="list-roman ms-4">
          <li className="mb-8"><span className="font-bold">個人情報とは</span>、氏名、生年月日その他の記述等により、特定の個人を識別することができるもの(他の情報と容易に照合することができ、それにより特定の個人を識別することができるものを含みます。)又は、個人識別符号(マイナンバー等)が含まれるものをいいます。</li>
          <li className="mb-8"><span className="font-bold">個人情報の取得方法</span><br />当社は、業務上必要な範囲内で、利用者及びその家族の個人情報を適法かつ公正な手段により取得します。</li>
          <li className="mb-8">
            <p><span className="font-bold">個人情報の利用目的</span><br />当社は、個人情報を以下の利用目的の範囲内で利用します。また、法令に定める場合を除き、利用者及びその家族の同意なく、利用目的の範囲外には利用しません。</p>
            <ul className="list-square ms-4">
              <li className="mb-2">介護サービスの提供</li>
              <li className="mb-2">介護保険事務</li>
              <li className="mb-2">
                <p>当社の管理運営のための業務</p>
                <ul className="list-decimal ms-4">
                  <li className="mb-2">サービス利用開始・停止の管理</li>
                  <li className="mb-2">会計・経理</li>
                  <li className="mb-2">事故等の報告</li>
                  <li className="mb-2">介護サービスの維持・改善</li>
                </ul>
              </li>
              <li className="mb-2">他事業所等との連携(サービス担当者会議等)</li>
              <li className="mb-2">利用者及びその家族への連絡</li>
              <li className="mb-2">お問い合わせ、依頼、苦情等への対応</li>
              <li className="mb-2">その他、上記に付随する業務</li>
            </ul>
          </li>
          <li className="mb-8"><span className="font-bold">個人情報を安全に管理するための措置</span><br />当社は、個人情報の漏洩、滅失又は毀損の防止、その他の安全管理のため、必要かつ適切な措置を講じます。また、全従業員に対し周知徹底させるために、定期的な研修を実施します。</li>
          <li className="mb-8"><span className="font-bold">個人情報の第三者提供について</span><br />当社は個人情報を利用者の同意なしに第三者へ提供することはありません。但し、法令上の義務等、当社が従うべき特別な事情がある場合を除きます。</li>
          <li className="mb-8"><span className="font-bold">個人情報の開示、訂正等、利用停止等について</span><br />当社は、利用者から個人情報の開示・訂正等・利用停止等を求められた場合は、遅滞なく必要な調査・確認を行い、その結果に基づき適切に対応いたします。</li>
          <li className="mb-8"><span className="font-bold">お問い合わせ窓口</span><br />個人情報に関するお問い合わせは、以下の窓口にお申し出下さい。なお、その際に本人確認をさせていただく場合がございますので、予めご了承下さい。</li>
        </ul>
        <p className="font-bold mb-2">合同会社徳有企画 お問い合わせ窓口</p>
        <ul>
          <li className="mb-1">住所 : 〒188-0013 東京都西東京市向台町6-10-11</li>
          <li className="mb-1">TEL :  042-497-6466</li>
          <li className="mb-1">FAX :  042-497-6467</li>
          <li className="mb-1">受付時間 : 9 : 00~18 : 00 (土曜・日曜・祝日を除く)</li>
        </ul>
        <p className="text-end text-lg">合同会社徳有企画<br />代表 長谷川燕華</p>
      </div>
    </>
  );
};

export default Privacy;
