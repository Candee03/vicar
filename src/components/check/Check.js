import React from 'react'
import './check.scss'

const Check = ({innerText, logo}) => {
    return (
        <div className='container-check'>
            <img className='logo-check' src={logo} />
            <p className='p-check'>{innerText}</p>
        </div>
    )
}

export default Check