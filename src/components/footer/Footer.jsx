import React from "react";
import './Footer.css'
import { BsInstagram } from 'react-icons/bs'
import { FaTelegramPlane, FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return <footer>
    <a href="" className="footer__logo">ARTEM</a>
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
      <a href="https://www.tiktok.com/@cocook_a"><FaTiktok /></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; ARTEM : All rights reserved</small>
    </div>
  </footer>;
};

export default Footer;
