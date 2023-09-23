import React from 'react'
import {Link} from 'gatsby' 
import {GatsbyImage} from 'gatsby-plugin-image'
import slugify from 'slugify'

const ListaParticipaciones = ({proyects=[]}) => {
  return <div className='proyects-list contenedor-ventanas'>{
    proyects.map((proyect)=>{
        const {id, title, anio, imagen} = proyect;
        const slug = slugify(title, { lower:true })
        return<Link key={id} to={`/${slug}`} className='proyects'>
          <GatsbyImage image={imagen.gatsbyImageData} className='proyects-img' alt={title} />
          <div>
            <h5>{title}</h5>
            <p>Año : {anio}</p>
          </div>
        </Link>
    })
    }</div>
  
}

export default ListaParticipaciones

