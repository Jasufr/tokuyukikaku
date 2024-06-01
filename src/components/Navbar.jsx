import { Link } from "wouter";
import Menu from "./Menu";

const Navbar = () => {

  return (
    <>
      <div className="navbar z-50 fixed top-0 w-full bg-lightpink py-2 shadow-md">
        <div className="flex gap-5 h-20 w-11/12 m-auto justify-between ">
          <Link className="flex items-center gap-1" to="/">
            <img loading="eager" className="w-12 xs:w-16" src="./icons/logo.png" alt="徳有企画（とくゆきかく）ロゴ" />
            <p className="text-xl xs:text-2xl">合同会社 徳有企画</p>
          </Link>
          <div className="2md:hidden">
            <Menu />
          </div>
          <div className="hidden 2md:flex flex-col items-end">
            <div>
              <div className="flex gap-1">
                <img loading="eager" className="w-8" src="./icons/phone.png" alt="電話番号" />
                <p className="text-2xl">042-497-6116</p>
              </div>
              <div className="flex justify-end gap-1 items-center">
                <img loading="eager" className="w-4" src="./icons/time.png" alt="受付時間" />
                <p className="text-sm">9：00～18：00</p>
              </div>
            </div>
            <div>
              <ul className="flex gap-4">
                <Link to="/about">
                  <li className="hover:bg-darkstone hover:text-darkpink px-2 py-1 rounded-md hover:bg-opacity-10 transition duration-200 ease-in-out">
                    私たちについて
                  </li>
                </Link>
                <button className="group">
                  <li className="relative group hover:bg-darkstone px-2 py-1 rounded-md hover:bg-opacity-10 transition duration-200 ease-in-out">
                    <div className="group flex items-center group-hover:text-darkpink cursor-pointer">
                      サービス
                      <img loading="eager" className="w-4 pt-0.5 group-focus:rotate-90 group-hover:rotate-90 transition-all duration-200" src="./icons/open-bottom.png" alt="サービス　もっと見る　下矢印" />
                    </div>
                    <ul className="z-50 absolute group-focus:block group-hover:block hidden bg-white mt-1 px-2 py-1 left-0 -right-16 rounded-md shadow-md">
                      <li>
                        <Link to="/houmon" className="hover:bg-zinc hover:bg-opacity-70 hover:text-darkpink rounded-md p-1 flex items-center gap-1 transition duration-200 ease-in-out hover:text-rose-600">
                          <img loading="eager" className="w-5" src="./icons/minibus-.png" alt="サービス　訪問介護　アイコン" />
                          訪問介護
                        </Link>
                      </li>
                      <li>
                        <Link to="/taxi" className="hover:bg-zinc hover:bg-opacity-70 hover:text-darkpink rounded-md p-1 flex items-center gap-1 transition duration-200 ease-in-out hover:text-rose-600">
                          <img loading="eager" className="w-5" src="./icons/taxi.png" alt="サービス　介護タクシー　アイコン" />
                          介護タクシー
                        </Link>
                      </li>
                      <li>
                        <Link to="/dayservice" className="hover:bg-zinc hover:bg-opacity-70 hover:text-darkpink rounded-md p-1 flex items-center gap-1 transition duration-200 ease-in-out hover:text-rose-600">
                          <img loading="eager" className="w-5" src="./icons/business-group.png" alt="サービス　デイサービス　アイコン" />
                          デイサービス
                        </Link>
                      </li>
                      <li>
                        <Link to="/kyotaku" className="hover:bg-zinc hover:bg-opacity-70 hover:text-darkpink rounded-md p-1 flex items-center gap-1 transition duration-200 ease-in-out hover:text-rose-600">
                          <img loading="eager" className="w-5" src="./icons/neighbour.png" alt="サービス　居宅介護支援　アイコン" />
                          居宅介護支援
                        </Link>
                      </li>
                    </ul>
                  </li>
                </button>
                <Link to="/contact">
                  <li className="hover:bg-darkstone hover:text-darkpink px-2 py-1 rounded-md hover:bg-opacity-10 transition duration-200 ease-in-out hover:text-rose-600">
                    お問い合わせ
                  </li>
                </Link>
                <Link to="/recruit">
                  <li className="hover:bg-darkstone hover:text-darkpink px-2 py-1 rounded-md hover:bg-opacity-10 transition duration-200 ease-in-out hover:text-rose-600">
                    採用情報
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Navbar;
