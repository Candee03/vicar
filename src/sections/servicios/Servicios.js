import React from 'react';
//provider
import { dataNuestrosServicios } from '../../data/data';
//styles
import './servicios.scss'
//components
import Title from '../../components/title/Title';
import Btn from '../../components/botton/Btn';
import CarouselDos from '../../components/carousel/CarouselDos';

const Servicios = ({title}) => {
    return (
        <div className='container-Servicios'>
            <Title title={title}/>
            <CarouselDos imgSize='100' timeOut='7000' data={dataNuestrosServicios} arrows={'true'}/>
            <Btn btnType={'NS'} innerText={'Cotizar sin costo'}/>
        </div>
    )
}

export default Servicios