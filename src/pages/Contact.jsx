const Contact = () => {
  return (
    <>
      <div className="contact px-6 2md:px-12 lg:px-24 xl:px-28 py-6 lg:py-12">
        <h1 className="text-2xl text-darkpink mb-2">お問い合わせ</h1>
        <div></div>
        <div>
          <h1 className="text-xl mb-2">メールでのお問い合わせ</h1>
          <p></p>
          <div>
            <form action="">

              <table>
                <tbody>
                  <tr>
                    <th scope="row">項目</th>
                    <td>

                    </td>
                  </tr>
                  <tr>
                    <th scope="row">お名前</th>
                    <td>
                      <input type="text" placeholder="test" className="border border-darkslate" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">メールアドレス</th>
                    <td>
                      <input type="email" className="border border-darkslate" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">電話番号</th>
                    <td>
                      <input type="tel" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">お問い合わせ内容</th>
                    <td>
                      <textarea name="" id=""></textarea>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>purabashi polici</p>
              <label htmlFor="">bb</label>
              <input type="checkbox" />
              <button type="submit">send</button>
            </form>
            <div></div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
