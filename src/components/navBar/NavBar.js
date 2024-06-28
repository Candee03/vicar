import React, { useState } from 'react';
import './navBar.scss'
import { Link } from 'react-scroll';

const Navbar = ({navList}) => {
    const [deployed, setDeployed] = useState(false)

    const clickNav = () => {
        if (deployed) {
            setDeployed(false)
        } else {
            setDeployed(true)
        }
    }
    
    return (
        <header>
            <nav className='nav'>
                <button onClick={() => clickNav()} className='btn-nav'>&#8801;</button>
            </nav>
                <ul className={deployed?'ul-nav-bar': 'disable'}>
                    {deployed?
                        <>
                        {navList.map((li, index) => {
                            return (
                                <li className='li-nav-bar'>
                                    <Link onClick={() => clickNav()} to={'section'+ (parseInt(index)+1)} smooth={true} duration={500}>
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