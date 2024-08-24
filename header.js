import React from 'react';
import './index.css';
import logo from './logo.png'
import './header.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

// import '../node_modules/bootstrap/dist/css/bootstrap.css'
const Header = () => {
  return (
    <header>
      
        <img data-aos="fade-in" className='maranLogo' src={logo} alt="MaranLogo" />
        <div className='headNav' data-aos="fade-in">
            <a href="#HOME" className='headerBtn' type="button">Home</a>
            <a href="#ABOUT" className='headerBtn' type="button">About</a>
            <a href="#PROJECTS" className='headerBtn' type="button">Project</a>
            <a href="#CONTACT" className='headerBtn' type="button" >Contact</a>
        </div>

    </header>
  )
}
AOS.init();
export default Header