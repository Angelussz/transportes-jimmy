import React from 'react'
import './Footer.css'
import { Link, NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="footer py-2">
        <Link to="/" className='title'>
            <img src="/images/Jimmy_Logo.png" alt="Jimmy Logo" />
        </Link>
        <p>Expreson JIMMY © Todos los derechos reservados</p>
        <NavLink to="/termsandconditions">Terminos y condiciones</NavLink>
        
        
    </footer>
  )
}
