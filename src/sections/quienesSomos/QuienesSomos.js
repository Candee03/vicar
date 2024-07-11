import React from 'react';
//Styles
import './QuienesSomos.scss'
//components
import Title from '../../components/title/Title';
import video from '../../img/video.png';

const QuienesSomos = ({title}) => {
    return (
        <div className='container-quienesSomos'>
            <Title title={title}/>
            <img className='video-quienesSomos' alt='video de presentacion' src={video}></img>
        </div>
    )
}

export default QuienesSomos