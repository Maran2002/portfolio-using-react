import React from 'react'
import './About.css'
import photoMine from './photoMine.jpg'

const About = () => {
  return (
    <main className='mainTag' id='ABOUT'>
        <img data-aos="fade-right" className='imag' src={photoMine} alt=''/>
        <div class="abtme" data-aos="fade-left">
            <h1 className='abtText'>ABOUT ME</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium modi voluptates delectus, perferendis nam! Dolores voluptatibus sequi magni consectetur culpa accusantium consequatur mollitia distinctio quibusdam, neque maiores ad accusamus.
            </p>
        </div>   
    </main>
  )
}

export default About