import React from "react";
import "./About.scss";
import Me from '../../assets/b3.jpg'
import { BsAward } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineFolderOpen } from 'react-icons/ai'
import { useTranslation } from "react-i18next";
import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components";

const About = (props) => {
  const { t } = useTranslation()


  return <section id="about">
    <AnimationOnScroll animateOnce={true} animateIn="animate__lightSpeedInLeft">
      <div className="section__title">
        <h5>
          Get to know
        </h5>

        <h2>
          About me
        </h2>
      </div>
    </AnimationOnScroll>

    <div className="container about__container">
      <AnimationOnScroll animateOnce={true} animateIn="animate__jackInTheBox">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="My img" />
          </div>
        </div>
      </AnimationOnScroll>


      <div className="about__content">
        <AnimationOnScroll animateOnce={true} animateIn="animate__jackInTheBox">
          <div className="about__cards">
            <div className="about__card">
              <BsAward className="about__icon"></BsAward>
              <h5>Прокрастинация </h5>
              <small>18+ years...</small>
            </div>

            <div className="about__card">
              <FiUsers className="about__icon"></FiUsers>
              <h5>Наниматели</h5>
              <small>200 000+</small>
            </div>

            <div className="about__card">
              <AiOutlineFolderOpen className="about__icon"></AiOutlineFolderOpen>
              <h5>Дырок</h5>
              <small>40+</small>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateOnce={true} animateIn="animate__jackInTheBox">
          <div className="about__text">
            <h2>
              Я полностью отдаюсь работе! Моя цель - сделать работу идеально и в кратчайшие сроки!
            </h2>
            ✅Качественно и вовремя - вы никогда не опоздаете к своеё жене, оправдываясь что вы не были у проститута, т.к я никогда не задерживаю своих клиентов и не отставляю их  неудовлетворёнными
          </div>
        </AnimationOnScroll>
        <a href="#contacts" className="btn btn_primary">Давай поболтаем ;)</a>
      </div>
    </div>
  </section >
};

export default About;
