import React, {useState} from 'react'
import { getImageUrl } from '../../utils'
import {GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";

const Navbar = () => {
    const menu_a_tags="text-2xl text-main no-underline"
  return (
    // <nav className= 'relative flex justify-between items-center bg-primary text-main pt-14 z-10 my-0 mx-0.5'>
    //   <a className='text-3xl font-bold no-underline text-main' href='/'>Portfolio</a>
    //   <div className='flex'>
    //   <IconContext.Provider value={{ color: "blue",size:"3em", className: "global-class-name" }}>
    //     <div>
    //         <GiHamburgerMenu />
    //     </div>
    //     </IconContext.Provider>
    //     <ul className='flex gap-12 list-none'>
    //         <li><a className={menu_a_tags} href='#about'>About</a></li>
    //         <li><a className={menu_a_tags} href='#experience'>Experience</a></li>
    //         <li><a className={menu_a_tags} href='#projects'>Projects</a></li>
    //         <li><a className={menu_a_tags} href='#contacts'>Contacts</a></li>
    //     </ul>
    //   </div>
    // </nav>
    <nav className= 'relative flex-col justify-between items-start bg-primary text-main pt-14 z-10 my-0 mx-0.5'>
    <a className='text-3xl font-bold no-underline text-main abs' href='/'>Portfolio</a>
    <div className='flex flex-col absolute right-0 mr-0.5 items-end gap-12 z-10'>
    <IconContext.Provider value={{ color: "blue",size:"3em", className: "global-class-name" }}>
      <div>
          <GiHamburgerMenu />
      </div>
      </IconContext.Provider>
      <ul className='flex gap-12 list-none'>
          <li><a className={menu_a_tags} href='#about'>About</a></li>
          <li><a className={menu_a_tags} href='#experience'>Experience</a></li>
          <li><a className={menu_a_tags} href='#projects'>Projects</a></li>
          <li><a className={menu_a_tags} href='#contacts'>Contacts</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar
