import React from "react";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";
import AllGames from "../components/AllGames"

const Proyectos = () => {
  return (
    <Layout>
      <main className="page">
        <Gallery />
        <section className="about-page3">
          <article>
            <h3>Listado de proyectos</h3>
            <p>
              Aquí podrás conocer más acerca de las aplicaciones realizadas por
              el semillero.
            </p>
          </article>
        </section>
        <AllGames></AllGames>
      </main>
    </Layout>
  );
};

export default Proyectos;
