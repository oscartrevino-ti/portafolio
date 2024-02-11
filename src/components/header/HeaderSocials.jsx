import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/oscar-gerardo-trevi%C3%B1o-reyna-85a5971a0/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/oscartrevino-ti" target='_blank'><FaGithub/></a>
    </div>   
  )
}

export default HeaderSocials