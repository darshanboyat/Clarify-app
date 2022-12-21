import React from 'react'
import Navbar from '../Navbar/Navbar'
import Tagline from './Introductory/Introductory'
import Feature from './Feature/Feature'
import Pricing from '../Plans/Pricing'
import Subscribe from './Subscribe/Subscribe'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
function Home() {
  return (
    <>
      {localStorage.getItem('auth') ?
        window.location.replace('http://localhost:3000/dashboard')
        : <>
          <Navbar />
          <Tagline />
          <Feature />
          <Pricing />
          <Subscribe />
          <Contact />
          <Footer />
        </>
      }
    </>
  )
}

export default Home