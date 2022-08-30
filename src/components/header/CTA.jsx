import React from 'react'
import CVResume from '../../assets/resume.pdf'
import EmptySection from '../../components/emptysection/EmptySection'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CVResume} download className='btn'>Download Resume</a>
        <a href='https://api.whatsapp.com/send?phone=6285973979187' className='btn btn-primary'>Have a chat !</a>
    </div>
    
  )
}

export default CTA