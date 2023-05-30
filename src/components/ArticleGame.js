import React from "react";
import "normalize.css";
import "../assets/css/main.css";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import slugify from "slugify";

const ArticleGame = ({ id, title, imagen, description }) => {
  const slug = slugify(title, { lower: true });

  return (
    <div className="article-game-card proyects">
      {
        <Link key={id} to={`/${slug}`} className="">
          <GatsbyImage
            image={imagen.gatsbyImageData}
            alt={title}
            className="article-game-img"
          />
          <div className="">
            <b>{title}</b>
          </div>
        </Link>
      }
    </div>
  );
};

export default ArticleGame;
