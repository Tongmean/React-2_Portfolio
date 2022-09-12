import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect'
import Resume from './TonmeanResume.pdf'

function Home() {
  return (
    <div>
        <div className='container-fluid home' id='home'>
            <div className='container home-content'>
                <h1> 
                    Hello, I'm 
                </h1>
                <h2>
                <Typewriter
                  options={{
                    strings: ['Silpakorn University', 'ECS'],
                    autoStart: true,
                    loop: true,
                    delay:5,
                    
                  }}
                />

                </h2>
                <div className='button-for-action'>
                  <div className='hire-me-button'>
                    Hire me
                  </div>
                  <div className='get-resume-button'>
                    <a href={Resume} download="resume.pdf">Get Resume</a>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home