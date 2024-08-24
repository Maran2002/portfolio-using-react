import React from 'react';
import './Projects.css';

const Projects = () => {
  return (   
    <div className="pro-container" id='PROJECTS'>
      <h1 data-aos="fade-down">MY PROJECTS</h1>
      <div className="pro-boxHead">
        <div className="pro-box" data-aos="fade-up-right">
          <h2>Project 1</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis animi aperiam, qui earum esse voluptate eius libero! Pariatur facilis maiores fuga! Accusantium incidunt perferendis provident sequi, culpa adipisci rem iste!</p>
          <a className='pro-Btn' href='/'>Link</a>           
        </div>

        <div className="pro-box" data-aos="zoom-in">
          <h2>Project 2</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sunt nemo blanditiis, tenetur porro officiis consequuntur natus deleniti deserunt facilis, odio nisi doloribus dolorum iste mollitia officia totam labore molestiae.</p>
          <a className='pro-Btn' href='#propro' onClick={() => alert('Project is in progress for paper publication. You cannot access it now. For more details about the project contact Elamaran.')}>Link</a>           
        </div>

        <div className="pro-box" data-aos="fade-up-left">
          <h2>Project 3</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ullam in nihil, cupiditate omnis exercitationem? Beatae quas tempore dolores iste quaerat. Aliquid ipsum recusandae odit quam beatae eaque corrupti facere?</p>
          <a className='pro-Btn' href="/">Link</a>           
        </div>
      </div>
    </div>
  ); 
};

export default Projects;
  