import React from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import {AiOutlineUser} from 'react-icons/ai' 
import {HiOutlineBookOpen} from 'react-icons/hi'
import {BiMessageAltDetail} from 'react-icons/bi'
import { useState } from 'react'


const Nav = () => {
    const [activeNav, setActiveNav] = useState('#'); 
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><ImHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><HiOutlineBookOpen/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageAltDetail/></a>
    </nav>
  )
}

export default Nav