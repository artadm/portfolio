import React from "react";
import './Portfolio.css'
import { useState } from "react";
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'


const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([
    { id: 'portfolio1', title: 'This is a portfolio title!', img: img1, gitLink: 'https://github.com', link: 'https://dribbble.com/Alien_pixels', gitLink: 'https://github.com' },
    { id: 'portfolio2', title: 'This is a portfolio title!', img: img2, gitLink: 'https://github.com', link: 'https://dribbble.com/Alien_pixels', gitLink: 'https://github.com' },
    { id: "portfolio3", title: 'This is a portfolio title!', img: img3, gitLink: 'https://github.com', link: 'https://dribbble.com/Alien_pixels', gitLink: 'https://github.com' },
    { id: "portfolio4", title: 'This is a portfolio title!', img: img4, gitLink: 'https://github.com', link: 'https://dribbble.com/Alien_pixels', gitLink: 'https://github.com' },
    { id: "portfolio5", title: 'This is a portfolio title!', img: img5, gitLink: 'https://github.com', link: 'https://dribbble.com/Alien_pixels', gitLink: 'https://github.com' },
    { id: "portfolio6", title: 'This is a portfolio title!', img: img6, link: 'https://dribbble.com/Alien_pixels', gitLink: 'https://github.com' },
  ])
  return (<section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>


    <div className="container portfolio__container">
      {portfolio.map(el =>
        <article key={el.id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={el.img} alt="img" />
          </div>
          <h3>{el.title}</h3>
          <div className="portfolio__item-cta">
            <a href={el.gitLink} target="_blank" className="btn">GitHub</a>
            <a href={el.link} target='_blank' className="btn btn_primary">Live Demo</a>
          </div>
        </article>
      )}
    </div>
  </section>);
};

export default Portfolio;
