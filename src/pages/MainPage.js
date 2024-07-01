import React from 'react'
// import { useMediaQuery } from 'react-responsive';
import { Element } from 'react-scroll';

//Components
import Navbar from '../sections/navBar/NavBar';
import QuienesSomos from '../sections/quienesSomos/QuienesSomos';
import Home from '../sections/home/Home';
import Servicios from '../sections/servicios/Servicios';
import VideoInteligente from '../sections/videoInteligente/VideoInteligente';
import Footer from '../sections/footer/Footer';

const MainPage = () => {
    //------------MEDIASQUERY--------------
    // const isDesktop = useMediaQuery({ query: '(max-width: 1000px)'});

    return (
        <>
            <Navbar navList= {['Quienes Somos', 'Nuestros Servicios', 'Clientes', 'Cotizar']}/>
            <Element name='home' >
                <Home/>
            </Element>

            <main>
                <Element name='quienes-somos'>
                    <QuienesSomos title={'Quiénes somos'}/>
                </Element>
                <Element name='nuestros-servicios'>
                    <Servicios title={'Nuestros servicios'}/>
                </Element>
                <Element name='videoverificación-inteligente'>
                    <VideoInteligente title={'Videoverificación inteligente'}/>
                </Element>
            </main>
            <Footer/>
        </>
    )
}

export default MainPage