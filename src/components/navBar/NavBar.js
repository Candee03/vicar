import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="section1" smooth={true} duration={500}>
                        Quienes Somos
                    </Link>
                </li>
                <li>
                    <Link to="section2" smooth={true} duration={500}>
                        Servicios
                    </Link>
                </li>
                <li>
                    <Link to="section3" smooth={true} duration={500}>
                        Clientes
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;