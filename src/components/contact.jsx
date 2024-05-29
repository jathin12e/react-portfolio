import React from 'react'
import './contact.css'
import {Link} from 'react-scroll'

const contact = () => {
  return (
    <div className='bg1'>
        <center>
            <p>Get In Touch</p>
            <h1>Contact Me</h1>
        </center>
        <div className='contact'>
            <div>
                <h3>JathinMuppala54@gmail.com</h3>
                <h3 style={{textAlign:"center"}}>Phno: 7569375328</h3>
            </div>
        </div>
        <footer>
            <ul className='ul1'>
                <Link activeClass='active' to="home"  spy={true} smooth={true} offset={-100} duration={500} className='link'><li>Home</li></Link>
                <Link activeClass='active' to="about"  spy={true} smooth={true} offset={-100} duration={500} className='link'><li>About</li></Link>
                <Link activeClass='active' to="project"  spy={true} smooth={true} offset={-100} duration={500} className='link'><li>Projects</li></Link>
                <Link activeClass='active' to="contact"  spy={true} smooth={true} offset={-100} duration={500} className='link'><li>Contact</li></Link>
            </ul>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </footer>
    </div>
    
  )
}

export default contact