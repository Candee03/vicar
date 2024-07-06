import React, { useState } from 'react';
import { Link } from 'react-scroll';
//styles
import './NavBar.scss'
//components
import Logo from '../../components/logo/Logo';
import menuLogo from './menu-logo.png'

const Navbar = ({navList}) => {
    const [deployed, setDeployed] = useState(false)

    //funcion para desplegar el nav bar
    const clickNav = () => {
        if (deployed) {
            setDeployed(false)
        } else {
            setDeployed(true)
        }
    }

    //parsea el nombre de la seccion para un link
    const parse = (li) => {
        return li
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')
    }
    
    return (
        <header>
            <nav className='nav'>
                <Logo size={56}/>
                <button onClick={() => clickNav()} className='btn-nav'><img className='img-menu' alt='' src={menuLogo} /></button>
            </nav>

            <ul className={deployed?'ul-nav-bar': 'disable'}>
                {
                deployed?
                    <>
                        {navList.map((li) => {
                            return (
                                <li className='li-nav-bar'>
                                    <Link onClick={() => clickNav()} to={`${parse(li)}`} delay={200} smooth={true} duration={800} offset={-60}>
                                        {li} 
                                    </Link>
                                </li>
                            )
                        })}
                    </>
                    :
                    <></>
                }
            </ul>
            <div onClick={()=> clickNav()} className={deployed?'nav-bar-bg': 'disable'}></div>
        </header>
    );
}

export default Navbar;