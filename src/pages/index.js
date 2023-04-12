import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function Home() {
  return(
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage src="../assets/img/Banner.jfif" alt="Intro" className="hero-img" placeholder="tracedSVG" layout="fullWidth"/>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Viral</h1>
              <h4>Semillero de Investigación</h4>
            </div>
          </div>
        </header>
        <section className="about-page">
          <article>
            <h2>Objetivos</h2>
              <p>
                Ofrecer un espacio para que los estudiantes puedan aprender y desarrollar juegos, mientras llevan a cabo un proceso investigativo.
              </p>
              <Link to="/about" className="btn">
                Más información
              </Link>   
          </article>
            <StaticImage
              src="../assets/img/home.jpeg"
              alt="Imagen de Inicio"
              className="home-img"
              placeholder="blurred"
            />
        </section>
        <section className="about-page2">
          <article>
            <h3>Objetivos Específicos:</h3>
                <ul>
                  <li>- Intercambiar conocimiento para que personas con experiencia en el desarrollo de videojuegos compartan con personas que comienzan esta labor.</li>
                  <li>- Fomentar en los participantes el desarrollo de habilidades básicas de investigación en temas relacionados con el desarrollo de videojuegos.</li>
                  <li>- Organizar capacitaciones en desarrollo de videojuegos y mundos virtuales </li>
                </ul>       
          </article>
        </section>
          <div className="container">
            <div className="mision">
              <h2>Misión</h2>
              <p>
                Servir de plataforma para la formación investigativa de los estudiantes en la aplicación de videojuegos y realidad mixta con fines académicos y sociales. 
              </p>
              <p>
                Esto orientado a fortalecer el programa de Ingeniería de Sistemas en su compromiso alta calidad. 
              </p>
            </div>
            <div className="vision">
              <h2>Visión</h2>
              <p>
                El Semillero de Investigación VIRAL será reconocido regional, nacional e internacionalmente como pionero en la formación en investigación aplicada al uso de los videojuegos y realidad mixta con fines sociales y académicos. 
              </p>
            </div>
          </div>
      </main>
    </Layout>
  )
}
