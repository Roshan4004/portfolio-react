import React, {useState} from 'react'
import {GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { IconContext } from "react-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen]=useState(false);

  const menu_a_tags="2xl:multi-[text-[24px];text-main;no-underline]"
  const resp_navbar="md:flex-col md:items-start"
  const resp_menu_button="md:block md:cursor-pointer"
  const resp_menu="md:multi-[absolute;mr-1;flex-col;items-end;gap-[11px];z-2;right-0]"
  const resp_menu_items="md:multi-[flex-col;items-center;gap-[13px];rounded-[10px];bg-[#4A2820];bg-mygradient;py-[24px];px-[33px];shadow-lg]"

  return (
    <>
    <nav className={`2xl:multi-[relative;flex;items-center;justify-between;pt-[61px];z-2;my-0;mx-1;px-5]  ${resp_navbar}`}>
    <a className="2xl:multi-[text-4xl;font-bold;no-underline;text-main] font-['Open_Sans']" href='/'>Portfolio</a>
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

      <ul className={`2xl:multi-[flex;gap-[47px];list-none] ${resp_menu_items} ${menuOpen ? 'md:flex  md:z-[2]' : 'md:hidden'}`} onClick={()=>setMenuOpen(false)}>
          <li><a className={menu_a_tags} href='#about'>About</a></li>
          <li><a className={menu_a_tags} href='#experience'>Skills/Experience</a></li>
          <li><a className={menu_a_tags} href='#projects'>Projects</a></li>
          <li><a className={menu_a_tags} href='#contacts'>Contacts</a></li>
      </ul>
    </div>
  </nav>
  </>
  )
}

export default Navbar
