import React, { useState } from 'react'
// import '../JimmyApp.css'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
        <Link to="/" className='title'>
            <img src="/images/Jimmy_Logo.png" alt="Jimmy Logo" />
        </Link>
        <div className='menu' onClick={()=>{ setMenuOpen(!menuOpen)}}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen?"open":""}>
            <li>
                <NavLink to="/corporative">Corporativo</NavLink>
            </li>
            <li>
                <NavLink to="/campain">Campaña</NavLink>
                
            </li>
            <li>
                <NavLink to="/contact">Contacto</NavLink>
            </li>
            <li>
                <NavLink to="/termsandconditions">Mostrar terminos y condiciones</NavLink>
            </li>
        </ul>
    </nav>
  )
}
