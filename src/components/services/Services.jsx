import React, { useState } from "react";
import './Services.css'
import { AiOutlineCheck } from 'react-icons/ai'

const Services = () => {
  const [servicesDesign, setServicesDesign]
    = useState([
      { id: Date.now(), service: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', },
      { id: Date.now(), service: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', },
      { id: Date.now(), service: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', },
      { id: Date.now(), service: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', },
      { id: Date.now(), service: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', },
    ])

  const [servicesWeb, setServicesWeb]
    = useState([
      { id: Date.now(), service: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', },
      { id: Date.now(), service: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', },
      { id: Date.now(), service: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', },
      { id: Date.now(), service: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', },
      { id: Date.now(), service: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', },
      { id: Date.now(), service: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', },
      { id: Date.now(), service: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', },
      { id: Date.now(), service: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', },
    ])

  const [servicesContent, setServicesContent]
    = useState([
      { id: Date.now(), service: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', },
      { id: Date.now(), service: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', },
      { id: Date.now(), service: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', },
      { id: Date.now(), service: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', },
      { id: Date.now(), service: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', },
      { id: Date.now(), service: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', },
    ])
  return <section id="services">
    <h5>What I offer</h5>
    <h2>Services</h2>

    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>UI/UX Design</h3>
        </div>

        <ul className="service__list">
          {servicesDesign.map(el =>
            <li key={el.id}><AiOutlineCheck className="service__list-icon" />
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
          {servicesWeb.map(el =>
            <li key={el.id}><AiOutlineCheck className="service__list-icon" />
              <p>{el.service}</p>
            </li>
          )}
        </ul>
      </article>

      <article className="service">
        <div className="service__head">
          <h3>Content Creation</h3>
        </div>

        <ul className="service__list">
          {servicesContent.map(el =>
            <li key={el.id}><AiOutlineCheck className="service__list0icon" />
              <p>{el.service}</p>
            </li>
          )}
        </ul>
      </article>
    </div>
  </section>;
};

export default Services;
