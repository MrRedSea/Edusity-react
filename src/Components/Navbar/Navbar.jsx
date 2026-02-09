import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link, ScrollLink } from 'react-scroll';

const Navbar = () => {

/* This defines the dark blue navbar that pops up when scrolling down 
    just before the main content or the whitespace below */

  const [sticky, setSticky] = useState(false);

useEffect(()=>{
  window.addEventListener('scroll', ()=>{
    window.scrollY > 570 ? setSticky (true) : setSticky(false);
  })
},[]);


const [mobileMenu, setMobileMenu] = useState(false);
const toggleMenu = () => {
  mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
}


  return (
    <nav className= {`container ${sticky? 'dark-nav' : ''}`} >
        <img src={logo} className="logo" alt="Edusity Logo" />
        <ul className={mobileMenu?'mobile-menu' : 'hide-mobile-menu'}>
            <li><Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>

            <li><Link to="program" spy={true} smooth={true} offset={-250} duration={500}>Program</Link></li>

            <li><Link to="about" spy={true} smooth={true} offset={-150} duration={500}>About us</Link></li>

            <li><Link to="campus" spy={true} smooth={true} offset={-250} duration={500}>Campus</Link></li>

            <li><Link to="testimonials" spy={true} smooth={true} offset={-250} duration={500}>Testimonials</Link></li>

            <li><Link to="contact" spy={true} smooth={true} offset={-230} duration={500} className="btn">Contact us</Link></li>
        </ul>
        <img src={menu_icon} className="menu-icon" alt="Menu Icon" onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar

// npm install react-scroll was installed via the terminal to enable smooth scrolling functionality in the navbar.
// The navbar uses the react-scroll library to enable smooth scrolling to different sections of the page when the corresponding links are clicked. 
// The 'spy' prop allows the link to be active when its target section is in view, while 'smooth' enables smooth scrolling animation. 
// The 'offset' prop adjusts the final scroll position to account for fixed headers or other elements. 
// The 'duration' prop specifies how long the scrolling animation should take in milliseconds.