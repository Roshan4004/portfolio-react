import React, {useState} from 'react'
import {GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { IconContext } from "react-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen]=useState(false);

  const menu_a_tags="2xl:text-[24px] 2xl:text-main 2xl:no-underline"
  const resp_navbar="md:flex-col md:items-start"
  const resp_menu_button="md:block md:cursor-pointer"
  const resp_menu="md:absolute md:mr-1 md:flex-col md:items-end md:gap-[11px] md:z-2 md:right-0"
  const resp_menu_items="md:flex-col md:items-center md:gap-[13px] md:rounded-[10px] md:bg-[#4A2820] md:bg-mygradient  md:py-[24px] md:px-[33px] md:shadow-lg"

  return (
    <>
    <nav className={`2xl:relative 2xl:flex 2xl:items-center 2xl:justify-between 2xl:pt-[61px] 2xl:z-2 2xl:my-0 2xl:mx-1 2xl:px-5  ${resp_navbar}`}>
    <a className="2xl:text-4xl 2xl:font-bold 2xl:no-underline 2xl:text-main" href='/'>Portfolio</a>
    <div className={`2xl:flex ${resp_menu}`}>
      {!menuOpen ?(
        <IconContext.Provider value={{ color: "white",size:"2.5em", className: "global-class-name" }}>
        <div className={`2xl:hidden ${resp_menu_button}`} onClick={()=>setMenuOpen(!menuOpen)}>
          <GiHamburgerMenu/>
        </div>
        </IconContext.Provider>
      ):(
        <IconContext.Provider value={{ color: "white",size:"2em", className: "global-class-name" }}>
        <div className={`2xl:hidden ${resp_menu_button}`} onClick={()=>setMenuOpen(!menuOpen)}>
          <ImCross/>
        </div>
        </IconContext.Provider>
      )}

      <ul className={`2xl:flex 2xl:gap-[47px] 2xl:list-none ${resp_menu_items} ${menuOpen ? 'md:flex  md:z-[2]' : 'md:hidden'}`} onClick={()=>setMenuOpen(false)}>
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
