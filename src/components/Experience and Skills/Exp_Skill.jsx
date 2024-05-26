import React from 'react'
import { IconContext } from "react-icons";
import { IoLogoJavascript } from "react-icons/io";
import { FaPython, FaHtml5, FaDocker, FaDatabase } from "react-icons/fa";
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
    <section id="experience">
      <div>
        <div>
           {
            data.map((e,i)=>{
                return(
                    <>
                    {e.myicons.map((e,i)=>{
                        return(
                           <div key={i}>
                                <IconContext.Provider value={{ color: "white",size:"2.5em", className: "global-class-name" }}>
                                    <div alt={e.title}>
                                        <e.name/>
                                    </div>
                                    <p>{e.title}</p>
                                </IconContext.Provider>
                           </div> 
                        )
                    })}
                    </>
                )
            })
           }
        </div>
        <div>
            <ul>
                {
                    history.map((history_item,id)=>{
                        return(
                            <li key={id}>
                                <div>
                                    <h3>{`${history_item.role}, ${history_item.organisation}`}</h3>
                                    <p>{`${history_item.startDate} - ${history_item.endDate}`}</p>
                                    <ul>
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
      </div>
    </section>
  )
}

export default Exp_Skill
