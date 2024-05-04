import { useState } from "react";
// import { Link } from "react-router-dom";
import { Link } from "wouter";

const Menu = () => {
  const [menuOpened, setMenuOpened] = useState(null);
  const [servicesOpened, setServicesOpened] = useState(null);

  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-50 fixed top-7 xs:top-6 right-4 xs:right-8 p-3 bg-white shadow-md w-10 h-10 xs:w-11 xs:h-11 rounded-md"
      >
        <div
          className={`bg-darkpink h-0.5 rounded-md w-full transition-all ${menuOpened ? "rotate-45  translate-y-0.5" : ""
            }`}
        />
        <div
          className={`bg-darkpink h-0.5 rounded-md w-full my-1 ${menuOpened ? "hidden" : ""
            }`}
        />
        <div
          className={`bg-darkpink h-0.5 rounded-md w-full transition-all ${menuOpened ? "-rotate-45" : ""
            }`}
        />
      </button>
      <div className={`z-40 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-x-hidden overflow-y-auto flex flex-col
      ${menuOpened ? "w-full xs:w-80" : "w-0"}`}>
        <div className="w-3/4 mt-24 mx-auto text-nowrap">
          <div className="mb-2">
            <Link className="flex items-center justify-center gap-1" to="/">
              <img className="w-12" src="./icons/logo.png" alt="" />
              <h1 className="text-xl text-center">合同会社徳 徳有企画</h1>
            </Link>
          </div>
          <ul className="mb-2 w-11/12 mx-auto">
            <li>
              <Link to="/about" className="group flex items-center justify-between hover:bg-darkstone hover:text-darkpink px-2 py-1 rounded-md hover:bg-opacity-10 transition duration-200 ease-in-out">
                私たちについて
                <img className="w-4 group-hover:translate-x-0.5 transition-all duration-200" src="./icons/right.png" alt="" />
              </Link>
            </li>
            <li>
              <div>
                <div className="group h-[31.2px] flex items-center justify-between hover:bg-darkstone hover:text-darkpink px-2 py-1 rounded-md hover:bg-opacity-10 transition duration-200 ease-in-out" onClick={() => setServicesOpened(!servicesOpened)}>
                  サービス
                  <img className={`w-4 pt-0.5 ${servicesOpened ? "rotate-90 transition-all duration-200 delay-75" : "rotate-0 transition-all duration-200 delay-75"}`} src="./icons/open-bottom.png" alt="" /></div>
                <ul className={`px-3 overflow-hidden ${servicesOpened ? "h-full" : "h-0"}`}>
                  <li>
                    <Link to="/houmon" className="flex gap-1 items-center hover:bg-darkstone hover:text-darkpink px-2 py-1 rounded-md hover:bg-opacity-10 transition duration-200 ease-in-out">
                      <img className="w-5" src="./icons/minibus-.png" alt="" />
                      訪問介護
                    </Link>
                  </li>
                  <li>
                    <Link to="/taxi" className="flex gap-1 items-center hover:bg-darkstone hover:text-darkpink px-2 py-1 rounded-md hover:bg-opacity-10 transition duration-200 ease-in-out">
                      <img className="w-5" src="./icons/taxi.png" alt="" />
                      介護タクシー
                    </Link>
                  </li>
                  <li>
                    <Link to="/dayservice" className="flex gap-1 items-center hover:bg-darkstone hover:text-darkpink px-2 py-1 rounded-md hover:bg-opacity-10 transition duration-200 ease-in-out">
                      <img className="w-5" src="./icons/business-group.png" alt="" />
                      デイサービス
                    </Link>

                  </li>
                  <li>
                    <Link to="/kyotaku" className="flex gap-1 items-center hover:bg-darkstone hover:text-darkpink px-2 py-1 rounded-md hover:bg-opacity-10 transition duration-200 ease-in-out">
                      <img className="w-5" src="./icons/neighbour.png" alt="" />
                      居宅介護支援
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li><Link to="/contact" className="group flex items-center justify-between hover:bg-darkstone hover:text-darkpink px-2 py-1 rounded-md hover:bg-opacity-10 transition duration-200 ease-in-out">
              お問い合わせ
              <img className="w-4 group-hover:translate-x-0.5 transition-all duration-200" src="./icons/right.png" alt="" />
            </Link></li>
            <li><Link to="/recruit" className="group flex items-center justify-between hover:bg-darkstone hover:text-darkpink px-2 py-1 rounded-md hover:bg-opacity-10 transition duration-200 ease-in-out">
              採用情報
              <img className="w-4 group-hover:translate-x-0.5 transition-all duration-200" src="./icons/right.png" alt="" />
            </Link></li>
          </ul>
          <div>
            <div className="mb-2">
              <div className="flex items-center justify-center gap-1">
                <img className="w-8" src="./icons/phone.png" alt="" />
                <p className="text-xl">042-497-6116</p>
              </div>
              <div className="flex justify-center gap-1 items-center">
                <img className="w-3" src="./icons/time.png" alt="" />
                <p className="text-[12px]">9：00～18：00</p>
              </div>
            </div>
            <div className="h-14 flex flex-col justify-center items-center text-[10px]">
              <a className="" href="">個人情報保護方針</a>
              <div className="relative">
                <p className="">イラストDesigned by <a className="text-darkpink hover:text-darkstone transition-colors duration-200 ease-in-out" href="https://www.freepik.com/" target="_blank">Freepik</a></p>
                <img className="absolute -bottom-1.5 -right-10 w-9" src="./icons/logo.png" alt="" />
              </div>
              <h1>© 2024  合同会社徳有企画</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
