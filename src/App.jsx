import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Intro from './components/Intro/Intro'
import About from './components/About/About'

function App() {
  return (
    <div className='w-full h-full bg-primary scroll-smooth'>
      <Navbar/>
      <Intro/>
      <About/>
    </div>
  )
}

export default App
