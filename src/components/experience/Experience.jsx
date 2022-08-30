import React from 'react'
import './experience.css'
import {BsCheckSquare} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
    <h5><br></br>
    Skills</h5>
    <h2>My Experience</h2>
    <div className="container experience_container">
      
      <div className="experience_programming">
        <h3>Programming Skills</h3>
        <div className="experience_content">
          
          <article className='experience_details'>
            <BsCheckSquare className='experience_details-icons'/>
            <div>
              <h4>Android Java</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsCheckSquare className='experience_details-icons'/>
            <div>
              <h4>React</h4>
              <small className='text-light'>Competent</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsCheckSquare className='experience_details-icons'/>
            <div>
              <h4>Flutter</h4>
              <small className='text-light'>Advanced</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsCheckSquare className='experience_details-icons'/>
            <div>
              <h4>MySQL</h4>
              <small className='text-light'>Competent</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsCheckSquare className='experience_details-icons'/>
            <div>
              <h4>Java</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsCheckSquare className='experience_details-icons'/>
            <div>
              <h4>PHP</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsCheckSquare className='experience_details-icons'/>
            <div>
              <h4>HTML + CSS</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
        </div>
      </div>
      
      <div className="experience_nonprogramming">
        <h3>General Skills</h3>
        <div className="experience_content">
          
          <article className='experience_details'>
            <BsCheckSquare className='experience_details-icons'/>
            <div>
              <h4>Microsoft Office</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsCheckSquare className='experience__details-icons'/>
            <div>
              <h4>Adobe Photoshop</h4>
              <small className='text-light'>Competent</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsCheckSquare className='experience_details-icons'/>
            <div>
              <h4>Figma</h4>
              <small className='text-light'>Beginner</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsCheckSquare className='experience_details-icons'/>
            <div>
              <h4>Google Dashbord</h4>
              <small className='text-light'>Competent</small>
            </div>
          </article>

        </div>
      </div>

    </div>

    <div className="empty_space">
      <br></br> 
    </div>
    
    </section>
  )
}

export default experience