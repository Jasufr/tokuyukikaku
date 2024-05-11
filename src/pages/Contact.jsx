import SendMail from "../components/SendMail";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="px-6 2md:px-12 lg:px-24 xl:px-28 mb-6 py-6 lg:py-12">
          <h1 className="text-2xl text-darkpink mb-2">お問い合わせ</h1>
          <p className="mb-2">ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ。</p>
          <div className="flex justify-center">
            <div className="w-1/2 sm:w-1/3 text-center">
              <img src="./icons/address.png" alt="" className="w-11 mx-auto my-2 bg-lightpink shadow-md rounded-full p-3" />
              <h1>住所</h1>
              <p>188-0013 西東京市<br /> 向台町6丁目10番10号</p>
            </div>
            <div className="w-1/2 sm:w-1/3 text-center">
              <img src="./icons/phone_number.png" alt="" className="w-11 mx-auto my-2 bg-lightpink shadow-md rounded-full p-3" />
              <h1>電話番号</h1>
              <p>042-497-6116</p>
            </div>
            <div className="hidden sm:block w-1/3 text-center">
              <img src="./icons/mail_address.png" alt="" className="w-11 mx-auto my-2 bg-lightpink shadow-md rounded-full p-3" />
              <h1>メールアドレス</h1>
              <p className="">tokuyukikaku@basil.ocn.ne.jp</p>
            </div>
          </div>
          <div className="sm:hidden text-center mt-2">
              <img src="./icons/mail_address.png" alt="" className="w-11 mx-auto my-2 bg-lightpink shadow-md rounded-full p-3" />
              <h1>メールアドレス</h1>
              <p className="">tokuyukikaku@basil.ocn.ne.jp</p>
            </div>
        </div>
        <div className="bg-lightgray bg-opacity-30 px-6 2md:px-12 lg:px-24 xl:px-28 py-6 lg:py-12">
          <div className="flex gap-10">
            <div className="sm:w-3/4 2md:w-2/3">
              <div className="mb-2">
                <h1 className="text-xl mb-2">メールでのお問い合わせ</h1>
                <p>ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ。</p>
              </div>
              <div className="h-32 mb-2 sm:hidden bg-[url('./illustrations/helper4.jpg')] bg-cover bg-center rounded-md shadow-md"></div>
              <SendMail />
            </div>
            <div className="hidden sm:block bg-[url('./illustrations/helper4.jpg')] bg-cover bg-center w-1/4 2md:w-1/3 rounded-md shadow-md"></div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
