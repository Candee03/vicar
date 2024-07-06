import React from 'react'
import search from '../../img/cv/search.png'
import './CV.scss'

const CV = () => {
    return (
        <div className='container-cv'>
            <div className='container-title-and-img'>
                <p className='title-cv'>{`¡Te estamos 
                buscando!`}</p>
                <img alt='' className='logo-cv' src={search} />
            </div>
            <div className='container-content-cv'>
                <p className='p-cv'>Si te gustaría formar parte de nuestro equipo, envíanos tu CV:</p>
                <div className='container-email'>
                    <p className='subtitle-cv'>Administrativos: </p>
                    <a className='email-cv' href='mailto:priscilla@vicar.com.uy'>priscilla@vicar.com.uy</a>
                </div>
                <div className='container-email'>
                    <p className='subtitle-cv'>Técnicos:</p>
                    <a className='email-cv' href='mailto:jorge@vicar.com.uy'>jorge@vicar.com.uy</a>
                </div>
            </div>
        </div>
    )
}

export default CV