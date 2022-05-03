import React from "react";
import "./About.css";
import Me from '../../assets/me-about.jpg'
import { BsAward } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineFolderOpen } from 'react-icons/ai'

const About = (props) => {
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
            <h5>Experience</h5>
            <small>3+ years working...</small>
          </div>

          <div className="about__card">
            <FiUsers className="about__icon"></FiUsers>
            <h5>Clients</h5>
            <small>10+</small>
          </div>

          <div className="about__card">
            <AiOutlineFolderOpen className="about__icon"></AiOutlineFolderOpen>
            <h5>Projects</h5>
            <small>100+</small>
          </div>
        </div>

        <div className="about__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellendus similique, consectetur adipisci atque iste voluptatibus? Quo officiis expedita beatae voluptates voluptatem, praesentium illo, rem, corporis modi enim accusamus doloremque!
        </div>

        <a href="#contacts" className="btn btn-primary">Let's talk</a>
      </div>
    </div>
  </section>;
};

export default About;
