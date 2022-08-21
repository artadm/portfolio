import React, { useState } from "react";
import './Services.css'
import { AiOutlineCheck } from 'react-icons/ai'
import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components";

const Services = () => {
  const [servicesDesign, setServicesDesign]
    = useState([
      { service: 'Building a design from scratch.', },
      { service: 'Modern and beautiful websites.', },
      { id: Date.now(), service: 'Beautiful and mesmerizing animations.', },
      { service: 'Any of your wishes.', },
    ])

  const [servicesWeb, setServicesWeb]
    = useState([
      { service: 'Landing layout.', },
      { service: 'Layout of online stores.', },
      { service: 'Sites with single page application', },
      { service: 'Clean and readable code with decomposition.', },
      { service: 'Always fast and high quality sites.', },
      { service: 'Server interaction.', },
      { service: 'Fixing broken code.', },
    ])

  const [servicesContent, setServicesContent]
    = useState([
      { service: 'Full time work.', },
      { service: 'Remote work.', },
      { service: 'High productivity.', },
      { service: 'Quick responses.', },
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
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            {servicesWeb.map((el, index) =>
              <li key={index + 'web'}><AiOutlineCheck className="service__list-icon" />
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
