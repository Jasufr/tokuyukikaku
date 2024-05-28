import { useState } from "react";
// import { Link } from "react-router-dom";
import { Link } from "wouter";

const Menu = () => {
  const [menuOpened, setMenuOpened] = useState(null);
  const [servicesOpened, setServicesOpened] = useState(null);

  const menu_icon = document.querySelector(".menu_icon");
  const menu_box = document.querySelector(".menu_box");

  document.onclick = function (e) {
    if (!menu_icon?.contains(e.target) && !menu_box?.contains(e.target)) {
      setMenuOpened(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className={`menu_icon z-50 fixed top-7 xs:top-6 right-4 xs:right-8 p-3 bg-white shadow-md w-10 h-10 xs:w-11 xs:h-11 rounded-md`}
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
      <div className={`menu_box z-40 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-x-hidden overflow-y-auto flex flex-col
      ${menuOpened ? "w-full xs:w-80" : "w-0"}`}>
        <div className="blobs w-full h-full absolute overflow-hidden -z-10">
          <div className="green absolute w-52 bottom-4 -right-6">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#2FAD41" d="M38.7,-59.7C46.7,-47.5,47.4,-31.5,44.3,-19.5C41.2,-7.4,34.3,0.8,30.5,9.1C26.6,17.4,25.8,25.8,21.2,39.7C16.6,53.5,8.3,72.8,-0.5,73.6C-9.4,74.3,-18.7,56.5,-30.3,44.9C-41.9,33.3,-55.6,27.9,-60.3,18.4C-65,8.9,-60.7,-4.7,-52,-12.5C-43.4,-20.2,-30.4,-22.1,-21,-33.8C-11.6,-45.6,-5.8,-67.1,4.8,-73.7C15.4,-80.3,30.7,-71.8,38.7,-59.7Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="darkpink absolute w-28 top-80 left-10">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#ED0066" d="M32.9,-50.6C47.4,-41.9,67.2,-40.8,74.7,-31.9C82.3,-23,77.6,-6.2,75.1,10.7C72.5,27.7,72.2,45,64.1,57.1C56,69.2,40.2,76.3,23.6,81.9C7,87.5,-10.6,91.6,-26.6,88C-42.6,84.4,-57,73.2,-62.2,58.7C-67.4,44.1,-63.2,26.3,-62.6,10.8C-62,-4.7,-64.9,-17.8,-61.8,-29.7C-58.7,-41.7,-49.6,-52.3,-38.3,-62.5C-27,-72.6,-13.5,-82.2,-2.1,-78.9C9.2,-75.6,18.4,-59.3,32.9,-50.6Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="lightpink absolute w-48 top-8 -left-6 rotate-12">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFEDF4" d="M35.6,-56.4C43.8,-50.1,46.5,-36.3,51.8,-23.9C57,-11.5,64.6,-0.6,66.5,11.9C68.3,24.3,64.2,38.2,54.7,45C45.1,51.8,30.1,51.4,17.7,50.6C5.4,49.7,-4.2,48.4,-11.1,43.7C-18,39,-22.3,31,-30.3,24.7C-38.3,18.3,-50.1,13.6,-54.6,5.7C-59,-2.2,-56.3,-13.3,-52.6,-25.2C-49,-37,-44.4,-49.5,-35.5,-55.5C-26.6,-61.4,-13.3,-60.7,0.2,-61C13.7,-61.3,27.4,-62.6,35.6,-56.4Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
        <div className="w-3/4 mt-24 mx-auto text-nowrap">
          <div className="mb-2">
            <Link to="/" onClick={() => { setMenuOpened(!menuOpened), setServicesOpened(false) }} className="flex items-center justify-center gap-1">
              <img className="w-12" src="./icons/logo.png" alt="" />
              <h1 className="text-xl text-center">合同会社徳 徳有企画</h1>
            </Link>
          </div>
          <ul className="mb-2 w-11/12 mx-auto">
            <li>
              <Link to="/about" onClick={() => { setMenuOpened(!menuOpened), setServicesOpened(false) }} className="group flex items-center justify-between hover:bg-darkstone hover:text-darkpink px-2 py-1 rounded-md hover:bg-opacity-10 transition duration-200 ease-in-out">
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
                    <Link to="/houmon" onClick={() => { setMenuOpened(!menuOpened), setServicesOpened(false) }} className="flex gap-1 items-center hover:bg-darkstone hover:text-darkpink px-2 py-1 rounded-md hover:bg-opacity-10 transition duration-200 ease-in-out">
                      <img className="w-5" src="./icons/minibus-.png" alt="" />
                      訪問介護
                    </Link>
                  </li>
                  <li>
                    <Link to="/taxi" onClick={() => { setMenuOpened(!menuOpened), setServicesOpened(false) }} className="flex gap-1 items-center hover:bg-darkstone hover:text-darkpink px-2 py-1 rounded-md hover:bg-opacity-10 transition duration-200 ease-in-out">
                      <img className="w-5" src="./icons/taxi.png" alt="" />
                      介護タクシー
                    </Link>
                  </li>
                  <li>
                    <Link to="/dayservice" onClick={() => { setMenuOpened(!menuOpened), setServicesOpened(false) }} className="flex gap-1 items-center hover:bg-darkstone hover:text-darkpink px-2 py-1 rounded-md hover:bg-opacity-10 transition duration-200 ease-in-out">
                      <img className="w-5" src="./icons/business-group.png" alt="" />
                      デイサービス
                    </Link>

                  </li>
                  <li>
                    <Link to="/kyotaku" onClick={() => { setMenuOpened(!menuOpened), setServicesOpened(false) }} className="flex gap-1 items-center hover:bg-darkstone hover:text-darkpink px-2 py-1 rounded-md hover:bg-opacity-10 transition duration-200 ease-in-out">
                      <img className="w-5" src="./icons/neighbour.png" alt="" />
                      居宅介護支援
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li><Link to="/contact" onClick={() => { setMenuOpened(!menuOpened), setServicesOpened(false) }} className="group flex items-center justify-between hover:bg-darkstone hover:text-darkpink px-2 py-1 rounded-md hover:bg-opacity-10 transition duration-200 ease-in-out">
              お問い合わせ
              <img className="w-4 group-hover:translate-x-0.5 transition-all duration-200" src="./icons/right.png" alt="" />
            </Link></li>
            <li><Link to="/recruit" onClick={() => { setMenuOpened(!menuOpened), setServicesOpened(false) }} className="group flex items-center justify-between hover:bg-darkstone hover:text-darkpink px-2 py-1 rounded-md hover:bg-opacity-10 transition duration-200 ease-in-out">
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
