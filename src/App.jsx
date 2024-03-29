import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Proyects from './components/proyects/Proyects'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <> 

    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Portfolio/>
    <Proyects/>
    <Services/>
    <Contact/>
    <Footer/>

    </>
  )
}

export default App