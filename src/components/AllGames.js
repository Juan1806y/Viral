import React from "react";
import ArticleGame from "../components/ArticleGame";
import { graphql, useStaticQuery } from "gatsby";
import "../assets/css/main.css";

const query = graphql`
  query {
    allContentfulVideoGames(sort: { title: ASC }) {
      nodes {
        id
        title
        description {
            description
        }
        imagen {  
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllVideoGames = () => {
    const data = useStaticQuery(query);
    const videoGames = data.allContentfulVideoGames.nodes;
    return (
            <section className="proyects-list">
           { 
            videoGames.map((video) => <ArticleGame id={video.id} title={video.title} imagen={video.imagen} description={video.description}/>)
            }
            </section>
    )
  }

  export default AllVideoGames