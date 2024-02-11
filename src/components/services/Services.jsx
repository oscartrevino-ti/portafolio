import React from 'react'
import './services.css'
import {AiFillCheckCircle} from 'react-icons/ai'

function Services() {
  return (
    <section id='services' className='section'>
      <h5>My Services</h5>
      <h2>Services</h2>
      <div className="container services__container">

        <article className='service'>
          <div className="service__head">
            <h3>Soporte Técnico</h3>
          </div>
          <ul className='service__list'>
            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <p>Diagnostico de fallas en el equipo.</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <p>Actualización de Sistema Operativo / Programas.</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <p>Formateo en equipo de computo.</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <p>Instalación de programas.</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <p>Paquetería Office.</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <p>Paquetería Adobe.</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <p>Instalación de Antivirus.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Desarrollo Web</h3>
          </div>
          <ul className='service__list'>
            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <p>Desarrollo receptivo Landing Pages, Blogs, Ecommerce.</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <p>Certificados SSL.</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <p>Optimización de SEO .</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <p>Formularios de contacto.</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <p>Implementación de Google Analytics.</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <p>Hosting y Dominio para el sitio web.</p>
            </li>
          </ul>
        </article>



      </div>
    </section>
  )
}

export default Services