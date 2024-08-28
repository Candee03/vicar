import React from 'react'
import './image.scss'

const Image = ({images, imgSize}) => {
    return (
        <div className='imagesFlexContainer'>
            {images.map((image, index) => {
                return <img className='img-images' key={index} src={image} alt={`${index}`} width={imgSize}/>
            })}
        </div>
    )
}

export default Image