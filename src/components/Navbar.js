import React,{useState} from 'react'
import { Link } from 'gatsby'
import {FiAlignJustify} from "react-icons/fi"
import logo from '../assets/img/logo_v2.png'

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className='navbar'>
        <div className='nav-center'>
            <div className='nav-header'>
                <Link to="/">
                    <img src={logo} alt="Logo Viral"/>
                </Link>
                <button className="nav-btn" onClick={() => setShow(!show)}>
                    <FiAlignJustify/>
                </button>
            </div>
            <div className={show ? 'nav-links show-links' : "nav-links"}>
                <Link to="/" className="nav-link" activeClassName='active-link' onClick={() => setShow(false)}>
                    Home
                </Link>
                <Link to="/about" className="nav-link" activeClassName='active-link' onClick={() => setShow(false)}>
                    Acerca De
                </Link>
                <Link to="/participacion" className="nav-link" activeClassName='active-link' onClick={() => setShow(false)}>
                    Participación
                </Link>
                <Link to="/proyectos" className="nav-link" activeClassName='active-link' onClick={() => setShow(false)}>
                    Proyectos
                </Link>
                <Link to="/contact" className="nav-link" activeClassName='active-link' onClick={() => setShow(false)}>
                    Contacto
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
