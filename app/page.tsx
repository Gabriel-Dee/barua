import React from 'react'
import Button from './components/button'
import Services from './components/services'
import Navbar from './components/Navbar'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Feature from './components/Feature'
import ContactForm from './components/Contact'

function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <CTA />
      <Services />
      <ContactForm />
      <Footer />
    </>

  )
}

export default Page
