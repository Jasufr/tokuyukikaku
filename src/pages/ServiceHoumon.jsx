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
          </div>

          <div className={`riyou ${visibleTab === "tab2" ? "block" : "hidden"}`}>hello</div>

          <div className={`ryoukin ${visibleTab === "tab3" ? "block" : "hidden"}`}>bjr</div>

        </Tabs>
      </div>
    </>
  );
};

export default ServiceHoumon;
