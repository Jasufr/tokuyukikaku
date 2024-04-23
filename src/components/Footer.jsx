const Footer = () => {
  return (
    <>
      <div className="mt-24">
        <div className="">
          <div className="z-50 bg-red-200 mx-10">
            <div>
              <h1></h1>
              <p></p>
            </div>
            <div></div>
            <div></div>
          </div>
          <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg"><path d="M 0,700 L 0,262 C 124.35714285714286,291.07142857142856 248.71428571428572,320.14285714285717 375,310 C 501.2857142857143,299.85714285714283 629.5,250.49999999999997 750,210 C 870.5,169.50000000000003 983.2857142857142,137.85714285714286 1097,148 C 1210.7142857142858,158.14285714285714 1325.357142857143,210.07142857142856 1440,262 L 1440,700 L 0,700 Z" stroke="none" strokeWidth="0" fill="#e11d48" fillOpacity="1"></path></svg>
        </div>
        <div className="h-20 flex flex-col items-center">
          <a className="hover:text-rose-600 transition duration-200 ease-in-out" href="">個人情報保護方針</a>
          <div className="relative">
            <a className="hover:text-rose-600 transition duration-200 ease-in-out" href="">Freepik提供のイラストを使用</a>
            <img className="absolute -bottom-1.5 -right-10 w-9" src="./public/images/logo.png" alt="" />
          </div>
          <h1>© 2024  合同会社徳有企画</h1>
        </div>
      </div>

    </>
  );
};

export default Footer;
