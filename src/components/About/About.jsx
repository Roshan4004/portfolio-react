import React from 'react'

const About = () => {
  return (
    <>
      <div className='p-[15px] bg-primary text-main mt-5' id="about">
        <div className='bg-secondary p-[15px] flex flex-col rounded-md mx-9 gap-[8px] hover:bg-[#7c4e33] shadow-md'>
            <h1 className='flex text-[30px] font-bold'>About Me</h1>
            <p className='flex items-center text-[25px]'>I am an experienced web Developer with hands-on experience designing, developing, and
                implementing web applications using Python and Django framework. I have proven track record
                of delivering high-quality, scalable solutions for client. Strong problem-solving abilities
                and a passion for staying current with the latest trends and technologies in web
                development.
            </p>
        </div>
      </div>
    </>
  )
}

export default About
