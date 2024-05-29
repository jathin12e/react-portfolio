import React from 'react'
import './project.css'

const project = () => {
  return (
    <div className='bg'>
        <center>
            <p>Browse My Recent</p>
            <h1>Projects</h1>
        </center>
        <div className='project1'>
            <div style={{textAlign:"center"}} className='project'>
                <img src="https://res.cloudinary.com/dgzuiurhr/image/upload/v1716137599/download_5_rsi5qk.png" className='image2' />
                <h3>Food Munch</h3>
                <div className='overlay'>
                    
                    <a href='https://jathinfoodmunch.ccbp.tech/' target='_blanck'><button className='button1 text'>Live Demo</button></a>
                </div>
            </div>
            <div style={{textAlign:"center"}} className='project'>
                <img src="https://res.cloudinary.com/dgzuiurhr/image/upload/v1716137599/download_1_dstqzx.jpg" className='image2' />
                <h3>Typing Speed</h3>
                <div className='overlay'>
                    
                    
                    <a href='https://typingspeed0.ccbp.tech/' target='_blanck'><button className='button1 text'>Live Demo</button></a>
                </div>
            </div>
            <div style={{textAlign:"center"}} className='content1'>
                <img src="https://res.cloudinary.com/dgzuiurhr/image/upload/v1716137600/Screenshot_2024-05-19_222156_kphfhn.png" className='image2' />
                <h3>Cognitut</h3>
                <div className='overlay'>
                   <a href='https://cognitut-rahul-inx.streamlit.app/'><button className='button1 text'>Live Demo</button></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default project