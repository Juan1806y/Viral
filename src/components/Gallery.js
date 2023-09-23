import React from "react";
import "normalize.css";
import "../assets/css/main.css";
import Image1 from "../assets/img/Imagen1.jpg";
import Image2 from "../assets/img/Imagen2.jpg";
import Image3 from "../assets/img/Imagen3.png";
import Image4 from "../assets/img/Imagen4.jpg";
import Image5 from "../assets/img/Imagen5.jpg";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <section className="gallery-body">
        <img className="gallery-image" src={Image1} alt="img1" />
        <img className="gallery-image" src={Image2} alt="img2" />
        <img className="gallery-image" src={Image3} alt="img3" />
        <img className="gallery-image" src={Image4} alt="img4" />
        <img className="gallery-image" src={Image5} alt="img5" />
      </section>
    </div>
  );
};

export default Gallery;
