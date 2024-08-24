import React, { useState} from 'react';
import './Slider.css'; // Import the CSS file for styling
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';
import image7 from './images/image7.jpg';
import image8 from './images/image8.jpg';
import image9 from './images/image9.jpg';
import image10 from './images/image10.jpg';
import image11 from './images/image11.jpg';
import image12 from './images/image12.png';
import image13 from './images/image13.png';
import image14 from './images/image14.png';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex(prevIndex => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className='top' >
            <div className="image-slider" data-aos="zoom-out-up">
                <button className="prev img-btn" onClick={handlePrev}>Prev</button>
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slide-image" />
                <button className="next img-btn" onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default Slider;
