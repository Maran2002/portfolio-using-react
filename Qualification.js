import React from 'react'
import './Qualification.css'

const Qualification = () => {
  return (
    <section className='qualificationTag'>
        <h1 className='colorBg' data-aos="fade-down">MY QUALIFICATION</h1>
        <div className='QuaBoxHead'>
            <div className='QuaBox' data-aos="fade-up-right">
                <h3 className='QuaHeader'> SSLC </h3>
                <p className='QuaText'>
                    <p className='percentage'>Percentage : %</p>
                    <p className='time'>Academic Year : </p>
                    <p className='ttxt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repudiandae, odio obcaecati nam fugiat ipsa. Natus atque quis officiis nihil porro repellat omnis asperiores similique. Commodi similique adipisci tenetur dolor!</p>
                    </p>
            </div>
            <div className='QuaBox' data-aos="zoom-in">
                <h3 className='QuaHeader'> HSC </h3>
                <p className='QuaText'>
                    <p className='percentage'>Percentage : %</p>
                    <p className='time'>Academic Year : </p>
                    <p className='ttxt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eos nostrum aliquid minima quod adipisci inventore ex earum magni voluptate laudantium eum quasi, dolores officia accusantium corporis est sed iure.</p>
                    </p>
            </div>
            <div className='QuaBox' data-aos="fade-up-left">
                <h3 className='QuaHeader'> BE&#40;CSE&#41;</h3>
                <p className='QuaText'>
                    <p className='percentage'>CGPA : 7</p>
                    <p className='time'>Academic Year: </p>
                    <p className='ttxt'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, maxime nesciunt? Ullam hic, harum, sit veritatis magni id modi possimus vero, officiis aperiam numquam incidunt obcaecati mollitia exercitationem quis inventore </p>
                </p>
            </div>
        </div>
    </section>
  )
}

export default Qualification