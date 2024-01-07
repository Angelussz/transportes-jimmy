import React from 'react'
import "./JimmyApp.css"
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import {Campain, Contact, Corporative, Home, TermsAndConditions} from './components/pages'
import { Footer } from './components/Footer'
export const JimmyApp = () => {
  return (
    <div className='JimmyApp'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/corporative' element={<Corporative />} />
        <Route path='/campain' element={<Campain />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/termsandconditions' element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </div>
  )
}
