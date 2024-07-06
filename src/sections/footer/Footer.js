import React from 'react'
import './Footer.scss'
import Logo from '../../components/logo/Logo'
//provider
import instagram from '../../img/footer/instagram.png'
import email from '../../img/footer/email.png'
import phone from '../../img/footer/phone.png'
import whatsapp from '../../img/footer/whatsapp.png'
import map from '../../img/footer/map.png'
import { Link } from 'react-scroll'


const Footer = () => {
    return (
        <div className='footer'>
            <div className='container-logo-footer'>
                <Logo type={'footer'} size={100}/>
            </div>

            <div className='container-contact-footer'>
                <div className='social-media-logos'>
                    <Link to={'home'}>
                        <img className='img-social-media' alt='' src={whatsapp}/>
                    </Link>
                    <Link to={'home'}>
                        <img className='img-social-media' alt='' src={instagram}/>
                    </Link>
                    <Link to={'home'}>
                        <img className='img-social-media' alt='' src={phone}/>
                    </Link>
                    <Link to={'home'}>
                        <img className='img-social-media' alt='' src={email}/>
                    </Link>
                    <Link to={'home'}>
                        <img className='img-social-media' alt='' src={map}/>
                    </Link>
                </div>
                <div className='contact-data'>
                    <p className='p-bold-contact-data'>Atención al cliente:</p>
                    <p className='p-contact-data'>Teléfono: +59424125469</p>
                    <p className='p-contact-data'>E-mail: vicar@vicar.com</p>
                </div>
                <div className='contact-data'>
                    <p className='p-bold-contact-data'>Cotizaciones:</p>
                    <p className='p-contact-data'>Teléfono: +56846351351</p>
                    <p className='p-contact-data'>E-mail: info@vicar.com.uy</p>
                </div>
                <div className='contact-data'>
                    <p className='p-bold-contact-data'>Dirección:</p>
                    <p className='p-contact-data'>Av. Gobernador Gómez 2320</p>
                    <p className='p-contact-data'>San Carlos - Uruguay</p>
                </div>
                <div className='contact-data'>
                    <p className='p-politica-de-privacidad'>Política de privacidad</p>
                </div>
            </div>

            <div className='container-credits-footer'>
                <p className='p-credits'>Desarrollado por <a className='a-credits' href='https://bedigital.uno/'>BE DIGITAL</a></p>
            </div>
        </div>
    )
}

export default Footer