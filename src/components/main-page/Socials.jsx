import React from 'react'
import './Socials.css'
export const Socials = () => {
  return (
    <section className="social py-3">
        <h3>Redes Sociales</h3>
        <div className='d-sm-flex just justify-content-sm-around justify-content-md-center'>
            <a href="https://www.facebook.com/transpjimmy"  className='mx-md-3'>
                <img src="/images/social-facebook.png" alt="Logo facebook Jimmy" />
            </a>
            <a href="https://www.instagram.com/expreso_jimmy/" className='mx-md-3'>
                <img src="/images/social-instagram.png" alt="Logo instagram Jimmy" />
            </a>
            <a href="https://www.linkedin.com/company/99486900/admin/feed/posts/" className='mx-md-3'>
                <img src="/images/social-linkedin.png" alt="Logo linkeding Jimmy" />
            </a>
            <a href="https://www.tiktok.com/@expresojimmy" className='mx-md-3'>
                <img src="/images/social-tiktok.png" alt="Logo tiktok Jimmy" />
            </a>
        </div>
    </section>
    
  )
}
