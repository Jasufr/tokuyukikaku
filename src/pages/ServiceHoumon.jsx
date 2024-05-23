import { useState } from "react";
import Tabs from "../layout/Tabs";

const ServiceHoumon = () => {
  const [visibleTab, setVisibleTab] = useState("tab1");

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
          <div className="flex items-center gap-5 2md:gap-10 mb-3 xs:mb-4">
            <h1 className="text-2xl text-darkpink text-nowrap">訪問介護</h1>
            <div className="bg-[url('./images/houmon.jpg')] bg-center bg-cover w-full h-14 sm:h-20 rounded-md shadow-md"></div>
          </div>
          <Tabs visibleTab={visibleTab} setVisibleTab={setVisibleTab}>
            <div className={`shoukai ${visibleTab === "tab1" ? "block" : "hidden"} mt-4`}>
              <h1 className="mb-3 text-xl">訪問介護とは</h1>
              <p className="mb-2">訪問介護員（ホームヘルパー）などがご自宅に訪問し、介護や日常生活上のお世話を行うサービスです。</p>
              <p>ホームヘルパーなどのスタッフが、ご自宅を訪問して必要なサービスを行います。食事や排せつなどの介助を行う「身体介護」、調理や掃除などを行う「生活援助」をはじめ、ご自宅での生活に関するサービスや日常生活でのアドバイスをいたします。</p>
              <div className="xs:flex gap-5 2md:gap-10 mt-4">
                <div className="xs:w-1/2 mb-4 xs:mb-0">
                  <h1 className="mb-3 text-xl">身体介護</h1>
                  <p className="mb-2">日常的な介護を必要とする方に、身体機能向上のための適切なサービスをご提供いたします。</p>
                  <p>食事、洗面、入浴、部分浴（洗髪、陰部・足部などのみの洗浄）、清拭（せいしき：身体を拭いて清潔にすること）、洗髪、排泄、衣類の着脱、床ずれの予防、体位変換・姿勢交換、ベッドメイキング、歩行、車いす等にかかわる介助。</p>
                </div>
                <div className="xs:w-1/2">
                  <h1 className="mb-3 text-xl">生活援助</h1>
                  <p className="mb-2">ご利用者様が単身、ご家族がご病気などの場合に自立支援やご家族の負担軽減のために適切なサービスをご提供いたします。</p>
                  <p className="mb-2"> 買物、調理、配膳、洗濯、掃除、衣類の整理、薬の受け取り等にかかわる介助。</p>
                  <p>相談・助言・情報提供など。</p>
                </div>
              </div>
            </div>

            <div className={`riyou ${visibleTab === "tab2" ? "block" : "hidden"} mt-4`}>
              <h1 className="mb-3 text-xl">ご利用対象</h1>
              <p>要介護1～5の方または特定疾病が原因で介護を必要とする方。</p>
              <p className="mb-2">このサービスを利用できるのは、要介護認定を受けて「要介護（1～5）と認定された方」、あるいは「特定疾病が原因で介護を必要とする40～64歳の方」です。</p>
              <p>※要支援（1～2）の方は 介護予防訪問介護 の対象となります。</p>
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
              <p className="mt-4 text-center">※他事業所で、サービスをお受けしている方でも、当社のサービスに関心がございましたら、<br className="hidden md:block" />お気軽にご相談ください。</p>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default ServiceHoumon;
