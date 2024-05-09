import axios from "axios";
import { useState } from "react";

const SendMail = () => {
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // use .env variables, do not push this directly to github
    const serviceId = "service_vxy5gyu";
    const templateId = "template_58k3kbb";
    const publicKey = "uXSigQlw1EPKss_V1";

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "Toku",
        subject: subject,
        number: number,
        message: message,
      }
    };

    try {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      console.log(res.data);
      setName("");
      setSubject("");
      setEmail("");
      setNumber("");
      setMessage("");
      setCheckbox(false);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <table className="w-full mb-2">
          <tbody>
            <tr>
              <th className="border border-darkslate text-start p-2 bg-lightpink" scope="row">項目<span className="float-end text-[12px] bg-darkpink px-2 py-1 text-lightpink rounded-md">必須</span></th>
              <td className="border border-darkslate p-4 bg-white">
                <input checked={subject === "サービスのお問い合わせ"} required={true} onChange={(e) => setSubject(e.target.value)} type="radio" name="subject" id="service" value="サービスのお問い合わせ" />
                <label htmlFor="service">サービスのお問い合わせ</label><br />
                <input checked={subject === "採用のお問い合わせ"} onChange={(e) => setSubject(e.target.value)} type="radio" name="subject" id="recruit" value="採用のお問い合わせ" />
                <label htmlFor="recruit">採用のお問い合わせ</label><br />
                <input checked={subject === "その他の項目"} onChange={(e) => setSubject(e.target.value)} type="radio" name="subject" id="other" value="その他の項目" />
                <label htmlFor="other">その他の項目</label>
              </td>
            </tr>
            <tr>
              <th className="border border-darkslate text-start p-2 bg-lightpink" scope="row">お名前<span className="float-end text-[12px] bg-darkpink px-2 py-1 text-lightpink rounded-md">必須</span></th>
              <td className="border border-darkslate p-4 bg-white">
                <input required={true} type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="例）幕ノ内一歩" className="border border-zinc p-2 focus:outline-darkpink w-full" />
              </td>
            </tr>
            <tr>
              <th className="border border-darkslate text-start p-2 bg-lightpink" scope="row">メールアドレス<span className="float-end text-[12px] bg-darkpink px-2 py-1 text-lightpink rounded-md">必須</span></th>
              <td className="border border-darkslate p-4 bg-white">
                <input required={true} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="例）tokuyukikaku@yahoo.com" className="border border-zinc p-2 focus:outline-darkpink w-full" />
              </td>
            </tr>
            <tr>
              <th className="border border-darkslate text-start p-2 bg-lightpink" scope="row">電話番号</th>
              <td className="border border-darkslate p-4 bg-white">
                <input type="tel" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="例）080-000-000" className="border border-zinc p-2 focus:outline-darkpink w-full" />
              </td>
            </tr>
            <tr>
              <th className="border border-darkslate text-start p-2 bg-lightpink" scope="row">お問い合わせ内容<span className="float-end text-[12px] bg-darkpink px-2 py-1 text-lightpink rounded-md">必須</span></th>
              <td className="border border-darkslate p-4 bg-white">
                <textarea required={true} value={message} onChange={(e) => setMessage(e.target.value)} className="border border-zinc p-2 focus:outline-darkpink w-full"></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="">
          <input type="checkbox" required={true} onChange={() => {setCheckbox(!checkbox)}} checked={checkbox} id="personal_info" name="personal_info" value="個人情報保護方針に同意します。" />
          <label htmlFor="personal_info" className="ms-1 xs:ms-2 mb-2">個人情報保護方針に同意する<span className="ms-1 xs:ms-2 text-[12px] bg-darkpink px-2 py-1 text-lightpink rounded-md">必須</span></label>
        </div>
        <button type="submit" className="bg-darkpink px-4 py-2 text-xl text-white rounded-lg shadow-md mt-4 hover:bg-opacity-40  transition-colors duration-200 ">入力内意を送信する</button>
      </form>
    </>
  );
};

export default SendMail;
