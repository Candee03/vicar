import React from 'react';
import { useMediaQuery } from 'react-responsive';
//provider
import { dataNuestrosServicios } from '../../data/data';
//styles
import './servicios.scss'
//components
import Title from '../../components/title/Title';
import Btn from '../../components/botton/Btn';
import CarouselDos from '../../components/carousel/CarouselDos';
import Card from '../../components/card/Card';


const Servicios = ({title}) => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)'});

    return (
        <div className='container-Servicios'>
            <Title title={title}/>
            {
                isMobile?
                <>
                    <CarouselDos imgSize='100' timeOut='7000' data={dataNuestrosServicios} arrows={'true'}/>
                    <Btn btnType={'NS'} innerText={'Cotizar sin costo'}/>
                </>
                :
                    <Card data={dataNuestrosServicios}/>
            }
        </div>
    )
}

export default Servicios