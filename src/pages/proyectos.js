import React from "react";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";
import ArticleGame from "../components/ArticleGame";

const Proyectos = () => {
  return (
    <Layout>
      <Gallery />
      <ArticleGame
        image={
          "https://cdn.dribbble.com/users/217475/screenshots/6322042/video-game.png?compress=1&resize=400x300&vertical=top"
        }
        title={"El titulo 1"}
        text={"La descripcion del videojuego"}
      />
      <ArticleGame
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIgF3wic3eAlRqAlSjDXu4m22W2Z6R5l5rQg&usqp=CAU"
        }
        title={"El titulo 2"}
        text={"La descripcion del videojuego"}
      />
      <ArticleGame
        image={
          "https://www.seekpng.com/png/detail/208-2086671_video-game-icons-video-game-character-icon.png"
        }
        title={"El titulo 3"}
        text={"La descripcion del videojuego"}
      />
      <ArticleGame
        image={
          "https://www.kindpng.com/picc/m/229-2297893_icon-packs-vector-video-game-icons-png-transparent.png"
        }
        title={"El titulo 4"}
        text={"La descripcion del videojuego"}
      />
    </Layout>
  );
};

export default Proyectos;
