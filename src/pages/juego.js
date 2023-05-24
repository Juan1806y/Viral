import Layout from "../components/Layout";
import React from 'react'
import { useLocation } from "@reach/router"

const Juego = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search)
  const param1 = params.get("param1")
  consol.log(param1)
  return (
    <Layout>
      <main className="page">
        <div className="trayectoria">
          <h1>Juego 1</h1>  
        </div>
      </main>
    </Layout>
  );
};

export default Juego;