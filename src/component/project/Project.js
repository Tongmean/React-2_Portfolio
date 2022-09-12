import React from 'react'
import './project.css'
import Projectlist from './Projectlist'
const Project = () => {
    const data =[
        {
            name:"Mern stack",
            desc:"Learning to user mango express react node",
            Projectlink:"http://localhost:3000/",
            techuse:[
                {
                    name:"react"
                },
                {
                    name:"node"
                }
            ]

        },
        {
            name:"Django stack",
            desc:"Learning to user mango express react node Itaewon Class (Korean: 이태원 클라쓰; Hanja: 梨泰院 클라쓰; RR: Itaewon Keullasseu) is a 2020 South Korean television series starring Park Seo-joon, Kim Da-mi, Yoo Jae-myung and Kwon Nara. Based on the webtoon of the same name,",
            Projectlink:"http://localhost:3000/",
            techuse:[
                {
                    name:"Django"
                },
                {
                    name:"node"
                }
            ]

        },
        {
            name:"Mern stack",
            desc:"Itaewon Class (Korean: 이태원 클라쓰; Hanja: 梨泰院 클라쓰; RR: Itaewon Keullasseu) is a 2020 South Korean television series starring Park Seo-joon, Kim Da-mi, Yoo Jae-myung and Kwon Nara. Based on the webtoon of the same name,",
            Projectlink:"http://localhost:3000/",
            techuse:[
                {
                    name:"react"
                },
                {
                    name:"node"
                }
            ]

        },
    ]
  return (
    <div className='container project-section' id='project'>
        <div className='project-title'>
            <h2>Project</h2>
            <span className='line-project'></span>
        </div>
        <div className='row'>
            {data.map((item,index)=>(
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
                    <Projectlist {...item}/>
                </div>
            ))}    

        </div>

    </div>
  )
}

export default Project