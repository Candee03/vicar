import React from 'react'
import './imgVideoInteligente.scss'

const ImgVideoInteligente = () => {
    return (
        <div className='imgVideoInteligente-container'>
            <div className='container-txt-1'>
                <p className='txt'>{`Cámaras 
                    integradas con 
                    tecnología 
                    VideoPro`}</p>
            </div>
            <div className='container-txt-2'>
                <p className='txt'>{`Algoritmos de IA 
                para detección 
                precisa de 
                personas y 
                vehículos`}</p>
            </div>
            <div className='container-txt-3'>
                <p className='txt'>{`Activa la alarma y 
                alerta a la central 
                o usuario en 
                tiempo real`}</p>
            </div>
            <div className='bg-polygon'>
                <div className='bg-1'></div>
                <div className='bg-3'></div>
                <div className='bg-2'></div>
                <div className='bg-4'></div>
            </div>
        </div>
    )
}

export default ImgVideoInteligente