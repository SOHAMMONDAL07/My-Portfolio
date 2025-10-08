import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/soham_logo.svg'
import image from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Navbar = () => {
  const[menu,setMenu]=useState("")
  return (
    <div className='navbar'>
       <img src={logo} alt="logo" />
       <ul>
          <li><AnchorLink offset={50} href='#Home'><p>Home</p></AnchorLink></li>
          <li><AnchorLink offset={50} href='#About_Me'><p>About</p></AnchorLink></li>
          <li><AnchorLink offset={-10} href='#Service'><p>Services</p></AnchorLink></li>
          <li><AnchorLink offset={-30} href='#Contact'><p>Contact</p></AnchorLink></li>
          <li><AnchorLink offset={50} href='#Portfolio'><p>Portfolio</p></AnchorLink></li>
       </ul>
       <AnchorLink id='button' className='anchor-link' offset={-30} href='#Contact'>Contact With Me</AnchorLink>
    </div>
  )
}

export default Navbar