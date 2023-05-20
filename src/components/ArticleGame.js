import React from "react";
import "normalize.css";
import "../assets/css/main.css";

const ArticleGame = ({ src, title, text }) => {
  return (
    <div className="article-game-card">
      <img src={src} alt="photo gamen" style={{ width: "100%" }} />
      <div className="article-game.container">
        <h4>
          <b>{title}</b>
        </h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ArticleGame;
