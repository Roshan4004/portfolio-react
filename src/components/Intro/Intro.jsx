import React from 'react'
import {getImageUrl} from '../../utils'

const Intro = () => {
  return (
    <>
      <section className={`2xl:relative 2xl:flex 2xl:items-center 2xl:justify-between 2xl:mt-[49px] 2xl:z-2 2xl:mx-[10%]`}>
        <div className={`2xl:flex 2xl:flex-col 2xl:items-start 2xl:text-main 2xl:z-1`}>
            <h1 className={`2xl:text-3xl 2xl:font-bold 2xl:mb-[33px]`}>Hi, I'm Roshan</h1>
            <p className={`2xl:text-3xl 2xl:mb-[32px]`}>I am a backend developer with 2 years of experience of Python and Django. Please reach out to
                 know me more!</p>
            <a className={`2xl:no-underline 2xl:bg-secondary 2xl:text-main 2xl:rounded-full 2xl:font-2xl 2xl:font-bold 2xl:py-[17px] 2xl:px-[26px] 2xl:shadow-md`} href='mailto:gautamroshan4004@gmail.com'>Contact Me</a>
        </div>

        <img className={`2xl:w-[30vh] 2xl:z-2 2xl:animate-floating-image`} src={getImageUrl("intro/myimg.png")} alt="myimage"></img>
        <div/>
        <div/>
      </section>
    </>
  )
}

export default Intro
