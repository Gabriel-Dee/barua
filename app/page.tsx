import React from 'react'
import Button from './components/button'
import Services from './components/services'
import Navbar from './components/Navbar'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Feature from './components/Feature'

function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <CTA />
      <Services />
      <Footer />
    </>

  )
}

export default Page
