import React, { useEffect, useState } from 'react'
import './carousel.scss'
import Btn from '../botton/Btn';

/**
 * 
 * @param {} props timeOut number
 * @param {} props data array
 * @param {} props arrows boolean
 * @returns 
 */

const Carousel = ({data, timeOut, arrows}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, parseInt(timeOut, 10)); // Asegurando que timeOut sea parseado como base 10
    
        return () => clearInterval(interval);
    }, [data.length, timeOut]);
    
    // FUNCION PARA CAMBIAR LA IMAGEN
    const changeImg = (change) => {
        if (change === 'prev') {
            currentIndex===0? setCurrentIndex((data.length-1)): setCurrentIndex(currentIndex-1)
        }
        if (change === 'next') {
            currentIndex===data.length-1? setCurrentIndex(0): setCurrentIndex(currentIndex+1)
        }
    }
    return (
        <div className='main-carousel-home'>
            {arrows==='true'? 
            <div className='leftArrow' onClick={() =>{changeImg('prev')}}>&#10092;</div>
            : <></> }
            
            <div className="container-carousel-home">
                <div className="carousel-home">
                {(data).map((item, index) => (
                    <div key={index}>
                        <img 
                        key={index} 
                        src={item.imgData} 
                        alt={`Slide ${index}`}  
                        className={index === currentIndex ? 'active img-carousel-home' : 'disable'}/>

                        <div className={index === currentIndex ? `active container-info-banner${index}` : 'disable'}>
                            {item.btnName? <Btn btnType={'home'} innerText={item.btnName} linkTo={item.btnLink}/> : <></>}
                        </div>
                    </div>
                ))}
                </div>
            </div>
            {arrows==='true'? 
            <div className='rightArrow' onClick={() =>{changeImg('next')}}>&#10093;</div>
            : <></> }
        </div>
    );
};

export default Carousel;