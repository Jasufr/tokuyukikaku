import SendMail from "../components/SendMail";

const Contact = () => {
  return (
    <>
      <div className="contact relative">
        {/* Blobs Recruit */}
        <div className="blobs w-full h-full absolute overflow-hidden -z-10">
          <div className="green absolute top-1/3 xs:-translate-y-1/4 -left-28 2md:-left-8 w-72 sm:w-80 -rotate-45">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#2FAD41" d="M46.9,-53C61.3,-43.8,73.9,-29.5,79.7,-11.8C85.6,6,84.8,27.2,72.5,35.7C60.3,44.1,36.5,39.7,19.3,40.6C2,41.6,-8.9,47.9,-20.8,47.7C-32.7,47.5,-45.7,40.6,-49.7,30.3C-53.7,20,-48.8,6.1,-44.6,-6.1C-40.4,-18.4,-36.8,-29,-29.5,-39.4C-22.2,-49.8,-11.1,-59.9,2.6,-63C16.3,-66.1,32.5,-62.1,46.9,-53Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="darkpink absolute top-2 -right-12 2md:right-6 w-52 sm:w-72">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FF0066" d="M40.6,-69.1C53,-63.2,63.6,-53,73,-40.8C82.4,-28.6,90.5,-14.3,91.2,0.4C91.9,15.1,85.1,30.1,76.6,43.9C68.1,57.7,58,70.3,44.9,75.9C31.9,81.5,15.9,80.1,1,78.3C-13.9,76.5,-27.7,74.3,-40.6,68.6C-53.5,62.9,-65.5,53.8,-70.9,41.8C-76.3,29.8,-75.2,14.9,-72.9,1.3C-70.6,-12.2,-67.1,-24.5,-60.2,-33.9C-53.3,-43.3,-43,-50,-32.4,-56.9C-21.8,-63.7,-10.9,-70.9,1.6,-73.7C14.1,-76.5,28.3,-75,40.6,-69.1Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="lightpink absolute bottom-4 left-1/2 -translate-x-1/3 w-80 xs:w-96">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFEDF4" d="M39.5,-66.2C52.6,-60.8,65.6,-53.1,73,-41.7C80.3,-30.3,81.9,-15.1,82.8,0.5C83.7,16.2,83.9,32.4,77,44.5C70.1,56.7,56.1,64.8,42.1,71.2C28,77.6,14,82.3,-0.4,83C-14.8,83.6,-29.5,80.2,-41,72.3C-52.4,64.4,-60.6,52,-67.2,39.2C-73.9,26.4,-79,13.2,-80.2,-0.7C-81.5,-14.6,-78.8,-29.3,-72.7,-43.1C-66.7,-56.9,-57.3,-69.9,-44.6,-75.6C-31.9,-81.4,-16,-79.8,-1.4,-77.4C13.2,-74.9,26.3,-71.7,39.5,-66.2Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
        <div className="px-6 2md:px-12 lg:px-24 xl:px-28 mb-6 py-6 lg:py-12">
          <h1 className="text-2xl text-darkpink mb-3">お問い合わせ</h1>
          <p className="mb-2">ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ。</p>
          <div className="flex justify-center">
            <div className="w-1/2 sm:w-1/3 text-center">
              <img loading="lazy" src="./icons/address.png" alt="" className="w-11 mx-auto my-2 bg-lightpink shadow-md rounded-full p-3" />
              <h1>住所</h1>
              <p>188-0013 西東京市<br /> 向台町6丁目10番10号</p>
            </div>
            <div className="w-1/2 sm:w-1/3 text-center">
              <img loading="lazy" src="./icons/phone_number.png" alt="" className="w-11 mx-auto my-2 bg-lightpink shadow-md rounded-full p-3" />
              <h1>電話番号</h1>
              <p>042-497-6116</p>
            </div>
            <div className="hidden sm:block w-1/3 text-center">
              <img loading="lazy" src="./icons/mail_address.png" alt="" className="w-11 mx-auto my-2 bg-lightpink shadow-md rounded-full p-3" />
              <h1>メールアドレス</h1>
              <p className="">tokuyukikaku@basil.ocn.ne.jp</p>
            </div>
          </div>
          <div className="sm:hidden text-center mt-2">
            <img loading="lazy" src="./icons/mail_address.png" alt="" className="w-11 mx-auto my-2 bg-lightpink shadow-md rounded-full p-3" />
            <h1>メールアドレス</h1>
            <p className="">tokuyukikaku@basil.ocn.ne.jp</p>
          </div>
        </div>
        <div className="bg-lightgray bg-opacity-30 px-6 2md:px-12 lg:px-24 xl:px-28 py-6 lg:py-12">
          <div className="flex gap-10">
            <div className="sm:w-3/4 2md:w-2/3">
              <div className="mb-2">
                <h1 className="text-xl mb-3">メールでのお問い合わせ</h1>
                <p>ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ。</p>
              </div>
              <div className="h-32 mb-2 sm:hidden bg-[url('./illustrations/helper4.png')] bg-cover bg-center rounded-md shadow-md"></div>
              <SendMail />
            </div>
            <div className="hidden sm:block bg-[url('./illustrations/helper4.png')] bg-cover bg-center w-1/4 2md:w-1/3 rounded-md shadow-md"></div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
