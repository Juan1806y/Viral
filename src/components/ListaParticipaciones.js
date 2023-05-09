import React from 'react'
import {Link} from 'gatsby' 
import {GatsbyImage} from 'gatsby-plugin-image'

const ListaParticipaciones = ({proyects=[]}) => {
  return <div className='proyects-list'>{
    proyects.map((proyect)=>{
        console.log(proyect.imagen);
        const {id, title, anio, imagen} = proyect;
        return<Link key={id} to={`/${title}`} className='proyects'>
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

