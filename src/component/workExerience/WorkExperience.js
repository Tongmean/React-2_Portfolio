import React from 'react'
import './workExperience.css'
import { FcGoogle, FcAbout, FcAcceptDatabase } from 'react-icons/fc'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
const WorkExperience = () => {
    const data = [
        {
            name: "Google",
            desc: "Itaewon Class (Korean: 이태원 클라쓰; Hanja: 梨泰院 클라쓰; RR: Itaewon Keullasseu) is a 2020 South Korean television series starring Park Seo-joon, Kim Da-mi, Yoo Jae-myung and Kwon Nara. Based on the webtoon of the same name",
            tech: [
                {
                    name: "Node js",

                },
                {
                    name: "Vue js",
                },
                {
                    name: "React js",

                },
            ],
        },
        {
            name: "Google",
            position: "Full stack",
            desc: "Itaewon Class (Korean: 이태원 클라쓰; Hanja: 梨泰院 클라쓰; RR: Itaewon Keullasseu) is a 2020 South Korean television series starring Park Seo-joon, Kim Da-mi, Yoo Jae-myung and Kwon Nara. Based on the webtoon of the same name",
            tech: [
                {
                    name: "Node js",

                },
                {
                    name: "Vue js",
                },
                {
                    name: "React js",

                },
            ],
        },
        {
            name: "Western Digital",
            position: "Full stack",
            desc: "Itaewon Class (Korean: 이태원 클라쓰; Hanja: 梨泰院 클라쓰; RR: Itaewon Keullasseu) is a 2020 South Korean television series starring Park Seo-joon, Kim Da-mi, Yoo Jae-myung and Kwon Nara. Based on the webtoon of the same name",
            tech: [
                {
                    name: "Node js",

                },
                {
                    name: "Vue js",
                },
                {
                    name: "React js",

                },
            ],
        },
        {
            name: "Yahoo",
            position: "Full stack",
            desc: "Itaewon Class (Korean: 이태원 클라쓰; Hanja: 梨泰院 클라쓰; RR: Itaewon Keullasseu) is a 2020 South Korean television series starring Park Seo-joon, Kim Da-mi, Yoo Jae-myung and Kwon Nara. Based on the webtoon of the same name",
            tech: [
                {
                    name: "Node js",

                },
                {
                    name: "Vue js",
                },
                {
                    name: "React js",

                },
            ],
        },
        {
            name: "Facebook",
            position: "Full stack",
            desc: "Itaewon Class (Korean: 이태원 클라쓰; Hanja: 梨泰院 클라쓰; RR: Itaewon Keullasseu) is a 2020 South Korean television series starring Park Seo-joon, Kim Da-mi, Yoo Jae-myung and Kwon Nara. Based on the webtoon of the same name",
            tech: [
                {
                    name: "Node js",

                },
                {
                    name: "Vue js",
                },
                {
                    name: "React js",

                },
            ],
        },
    ]
    const color = [
        "red",
        "blue",
        "darkblue",
        "orange",
        "#030303da"
    ]
    const icon =[
        <FcGoogle />,
        <FcAbout/>,
        <FcAcceptDatabase/>,
        <FcAbout/>,
        <FcAcceptDatabase/>,
    ]
    return (
        <div className='container workExperience' id='experience'>
            <div className='WorkExperience-title'>
                <h2>
                    Work Experience
                </h2>

            </div>
            <div>
                <p className='line-workExperience'></p>
            </div>

            <VerticalTimeline lineColor='#030303da'>
                {data.map((item,index)=>(
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background:color[index], color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2011 - present"
                    iconStyle={{ background:color[index], color: '#fff' }}
                    icon={icon[index]}
                    key={index}
                    >
                    <h3 className="vertical-timeline-element-title">{item.name}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{item.position}</h4>
                    <div className='row'>
                        {item.tech.map((t ,index)=>(
                            <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12' key={index}>

                                <div className='tech-name'>
                                    <p>
                                        {t.name}
                                    </p>
                                </div>
                            </div>    
                        ))}
                        
                    </div>
                    <p>
                        {item.desc}
                    </p>
                </VerticalTimelineElement>

                ))}
                
            </VerticalTimeline>
        </div>
    );
};
export default WorkExperience