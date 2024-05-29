import React from 'react'
import './home.css'
import {Link} from 'react-scroll'



const home = () => {
  return (
    <div className='home'>
        <div className='Content'>
            <img  className="image" src='https://res.cloudinary.com/dgzuiurhr/image/upload/v1677358663/Screenshot_2022-12-11-15-37-03-33_1c337646f29875672b5a61192b9010f9_npiy75.jpg'/>

            
            <p className='content'>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello I'm<h1>Jathin&nbsp;Muppala&nbsp;&nbsp;
               </h1><h2 className='mr-2'>&nbsp;&nbsp;&nbsp;&nbsp;Web&nbsp;Developer</h2>
               <div className='ml-2 btn1'>
                    <a href="https://res.cloudinary.com/dgzuiurhr/raw/upload/v1716142602/jathinresume543_1_zgwmav.docx" target='_blanck'><button className='button'  >Download CV</button></a>
                    <button className='button2'><Link activeClass='active' to="about"  spy={true} smooth={true} offset={-100} duration={500}>About Me</Link></button>
                    
               </div>
                <div className='logo mr-3'>
                    <a href='https://www.linkedin.com/in/jathin-muppala-474ab5220/'><img className='img1 img2' src='https://res.cloudinary.com/dgzuiurhr/image/upload/v1715858424/download_1_t2ys22.png' /></a>&nbsp;&nbsp;
                    <a href='https://github.com/jathin12e'><img className='img1 img2' src='https://res.cloudinary.com/dgzuiurhr/image/upload/v1715858329/download_tinyzw.png'/></a>
                </div>
            </p>
           
        </div>
        <div className='logo1'>
          <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tech Stack |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</h4>
          <div>
            <img src="https://res.cloudinary.com/dgzuiurhr/image/upload/v1716097449/download_coqqcs.png" alt="" className='imga2'/>
            <img src="https://res.cloudinary.com/dgzuiurhr/image/upload/v1716097449/download_1_h79nkr.png" alt="" className='imga2'/>
            <img src="https://res.cloudinary.com/dgzuiurhr/image/upload/v1716097449/download_2_fnzupe.png" alt="" className='imga2'/>
            <img src="https://res.cloudinary.com/dgzuiurhr/image/upload/v1716097449/download_3_teu8yh.png" alt="" className='imga2'/>
            <img src="https://res.cloudinary.com/dgzuiurhr/image/upload/v1716097449/download_svgcff.jpg" alt="" className='imga2'/>
            <img src="https://res.cloudinary.com/dgzuiurhr/image/upload/v1716097449/download_4_ognpgx.png" alt="" className='imga2'/>
          </div>
        </div>
    </div>
  )
}

export default home