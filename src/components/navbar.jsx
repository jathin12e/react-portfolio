import React from 'react'
import './navbar.css'
import {Link} from 'react-scroll'

const navbar = () => {
  return (
    <div className='nav'> 
        <h1 className='center'>MJ</h1>
        <ul className='ul'>
            <Link activeClass='active' to="home"  spy={true} smooth={true} offset={-100} duration={500} className='link'><li>Home</li></Link>
            <Link activeClass='active' to="about"  spy={true} smooth={true} offset={-100} duration={500} className='link'><li>About</li></Link>
            <Link activeClass='active' to="project"  spy={true} smooth={true} offset={-100} duration={500} className='link'><li>Projects</li></Link>
            <Link activeClass='active' to="contact"  spy={true} smooth={true} offset={-100} duration={500} className='link'><li>Contact</li></Link>
        </ul>
    </div>
  )
}

export default navbar