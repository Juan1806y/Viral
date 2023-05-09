import React from 'react'
import ListaParticipaciones from "./ListaParticipaciones"
import { graphql,useStaticQuery } from 'gatsby'

const query = graphql`
  query {
    allContentfulProyects(sort: {title: ASC}) {
      nodes {
        id
        title
        anio
        imagen {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllParticipaciones = () => {
  const data =useStaticQuery(query)
  const proyects = data.allContentfulProyects.nodes
  return (
    <div>
      <section>
        <ListaParticipaciones proyects={proyects}/>
      </section>
    </div>
  )
}

export default AllParticipaciones
