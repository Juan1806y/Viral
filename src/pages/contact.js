import React from 'react'
import Layout from '../components/Layout'
import SocialIcons from '../components/SocialIcons'

function Contact() {
  return (
    <Layout>
      <main className='page'>
        <section className='contact-page'>
          <article className="contact-info">
            <h3>¿Necesitas más información?</h3>
            <p>Puedes consultar más información a través de nuestras redes sociales y medios de nuestros líderes principales disponibles.</p>
            <p>O también contactarnos por medio del siguiente formulario con sus preguntas pertinentes.</p>
            <SocialIcons></SocialIcons>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Nombre:</label>
                <input type="text" name="name" id="name"/>
              </div>
              <div className='form-row'>
                <label htmlFor="email">Correo Electrónico:</label>
                <input type="text" name="email" id="email"/>
              </div>
              <div className='form-row'>
                <label htmlFor='message'>Mensaje:</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Enviar  
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
