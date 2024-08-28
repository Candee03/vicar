import React from 'react'
import './check.scss'

const Check = ({innerText, logo}) => {
    return (
        <div className='container-check'>
            <img alt='' className='logo-check' src={logo} />
            <p className='p-check'>{innerText}</p>
        </div>
    )
}

export default Check