import React from 'react'
import './footer.scss'
import Logo from '../../components/logo/Logo'
//provider
import instagram from '../../img/footer/instagram.png'
import email from '../../img/footer/email.png'
import phone from '../../img/footer/phone.png'
import whatsapp from '../../img/footer/whatsapp.png'
import map from '../../img/footer/map.png'


const Footer = () => {
    return (
        <div className='footer'>
            <div className='container-logo-footer'>
                <Logo type={'2'} size={92}/>
            </div>

            <div className='container-contact-footer'>
                <div className='div-emergencias'>
                    <p className='emergencias'>Emergencias 24/7</p>
                    <p className='emergencias telefono'>Teléfono: 092588532</p>
                </div>
                <div className='social-media-logos'>
                    <a target='_blank' rel="noreferrer" href='http://wa.me/59898310647'>
                        <img className='img-social-media' alt='' src={whatsapp}/>
                    </a>
                    <a target='_blank' rel="noreferrer" href='https://www.instagram.com/vicar_seguridad'>
                        <img className='img-social-media' alt='' src={instagram}/>
                    </a>
                    <a rel="noreferrer" href='tel:092588532'>
                        <img className='img-social-media' alt='' src={phone}/>
                    </a>
                    <a rel="noreferrer" href='mailto:atencionalcliente@vicar.com.uy'>
                        <img className='img-social-media' alt='' src={email}/>
                    </a>
                    <a target='_blank' rel="noreferrer" href='https://maps.app.goo.gl/VKULnuKBJKJnbdSy6'>
                        <img className='img-social-media' alt='' src={map}/>
                    </a>
                </div>
            </div>
            <div className='container-contact-data'>
                <div className='contact-data'>
                    <p className='p-bold-contact-data'>Atención al cliente:</p>
                    <p className='p-contact-data'>Teléfono: 4266 4266</p>
                    <p className='p-contact-data'>WhatsApp: <a target='_blank' rel="noreferrer" href='http://wa.me/59898310647'>+598 98 310 647</a></p>
                    <p className='p-contact-data'>E-mail: <a rel="noreferrer" href='mailto:atencionalcliente@vicar.com.uy'>atencionalcliente@vicar.com.uy</a></p>
                </div>
                <div className='contact-data'>
                    <p className='p-bold-contact-data'>Cotizaciones:</p>
                    <p className='p-contact-data'>WhatsApp: <a target='_blank' rel="noreferrer" href='http://wa.me/59898310647'>+598 98 310 647</a></p>
                    <p className='p-contact-data'>E-mail: <a rel="noreferrer" href='mailto:wilson@vicar.com.uy'>wilson@vicar.com.uy</a></p>
                </div>
                <div className='contact-data'>
                    <p className='p-bold-contact-data'>Dirección:</p>
                    <p className='p-contact-data'>Melchor Maurente 835, San Carlos - Maldonado - Uruguay</p>
                    <p className='p-contact-data'> Atención de Lunes a Sábados de 8-18 h</p>
                </div>
            </div>
            <div className='container-pol-priv'>
                <a className='p-politica-de-privacidad' target='_blank' href='/politica_de_privacidad'>Política de privacidad</a>
            </div>

            <div className='container-credits-footer'>
                <p className='p-credits'>Desarrollado por <a rel="noreferrer" target='_blank' className='a-credits' href='https://bedigital.uno/'>BE DIGITAL</a></p>
            </div>
        </div>
    )
}

export default Footer