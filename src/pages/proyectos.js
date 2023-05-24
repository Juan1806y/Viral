import React from "react";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";
import ArticleGame from "../components/ArticleGame";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query {
    allContentfulVideoGames(sort: { title: ASC }) {
      nodes {
        id
        title
        description {
          internal {
            content
          }
        }
        imagen {  
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

const Proyectos = () => {
  const data = useStaticQuery(query);
  const proyects = data.allContentfulVideoGames.nodes;
  return (
    <Layout>
      <div className="page">
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
        <section className="container-grid">
          {proyects.map((proyect) => {
            const { id, title, description, imagen } = proyect;
            return (
              <ArticleGame
                key={id}
                image={imagen.gatsbyImageData}
                title={title}
                text={description.internal.content}
              />
            );
          })}
        </section>
      </div>
    </Layout>
  );
};

export default Proyectos;
