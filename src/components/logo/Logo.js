import React from 'react'
import logo from './logo.png'
import logo2 from './logo-2.png'
import './Logo.scss'
import { Link } from 'react-scroll'

const Logo = ({size, type}) => {
    return (
        <Link to='home' delay={200} smooth={true} duration={800}>
            <img width={size} alt='logo de vicar' className='logo-header' src={type==='footer'?logo2: logo}/>
        </Link>
    )
}

export default Logo