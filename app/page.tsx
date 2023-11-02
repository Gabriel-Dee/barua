import React from 'react'
import Button from './components/button'
import Services from './components/services'

function Page() {
  return (
    <>
      <main className="flex flex-col gap-8 items-center justify-center h-screen">
        <div className="text-center font-semibold text-blue-900 text-3xl">
          Create amazing letters, with one, two, three steps 😄
        </div>
        <Button />
      </main>
      <Services />
    </>

  )
}

export default Page
