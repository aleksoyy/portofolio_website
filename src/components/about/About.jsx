import React from 'react'
import './about.css'
import OtherMe from '../../assets/otherme.png'

const About = () => {
  return (
    <section id='about'>
      <br></br>
      <h5>Little Intro</h5>
      <h2>About Me</h2>
      
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={OtherMe} alt="AboutPic" />
          </div>
        </div>
        
        <div className="about_content">
          <p>
          My name is Yosua Aleksander Thanos, i'm not from marvel by the way it's a family name.
          Graduate from Universitas Bunda Mulia Faculty Information Technology and Mobile Developement is my area of study, 
          Have experience as a freelance website development, mobile application development. 
          Have experience in a company, i work as HRIS Staff that maintenance employee data and build application, 
          in my experience build website. Familiar with programming ( Java, HTML, CSS, Flutter, React, MySQL ).  
          </p>
          <a href='#contact' className='btn btn-primary'>Have a Chat !</a> 
        </div>
      </div>
    
    </section>
  )
}

export default About