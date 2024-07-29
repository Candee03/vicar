import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
//styles
import './NavBar.scss'
//components
import Logo from '../../components/logo/Logo';
import menuLogo from './menu-logo.png'

const Navbar = ({navList}) => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1000px)' });
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
            {isDesktop?
                <nav className='nav'>
                    <Logo type={'2'} size={92}/>
                </nav>
                    :
                <nav className='nav'>
                    <Logo size={56}/>
                    <button onClick={() => clickNav()} className='btn-nav'><img className='img-menu' alt='' src={menuLogo} /></button>
                </nav>
            }

            {isDesktop?
                <ul className='ul-nav-bar-desktop'>
                    {navList.map((li) => {
                        return (
                            <li className='li-nav-bar-desktop'>
                                <Link onClick={() => clickNav()} to={`${parse(li)}`} delay={200} smooth={true} duration={800} offset={-60}>
                                    {li} 
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                :
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
                
            }
            <div onClick={()=> clickNav()} className={deployed?'nav-bar-bg': 'disable'}></div>
        </header>
    );
}

export default Navbar;