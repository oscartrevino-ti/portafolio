import React from 'react'
import CV from '../../assets/cv.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href={CV} target='_blank' className='btn'>Descargar CV</a>
        <a href="#contact" className='btn btn-primary'>Contáctame</a>
    </div>
  )
}

export default CTA