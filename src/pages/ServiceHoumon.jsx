import { useState } from "react";
import Tabs from "../layout/Tabs";

const ServiceHoumon = () => {
  const [visibleTab, setVisibleTab] = useState("tab1");

  return (
    <>
      <Tabs visibleTab={visibleTab} setVisibleTab={setVisibleTab}>
        <div className={`${visibleTab === "tab1" ? "block" : "hidden"}`}>halo</div>
        <div className={`${visibleTab === "tab2" ? "block" : "hidden"}`}>hello</div>
        <div className={`${visibleTab === "tab3" ? "block" : "hidden"}`}>bjr</div>
      </Tabs>
    </>
  );
};

export default ServiceHoumon;
