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
    const isMobile = useMediaQuery({ query: '(max-width: 400px)'});
    const isTablet = useMediaQuery({ query: '(min-width: 700px)'});
    const isDesktop = useMediaQuery({ query: '(min-width: 1000px)'});

    return (
        <div className='container-nuestrosClientes'>
            <Title title={title}/>
            {isMobile?
                // CELULAR NORMAL
                <Slide images={nuestrosClientesData} speedSlide={3} slideNum={41} imgSize='240'/>
                :
                isDesktop?
                // <Image images={nuestrosClientesData} imgSize={240}/>
                // COMPUTADORA
                <Slide images={nuestrosClientesData} speedSlide={2.8} slideNum={15} imgSize='240'/>
                :
                isTablet?
                // TABLET
                <Slide images={nuestrosClientesData} speedSlide={2.9} slideNum={17} imgSize='240'/>
                :
                // CELULAR CHIQUITO
                <Slide images={nuestrosClientesData} speedSlide={2.9} slideNum={38} imgSize='240'/>
            }
        </div>
    )
}

export default NuestrosClientes