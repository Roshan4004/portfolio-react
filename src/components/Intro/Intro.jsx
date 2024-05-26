import React from 'react'
import {getImageUrl} from '../../utils'

const Intro = () => {
  return (
    <>
      <section className={`2xl:multi-[relative;flex;items-center;justify-between;mt-[49px];z-[1];mx-[10%]]  md:flex-col-reverse`}>
        <div className={`2xl:multi-[z-[1];items-start;flex-col;flex] 2xl:text-main md:items-center`}>
            <h1 className={`2xl:multi-[text-5xl;font-bold;mb-[33px]] md:mt-[10px]`}>Hi, I'm Roshan</h1>
            <p className={`2xl:text-3xl 2xl:mb-[32px]`}>I am a backend developer with 2 years in experience of Python and Django. Please reach out to
                 know me more!</p>
            <a className={`2xl:multi-[no-underline;rounded-full;text-3xl;text-main;font-bold;py-[17px];px-[26px];shadow-md] 2xl:bg-[#BF7A53]`} href='mailto:gautamroshan4004@gmail.com'>Contact Me</a>
        </div>

        <img className={`2xl:multi-[w-[30vh];z-[1];animate-floating-image]  md:w-[20vh]`} src={getImageUrl("intro/myimg.png")} alt="myimage"></img>
      </section>
    </>
  )
}

export default Intro
