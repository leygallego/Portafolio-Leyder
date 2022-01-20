import "./contact.css";
import Phone from "../../images/phone.png";
import Email from "../../images/email.png";
import Address from "../../images/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    console.log("evento===", e);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ropljnt",
        "template_mqu69je",
        formRef.current,
        "user_b8eGaUU8AlsQGfyousdLp"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Aquí me podés contactar</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +57 3007799557
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              leyveloper@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Medellín, Colombia
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>¿Cuál es tu historia?</b> Mantengamos el contacto. Disponible para trabajar
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Nombre" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Asunto" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Mensaje" name="message" />
            <button>Submit</button>
            {done && "Gracias..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;