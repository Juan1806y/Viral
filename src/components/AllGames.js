import React from "react";
import ArticleGame from "../components/ArticleGame";
import { graphql, useStaticQuery } from "gatsby";

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
        <div>
            <section>
                <ArticleGame videoGames = {videoGames}/>
            </section>
        </div>
    )
  }

  export default AllVideoGames