import React from 'react'
//styles
import './smartPanic.scss'
//providers
import app from '../../img/smartPanic/app.png'
import check from '../../img/smartPanic/check.png'
//components
import Title from '../../components/title/Title'
import Check from '../../components/check/Check'

const SmartPanic = ({title}) => {
    return (
        <div className='img-bg'>
            <div className='container-smartPanic'>
                <Title title={title}/>
                <div className='content'>
                    <img className='img-app' src={app} alt=''/>
                    <div className='container-check-and-subtitle'>
                        <p className='subtitle-smartPanic'>Conoce nuestra aplicación móvil para clientes. Desde aquí podrás:</p>
                        <div className='container-check-component'>
                            <Check logo={check} innerText={`Enviar una señal de pánico, no importa 
                            dónde estés, nuestros operadores te 
                            ubicarán con una precisión de
                            1,5 mts para asistirte.`}/>
                            <Check logo={check} innerText={`Recibir las notificaciones de tus 
                            alarmas`}/>
                            <Check logo={check} innerText={`Monitorear tu circuito de cámaras. 
                            Encender y apagar tu panel de alarma 
                            remotamente`}/>
                            <Check logo={check} innerText={`Realizar el seguimiento a los GPS de
                            tus vehículos.`}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmartPanic