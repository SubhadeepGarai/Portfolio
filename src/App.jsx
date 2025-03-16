import React from 'react'
import Navbar from './Componenrs/Navbar/Navbar'
import Hero from './Componenrs/Hero/Hero'
import About from './Componenrs/About/About'
import Services from './Componenrs/Services/Services'
import Mywork from './Componenrs/MyWork/Mywork'
import Contact from './Componenrs/Contact/Contact'
import Footer from './Componenrs/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Mywork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
//2.30.31