import React from 'react'
import Leds from './pokedexParts/Leds'
import Screen from './pokedexParts/Screen'
import Hinge from './pokedexParts/Hinge'

function OpenCase() {
  return (
    <div className='w-screen h-screen bg-caseColor flex'>
      <section className='w-48% h-full border border-transparent border-r-black '>
      <Leds />
      <div className='w-full h-80% flex justify-center'>
        <Screen />
      </div>
      </section>
      <section className='w-4% h-full'>
        <Hinge />
      </section>
      <section className='w-48% h-full border border-transparent border-l-black'></section>
    </div>
  )
}

export default OpenCase