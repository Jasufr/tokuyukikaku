import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-pink-200">
        <div className="flex gap-5 h-20 mx-9 justify-between ">
          <div className="flex items-center gap-1">
            <img className="w-16" src="./public/images/logo.png" alt="" />
            <h1>tokuyukikaku</h1>
          </div>
          <div className="flex flex-col items-end">
            <div>
              <div className="flex">
                <img className="w-16" src="./public/images/ringing-phone.png" alt="" />
                <p>number</p>
              </div>
              <div className="flex">
                <img className="w-16" src="./public/images/phone-time.png" alt="" />
                <p>Heures</p>
              </div>
            </div>
            <div>
              <ul className="flex gap-6">
                <li>私たちについて</li>
                <li className="group hover:text-sky-800 ">サービス
                  <ul className="hidden group-hover:block">
                    <li>訪問介護</li>
                    <li>介護タクシー</li>
                    <li>デイサービス</li>
                    <li>居宅介護支援</li>
                  </ul>
                </li>
                <li>お問い合わせ</li>
                <li>採用情報</li>
              </ul>
            </div>
          </div>
          {/* <ul className="flex gap-3 text-sky-500 items-center">
          <li className="hover:text-yellow-400 transition-colors delay-75"><Link to="/">Home</Link></li>
          <li className="hover:text-yellow-400 transition-colors delay-75"><Link to="/about">About</Link></li>
        </ul> */}
        </div>
      </div>

    </>
  );
};

export default Navbar;
