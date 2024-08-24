import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header';
import Home from './Home';
import About from './About';
import Qualification from './Qualification';
import Skills from './Skills';
import Participation from './Participation';
import Projects from './Projects';
import Footer from './Footer';
import Slider from './Slider';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Apply the scrollBehavior style to the root element
rootElement.style.scrollBehavior = 'smooth';
rootElement.style.backgroundColor = '#DBE2EF';

root.render(
  
  <React.StrictMode>
    
    <Header />
    <Home />
    <About />
    <Qualification />
    <Skills />
    <Participation />
    <Projects />
    <Slider />
    <Footer />

  </React.StrictMode>

);
AOS.init();

