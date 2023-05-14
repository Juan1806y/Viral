import React from 'react'
import Layout from '../components/Layout'
import AllParticipaciones from '../components/AllParticipaciones'

const Participacion = () => {
  return (
    <Layout>
      <main className='page'>
      <section className="about-page4">
          <article>
            <h3>Participaciones del Semillero.</h3>
              <p>Aquí puedes encontrar más información acerca de la participación del semillero en los distintos eventos y competencias a lo largo de su trayectoria.</p> 
          </article>
        </section>       
        <AllParticipaciones></AllParticipaciones> 
      </main>
    </Layout>
  )
}

export default Participacion