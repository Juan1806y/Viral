import React from "react";
import "normalize.css";
import "../assets/css/main.css";
import { Link } from "gatsby";
import {GatsbyImage} from 'gatsby-plugin-image'
import slugify from "slugify";

const ArticleGame = ({videoGames=[]}) => {
  return <div className="">{
    videoGames.map((videoGames)=>{
      const{id, title, imagen, description} = videoGames;
      const slug = slugify(title, {lower:true})
      return<Link key={id} to={`/${slug}`} className="">
        <GatsbyImage image={imagen.gatsbyImageData} alt={title} className="" />
        <div className="">
          <b>{title}</b>
        </div>
      </Link>


    })

  }</div>

}

export default ArticleGame;
