import "normalize.css"
import "../assets/css/main.css"

const ArticleGame = ({ image, title, text}) => {
    return (
        <div className="article-game-card">
        <img src={image} alt="photo gamen" style="width:100%"/>
        <div className="article-game.container">
          <h4><b>{title}</b></h4>
          <p>{text}</p>
        </div>
      </div>
    )
  }
  
  export default ArticleGame
