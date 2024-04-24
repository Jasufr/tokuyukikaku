import { Link } from "react-router-dom";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-lightpink py-2 shadow-md">
        <div className="flex gap-5 h-20 w-11/12 m-auto justify-between ">
          <Link className="flex items-center gap-1" to="/">
            <img className="w-16" src="./images/logo.png" alt="" />
            <h1 className="text-2xl">合同会社徳 徳有企画</h1>
          </Link>
          <div className="2md:hidden">
            <Menu />
          </div>
          <div className="hidden 2md:flex flex-col items-end">
            <div>
              <div className="flex gap-1">
                <img className="w-8" src="./images/ringing-phone.png" alt="" />
                <p className="text-2xl">042-497-6116</p>
              </div>
              <div className="flex justify-end gap-1 items-center">
                <img className="w-4" src="./images/phone-time.png" alt="" />
                <p className="text-sm">9：00～18：00</p>
              </div>
            </div>
            <div>
              <ul className="flex gap-4">
                <li className="hover:bg-darkstone hover:text-rose-600 px-2 py-1 rounded-md hover:bg-opacity-10 transition duration-200 ease-in-out">
                  <Link to="/about">私たちについて</Link>
                </li>
                <li className="relative group hover:bg-darkstone px-2 py-1 rounded-md hover:bg-opacity-10 transition duration-200 ease-in-out">
                  <div className="flex items-center group-hover:text-rose-600">
                    サービス
                    <img className="w-4 pt-0.5" src="./images/sort-down.png" alt="" />
                  </div>
                  <ul className="absolute hidden group-hover:block bg-white mt-1 px-2 py-1 left-0 -right-16 rounded-md shadow-md">
                    <li>
                      <Link to="/houmon" className="hover:bg-zinc rounded-sm flex items-center gap-1 transition duration-200 ease-in-out hover:text-rose-600">
                        <img className="w-5" src="./images/minibus-.png" alt="" />
                        訪問介護
                      </Link>
                    </li>
                    <li>
                      <Link to="/taxi" className="hover:bg-zinc rounded-sm flex items-center gap-1 transition duration-200 ease-in-out hover:text-rose-600">
                        <img className="w-5" src="./images/taxi.png" alt="" />
                        介護タクシー
                      </Link>
                    </li>
                    <li>
                      <Link to="/dayservice" className="hover:bg-zinc rounded-sm flex items-center gap-1 transition duration-200 ease-in-out hover:text-rose-600">
                        <img className="w-5" src="./images/business-group.png" alt="" />
                        デイサービス
                      </Link>
                    </li>
                    <li>
                      <Link to="/kyotaku" className="hover:bg-zinc rounded-sm flex items-center gap-1 transition duration-200 ease-in-out hover:text-rose-600">
                        <img className="w-5" src="./images/neighbour.png" alt="" />
                        居宅介護支援
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="hover:bg-darkstone px-2 py-1 rounded-md hover:bg-opacity-10 transition duration-200 ease-in-out hover:text-rose-600"><Link to="/contact">お問い合わせ</Link></li>
                <li className="hover:bg-darkstone px-2 py-1 rounded-md hover:bg-opacity-10 transition duration-200 ease-in-out hover:text-rose-600"><Link to="/recruit">採用情報</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Navbar;
