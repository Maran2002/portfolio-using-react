import React from 'react'
import './Skills.css'
import py from './images/icons/python_5968350.png'
import js from './images/icons/js_5968292.png'
import html from './images/icons/html_1532556.png'
import css from './images/icons/css-3_5968242.png'
import git from './images/icons/github_3291695.png'
import react from './images/icons/icons8-react-native-96.png'

const Skills = () => {
  return (
    <section className='skills'>
        <h1 className='skills-head' data-aos="fade-down">MY SKILLS</h1>
        <div className='skill-boxHead'>
            <div className='skill-box' data-aos="fade-up-right">
                <img className='skill-icon' src={html} alt="" />
                <p className="skill-para">Proficient in HTML5, enabling me to build well-structured, semantic web pages with a focus on accessibility and SEO.</p>
            </div>
            <div className='skill-box' data-aos="zoom-in">
                <img className='skill-icon' src={css} alt="" />
                <p className="skill-para">Experienced with CSS3, including modern layouts like Flexbox and Grid, and implementing responsive designs with a strong eye for detail.</p>
            </div>
            <div className='skill-box' data-aos="fade-up-left" >
                <img className='skill-icon' src={js} alt="" />
                <p className="skill-para">Skilled in JavaScript ES6+, with a solid understanding of asynchronous programming, DOM manipulation, and modern frameworks like React.js.</p>
            </div>
            <div className='skill-box' data-aos="fade-up-right">
                <img className='skill-icon' src={py} alt="" />
                <p className="skill-para">Proficient in Python, with experience in web development and scripting for automation tasks.</p>
            </div>
            <div className='skill-box' data-aos="fade-up-left" >
                <img className='skill-icon' src={react} alt="" />
                <p className="skill-para">Proficient in React.js, with experience in building dynamic and responsive single-page applications using hooks, state management, and component-based architecture.</p>
            </div>
            <div className='skill-box' data-aos="zoom-in">
                <img className='skill-icon' src={git} alt="" />
                <p className="skill-para">Adept at version control using Git, with experience in managing code repositories, branching strategies, and collaboration workflows on GitHub.</p>
            </div>

        </div>
    </section>
  )
}

export default Skills