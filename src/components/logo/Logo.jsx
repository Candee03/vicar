import React from 'react'
import { Link } from 'react-scroll'
import logo from './logo.png'
import logo2 from './logo-2.png'

const Logo = ({size, type}) => {
    return (
        <Link to='home' delay={200} smooth={true} duration={800} offset={-60}>
            <img  width={size} alt='logo de vicar' className='logo-header' src={type==='2'?logo2: logo}/>
        </Link>
    )
}

export default Logo