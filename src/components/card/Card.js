import React from 'react'
import { Link } from 'react-scroll'
//styles
import './card.scss'

const Card = ({ data }) => {

    const over = (index) => {
        const card = document.getElementById(`card${index}`)
        const btnCard = card.childNodes[3]
        card.className='card shadow'
        btnCard.className='active-btn-card'
    }
    const out = (index => {
        const card = document.getElementById(`card${index}`)
        const btnCard = card.childNodes[3]
        card.className='card'
        btnCard.className='disable-btn-card'
    })
    
    return (
        <div className='container-card'>
            {
                data.map((item, index) => {
                    return (
                        <div onMouseOut={()=>out(index)} onMouseOver={()=>over(index)} key={'card'+index} id={`card${index}`} className='card'>
                            <img alt='' className='img-card' key={index} src={item.imgData}/>
                            {item.title? 
                            <p className='title-card'>{item.title}</p>: <></> }
                            {item.text? 
                            <p className='text-card'>{item.text}</p>: <></> }
                            <div key={'div'+index} className='disable-btn-card'>
                                <Link to='cotizar' className='p-btn-card-cotizar' delay={200} smooth={true} duration={800} offset={-60}>
                                Cotizar sin costo
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card