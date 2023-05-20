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
        <section className="about-page3">
          <article>
            <h3>Listado de proyectos</h3>
              <p>Aquí podrás conocer más acerca de las aplicaciones realizadas por el semillero.</p> 
          </article>
        </section>
        <section className="container-grid">
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
        </section>
      </div>
    </Layout>
  );
};

export default Proyectos;
