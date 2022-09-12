import React from 'react'
import './contect.css'
import Profile from '../Image/Profile.jpg'
import { MdSend } from "react-icons/md"
const Contact = () => {
  return (
    <div className='container contact-section' id='contact'>
        <div className='row'>
            <div className='col-xl-5 col-lg-5 col-md-12 col-sm-12 '>
                <div className='contact-pic'>
                    <img src={Profile} alt="Profie Pic"/>
                </div>
            </div>
            <div className='col-xl-7 col-lg-7 col-md-12 col-sm-12'>
                <div className='contact-form'>
                    <label>Name</label>
                    <input type="text" className='form-control' name='Name' />
                    <label>E-mail</label>
                    <input type="text" className='form-control' name='email'/>
                    <label>Job Types</label>
                    <select className='form-select' name='Job'>
                        <option value="">Choose...</option>
                        <option value="">Full Time</option>
                        <option value="">Student</option>
                        <option value="">Part Time</option>
                    </select>
                    <label>Message</label>
                    <textarea className='form-control' rows="3" name='message' />
                    <div className='button-contact'>
                        <button type="submit" className='btn'>Send <MdSend size={20}/></button>
                    </div>
                    
                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact
