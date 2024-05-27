import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Intro from './components/Intro/Intro'
import About from './components/About/About'
import Exp_Skill from './components/Experience and Skills/Exp_Skill'
import Projects from './components/Projects/Projects'
import Contact from './components/Contacts/Contact'

function App() {
  return (
    <div className='w-full h-full bg-primary bg-my_project_grad scroll-smooth overflow-hidden'>
      <Navbar/>
      <Intro/>
      <About/>
      <Exp_Skill/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
