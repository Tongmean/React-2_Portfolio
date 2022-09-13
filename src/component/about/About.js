import React from 'react'
import './about.css'
import Profile from './Profile.jpg'
import Rotate from 'react-reveal/Rotate';
const About = () => {
  return (
    <div className='container about-section' id='about'>
        <div className='row'>
            <Rotate>
                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                    <div className='Profile-pic'>
                        <img src={Profile} alt='Profile pic' />
                    </div>
                </div>
            </Rotate>   
            <Rotate top left>
                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                    <div className='about-desc'>
                        <div className='about-title'>
                            <h2>About</h2>
                            <span className='line'></span>
                        </div>
                        <p className='about-detail'>
                            Itaewon Class (Korean: 이태원 클라쓰; Hanja: 梨泰院 클라쓰; RR: Itaewon Keullasseu) 
                            is a 2020 South Korean television series starring Park Seo-joon, Kim Da-mi,
                            Yoo Jae-myung and Kwon Nara. Based on the webtoon of the same name,[2] 
                            it is the first series to be produced by the film distribution company Showbox.
                            It aired on JTBC in Korea from January 31 to March 21, 2020, and is streaming worldwide on Netflix.
                            [3][4][5] The series won Best Drama Series at the 25th Asian Television Awards
                        </p>
                    </div>
                </div>
            </Rotate>
        </div>
    </div>
  )
}

export default About