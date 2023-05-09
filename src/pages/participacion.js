import React from 'react'
import Layout from '../components/Layout'
import AllParticipaciones from '../components/AllParticipaciones'

const Participacion = () => {
  return (
    <Layout>
      <main className='page'>
        <AllParticipaciones></AllParticipaciones> 
      </main>
    </Layout>
  )
}

export default Participacion