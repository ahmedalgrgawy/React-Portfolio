import React, { useState } from 'react'
import logo from '../images/logo.png'
import menuImg from '../images/contact.png'
import menu from '../images/menu.png'
import { Link } from 'react-scroll'

export const Navbar = () => {

    const [barsMenu, setBarsMenu] = useState(false);

    return (
        <nav className='navbar'>

            <img className='logo' alt='Logo' src={logo}></img>

            <div className='links'>
                <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className='link'>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-70} duration={500} className='link'>Skills</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-30} duration={500} className='link'>Projects</Link>
                <Link activeClass='active' to='social' spy={true} smooth={true} offset={-170} duration={500} className='link'>Social</Link>
            </div>

            <Link activeClass='link' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='link'>
                <button className='menuBtn'>
                    <img src={menuImg} alt='' className='menuImg'></img>
                    Contact Me
                </button>
            </Link>

            <img className='mobileMenu' alt='menu' src={menu} onClick={() => setBarsMenu(!barsMenu)}></img>
            <div className='mobileLinks' style={{ display: barsMenu ? 'flex' : 'none' }}>
                <Link onClick={() => setBarsMenu(false)} activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className='mobileLink'>Home</Link>
                <Link onClick={() => setBarsMenu(false)} activeClass='active' to='skills' spy={true} smooth={true} offset={-70} duration={500} className='mobileLink'>Skills</Link>
                <Link onClick={() => setBarsMenu(false)} activeClass='active' to='projects' spy={true} smooth={true} offset={-30} duration={500} className='mobileLink'>Projects</Link>
                <Link onClick={() => setBarsMenu(false)} activeClass='active' to='social' spy={true} smooth={true} offset={-170} duration={500} className='mobileLink'>Social</Link>
                <Link onClick={() => setBarsMenu(false)} activeClass='active' to='contact' spy={true} smooth={true} offset={-170} duration={500} className='mobileLink'>Contact</Link>
            </div>

        </nav>
    )
}
