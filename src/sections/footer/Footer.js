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
                <Logo type={'2'} size={92}/>
            </div>

            <div className='container-contact-footer'>
                <div className='div-emergencias'>
                    <p className='emergencias'>Emergencias 24/7</p>
                    <p className='emergencias'>Teléfono: 4266 4662</p>
                </div>
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
            </div>
            <div className='container-contact-data'>
                <div className='contact-data'>
                    <p className='p-bold-contact-data'>Atención al cliente:</p>
                    <p className='p-contact-data'>Teléfono: 4266 4266</p>
                    <p className='p-contact-data'>WhatsApp: +598 98 310 647 </p>
                    <p className='p-contact-data'>E-mail: atencionalcliente@vicar.com.uy</p>
                </div>
                <div className='contact-data'>
                    <p className='p-bold-contact-data'>Cotizaciones:</p>
                    <p className='p-contact-data'>WhatsApp: +598 98 310 647 </p>
                    <p className='p-contact-data'>E-mail: wilson@vicar.com.uy</p>
                </div>
                <div className='contact-data'>
                    <p className='p-bold-contact-data'>Dirección:</p>
                    <p className='p-contact-data'>Melchor Maurente 835, San Carlos - Maldonado - Uruguay</p>
                </div>
            </div>
            <div className='container-pol-priv'>
                <p className='p-politica-de-privacidad'>Política de privacidad</p>
            </div>

            <div className='container-credits-footer'>
                <p className='p-credits'>Desarrollado por <a rel="noreferrer" target='_blank' className='a-credits' href='https://bedigital.uno/'>BE DIGITAL</a></p>
            </div>
        </div>
    )
}

export default Footer