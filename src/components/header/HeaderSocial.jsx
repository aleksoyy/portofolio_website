import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href='http://www.linkedin.com/in/yosua-aleksander-thanos-6a6508201/' target="_blank"><BsLinkedin/></a>
        <a href='http://github.com/movalike' target="_blank"><BsGithub/></a>
        <a href='http://www.instagram.com/aleksoyyy/' target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocial