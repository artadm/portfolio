import React, { useState } from "react";
import './Testimonials.css'
import AVA1 from '../../assets/avatar1.jpg'
import AVA2 from '../../assets/avatar2.jpg'
import AVA3 from '../../assets/avatar3.jpg'
import AVA4 from '../../assets/avatar4.jpg'
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
  const [clients, setClients] = useState([
    { id: Date.now(), img: AVA1, title: 'Somebody', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro odit harum ipsam rem placeat nobis repellat, sit a ullam inventore molestias eos atque error adipisci voluptatum nulla vitae molestiae blanditiis.' },
    { id: Date.now(), img: AVA2, title: 'Somebody', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro odit harum ipsam rem placeat nobis repellat, sit a ullam inventore molestias eos atque error adipisci voluptatum nulla vitae molestiae blanditiis.' },
    { id: Date.now(), img: AVA3, title: 'Somebody', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro odit harum ipsam rem placeat nobis repellat, sit a ullam inventore molestias eos atque error adipisci voluptatum nulla vitae molestiae blanditiis.' },
    { id: Date.now(), img: AVA4, title: 'Somebody', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro odit harum ipsam rem placeat nobis repellat, sit a ullam inventore molestias eos atque error adipisci voluptatum nulla vitae molestiae blanditiis.' },
  ])


  return <section id="testimonials">
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>

    <Swiper
      className="container testimonials__container"
      modules={[Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {clients.map(el =>
        <SwiperSlide key={`client ${el.id}`} className="testimonial">
          <div className="client__avatar">
            <img src={el.img} alt={'img'} />
          </div>
          <h5 className="client__name">{el.name}</h5>
          <small className="client__review">{el.text}</small>
        </SwiperSlide>
      )}
    </Swiper>
  </section>;
};

export default Testimonials;
