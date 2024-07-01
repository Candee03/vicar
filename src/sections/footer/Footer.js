import React from 'react'
import './Footer.scss'
import Logo from '../../components/logo/Logo'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container-logo-footer'>
                <Logo size={100}/>
            </div>

            <div className='container-contact-footer'>
                <div className='social-media-logos'>

                </div>
                <div className='contact-data'>
                    <p>Atención al cliente:</p>
                    <p>Teléfono: +59424125469</p>
                    <p>E-mail: vicar@vicar.com</p>
                </div>
                <div className='contact-data'>
                    <p>Cotizaciones:</p>
                    <p>Teléfono: +56846351351</p>
                    <p>E-mail: info@vicar.com.uy</p>
                </div>
                <div className='contact-data'>
                    <p>Dirección:</p>
                    <p>Av. Gobernador Gómez 2320</p>
                    <p>San Carlos - Uruguay</p>
                </div>
            </div>

            <div className='container-credits-footer'>
                <p className='p-credits'>Desarrollado por <a className='a-credits' href='www.bedigital.uno'>BE DIGITAL</a></p>
            </div>
        </div>
    )
}

export default Footer