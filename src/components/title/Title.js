import React from 'react';
import './Title.scss';

const Title = ({title}) => {
    return (
        <div className='container-title'>
            <p className='title'>
                {title}
            </p>
        </div>
    )
}

export default Title