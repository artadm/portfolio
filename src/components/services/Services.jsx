import React, { useState } from "react";
import './Services.css'
import { AiOutlineCheck } from 'react-icons/ai'
import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components";

const Services = () => {
  const [servicesDesign, setServicesDesign]
    = useState([
      { service: 'Можете сувать в любые места!', },
      { service: 'Самые современные виды!', },
      { id: Date.now(), service: 'Любые позы!', },
      { service: 'Могу согреть в любое время.', },
    ])


  const [servicesContent, setServicesContent]
    = useState([
      { service: 'За один раз беру только 40 палок ;)', },
      { service: 'Могу удаленно, в зависимости от ваших размеров.', },
      { service: 'Функция - "Блаженство за 2 минуты" (для занятых дядек).', },
      { service: 'Быстрая адаптивность', },
    ])
  return <section id="services">
    <AnimationOnScroll animateOnce={true} animateIn="animate__bounceInLeft">
      <div className="section__title">
        <h5>What I offer</h5>
        <h2>Services</h2>
      </div>
    </AnimationOnScroll>


    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            {servicesDesign.map((el, index) =>
              <li key={index + 'des'}><AiOutlineCheck className="service__list-icon" />
                <p>{el.service}</p>
              </li>
            )}
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Job</h3>
          </div>

          <ul className="service__list">
            {servicesContent.map((el, index) =>
              <li key={index + 'cont'}><AiOutlineCheck className="service__list0icon" />
                <p>{el.service}</p>
              </li>
            )}
          </ul>
        </article>
      </div>
    </AnimationOnScroll>
  </section >;
};

export default Services;
