import React from 'react'
import Layout from '../components/Layout'

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <section>
          <h1>Error: 404</h1>
          <h3>Página no encontrada</h3>
        </section>
      </main>
    </Layout>
  )
}

export default Error
