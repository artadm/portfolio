import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Contacts.css";
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'

const Contacts = (props) => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u8aij7f', 'template_k1f9b1b', form.current, 'OnqzfHdG79LKuguho')
    e.target.reset()
  };

  return <section id="contacts">
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contacts__container">
      <div className="contact__options">
        <article className="contact__option">
          <AiOutlineMail className="contact__option-icon" />
          <h4>Emial</h4>
          <h5>sibogatulinartem9@gmail.com</h5>
          <a href="mailto:sibogatulinartem9@gmail.com" className="contact__link" target='_blank'>Sent a Message</a>
        </article>

        <article className="contact__option">
          <BsInstagram className="contact__option-icon" />
          <h4>Instagram</h4>
          <h5>artemioon</h5>
          <a href="https://www.instagram.com/direct/inbox/" className="contact__link" target='_blank'>Sent a Message</a>
        </article>

        <article className="contact__option">
          <FaTelegramPlane className="contact__option-icon" />
          <h4>Telegram</h4>
          <h5>+996555162762</h5>
          <a href="https://web.telegram.org/z/#+996555162762" className="contact__link" target='_blank'>Sent a Message</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail} action="">
        <input type="text" name="name" placeholder="Your full name" required />
        <input type="email" name="name" placeholder="Your email" required />
        <textarea name="message" placeholder="Your message" rows="7" required></textarea>
        <button type="submit" className="btn btn_primary">Send message</button>
      </form>
    </div>
  </section>;
};

export default Contacts;
