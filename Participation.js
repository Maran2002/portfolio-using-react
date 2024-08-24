import React from 'react'
import './Participation.css'
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'
import image4 from './images/image4.jpg'
import image5 from './images/image5.jpg'
import image6 from './images/image6.jpg'
import image7 from './images/image7.jpg'
import image8 from './images/image8.jpg'
import image9 from './images/image9.jpg'


const Participation = () => {
  return (
   <div class="myParticipations">
      <h1 data-aos="fade-down"><center>MY PARTICIPATIONS</center></h1>

      <div className='ParBoxHead'>
        <div className='ParBox' data-aos="fade-up-right">
            <img src={image1} alt="" />
            <p className='ParContent'>Volunteered in a 7 days NSS camp conducted by my college 
                at Panchayat Union Middle School, Kavanipakkam.</p>
        </div>
        <div className='ParBox' data-aos="zoom-in">
            <img src={image4} alt="" />
            <p className='ParContent'>Attened the TN Startup Thiruvizha conducted by our Tamilnadu Government 
                with my classmates</p>
        </div>
        <div className='ParBox' data-aos="fade-up-left"  >
            <img src={image5} alt="" />
            <p className='ParContent'>Conducted National Science Day in my college during the academic year 2023 - 2024.</p>
        </div>
        <div className='ParBox' data-aos="fade-up-right">
            <img src={image6} alt="" />
            <p className='ParContent'>Participated and Won first price in Photography contest on "National Science Day 
                Celebration 2023" held at my college.</p>
        </div>
        <div className='ParBox' data-aos="zoom-in">
            <img src={image3} alt="" />
            <p className='ParContent'>Served as a student coordinator in the workshop titled “Practical Applications of
            Machine Learning in Data Science”.</p>
        </div>
        <div className='ParBox' data-aos="fade-up-left">
            <img src={image7} alt="" />
            <p className='ParContent'>Participated in a programme under Unnath Bharath Abhiyan at Govt. Midddle School, 
                Kavanipakkam and tought the students of that school about basics of microsoft office applications</p>
        </div>
        <div className='ParBox' data-aos="fade-up-right">
            <img src={image8} alt="" />
            <p className='ParContent'>Participated and Won first price in Meme Creation contest on "Drive Against Drugs" 
                awarness program held at my college.</p>
        </div>
        <div className='ParBox' data-aos="zoom-in">
            <img src={image2} alt="" />
            <p className='ParContent'>Served as a student volunteer at the Naan Muthalvan Placement Drive
                 in 2023 which was conducted in my college.</p>
        </div>
        <div className='ParBox' data-aos="fade-up-left">
            <img src={image9} alt="" />
            <p className='ParContent'>Participated a workshop on "Artificial Intelligence and Machine Learning" 
                organised by Idhaya Engineering College For Women and Mahendra Engineering College.</p>
        </div>
      </div>
    </div>
  )

}

export default Participation