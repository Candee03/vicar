import React from 'react'
//styles
import './videoInteligente.scss'
//provider images
import sistemaProactivo from '../../img/videoverificacion/sistemaProactivo.png'
import vigilancia from '../../img/videoverificacion/vigilancia.png'
//components
import Title from '../../components/title/Title'
import Subtitle from '../../components/subtitle/Subtitle'
import ImgVideoInteligente from '../../components/imgVideoInteligente/ImgVideoInteligente'

const VideoInteligente = ({title}) => {
    return (
        <div className='container-videointeligente'>
            <div className='content-1'> 
                <Title title={title}/>
            </div>
            <ImgVideoInteligente/>
            <div className='content-2'>
                <Subtitle innerText={'Sistema proactivo'} image={sistemaProactivo}/>
                <p className='p-videoInteligente'>Permite prevenir e intervenir en el momento en que se produce una intrusión.</p>
                <Subtitle innerText={'Vigilancia precisa y efectiva'} image={vigilancia}/>
                <p className='p-videoInteligente'>Filtra hasta el 90% de falsas alarmas causadas por animales y objetos en movimiento.</p>
            </div>
        </div>
    )
}

export default VideoInteligente