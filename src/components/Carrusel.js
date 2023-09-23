import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from '../assets/img/trayectoria1.png';
import Image2 from '../assets/img/trayectoria2.jpg';
import Image3 from '../assets/img/trayectoria3.png';
import Image4 from '../assets/img/trayectoria4.jpg';
import Image5 from '../assets/img/trayectoria5.png';

const Carrusel = () => {
  const images = [
    {
      src: Image1,
      alt: "Imagen 1"
    },
    {
      src: Image2,
      alt: "Imagen 2"
    },
    {
      src: Image3,
      alt: "Imagen 3"
    },
    {
      src: Image4,
      alt: "Imagen 4"
    },
    {
      src: Image5,
      alt: "Imagen 5"
    }
  ];
  
  const dates = [
    "2015 - 2016",
    "2017 - Actual",
    "2015 - 2018",
    "2019",
    "2020 - 2021"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    style: {
      maxWidth: 600
    }
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={image.alt} />
          <p>{dates[index]}</p>
        </div>
      ))}
    </Slider>
  );
};

export default Carrusel;
