import React from 'react'
import projects from '../../data/projects.json'
import { getImageUrl } from '../../utils'

const Projects = () => {
    const myarray=[projects[0].skills,projects[1].skills,projects[2].skills]
  return (
    <>
      <section className='mt-[76px] text-main mx-[10%]'>
        <h2 className='text-3xl font-bold tracking-[1.75px] uppercase'>Projects</h2>
        <div className='mt-[37px] flex flex-row flex-wrap items-center justify-center gap-[15px] w-[100%]'>{
            projects.map((project,id)=>{
                return (
                    <div className='flex flex-col rounded-[10px] bg-secondary shadow-md py-[18px] px-[24px] max-w-[450px]' key={id}>
                        <img className='mb-[26px]' src={getImageUrl(project.imageSrc)} alt={`image of ${project.title}`}></img>
                        <h3 className='text-[25px] font-extrabold'>{project.title}</h3>
                        <p className='mt-[6px] text-[25px]'>{project.description}</p>
                        <ul className='w-[100%] mt-[14px] flex flex-row flex-wrap gap-[6px] list-none'>
                            <li className='text-[25px] font-thin rounded-[100px] bg-primary py-[2px] px-[18px]'>{myarray[id][0]}</li>
                            <li className='text-[25px] font-thin rounded-[100px] bg-primary py-[2px] px-[18px]'>{myarray[id][1]}</li>
                            <li className='text-[25px] font-thin rounded-[100px] bg-primary py-[2px] px-[18px]'>{myarray[id][2]}</li>

                        </ul>
                        <div className='justify-around w-[100%] mt-[40px] flex'>
                            <a className='no-underline text-main text-[30px] font-medium rounded-[100px] bg-primary py-[1px] px-[22px]' href={project.demo}>Demo</a>
                            <a className='no-underline text-main text-[30px] font-medium rounded-[100px] bg-primary py-[1px] px-[22px]' href={project.source}>Source</a>
                        </div>
                    </div>
                )
            })
            }

        </div>
      </section>
    </>
  )
}

export default Projects
