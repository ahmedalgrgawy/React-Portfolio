import React from 'react'
import Img from '../images/image.png'
import btnImg from '../images/hireme.png'
import { Link } from 'react-scroll'

export const LandingPage = () => {
    return (
        <section className='landingPage' id='home'>
            <div className='content'>

                <span className='hello'>Hello,</span>

                <span className='text'>I'm <span className='name'>Ahmed</span> <br />Front-End Web Developer</span>

                <p>I Am A Computer Science Student</p>

                <Link><button className='btn'><img src={btnImg} alt=''></img>Hire Me</button></Link>

            </div>
            <img className='bgImg' src={Img} alt=''></img>
        </section >
    )
}
