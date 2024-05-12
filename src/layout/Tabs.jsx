import { useState } from "react";

const Tabs = ({ children }) => {
  const [visibleTab, setVisibleTab] = useState("tab1");

  const handleTabChange = (tab) => {
    setVisibleTab(tab);
  };

  return (
    <>
      <div>
        <div className="pt-4 flex justify-center items-center">
          <div className="w-11/12 2md:w-3/4 h-20 flex flex-col justify-center bg-lightpink p-3 rounded-lg shadow-md">
            <div className="tabs relative flex justify-center items-center h-full">
              <input type="radio" id="radio-1" name="tabs" className="hidden peer/radio-1" defaultChecked onClick={() => handleTabChange("tab1")} />
              <label className="tab h-full flex items-center justify-center peer-checked/radio-1:text-darkpink z-10 w-1/3 transition-all duration-200 text-sm xs:text-xl font-bold" htmlFor="radio-1">サービス紹介</label>
              <input type="radio" id="radio-2" name="tabs" className="hidden peer/radio-2" onClick={() => handleTabChange("tab2")} />
              <label className="tab h-full flex items-center justify-center peer-checked/radio-2:text-darkpink z-10 w-1/3 transition-all duration-200 text-sm xs:text-xl font-bold" htmlFor="radio-2">利用方法・対象</label>
              <input type="radio" id="radio-3" name="tabs" className="hidden peer/radio-3" onClick={() => handleTabChange("tab3")} />
              <label className="tab h-full flex items-center justify-center peer-checked/radio-3:text-darkpink z-10 w-1/3 transition-all duration-200 text-sm xs:text-xl font-bold" htmlFor="radio-3">料金</label>
              <span className="glider absolute flex justify-center items-center left-0 bg-darkpink bg-opacity-20 transition-all duration-500 ease-in-out h-full w-1/3 peer-checked/radio-1:translate-x-[0%] peer-checked/radio-2:translate-x-[100%] peer-checked/radio-3:translate-x-[200%] rounded-lg"></span>
            </div>
          </div>
        </div>
        <div className="service">{children}</div>
      </div>
    </>
  );
};

export default Tabs;
