import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="" className="footer_logo">Yosua's Portofolio Website</a>
    

      <ul className="permalinks">
        <li><a href='#'>Home</a></  li>
        <li><a href='#about'>About Me</a></  li>
        <li><a href='#experience'>Experience</a></  li>
        <li><a href='#portofolio'>Portofolio</a></  li>
        <li><a href='#contact'>Contact Me</a></  li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/YosuaAleksander" ><FaFacebookSquare className='footer_socials-icons'/></a>
        <a href="https://www.instagram.com/aleksoyyy/" ><FiInstagram className='footer_socials-icons'/></a>
        <a href="https://twitter.com/Yosualeksander_" ><BsTwitter className='footer_socials-icons'/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Yosua Aleksander Thanos. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer