import React from 'react'
import Navbar from '../Components/Navbar'
import Philosphy from '../Components/Philosphy'
import Services from '../Components/Services'
import Inspiration from '../Components/Inspiration'
import Best from '../Components/Best'
import Template from '../Components/Template'
import Partners from '../Components/Partners'
import Template2 from '../Components/Template2'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div >
      <Navbar />
      <Philosphy />
      <Services />
      <Inspiration/>
      <Best/>
      <Template/>
      <Partners/>
      <Template2/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
