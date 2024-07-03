import React from 'react'
//provider
import { nuestrosClientesData } from '../../data/data'
//components
import Title from '../../components/title/Title'
import Slide from '../../components/slide/Slide'

const NuestrosClientes = ({title}) => {
    return (
        <div>
            <Title title={title}/>
            <Slide images={nuestrosClientesData} speedSlide={3.5} slideNum={48.2} imgSize='240'/>
        </div>
    )
}

export default NuestrosClientes