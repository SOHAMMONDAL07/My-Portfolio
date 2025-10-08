import React from 'react'
import './About.css'
import theme from '../../assets/theme_pattern.svg'
import image from '../../assets/photo-min.jpg'

const About = () => {
  return (
    <div  id='About_Me' className='about'>
        <div className="about-title">
            <h1 className='text-3xl'>About Me</h1>
            <img src={theme} alt="theme" />
        </div>

        <div className="about-section">
            <div className='about-left'>
                <img src={image} alt="image" />
            </div>

            <div className='about-right'>
                <div className='about-para'>
                    <p>My coding journey started with curiosity — breaking things, fixing them, and slowly realizing I love solving problems through technology. Over time, I’ve explored different domains, but web development caught my interest the most because it lets me combine logic with creativity.</p>

                    <p>I’m constantly learning and improving my skills to prepare for real-world projects and collaborations. My current focus is on mastering frontend frameworks and strengthening my problem-solving ability so I can grow into a well-rounded software engineer.</p>

                    <div className='about-skills'>
                        <div className='about-skill'><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                        <div className='about-skill'><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                        <div className='about-skill'><p>React.js</p><hr style={{width:"70%"}}/></div>
                        <div className='about-skill'><p>Node.JS</p><hr style={{width:"50%"}}/></div>
                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default About