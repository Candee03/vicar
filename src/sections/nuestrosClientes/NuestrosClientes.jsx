import React from 'react'
import { useMediaQuery } from 'react-responsive'
//styles
import './nuestrosClientes.scss'
//provider
import { nuestrosClientesData } from '../../data/data'
//components
import Title from '../../components/title/Title'
import Slide from '../../components/slide/Slide'

const NuestrosClientes = ({title}) => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)'});
    const isDesktop = useMediaQuery({ query: '(min-width: 1000px)'});

    return (
        <div className='container-nuestrosClientes'>
            <Title title={title}/>
            {isMobile?
                <Slide images={nuestrosClientesData} speedSlide={3} slideNum={42} imgSize='240'/>
                :
            isDesktop?
            // <Image images={nuestrosClientesData} imgSize={240}/>
                <Slide images={nuestrosClientesData} speedSlide={2.8} slideNum={13} imgSize='240'/>
                :
                <Slide images={nuestrosClientesData} speedSlide={3} slideNum={20} imgSize='240'/>
            }
        </div>
    )
}

export default NuestrosClientes