import React,{useRef} from 'react';
//npm i @emailjs/browser
import emailjs from "@emailjs/browser";
import {init} from "@emailjs/browser";
init(process.env.ID);


const ContactForm = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
      const formMess = document.querySelector(".formMessage");
  
      emailjs
        .sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_ID
        )
        .then(
          (result) => {
            // console.log(result.text);
            form.current.reset();
            formMess.innerHTML = "<p class='success'>Message envoyé !</p>";
  
            setTimeout(() => {
              formMess.innerHTML = "";
            }, 2500);
          },
          (error) => {
            // console.log(error.text);
            formMess.innerHTML =
              "<p class='error'>Une erreur s'est produite, veuillez réessayer</p>";
  
            setTimeout(() => {
              formMess.innerHTML = "";
            }, 2500);
          }
        );
    };
  
    return (
      <div className="form-container">
        <h2> contactez-nous </h2>
        <form ref={form} onSubmit={sendEmail}className="form-content">
          <label>Name</label>
          <input type="text" name="name" required autoComplete="off" id="name" />
          <label>Email</label>
          <input type="email" name="email" required autoComplete="off" id="email" />
          <label>Message</label>
          <textarea name="message" required  id="mess"/>
          <input type="submit" value="Envoyer" className="hover button" />
        </form>
        <div className="formMessage"></div>
      </div>
    );
  };

export default ContactForm;