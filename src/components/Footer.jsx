import { Link } from "wouter";

const Footer = () => {
  return (
    <>
      <div className="footer z-50 w-full">
        <div className="contact-footer relative">
          <div className="absolute sm:top-2 md:top-8 lg:top-10 w-full">
            <div className="z-50 bg-white bg-opacity-90 m-auto w-11/12 p-2 xs:p-4 lg:p-8 rounded-lg shadow-md flex justify-center gap-6">
              <div className="w-1/4 hidden lg:block">
                <h2 className="text-2xl text-darkpink mb-3">お問い合わせ</h2>
                <p>お困りごとやご質問がございましたら、お気軽にお問い合わせください。私たちがお手伝いさせていただきます。</p>
              </div>
              <div className="flex gap-6 w-full lg:w-3/4">
                <div className="bg-lightpink rounded-lg shadow-md p-1 xs:p-4 lg:p-8 text-center w-1/2">
                  <div className="flex items-center justify-center gap-1">
                    <img loading="lazy" className="w-4 xs:w-6 lg:w-10" src="./icons/phone.png" alt="電話番号" />
                    <h2 className="text-sm xs:text-xl lg:text-3xl">042-497-6116</h2>
                  </div>
                  <h3 className="text-[10px] xs:text-sm lg:text-base"><span className="hidden xs:inline">受付時間</span> 9：00～18：00</h3>
                  <h3 className="text-[9px] xs:text-sm lg:text-base">休日：日曜日</h3>
                </div>
                <Link to="/contact" className="bg-lightpink rounded-lg shadow-md p-2 xs:p-4 lg:p-8 flex flex-col items-center justify-center w-1/2 hover:bg-darkpink hover:bg-opacity-20 transition-colors duration-200">
                  <h2 className="text-[10px] xs:text-sm sm:text-base lg:text-xl">メールでのお問い合わせ</h2>
                  <img loading="lazy" className="w-8 lg:w-14" src="./icons/mail.png" alt="問い合わせ　メールアドレス" />
                </Link>
              </div>

            </div>

          </div>

          <svg className="" width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg"><path d="M 0,400 L 0,150 C 92.85714285714286,112.28571428571428 185.71428571428572,74.57142857142857 305,91 C 424.2857142857143,107.42857142857143 570,177.99999999999997 694,185 C 818,192.00000000000003 920.2857142857142,135.42857142857144 1041,119 C 1161.7142857142858,102.57142857142856 1300.857142857143,126.28571428571428 1440,150 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="#ed0066" fillOpacity="1"></path></svg>
        </div>
        <div className="h-14 md:h-20 flex flex-col justify-center items-center text-[10px] md:text-base">
          <Link className="hover:text-darkpink transition-colors duration-200" to="/privacy">個人情報保護方針</Link>
          <div className="relative">
            <p className="">イラストDesigned by <a className="text-darkpink hover:text-darkstone transition-colors duration-200 ease-in-out" href="https://www.freepik.com/" target="_blank">Freepik</a></p>
            <img loading="lazy" className="absolute -bottom-1.5 -right-10 w-9" src="./icons/logo.png" alt="徳有企画（とくゆきかく）ロゴ" />
          </div>
          <h2>© 2024  合同会社徳有企画</h2>
        </div>
      </div>

    </>
  );
};

export default Footer;
