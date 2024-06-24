import React, { useState } from 'react'
import {useSwipeable} from 'react-swipeable'
import './slide.scss'

const Slide = ({ images, slideNum, imgSize, speedSlide }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSwipedLeft = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + speedSlide, slideNum ));
    };

    const handleSwipedRight = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - speedSlide, 0));
    };

    const handlers = useSwipeable({
        onSwipedLeft: handleSwipedLeft,
        onSwipedRight: handleSwipedRight,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });
    
    const slidePercentage = (100 / images.length) * speedSlide;

    return (
        <div {...handlers} className="carousel">
            <div
                className="carousel-images"
                style={{ transform: `translateX(${-currentIndex * slidePercentage}%)` }}
            >
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Slide ${index}`} width={imgSize} />
                ))}
            </div>
        </div>
    );
}


export default Slide;