import React from "react";
import "./Experience.css";
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components";

const Experience = () => {
  const [frontend, setFrontend] = useState([
    { id: Date.now(), language: 'HTML', level: 'Experienced' },
    { id: Date.now(), language: 'CSS', level: 'Experienced' },
    { id: Date.now(), language: 'JavaScript', level: 'Intermediate' },
    { id: Date.now(), language: 'React Js', level: 'Intermediate' },
    { id: Date.now(), language: 'Redux', level: 'Experienced' },
    { id: Date.now(), language: 'TypeScript', level: 'Experienced' },
    { id: Date.now(), language: 'Wordpress', level: 'Experienced' },
    { id: Date.now(), language: 'Axios, Thunk', level: 'Intermediate' },
    { id: Date.now(), language: "Vue, VueX", level: 'Intermediate' },
    { id: Date.now(), language: 'Angular 9', level: 'Beginner' },
  ])

  const [backend, setBackend] = useState([
    { id: Date.now(), language: 'C/C++', level: 'Beginner' },
    { id: Date.now(), language: 'Node Js', level: 'Beginner' },
    { id: Date.now(), language: 'PHP', level: 'Beginner' },
    { id: Date.now(), language: 'Python', level: 'Beginner' },

  ])
  return (<section id="experience">
    <AnimationOnScroll animateOnce={true} animateIn="animate__bounceInLeft">
      <div className="section__title">
        <h5>What Skills I have</h5>
        <h2>My experience</h2>
      </div>
    </AnimationOnScroll>

    <div className="container experience__container">
      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontend.map(el =>
              <article key={el.language} className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div> <h4>{el.language}</h4>
                  <small className="text-light">{el.level}</small></div>

              </article>
            )}
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backend.map(el =>
              <article key={el.language} className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div> <h4>{el.language}</h4>
                  <small className="text-light">{el.level}</small></div>
              </article>
            )}
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  </section>);
};

export default Experience;
