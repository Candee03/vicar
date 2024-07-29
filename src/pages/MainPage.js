import React from 'react'
// import { useMediaQuery } from 'react-responsive';
import { Element } from 'react-scroll';

//Components
import Navbar from '../sections/navBar/NavBar';
import Home from '../sections/home/Home';
import QuienesSomos from '../sections/quienesSomos/QuienesSomos';
import Servicios from '../sections/servicios/Servicios';
import VideoInteligente from '../sections/videoInteligente/VideoInteligente';
import SmartPanic from '../sections/smartPanic/SmartPanic';
import NuestrosClientes from '../sections/nuestrosClientes/NuestrosClientes';
import Opiniones from '../sections/opiniones/Opiniones';
import Footer from '../sections/footer/Footer';
import CV from '../sections/cv/CV';
import CotizarSC from '../sections/cotizar/CotizarSC';

const MainPage = () => {
    //------------MEDIASQUERY--------------
    // const isDesktop = useMediaQuery({ query: '(max-width: 1000px)'});

    return (
        <>
            <Navbar navList= {['Quiénes Somos', 'Servicios', 'SmartPanic', 'Clientes', 'Cotizar']}/>

            <main>
                <Element name='home' >
                    <Home/>
                </Element>
                <Element name='quiénes-somos'>
                    <QuienesSomos title={'Quiénes somos'}/>
                </Element>
                <Element name='servicios'>
                    <Servicios title={'Nuestros servicios'}/>
                </Element>
                <Element name='videoverificación-inteligente'>
                    <VideoInteligente title={'Videoverificación inteligente'}/>
                </Element>
                <Element name='smartpanic'>
                    <SmartPanic title={'SmartPanic'}/>
                </Element>
                <Element name='clientes'>
                    <NuestrosClientes title={'Nuestros clientes'}/>
                </Element>
                <Element name='opiniones'>
                    <Opiniones title={'Opiniones'}/>
                </Element>
                <Element name='cotizar'>
                    <CotizarSC title={'Cotizar sin costo'}/>
                </Element>
                <Element name='cv'>
                    <CV/>
                </Element>
            </main>

            <Footer/>
        </>
    )
}

export default MainPage