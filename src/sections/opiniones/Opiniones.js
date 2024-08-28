import React from 'react'
//styles
import './opiniones.scss'
//provider
import { opinionesData } from '../../data/data'
//components
import Title from '../../components/title/Title'
import CarouselTres from '../../components/carousel/CarouselTres'


const Opiniones = ({title}) => {
    return (
        <div className='container-opiniones'>
            <Title title={title}/>
            <CarouselTres data={opinionesData} arrows={'true'} timeOut={10000} />
        </div>
    )
}

export default Opiniones