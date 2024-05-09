import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const SendMail = () => {
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState("");
  const [number, setNumber] = useState("");
  const [isNumberValid, setIsNumberValid] = useState("");
  const [message, setMessage] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

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

  const validateEmail = () => {
    const email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    if (email_reg.test(email) == false) {
      setIsEmailValid(false);
      window.alert("enter a valid email");
    } else {
      setIsEmailValid(true);
    }
  };

  const validateNumber = () => {
    const number_reg = /^(0([1-9]{1}-?[1-9]\d{3}|[1-9]{2}-?\d{3}|[1-9]{2}\d{1}-?\d{2}|[1-9]{2}\d{2}-?\d{1})-?\d{4}|0[789]0-?\d{4}-?\d{4}|050-?\d{4}-?\d{4})$/;

    if (number_reg.test(number) == false) {
      setIsNumberValid(false);
      window.alert("enter a valid number");
    } else {
      setIsNumberValid(true);
    }
  };

  // useEffect(() => {
  //   validateFormData();
  // }, [subject, name, email, number, message, checkbox]);

  // const validateFormData = () => {
  //   // if (subject === "" || name === "" || email === "" || number === "" || message === "" || checkbox === false) {
  //   //   setIsDisabled(true);
  //   // } else {
  //   //   setIsDisabled(false);
  //   // }
  //   console.log("update");
  //   console.log(`subject: ${subject}, name: ${name}, email: ${email}, number: ${number}, message: ${message}, checkbox: ${checkbox}`);
  // };

  const validateFormData = useCallback(() => {
    console.log(`subject: ${subject}, name: ${name}, email: ${email}, number: ${number}, message: ${message}, checkbox: ${checkbox}`);
    if ((subject === "" || name === "" || email === "" || number === "" || message === "" || checkbox === false) || (isEmailValid === false || isNumberValid === false)) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [subject, name, email, number, message, checkbox, isEmailValid, isNumberValid]);

  useEffect(() => {
    validateFormData();
  }, [validateFormData]);

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <table className="w-full mb-2">
          <tbody>
            <tr>
              <th className="border border-darkslate text-start p-2 bg-lightpink" scope="row">項目<span className="float-end text-[12px] bg-darkpink px-2 py-1 text-lightpink rounded-md">必須</span></th>
              <td className="border border-darkslate p-4 bg-white">
                <input checked={subject === "サービスのお問い合わせ"} required={true} onChange={(e) => {setSubject(e.target.value)}} type="radio" name="subject" id="service" value="サービスのお問い合わせ" />
                <label htmlFor="service">サービスのお問い合わせ</label><br />
                <input checked={subject === "採用のお問い合わせ"} onChange={(e) => {setSubject(e.target.value)}} type="radio" name="subject" id="recruit" value="採用のお問い合わせ" />
                <label htmlFor="recruit">採用のお問い合わせ</label><br />
                <input checked={subject === "その他の項目"} onChange={(e) => {setSubject(e.target.value)}} type="radio" name="subject" id="other" value="その他の項目" />
                <label htmlFor="other">その他の項目</label>
              </td>
            </tr>
            <tr>
              <th className="border border-darkslate text-start p-2 bg-lightpink" scope="row">お名前<span className="float-end text-[12px] bg-darkpink px-2 py-1 text-lightpink rounded-md">必須</span></th>
              <td className="border border-darkslate p-4 bg-white">
                <input required={true} type="text" value={name} onChange={(e) => {setName(e.target.value)}} placeholder="例）幕ノ内一歩" className="border border-zinc p-2 focus:outline-darkpink w-full" />
              </td>
            </tr>
            <tr>
              <th className="border border-darkslate text-start p-2 bg-lightpink" scope="row">メールアドレス<span className="float-end text-[12px] bg-darkpink px-2 py-1 text-lightpink rounded-md">必須</span></th>
              <td className="border border-darkslate p-4 bg-white">
                <input required={true} type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} onBlur={validateEmail} placeholder="例）tokuyukikaku@yahoo.com" className="border border-zinc p-2 focus:outline-darkpink w-full" />
              </td>
            </tr>
            <tr>
              <th className="border border-darkslate text-start p-2 bg-lightpink" scope="row">電話番号</th>
              <td className="border border-darkslate p-4 bg-white">
                <input type="tel" value={number} onChange={(e) => {setNumber(e.target.value)}} onBlur={validateNumber} placeholder="例）080-000-000" className="border border-zinc p-2 focus:outline-darkpink w-full" />
              </td>
            </tr>
            <tr>
              <th className="border border-darkslate text-start p-2 bg-lightpink" scope="row">お問い合わせ内容<span className="float-end text-[12px] bg-darkpink px-2 py-1 text-lightpink rounded-md">必須</span></th>
              <td className="border border-darkslate p-4 bg-white">
                <textarea required={true} value={message} onChange={(e) => {setMessage(e.target.value)}} className="border border-zinc p-2 focus:outline-darkpink w-full"></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="">
          <input type="checkbox" required={true} onChange={() => {setCheckbox(!checkbox)}} checked={checkbox} id="personal_info" name="personal_info" value="個人情報保護方針に同意します。" />
          <label htmlFor="personal_info" className="ms-1 xs:ms-2 mb-2">個人情報保護方針に同意する<span className="ms-1 xs:ms-2 text-[12px] bg-darkpink px-2 py-1 text-lightpink rounded-md">必須</span></label>
        </div>
        <button disabled={isDisabled} type="submit" className="bg-darkpink disabled:bg-darkstone disabled:opacity-50 px-4 py-2 text-xl text-white rounded-lg shadow-md mt-4 hover:bg-opacity-40  transition-colors duration-200 ">入力内意を送信する</button>
      </form>
    </>
  );
};

export default SendMail;
