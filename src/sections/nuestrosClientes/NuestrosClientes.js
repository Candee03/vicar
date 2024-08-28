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
                <Slide images={nuestrosClientesData} speedSlide={3.5} slideNum={48.2} imgSize='240'/>
                :
            isDesktop?
            // <Image images={nuestrosClientesData} imgSize={240}/>
                <Slide images={nuestrosClientesData} speedSlide={3} slideNum={13.3} imgSize='240'/>
                :
                <Slide images={nuestrosClientesData} speedSlide={3.5} slideNum={23} imgSize='240'/>
            }
        </div>
    )
}

export default NuestrosClientes