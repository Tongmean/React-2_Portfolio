import React from 'react'
import './SidebarList.css'
import Profile from '../Image/Profile.jpg' 
const SidebarList = ({expandSideBar}) => {
  return (
    <div>
        {expandSideBar ? (
            <div className='navbar-items'>
                <div className='sidebar-profile-pic'>
                    <img src={Profile} alt='Profile pic'/>
                </div>
            </div>
        ):(
            <div></div>
        )}
    </div>
  )
}

export default SidebarList
