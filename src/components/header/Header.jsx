import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <section id='header'>
          <div className="container header_container">

            <div className="header_intro">
              <h5>Hello !</h5>
              <h2>Yosua Aleksander Thanos</h2>
              <h2>Is Here !</h2>
              
            </div>
            <div className="me">
              <img src={ME} alt="me"/>
            </div>
          </div>
      <HeaderSocial />
      <CTA />
      
    </section>
  )
}

export default Header