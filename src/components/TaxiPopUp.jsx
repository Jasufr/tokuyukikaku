import { Link } from "wouter";


const TaxiPopUp = props => {

  return (
    <>
      <div className="taxiPopUpBox fixed z-40 right-0 bottom-0 max-xs:w-full">
        <div className="taxiPopUp bg-darkpink bg-opacity-80 max-xs:rounded-t-xl xs:rounded-ss-xl xs:px-10 py-3 xs:py-5 flex flex-col justify-center items-center relative">
          <h3 className="text-[16px] xs:text-lg mb-2 text-lightpink [text-shadow:_0px_1px_1px_rgb(0_0_0_/_100%)]"><span className="text-[#ffe082]">介護タクシー</span>の情報はこちらです！</h3>
          <Link className="" to="/taxi"><p className="bg-lightgray px-8 xs:px-10 py-2 rounded-md shadow-inner text-green font-bold hover:bg-darkstone hover:bg-opacity-70 hover:text-lightpink transition-colors duration-200">詳細</p></Link>
          <button className=" absolute top-0 right-0 px-2 xs:px-3 text-2xl font-bold flex text-lightpink hover:text-red transition-color duration-200 hover:[text-shadow:_0_1px_0_rgb(0_0_0_/_100%)]" onClick={props.handleClose}>×</button>
        </div>
      </div>
    </>
  );
};

export default TaxiPopUp;
