import React from "react"
import {graphql} from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import Layout from '../components/Layout'

const VideoGamesTemplate =({data}) =>{

    const{title, description:{description}, imagen,} = data.contentfulVideoGames     
    const pathToImage = getImage(imagen)
    return(
    <Layout>
        <main className="page">
            <div className="trayectoria">
                <GatsbyImage image={pathToImage} alt={title} className='about-img'>
                </GatsbyImage>
                <article className='proyects-info'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </article>
            </div>
        </main>
    </Layout>
    )
}

export const query = graphql `
query getSigleVideoGames($title: String) {
    contentfulVideoGames(title: {eq: $title}) {
        title
        description {
            description
        }
        imagen {
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
    }
}`

export default VideoGamesTemplate