import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Contacts.scss";
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components";

const Contacts = (props) => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u8aij7f', 'template_k1f9b1b', form.current, 'OnqzfHdG79LKuguho')
    e.target.reset()
  };

  return <section id="contacts">
    <AnimationOnScroll animateOnce={true} animateIn="animate__bounceInLeft">
      <div className="section__title">
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>
      </div>
    </AnimationOnScroll>

    <div className="container contacts__container">
      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Emial</h4>
            <h5>bogdansteam101@gmail.com</h5>
            <a href="mailto:bogdansteam101@gmail.com" className="contact__link" target='_blank'>Отправить сообщение</a>
          </article>

          <article className="contact__option">
            <BsInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>Bogdan Stringi</h5>
            <a href="https://www.instagram.com/bogdan_steam2" className="contact__link" target='_blank'>Sent a Message</a>
          </article>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInRight">
        <form ref={form} onSubmit={sendEmail} action="">
          <input type="text" name="name" placeholder="Your full name" required />
          <input type="email" name="name" placeholder="Your email" required />
          <textarea name="message" placeholder="Your message" rows="7" required></textarea>
          <button type="submit" className="btn btn_primary">Send message</button>
        </form>
      </AnimationOnScroll>
    </div>
  </section>;
};

export default Contacts;
