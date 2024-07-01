import React, { useEffect, useState } from 'react'
import './carouselDos.scss'


/**
 * 
 * @param {} props imgSize number
 * @param {} props timeOut number
 * @param {} props data array
 * @param {} props arrows boolean
 * @returns 
 */
const CarouselDos = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (props.data).length);
    }, parseInt(props.timeOut));

    return () => clearInterval(interval);
    }, [(props.data).length]);
    
    // FUNCION PARA CAMBIAR LA IMAGEN
    const changeImg = (change) => {
        if (change === 'prev') {
            currentIndex===0? setCurrentIndex((props.data.length-1)): setCurrentIndex(currentIndex-1)
        }
        if (change === 'next') {
            currentIndex===props.data.length-1? setCurrentIndex(0): setCurrentIndex(currentIndex+1)
        }
    }
    return (
        <div className='main-carousel'>
            {props.arrows==='true'? 
            <div className='leftArrow' onClick={() =>{changeImg('prev')}}>&#10092;</div>
            : <></> }
            
            <div className="container-carousel">
                <div className="carousel">
                {(props.data).map((item, index) => (
                    <>
                        <img 
                        key={index} 
                        src={item.imgData} 
                        alt={`Slide ${index}`} 
                        width= {props.imgSize} 
                        className={index === currentIndex ? 'active' : 'disable'}/>
                        
                        {item.title? <p className={index === currentIndex ? 'active title-carousel' : 'disable'} >
                            {item.title}</p>: <></> }
                        {item.text? <p className={index === currentIndex ? 'active text-carousel' : 'disable'} >
                            {item.text}</p>: <></> }
                    </>
                ))}
                </div>
            </div>
            {props.arrows==='true'? 
            <div className='rightArrow' onClick={() =>{changeImg('next')}}>&#10093;</div>
            : <></> }
        </div>
    );
};

export default CarouselDos