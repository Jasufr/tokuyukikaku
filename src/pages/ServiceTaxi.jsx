import { useState } from "react";
import Tabs from "../layout/Tabs";

const ServiceTaxi = () => {
  const [visibleTab, setVisibleTab] = useState("tab1");

  return (
    <>
      <Tabs visibleTab={visibleTab} setVisibleTab={setVisibleTab}>
        <div className={`${visibleTab === "tab1" ? "block" : "hidden"}`}>AAAAAAAAAAAAAAAAA</div>
        <div className={`${visibleTab === "tab2" ? "block" : "hidden"}`}>BBBBBBBBBBBBBBBB</div>
        <div className={`${visibleTab === "tab3" ? "block" : "hidden"}`}>CCCCCCCCCCCCCCCC</div>
      </Tabs>
    </>
  );
};

export default ServiceTaxi;
