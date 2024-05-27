import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";

const Contact = () => {
  return (
    <footer id="contacts" className='text-main mt-120px bg-[#a1412b] flex flex-row justify-evenly w-[100vw] py-[58px] px-[10%] gap-[10px] md:flex-col md:gap-[23px] font-["Montserrat"]'>
        <div className='text-[80px] font-extraboldbold space-[2px] md:flex md:flex-col md:items-center'>
            <h2 className='text-[70px] font-bold space-[4px] md:text-center'>Contacts</h2>
            <p className='text-[35px] font-[10px] space-[4px] md:text-center'>Please don't hesitate to contact me !</p>
        </div>
        <ul className='flex flex-col items-start list-none gap-[26px] md:items-center'>
            <li className='flex items-center gap-[25px]'>
                < MdOutlineEmail size="2.5rem"/>
                <a className='text-main no-underline text-[30px] font-semibold space-[1.5px] sm:text-[20px]' href='mailto:gautamroshan4004@gmail.com' target="_blank">gautamroshan4004@gmail.com</a>
            </li>
            <li className='flex items-center gap-[25px]'>
                <IoLogoLinkedin size="2.5rem"/>
                <a className='text-main no-underline text-[30px] font-semibold space-[1.5px] sm:text-[20px]' href='https://www.linkedin.com/in/roshan4004/' target="_blank">in/roshan4004/</a>
            </li>
            <li className='flex items-center gap-[25px]'>
                <FaGithub size="2.5rem"/>
                <a className='text-main no-underline text-[30px] font-semibold space-[1.5px] sm:text-[20px]' href='https://github.com/Roshan4004' target="_blank">https://github.com/Roshan4004</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
