import React, { useEffect, useState } from 'react'
import './carouselTres.scss'

/**
 * 
 * @param {} props timeOut number
 * @param {} props data array
 * @param {} props arrows boolean
 * @returns 
 */

const CarouselTres = ({data, timeOut, arrows}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, parseInt(timeOut, 10)); // Asegurando que timeOut sea parseado como base 10
    
        return () => clearInterval(interval);
    }, [data.length, timeOut]);
    
    // FUNCION PARA CAMBIAR LA OPINION
    const changeOpinion = (change) => {
        if (change === 'prev') {
            currentIndex===0? setCurrentIndex((data.length-1)): setCurrentIndex(currentIndex-1)
        }
        if (change === 'next') {
            currentIndex===data.length-1? setCurrentIndex(0): setCurrentIndex(currentIndex+1)
        }
    }
    return (
        <div className='main-container-carousel-tres'>
            <div className='main-carousel-opiniones'>
                {arrows==='true'? 
                <div className='leftArrow' onClick={() =>{changeOpinion('prev')}}>&#10092;</div>
                : <></> }
                
                <div className="container-carousel-opiniones">
                    <div className="carousel-opiniones">
                    {(data).map((item, index) => (
                        <div key={index}>
                            <p className={index === currentIndex ? 'active' : 'disable'}>
                                "{item.review}"
                            </p>
                            <p className={index === currentIndex ? 'active' : 'disable'}>
                                {item.owner}
                            </p>
                        </div>
                    ))}
                    </div>
                </div>
                {arrows==='true'? 
                <div className='rightArrow' onClick={() =>{changeOpinion('next')}}>&#10093;</div>
                : <></> }
            </div>
        </div>
    );
};

export default CarouselTres;