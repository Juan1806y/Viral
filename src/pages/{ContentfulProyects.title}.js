import React from 'react'
import {graphql} from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import { FaCalendar } from 'react-icons/fa';

const ParticipacionTemplate = ({data}) => {
  const {title, anio, description:{description}, imagen,} = data.contentfulProyects
  const pathToImage = getImage(imagen)
  return (
    <Layout>
    <main className='page'>
      <div className='participacion-page'>
        {/* hero */}
        <section className='proyects-hero'>
          <GatsbyImage image={pathToImage} alt={title} className='about-img'>
          </GatsbyImage>
          <article className='proyects-info'>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className='proyects-icons'>
              <article>
                <FaCalendar></FaCalendar>
                <h5>Año</h5>
                <p>{anio}</p>  
              </article>
            </div>
          </article>
        </section>
        {/*rest of the content*/}
      </div>
    </main>
    </Layout>
  )
}

export const query = graphql `
query getSingleProyects($title: String) {
  contentfulProyects(title: {eq: $title}) {
    title
    anio
    description {
      description
    }
    imagen {
      gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
    }
  }
}`

export default ParticipacionTemplate
