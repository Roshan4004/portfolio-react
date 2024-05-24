import React, {useState} from 'react'
import {GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { IconContext } from "react-icons";

const Navbar = () => {
  const menu_a_tags="text-2xl text-main no-underline"
  const [menuOpen, setMenuOpen]=useState(false);

  return (
    <>
    <nav className= "flex flex-col items-start relative justify-between pt-14 z-2 bg-primary my-0 mx-0.5">
    <a className='text-3xl font-bold no-underline text-main abs' href='/'>Portfolio</a>
    <div className='flex flex-col absolute right-0  items-end '>
      {!menuOpen ?(
        <IconContext.Provider value={{ color: "white",size:"2.5em", className: "global-class-name" }}>
        <div className='block cursor-pointer' onClick={()=>setMenuOpen(!menuOpen)}>
          <GiHamburgerMenu/>
        </div>
        </IconContext.Provider>
      ):(
        <IconContext.Provider value={{ color: "white",size:"2em", className: "global-class-name" }}>
        <div className='block cursor-pointer' onClick={()=>setMenuOpen(!menuOpen)}>
          <ImCross/>
        </div>
        </IconContext.Provider>
      )}

      <ul className={`flex-col gap-[13px] list-none items-center px-[24px] py-[33px] rounded-xl bg-[#4A2820] bg-gradient-to-b from-[#4A2820] to-[#B05E4C] shadow-2xl ${menuOpen ? ' flex' : 'hidden'} `} onClick={()=>setMenuOpen(false)}>
          <li><a className={menu_a_tags} href='#about'>About</a></li>
          <li><a className={menu_a_tags} href='#experience'>Experience</a></li>
          <li><a className={menu_a_tags} href='#projects'>Projects</a></li>
          <li><a className={menu_a_tags} href='#contacts'>Contacts</a></li>
      </ul>
    </div>
  </nav>
  </>
  )
}

export default Navbar
