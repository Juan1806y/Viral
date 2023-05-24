import React from "react";
import "normalize.css";
import "../assets/css/main.css";
import { Link } from "gatsby";
import {GatsbyImage} from 'gatsby-plugin-image'

const ArticleGame = ({ image, title, text }) => {
  return (
    <div className="article-game-card">
      <Link to="/juego1">
        <GatsbyImage image={image} alt="photo gamen" className="article-game-img" />
      </Link>
      <div className="article-game-container">
        <h4>
          <b>{title}</b>
        </h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ArticleGame;
