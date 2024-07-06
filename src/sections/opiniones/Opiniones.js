import React from 'react'
//styles
import './opiniones.scss'
//provider

//components
import Title from '../../components/title/Title'


const Opiniones = ({title}) => {
    return (
        <div className='container-opiniones'>
            <Title title={title}/>
        </div>
    )
}

export default Opiniones