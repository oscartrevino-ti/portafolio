import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h4>Hi! My name is</h4>
        <h1>Oscar Treviño</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA/>
        <HeaderSocial/>  

        <div className="me">
          <img className='me__image' src={ME} alt="me" /> 
        </div>

        <a href="#about" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header