import React from 'react';
import { useMediaQuery } from 'react-responsive';
//Styles
import './quienesSomos.scss'
//components
import Title from '../../components/title/Title';
import video from '../../img/video.mp4';
import videoD from '../../img/videoD.mp4';

const QuienesSomos = ({title}) => {
    const isMobile = useMediaQuery({ query: '(max-width: 1000px)'});
    return (
        <div className='container-quienesSomos'>
            <Title title={title}/>
                {
                    isMobile?
                        <video  controls>
                            <source src={video} type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                    :
                    <video  controls>
                            <source src={videoD} type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                }
        </div>
    )
}

export default QuienesSomos