import React from "react";
import './Footer.scss'
import { AiFillGithub } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'
import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components";
import Waves from "../WavesBg/Waves";

const Footer = () => {
  return <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
    <footer>
      <Waves />

      <a href="" className="footer__logo">ARTEM SIBOGATULIN</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>


      <div className="footer__socials">
        <a href="https://www.instagram.com"><BsInstagram /></a>
        <a href="https://web.telegram.org/z/#-+996555162762"><FaTelegramPlane /></a>
        <a href="https://github.com/artadm"><AiFillGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; ARTEM : All rights reserved</small>
      </div>
    </footer>
  </AnimationOnScroll >;
};

export default Footer;
