const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="px-6 2md:px-12 lg:px-24 xl:px-28 mb-6 py-6 lg:py-12">
        <h1 className="text-2xl text-darkpink mb-2">お問い合わせ</h1>
          <p className="mb-2">ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ。</p>
          <div className="flex gap-5">
            <div className="w-1/3 text-center">
              <img src="" alt="" />
              <h1>住所</h1>
              <p>188-0013 西東京市<br /> 向台町6丁目10番10号</p>
            </div>
            <div className="w-1/3 text-center">
              <img src="" alt="" />
              <h1>電話番号</h1>
              <p>042-497-6116</p>
            </div>
            <div className="w-1/3 text-center">
              <img src="" alt="" />
              <h1>メールアドレス</h1>
              <p>tokuyukikaku@basil.ocn.ne.jp</p>
            </div>
          </div>
        </div>
        <div className="bg-lightgray bg-opacity-30 px-6 2md:px-12 lg:px-24 xl:px-28 py-6 lg:py-12">
          <h1 className="text-xl mb-2">メールでのお問い合わせ</h1>
          <p></p>
          <div className="flex gap-10">
            <form action="" className="w-2/3 flex flex-col items-center">
              <table className="w-full mb-2">
                <tbody>
                  <tr>
                    <th className="border border-darkslate text-start p-2 bg-lightpink" scope="row">項目<span className="float-end text-[12px] bg-darkpink px-2 py-1 text-lightpink rounded-md">必須</span></th>
                    <td className="border border-darkslate p-4 bg-white">
                      <input type="radio" name="subject" id="service" value="サービスのお問い合わせ" />
                      <label htmlFor="service">サービスのお問い合わせ</label><br />
                      <input type="radio" name="subject" id="recruit" value="採用のお問い合わせ" />
                      <label htmlFor="recruit">採用のお問い合わせ</label><br />
                      <input type="radio" name="subject" id="other" value="その他の項目" />
                      <label htmlFor="other">その他の項目</label>
                    </td>
                  </tr>
                  <tr>
                    <th className="border border-darkslate text-start p-2 bg-lightpink" scope="row">お名前<span className="float-end text-[12px] bg-darkpink px-2 py-1 text-lightpink rounded-md">必須</span></th>
                    <td className="border border-darkslate p-4 bg-white">
                      <input type="text" placeholder="例）幕ノ内一歩" className="border border-zinc p-2 focus:outline-darkpink w-full" />
                    </td>
                  </tr>
                  <tr>
                    <th className="border border-darkslate text-start p-2 bg-lightpink" scope="row">メールアドレス<span className="float-end text-[12px] bg-darkpink px-2 py-1 text-lightpink rounded-md">必須</span></th>
                    <td className="border border-darkslate p-4 bg-white">
                      <input type="email" placeholder="例）tokuyukikaku@yahoo.com" className="border border-zinc p-2 focus:outline-darkpink w-full" />
                    </td>
                  </tr>
                  <tr>
                    <th className="border border-darkslate text-start p-2 bg-lightpink" scope="row">電話番号</th>
                    <td className="border border-darkslate p-4 bg-white">
                      <input type="tel" placeholder="例）080-000-000" className="border border-zinc p-2 focus:outline-darkpink w-full" />
                    </td>
                  </tr>
                  <tr>
                    <th className="border border-darkslate text-start p-2 bg-lightpink" scope="row">お問い合わせ内容<span className="float-end text-[12px] bg-darkpink px-2 py-1 text-lightpink rounded-md">必須</span></th>
                    <td className="border border-darkslate p-4 bg-white">
                      <textarea name="" id="" className="border border-zinc p-2 focus:outline-darkpink w-full"></textarea>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="">
                <input type="checkbox" id="personal_info" name="personal_info" value="個人情報保護方針に同意します。" />
                <label htmlFor="personal_info" className="ms-2 mb-2">個人情報保護方針に同意します。<span className="ms-2 text-[12px] bg-darkpink px-2 py-1 text-lightpink rounded-md">必須</span></label>
              </div>
              <button type="submit" className="bg-darkpink p-2 text-xl text-white rounded-lg shadow-md w-2/3 my-2">入力内意を送信する</button>
            </form>
            <div className="bg-[url('./illustrations/helper4.jpg')] bg-cover bg-top w-1/3 rounded-md shadow-md"></div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
