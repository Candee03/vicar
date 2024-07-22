import React from 'react'
//styles
import './card.scss'

const Card = ({ data }) => {
    return (
        <div className='container-card'>
            {
                data.map((item, index) => {
                    return (
                        <div className='card'>
                            <img alt='' className='img-card' key={index} src={item.imgData}/>
                            {item.title? 
                            <p className='title-card'>{item.title}</p>: <></> }
                            {item.text? 
                            <p className='text-card'>{item.text}</p>: <></> }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card