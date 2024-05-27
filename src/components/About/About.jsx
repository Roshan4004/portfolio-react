import React from 'react'
import { FaBookOpen } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className='p-[15px] text-main mt-5' id="about">
        <div className='bg-[rgb(134,34,12)] p-[15px] flex flex-col rounded-md mx-9 gap-[8px] shadow-md'>
            <h1 className='flex text-3xl font-bold uppercase'>About Me</h1>
            <p className='flex items-center text-[25px] font-["Roboto"]'>I am an experienced web Developer with hands-on experience designing, developing, and
                implementing web applications using Python and Django framework. I have proven track record
                of delivering high-quality, scalable solutions for client. Strong problem-solving abilities
                and a passion for staying current with the latest trends and technologies in web
                development.
            </p>
        <div className='2xl:multi-[flex;flex-row;justify-evenly;mt-[14px]] md:multi-[flex-col;items-center;gap-[34px]]'>
          <div className='2xl:multi-[flex;flex-col;items-center;gap-[11px];mr-[10%]] md:justify-center md:flex-wrap md:m-[0%]'>
            <span className='text-center'> <FaBookOpen size="1.5rem"/></span> 
            <h2 className='text-[25px] font-bold md:w-[100%] text-center'>Western Regional Campus</h2>
            <p className='text-[20px] font-[8px] md:w-[100%] text-center'>Bachelor's in Computer Engineering</p>
            <p className='text-[20px] font-[8px] md:w-[100%] text-center'>2023 - 2027(Expected)</p>
          </div>
          <div className='2xl:multi-[flex;flex-col;items-center;gap-[11px]] md:justify-center md:flex-wrap md:m-[0%]'>
            <span className='text-center'> <FaBookOpen size="1.5rem"/></span> 
            <h2 className='text-[25px] font-bold md:w-[100%] text-center'>SOS Hermann Gmeiner School</h2>
            <p className='text-[20px] font-[8px] md:w-[100%] text-center'>High School Degree - Computer Science</p>
            <p className='text-[20px] font-[8px] md:w-[100%] text-center'>2020 - 2022</p>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default About
