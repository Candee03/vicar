import React from 'react'
import './Btn.scss'
import { Link } from 'react-scroll'

/**
 * 
 * @param {*} param0 
 * @param {*} btnType: 'home'//'NS'//'Cotizar'
 * @returns 
 */
const Btn = ({innerText, btnType, linkTo}) => {
    return (
        <div className={`div-container-div-${btnType? btnType: ''}`}>
            <div className={`container-btn-${btnType? btnType: ''}`}>
                <Link to={linkTo? linkTo: 'home'} delay={200} smooth={true} duration={800} offset={-60}>
                    <p className={`text-btn-${btnType? btnType: ''}`}>{innerText}</p>
                </Link>
            </div>
        </div>
    )
}

export default Btn