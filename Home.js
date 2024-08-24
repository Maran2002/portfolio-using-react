import React from 'react'
import './Home.css'
import picMine from './picMine.jpg'

const Home = () => {
  return (
    <div className='main' id='HOME'>
        <div id="nameContainer" data-aos="fade-up">
            <div id="text">
                <h2>
                    Hello, <span>I'm</span>
                </h2>
                <h2 id="name">
                    <span>
                        Elamaran A
                    </span>
                </h2>
                <h2>
                    Web Developer
                </h2>
                <p>
                    Currently looking for a job.
                </p>
            </div>
            <div className='fullImage'>
            {/* <img className='picBg' src={picBg} alt=''/> */}

                <div className='circle'>
                    <img className='picMine' src={picMine} alt=''/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home