import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaLaptopCode} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about' className='section'>
      <h5>My Work</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaLaptopCode className='about__icon'/>
              <h5>Experiencia</h5>
              <small>+2 Años </small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Proyectos</h5>
              <small>+20 proyectos</small>
            </article>


          </div>
            <p>
            Hola, soy un Desarrollador Web Frontend de Monterrey actualmente trabajando en una agencia de marketing como encargado en el área de TI, creación, mantenimiento y optimización de sitios web utilizando HTML, CSS, JS, PHP. Corrección y mantenimiento al equipo de cómputo Hardware y Software<br/> Herramientas: Visual Studio Code, Visual Studio, Webflow, Wordpress, Shopify, Woocomerce, Bootstrap, Servidores web, Figma, Mailchimp, Cpanel, Slack, Jira.
           </p>

            <a href="#contact" className='btn btn-primary'>Contáctame</a>
    

        </div>
      </div>
    </section>
  )
}

export default About