import React from 'react'
import './Btn.scss'
import { Link } from 'react-scroll'

const Btn = ({innerText}) => {
    return (
        <div className='div-container-div'>
            <div className='container-btn'>
                <Link to='cotizar'>
                    <p className='text-btn'>{innerText}</p>
                </Link>
            </div>
        </div>
    )
}

export default Btn