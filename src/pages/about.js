import React from 'react'
import Layout from '../components/Layout'
import ContainersAbout from '../components/ContainersAbout'
import UnityImage from '../assets/img/icono-unity.png'
import Blender from '../assets/img/icono-blender.png'
import Pixelart from '../assets/img/icono-pixelArt.png'
import GDD from '../assets/img/icono-GDD.png'
import TresD from '../assets/img/icono-3d.png'
import Unreal from '../assets/img/icono-unreal.png'
import Playground from '../assets/img/icono-playground.png'


const about = () => {
  return (
    <Layout>
       <main className="page">
        <section className="about-page3">
          <article>
            <h3>¿Qué se ha hecho?</h3>
              <p>Aquí podrás conocer más acerca de las capacitaciones y asesorías brindadas por el semillero, orientadas al aprendizaje para el desarrollo de videojuegos.</p> 
          </article>
        </section>
        <section>
          <ContainersAbout 
            titulo = "Capacitación 2D en Unity para principiantes"  
            asesor = "Juan Pablo Ariza"
            descripcion = "Unity 2D" 
            imagen = {UnityImage}
            >
          </ContainersAbout>
          <ContainersAbout 
            titulo = "Capacitación en modelado de Blender"  
            asesor = "Juan Pablo Cárdenas"
            descripcion = "Blender" 
            imagen = {Blender}
            >
          </ContainersAbout>
          <ContainersAbout 
            titulo = "Capacitación de pixelart "  
            asesor = "Juan Pablo Cárdenas"
            descripcion = "Blender" 
            imagen = {Pixelart}
            >
          </ContainersAbout>
          <ContainersAbout 
            titulo = "Capacitación de desarrollo de GDD"  
            asesor = "Juan Pablo Cárdenas"
            descripcion = "Game Desing" 
            imagen = {GDD}
            >
          </ContainersAbout>
          <ContainersAbout 
            titulo = "Capacitación de interactividad y entornos 3D "  
            asesor = "Yesid Jimenez"
            descripcion = "Entorno 3D" 
            imagen = {TresD}
            >
          </ContainersAbout>
          <ContainersAbout 
            titulo = "Capacitación de introducción a Unreal engine 3D"  
            asesor = "Yesid Jimenez"
            descripcion = "Unreal" 
            imagen = {Unreal}
            >
          </ContainersAbout>
          <ContainersAbout 
            titulo = "Capacitación de playground Unity 2D"  
            asesor = "Andrés Niño Peñaranda"
            descripcion = "Playground" 
            imagen = {Playground}
            >
          </ContainersAbout>
        </section>
      </main>
    </Layout>
  )
}

export default about
