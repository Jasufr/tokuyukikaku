import { useState } from "react";
import Tabs from "../layout/Tabs";

const ServiceHoumon = () => {
  const [visibleTab, setVisibleTab] = useState("tab1");

  return (
    <>
      <div className="px-6 2md:px-12 lg:px-24 xl:px-28 py-6 lg:py-12">
        <div className="flex items-center gap-10 mb-4">
          <h1 className="text-2xl text-darkpink min-w-24">訪問介護</h1>
          <div className="bg-[url('./images/kuruma1.jpg')] bg-center bg-cover w-full h-20 rounded-md shadow-md"></div>
        </div>
        <Tabs visibleTab={visibleTab} setVisibleTab={setVisibleTab}>
          <div className={`shoukai ${visibleTab === "tab1" ? "block" : "hidden"} mt-4`}>
            <p>訪問介護員（ホームヘルパー）などがご自宅に訪問し、介護や日常生活上のお世話を行うサービスです。<br />ホームヘルパーなどのスタッフが、ご自宅を訪問して必要なサービスを行います。食事や排せつなどの介助を行う「身体介護」、調理や掃除などを行う「生活援助」をはじめ、ご自宅での生活に関するサービスや日常生活でのアドバイスをいたします。</p>
            <div className="flex gap-10">
              <div className="w-1/2">
                <h3 className="my-2 text-xl font-bold">身体介護</h3>
                <p>日常的な介護を必要とする方に、身体機能向上のための適切なサービスをご提供いたします。<br />食事、洗面、入浴、部分浴（洗髪、陰部・足部などのみの洗浄）、清拭（せいしき：身体を拭いて清潔にすること）、洗髪、排泄、衣類の着脱、床ずれの予防、体位変換・姿勢交換、ベッドメイキング、歩行、車いす等にかかわる介助。</p>
              </div>
              <div className="w-1/2">
                <h3 className="my-2 text-xl font-bold">生活援助</h3>
                <p>ご利用者様が単身、ご家族がご病気などの場合に自立支援やご家族の負担軽減のために適切なサービスをご提供いたします。<br />買物、調理、配膳、洗濯、掃除、衣類の整理、薬の受け取り等にかかわる介助。<br />相談・助言・情報提供など。</p>
              </div>
            </div>
          </div>

          <div className={`riyou ${visibleTab === "tab2" ? "block" : "hidden"} mt-4`}>
            <h3 className="my-2 text-xl font-bold">ご利用対象</h3>
            <p>要介護1～5の方または特定疾病が原因で介護を必要とする方<br />
              このサービスを利用できるのは、要介護認定を受けて「要介護（1～5）と認定された方」<br />
              あるいは「特定疾病が原因で介護を必要とする40～64歳の方」です。</p>
            <p className="mt-3">※要支援（1～2）の方は 介護予防訪問介護 の対象となります。</p>
            <h3 className="my-2 text-xl font-bold">ご利用までの流れ</h3>
            <div className="flex gap-10">
              <div className="w-1/2">
                <h3 className="mb-2 text-lg font-bold">介護認定を受けていない方</h3>
                <p>居宅介護支援事業所のケアマネージャーまでご相談ください。ご本人やご家族の代行で、役所へ申請手続きを致します。<br />
                  ケアマネージャーがご自宅へ伺い、お話をおききし、介護保険やケアプランなどについて、ご説明させて頂きます。ご利用がお決まりになったら、居宅介護支援事業所との契約を行ないます。<br />
                  役所に介護保険の申請を行い、後日、認定員がご自宅に伺って、介護認定調査が行なわれます。その後、認定結果が郵便にて送られてきます。<br />
                  ケアマネージャーが、ケアプランを作成し、各介護サービスのご利用の手続きに入ります。</p>
              </div>
              <div className="w-1/2">
                <h3 className="mb-2 text-lg font-bold">介護認定を受けられていてご利用してない方</h3>
                <p>居宅介護支援事業所のケアマネージャーまでご相談ください。<br />
                  ケアマネージャーがご自宅へ伺い、お話をおききし、介護保険やケアプランなどについて、ご説明させて頂きます。ご利用がお決まりになったら、居宅介護支援事業所との契約を行ないます。<br />
                  ケアマネージャーが、ケアプランを作成し、各介護サービスのご利用の手続きに入ります。<br />
                  各サービスの事業所との契約をし、各介護サービスのご利用が始まります。</p>
              </div>
            </div>
            <p className="mt-3">※他事業所で、サービスをお受けしている方でも、当社のサービスに関心がございましたら、お気軽にご相談ください。</p>
          </div>

          <div className={`ryoukin ${visibleTab === "tab3" ? "block" : "hidden"}`}>bjr</div>

        </Tabs>
      </div>
    </>
  );
};

export default ServiceHoumon;
