import React from 'react';
import './title.scss';

const Title = ({title, txtColor}) => {
    return (
        <div className='container-title'>
            <p className={txtColor? `title-${txtColor}`: 'title-red'}>
                {title}
            </p>
        </div>
    )
}

export default Title