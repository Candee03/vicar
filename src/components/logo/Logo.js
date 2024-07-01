import React from 'react'
import logo from './logo.png'
import './Logo.scss'
import { Link } from 'react-scroll'

const Logo = ({size}) => {
    return (
        <Link to='home'>
            <img width={size} alt='logo de vicar' className='logo-header' src={logo}/>
        </Link>
    )
}

export default Logo