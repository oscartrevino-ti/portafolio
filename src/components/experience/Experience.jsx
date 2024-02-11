import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {FaHtml5} from 'react-icons/fa'
import {FaCss3Alt} from 'react-icons/fa'
import {TbBrandJavascript} from 'react-icons/tb'
import {SiPhp} from 'react-icons/si'
import {SiJquery} from 'react-icons/si'
import {SiVisualstudio} from 'react-icons/si'
import {SiWebflow} from 'react-icons/si'
import {FaWordpressSimple} from 'react-icons/fa'
import {SiShopify} from 'react-icons/si'
import {SiBootstrap} from 'react-icons/si'
import {BsGit} from 'react-icons/bs'
import {TbSql} from 'react-icons/tb'
import {SiSlack} from 'react-icons/si'
import {FaGithub} from 'react-icons/fa'
import {FaElementor} from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='experience' className='section'>
      <h5>Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div className="experience__card">
          <h3>Skills</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <FaHtml5 className='experience__details-icon'/>
                <div>
                  <h4>Html</h4>
                  <small className='text-light'></small>
                </div>
              </article>
              <article className='experience__details'>
                <FaCss3Alt className='experience__details-icon'/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'></small>
                </div>
              </article>
              <article className='experience__details'>
                <TbBrandJavascript className='experience__details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'></small>
                </div>
              </article>
              <article className='experience__details'>
                <SiPhp className='experience__details-icon'/>
                <div>
                  <h4>PHP</h4>
                  <small className='text-light'></small>
                </div>
              </article>
              <article className='experience__details'>
                <SiJquery className='experience__details-icon'/>
                <div>  
                  <h4>jQuery</h4>
                  <small className='text-light'></small>
                </div>
              </article>
              <article className='experience__details'>
                <TbSql className='experience__details-icon'/>
                <div>
                  <h4>SQL</h4>
                  <small className='text-light'></small>
                </div>
              </article>
              <article className='experience__details'>
                <BsGit className='experience__details-icon'/>
                <div>
                  <h4>GIT</h4>
                  <small className='text-light'></small>
                </div>
              </article>
              <article className='experience__details'>
                <FaElementor className='experience__details-icon'/>
                <div>
                  <h4>Elementor</h4>
                  <small className='text-light'></small>
                </div>
              </article>
            </div>
        </div>


        <div className="experience__card">
          <h3>Herramientas</h3>    
          <div className="experience__content">
            <article className='experience__details'>
              <SiVisualstudio className='experience__details-icon'/>
              <div>
                <h4>VS / VSC</h4>
                <small className='text-light'></small>
              </div>
            </article>

            <article className='experience__details'>
              <SiWebflow className='experience__details-icon'/>
              <div>
                <h4>Webflow</h4>
                <small className='text-light'></small>
              </div>
            </article>

            <article className='experience__details'>
              <FaWordpressSimple className='experience__details-icon'/>
              <div>
                <h4>Wordpress</h4>
                <small className='text-light'></small>
              </div>
            </article>

            <article className='experience__details'>
              <SiShopify className='experience__details-icon'/>
              <div>
                <h4>Shopify</h4>
                <small className='text-light'></small>
              </div>
            </article>
            
            <article className='experience__details'>
              <SiBootstrap className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'></small>
              </div>
            </article>

            <article className='experience__details'>
              <SiSlack className='experience__details-icon'/>
              <div>
                <h4>Slack</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience__details'>
              <FaGithub className='experience__details-icon'/>
              <div>
                <h4>Github</h4>
                <small className='text-light'></small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience