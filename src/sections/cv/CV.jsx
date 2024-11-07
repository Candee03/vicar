import React from 'react'
import search from '../../img/cv/search.png'
import './cv.scss'

const CV = () => {
    return (
        <div className='main-cv'>
            <div className='container-cv'>
                <div className='container-title-and-img'>
                    <p className='title-cv'>{`¡Te estamos 
                    buscando!`}</p>
                    <img alt='' className='logo-cv' src={search} />
                </div>
                <div className='container-content-cv'>
                    <p className='p-cv'>Si te gustaría formar parte de nuestro equipo, envíanos tu CV:</p>
                    <div className='container-email'>
                        <a className='email-cv' href='mailto:priscilla@vicar.com.uy'>Administrativos</a>
                    </div>
                    <div className='container-email'>
                        <a className='email-cv' href='mailto:jorge@vicar.com.uy'>Técnicos</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CV