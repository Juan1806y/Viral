import React from "react";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";
import ArticleGame from "../components/ArticleGame";
import Image1 from "../assets/img/Imagen1.jpg";
import Image2 from "../assets/img/Imagen2.jpg";
import Image3 from "../assets/img/Imagen3.png";
import Image4 from "../assets/img/Imagen4.jpg";
import Image5 from "../assets/img/Imagen5.jpg";

const Proyectos = () => {
  return (
    <Layout>
      <div className="page">
        <Gallery />
        <ArticleGame
          src={Image1}
          title={"Cap Trop"}
          text={"La descripcion del videojuego"}
        />
        <ArticleGame
          src={Image2}
          title={"RECYCLOMAN"}
          text={"La descripcion del videojuego"}
        />
        <ArticleGame
          src={Image3}
          title={"Fractio"}
          text={"La descripcion del videojuego"}
        />
        <ArticleGame
          src={Image4}
          title={"Viral Space"}
          text={"La descripcion del videojuego"}
        />
        <ArticleGame
          src={Image5}
          title={"FunMathS"}
          text={"La descripcion del videojuego"}
        />
      </div>
    </Layout>
  );
};

export default Proyectos;
