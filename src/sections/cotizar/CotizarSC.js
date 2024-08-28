import React from 'react'
import './cotizarSC.scss'
//components
import Title from '../../components/title/Title'
import Form from '../../components/form/Form'
import Btn from '../../components/botton/Btn'

const CotizarSC = ({title}) => {
    return (
        <div className='bg-cotizar'>
            <div className='container-cotizar'>
                <Title title={title} txtColor={'white'}/>
                <div className='main-container-content-cotizar'>
                    <div className='container-content-cotizar'>
                        <p className='p-cotizar'>Si lo prefieres:</p>
                        {/* //MODIFICAR */}
                        <Btn innerText={'Cotizar por WhatsApp'} btnType={'Cotizar'} src={'http://wa.me/59898310647'} />
                        <p className='p-cotizar'>O completa el formulario y te contactaremos:</p>
                        <Form/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CotizarSC