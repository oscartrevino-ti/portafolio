import React from 'react'
import './footer.css'

import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Oscar Treviño</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/oscar-gerardo-trevi%C3%B1o-reyna-85a5971a0/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/oscartrevino-ti" target='_blank'><FaGithub/></a>
      </div>

      <div className="footer_copiright">
      <small>&copy; OTR </small>
      </div>
    </footer>
  )
}

export default Footer