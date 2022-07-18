import React from "react";
import "./About.css";
import Me from '../../assets/me-about.jpg'
import { BsAward } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineFolderOpen } from 'react-icons/ai'
import { useTranslation } from "react-i18next";

const About = (props) => {
  const { t } = useTranslation()


  return <section id="about">
    <h5>
      Get to know
    </h5>

    <h2>
      About me
    </h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={Me} alt="My img" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <div className="about__card">
            <BsAward className="about__icon"></BsAward>
            <h5>Experience </h5>
            <small>4+ years working...</small>
          </div>

          <div className="about__card">
            <FiUsers className="about__icon"></FiUsers>
            <h5>Clients</h5>
            <small>100+</small>
          </div>

          <div className="about__card">
            <AiOutlineFolderOpen className="about__icon"></AiOutlineFolderOpen>
            <h5>Projects</h5>
            <small>50+</small>
          </div>
        </div>

        <div className="about__text">
          <h2>
            Я полностью отдаюсь работе! Моя цель сделать работу на отлично и самые краткие сроки!
          </h2>
          ✅High quality and on time - website layout. HTML, CCS3, JavaScript, React, Redux, Vue 3.0, TypeScript, Angular, Wordpress
          Greetings, my name is Artyom! I have been designing websites for 4 years now.
          I give a fully adaptive and cross-browser layout, all modern technologies will be observed, according to all the rules and standards, the experience in layout is quite good, I do everything on my own conscience and responsibility. I guarantee the quality and reliability of the layout when changing the content, and changes are also possible even after the delivery of the project.

        </div>

        <a href="#contacts" className="btn btn-primary">Let's talk</a>
      </div>
    </div>
  </section>;
};

export default About;
