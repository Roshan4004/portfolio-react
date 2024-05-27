import React from 'react'
import { IoLogoJavascript } from "react-icons/io";
import { FaPython, FaHtml5, FaDocker, FaDatabase } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { SiDjango } from "react-icons/si";
import {RiTailwindCssFill} from "react-icons/ri";
import history from "../../data/history.json"



const Exp_Skill = () => {
    const data = [
        {
          myicons: [
            {
                "title": "Python",
                name:FaPython
            },
            {
                "title": "Django",
                name:SiDjango
            },
            {
                "title": "Rest Framework",
                name:TbApi
            },
            {
                "title": "Javascript",
                name:IoLogoJavascript
            },
            {
                "title": "HTML",
                name:FaHtml5
            },
            {
                "title": "Tailwind CSS",
                name:RiTailwindCssFill
            },
            {
                "title": "Docker",
                name:FaDocker
            },
            {
                "title": "SQL",
                name:FaDatabase
            }
          ]
        }
      ];
  return (
    <section id="experience" className='2xl:multi-[text-main;mt-[79px];mx-[10%]]'>
        <div className='2xl:multi-[flex;justify-center]'>
            <h1 className='2xl:multi-[text-center;mr-[25%];text-3xl;font-bold] md:mr-[0%] md:text-4xl'>Skills</h1>
            <h1 className='2xl:multi-[text-center;ml-[25%];text-3xl;font-bold] md:hidden'>Experience</h1>
        </div>
      <div className='2xl:multi-[flex;flex-row;justify-evenly;mt-[14px]] md:multi-[flex-col;items-center;gap-[34px]]'>
        <div className='2xl:multi-[w-[45%];flex;flex-wrap;items-center;gap-[11px]] md:w-[100%] md:flex-row md:justify-center'>
           {
            data.map((e,i)=>{
                return(
                    <>
                    {e.myicons.map((e,i)=>{
                        return(
                           <div key={i} className='2xl:multi-[flex;flex-col;items-center;gap-[11px]]'>
                                <div alt={e.title} className='2xl:multi-[bg-[rgb(134,34,12)];rounded-[100%];flex;items-center;justify-center;w-[120px];h-[120px]]'>
                                    <e.name size="3em" color="white" />
                                </div>
                                <p className='2xl:multi-[text-[25px];font-bold]'>{e.title}</p>
                           </div> 
                        )
                    })}
                    </>
                )
            })
           }
        </div>
        <h1 className='2xl:multi-[text-center;mr-[25%];text-3xl;font-bold] md:mr-0 md:mt-[2%] md:text-4xl big:hidden'>Experience</h1>
            <ul className='2xl:multi-[w-[45%];flex;flex-col;gap-[40px]] md:w-[100%] md:gap-[9px]'>
                {
                    history.map((history_item,id)=>{
                        return(
                            <li className='2xl:multi-[flex;flex-row;items-center;gap-[17px];bg-my_exp_grad;rounded-[10px];p-[24px]] 2xl:bg-#A52F15 ' key={id}>
                                <div>
                                    <h3 className='2xl:multi-[text-[30px];font-bold]'>{`${history_item.role}, ${history_item.organisation}`}</h3>
                                    <p className='2xl:text-[20px]'>{`${history_item.startDate} - ${history_item.endDate}`}</p>
                                    <ul className='2xl:multi-[mt-[6px];list-inside;text-[25px];list-disc;ml-[17px]]'>
                                        {
                                            history_item.experiences.map((experience,id)=>{
                                                return (
                                                    <li key={id}>{experience}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </section>
  )
}

export default Exp_Skill
