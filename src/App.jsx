import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Intro from './components/Intro/Intro'

function App() {
  return (
    <div className='w-full h-full bg-primary'>
      <Navbar/>
      <Intro/>
    </div>
  )
}

export default App
