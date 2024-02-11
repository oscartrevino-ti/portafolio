import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio7.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

function Portfolio() {
  return (
    <section id='portfolio' className='section'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">


      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="Image"/>
          </div>
            <h3>Ecommerce A&B</h3>
              <div className="portfolio__item-cta">
                <a href="https://ass-back.webflow.io/" className='btn btn-portfolio' target='_blank'>Visitar Sitio</a>
              </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="Image"/>
          </div>
            <h3>Blog Hyped Plus</h3>
              <div className="portfolio__item-cta">
                <a href="https://www.hypedplus.com/" className='btn btn-portfolio' target='_blank'>Visitar Sitio</a>
              </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Image"/>
          </div>
            <h3>MotoBunker</h3>
              <div className="portfolio__item-cta">
                <a href="https://www.motobunker.mx/" className='btn btn-portfolio' target='_blank'>Visitar Sitio</a>
              </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Image"/>
          </div>
            <h3>Somos Cripto</h3>
              <div className="portfolio__item-cta">
                <a href="https://www.somoscripto.io/" className='btn btn-portfolio' target='_blank'>Visitar Sitio</a>
              </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Image"/>
          </div>
            <h3>Tu Hipoteca Fácil</h3>
              <div className="portfolio__item-cta">
                <a href="https://www.tuhipotecafacil.com/" className='btn btn-portfolio' target='_blank'>Visitar Sitio</a>
              </div>
        </article>


        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="Image"/>
          </div>
            <h3>Astrobutch</h3>
              <div className="portfolio__item-cta">
                <a href="https://www.astrobutch.mx/" className='btn btn-portfolio' target='_blank'>Visitar Sitio</a>
              </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio