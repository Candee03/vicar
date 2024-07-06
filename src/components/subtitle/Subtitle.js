import React from 'react'
import './subtitle.scss'

const Subtitle = ({innerText, image}) => {
    return (
        <div className='subtitle-container'>
            <img className='logo-subtitle' alt='' src={image}/>
            <p className='p-subtitle'>{innerText}</p>
        </div>
    )
}

export default Subtitle