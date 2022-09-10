import React from 'react'
import './SidebarList.css'
import Profile from '../Image/Profile.jpg'
import { MdBiotech } from "react-icons/md";

import { FcHome, FcContacts, FcNightPortrait, FcSalesPerformance, FcTodoList, FcFactory } from "react-icons/fc";

const SidebarList = ({ expandSideBar }) => {
    return (
        <div>
            {expandSideBar ? (
                <div className='navbar-items'>
                    <div className='sidebar-profile-pic'>
                        <img src={Profile} alt='Profile pic' />
                    </div>
                    <ul>
                        <li className='nav-items'><FcHome size={30} />Home</li>
                        <li className='nav-items'><FcContacts size={30} />About US</li>
                        <li className='nav-items'><FcNightPortrait size={30} />Work Experience</li>
                        <li className='nav-items'><FcSalesPerformance size={30} />Tech Stack</li>
                        <li className='nav-items'><MdBiotech size={30} />Education</li>
                        <li className='nav-items'><FcTodoList size={30} />Projects</li>
                        <li className='nav-items'><FcFactory size={30} />Testimonial</li>
                        <li className='nav-items'><FcContacts size={30} />Contact</li>

                    </ul>
                </div>
            ) : (
                <div className='navbar-items-only-icons'>
                    <ul>
                        <li className='nav-items'><FcHome size={30} /></li>
                        <li className='nav-items'><FcContacts size={30} /></li>
                        <li className='nav-items'><FcNightPortrait size={30} /></li>
                        <li className='nav-items'><FcSalesPerformance size={30} /></li>
                        <li className='nav-items'><MdBiotech size={30} color='orange'/></li>
                        <li className='nav-items'><FcTodoList size={30} /></li>
                        <li className='nav-items'><FcFactory size={30} /></li>
                        <li className='nav-items'><FcContacts size={30} /></li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default SidebarList
