import React from 'react'
import { FcGoogle, FcAbout, FcAcceptDatabase } from 'react-icons/fc'
import './education.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export const Education = () => {
    const data = [
        {
            name:"Kompong Thom Hight MdSchool",
            major:"General knowlege",
            year:"2012-2018",
            desc:"Itaewon Class is a 2020 South Korean television series starring Park Seo-joon, Kim Da-mi, Yoo Jae-myung and Kwon Nara.",

        },
        {
            name:"Techno",
            major:"Engineering",
            year:"2018-2020",
            desc:"Itaewon Class is a 2020 South Korean television series starring Park Seo-joon, Kim Da-mi, Yoo Jae-myung and Kwon Nara.",

        },
        {
            name:"Silpakorn University",
            major:"Electeo",
            year:"2020-2022",
            desc:"Itaewon Class is a 2020 South Korean television series starring Park Seo-joon, Kim Da-mi, Yoo Jae-myung and Kwon Nara.",

        },
    ]
    const color = [
        "red",
        "blue",
        "darkblue",
    ]
    const icon =[
        <FcGoogle />,
        <FcAbout/>,
        <FcAcceptDatabase/>,
    ]

  return (
    <div className='container education-section'>
        <div className='Education-title'>
            <h2>Education</h2>
            <span className='line-EDUCATION'></span>
        </div>
        <div className='Education-content '>
            <VerticalTimeline lineColor='darkblue'>
                {data.map((item,index)=>(
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background:color[index], color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date={item.year}
                    dateClassName='date-class'
                    iconStyle={{ background:color[index], color: '#fff' }}
                    icon={icon[index]}
                    >
                    <h3 className="vertical-timeline-element-title">{item.name}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{item.major}</h4>
                    <p>
                        {item.desc}
                    </p>
                </VerticalTimelineElement>

                ))}
                
            </VerticalTimeline>

        </div>

        

        
        

    </div>
  )
}
export default Education