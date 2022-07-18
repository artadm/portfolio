import React from "react";
import './Portfolio.css'
import { useState } from "react";
import img1 from '../../assets/portfolio1.png'
import img2 from '../../assets/portfolio2.png'
import img3 from '../../assets/portfolio3.png'
import img4 from '../../assets/portfolio4.png'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.png'


const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([
    { id: 'portfolio1', title: 'This is a portfolio title!', img: img1, link: 'https://artadm.github.io/harvardKG/', gitLink: 'https://github.com/artadm/harvardKG' },
    { id: 'portfolio2', title: 'This is a portfolio title!', img: img2, link: 'https://artadm.github.io/MyBlock/', gitLink: 'https://github.com/artadm/MyBlock' },
    { id: "portfolio3", title: 'This is a portfolio title!', img: img3, link: 'https://artadm.github.io/5-65-aksuu/', gitLink: 'https://github.com/artadm/5-65-aksuu/' },
    { id: "portfolio4", title: 'This is a portfolio title!', img: img4, link: 'https://artadm.github.io/workcomp/', gitLink: 'https://github.com/artadm/workcomp/' },
    { id: "portfolio5", title: 'This is a portfolio title!', img: img5, link: ' https://artadm.github.io/Kembang-Flower-Mantap/', gitLink: 'https://github.com/artadm/Kembang-Flower-Mantap/' },
    { id: "portfolio6", title: 'This is a portfolio title!', img: img6, link: 'https://artadm.github.io/portfolio/', gitLink: 'https://github.com/artadm/portfolio/' },
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
