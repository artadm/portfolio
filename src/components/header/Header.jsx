import React from "react";
import CTA from "./CTA";
import "./Header.scss";
import Me from "../../assets/mepng.png";
import HeaderSocials from "./HeaderSocials";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Header = () => {
  return (
    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
      <header>

        <div className="container header__container">
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInDown">
            <h5>Hello I'm</h5>
            <h1>Artem</h1>
            <h5 className="text_tight">Frontend Developer</h5>
            <CTA />

            {/* <div className="me">
              <img src={Me} alt="me" />
            </div> */}
          </AnimationOnScroll>
          <HeaderSocials />
          <a href="#contacts" className="scroll__down">
            Scroll Down
          </a>
        </div>

      </header>
    </AnimationOnScroll>
  );
};

export default Header;
