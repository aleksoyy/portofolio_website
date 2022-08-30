import React from 'react'
import './navigation.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FiUser} from 'react-icons/fi'
import {MdWorkOutline} from 'react-icons/md'
import {BsCodeSquare} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import { useState } from 'react'

const Navigation = () => {
  const [activeNav, setActiveNav] = useState('#header')
  return (
    <nav>
    <a href='#header' onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><AiOutlineHome className='nav_icons'/></a>
    <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FiUser className='nav_icons'/></a>
    <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdWorkOutline className='nav_icons'/></a>
    <a href='#portofolio' onClick={() => setActiveNav('#portofolio')} className={activeNav === '#portofolio' ? 'active' : ''}><BsCodeSquare className='nav_icons'/></a>
    <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><HiOutlineMail className='nav_icons'/></a>
  </nav>
  )
}

export default Navigation