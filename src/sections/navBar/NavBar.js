import React, { useState } from 'react';
import './NavBar.scss'
import { Link } from 'react-scroll';
import Logo from '../../components/logo/Logo';

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
                <button onClick={() => clickNav()} className='btn-nav'>&#8801;</button>
            </nav>

            <ul className={deployed?'ul-nav-bar': 'disable'}>
                {
                deployed?
                    <>
                        {navList.map((li) => {
                            return (
                                <li className='li-nav-bar'>
                                    <Link onClick={() => clickNav()} to={`${parse(li)}`} smooth={true} duration={500}>
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
        </header>
    );
}

export default Navbar;