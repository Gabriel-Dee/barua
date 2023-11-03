import React from 'react'
import Button from './components/button'
import Services from './components/services'
import Navbar from './components/Navbar'
import CTA from './components/CTA'
import Footer from './components/Footer'

function Page() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-8 items-center justify-center h-screen">
        <div className="text-center font-semibold text-blue-900 text-3xl">
          Create amazing letters, with one, two, three steps 😄
        </div>
        <Button />
      </main>
      <CTA />
      <Services />
      <Footer />
    </>

  )
}

export default Page
