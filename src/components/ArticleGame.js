import React from "react";
import "normalize.css";
import "../assets/css/main.css";
import { Link } from "gatsby";
import {GatsbyImage} from 'gatsby-plugin-image'

const ArticleGame = ({ id, image, title, text }) => {
  return (
    <div className="article-game-card">
      <Link key={id} to={`/juego`}>
        <GatsbyImage image={image} alt={title} className="article-game-img" />
      </Link>
      <div className="article-game-container">
        <h4>
          <b>{title}</b>
        </h4>
        <div className="article-description">{text}</div>
      </div>
    </div>
  );
};

export default ArticleGame;
