import React from 'react'
import '../portfolio/Portfolio'
import IMG1 from '../../assets/proyect1.png'
import IMG2 from '../../assets/proyect2.png'
import IMG3 from '../../assets/proyect3.png'
import IMG4 from '../../assets/proyect4.png'
import {FaReact} from 'react-icons/fa'

function Proyects() {
    return (
        <section id='portfolio' className='section'>
        <h5>My Recent Proyects</h5>
        <h2>Proyects</h2>
  
        <div className="container portfolio__container">
  
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG1} alt="Image"/>
            </div>
            
              <h3>App de Tareas</h3>    
                <div className="portfolio__item-cta">                  
                  <a href="https://oscartrevino-ti.github.io/react-task-app/" className='btn btn-portfolio' target='_blank'>Ver Proyecto</a>
                </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG2} alt="Image"/>
            </div>
              <h3>Calculadora</h3>
                <div className="portfolio__item-cta">
                  <a href="https://oscartrevino-ti.github.io/react-calculator/" className='btn btn-portfolio' target='_blank'>Ver Proyecto</a>
                </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG3} alt="Image"/>
            </div>
              <h3>App de Clima</h3>
                <div className="portfolio__item-cta">
                  <a href="https://oscartrevino-ti.github.io/react-weather-app/" className='btn btn-portfolio' target='_blank'>Ver Proyecto</a>
                </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG4} alt="Image"/>
            </div>
              <h3>Calculor de Hipotecas</h3>
                <div className="portfolio__item-cta">
                  <a href="https://oscartrevino-ti.github.io/tana-mortgage/" className='btn btn-portfolio' target='_blank'>Ver Proyecto</a>
                </div>
          </article>
  
        </div>
      </section>
    )
}

export default Proyects