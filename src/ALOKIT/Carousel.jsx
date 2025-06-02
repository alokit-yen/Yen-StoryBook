// Carousel.jsx
import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';

const Carousel = ({ items, type = 'image' }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: type === 'card' ? 3 : 1,
    slidesToScroll: 1,
    autoplay: type === 'testimonial',
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div className="carousel-slide" key={index}>
          {type === 'image' && <img src={item.src} alt={item.alt} className="carousel-image" />}
          {type === 'card' && (
            <div className="carousel-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          )}
          {type === 'testimonial' && (
            <div className="carousel-testimonial">
              <p className="quote">"{item.quote}"</p>
              <p className="author">— {item.author}</p>
            </div>
          )}
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
