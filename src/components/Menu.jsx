import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menuOpened, setMenuOpened] = useState(null);

  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-50 fixed z top-7 xs:top-6 right-3 xs:right-8 p-3 bg-white shadow-md w-10 h-10 xs:w-11 xs:h-11 rounded-md"
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
      <div className={`z-40 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col
      ${menuOpened ? "w-full xs:w-80" : "w-0"}`}>
        <div>
          <ul>
            <li>
              <Link to="/about">私たちについて</Link>
            </li>
            <li>
              <div>
                サービス
                <ul>
                  <li>
                    <Link to="/houmon" className="flex items-center">
                      <img className="w-5" src="./images/minibus-.png" alt="" />
                      訪問介護
                    </Link>
                  </li>
                  <li>
                    <Link to="/taxi" className="flex items-center">
                      <img className="w-5" src="./images/taxi.png" alt="" />
                      介護タクシー
                    </Link>
                  </li>
                  <li>
                    <Link to="/dayservice" className="flex items-center">
                    <img className="w-5" src="./images/business-group.png" alt="" />
                    デイサービス
                    </Link>

                  </li>
                  <li>
                    <Link to="/kyotaku" className="flex items-center">
                      <img className="w-5" src="./images/neighbour.png" alt="" />
                      居宅介護支援
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
