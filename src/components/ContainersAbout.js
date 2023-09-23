import React from 'react'

function ContainersAbout(props){
  return (
    <div className="container-box">
      <div className="container-image-box">
        <img src={props.imagen} alt={props.descripcion}></img>
      </div>
      <div className="container-content-box">
        <h2>{props.titulo}</h2>
        <h3>{props.asesor}</h3>
      </div>
    </div>
  )
}

export default ContainersAbout;
