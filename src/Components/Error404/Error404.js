import React from 'react';
import error from './error-404.png'
import './Error404.css'

const Error404 = () => {
    return (
        <div className='container error-container'>
            <img src={error} alt="Error 404" />
        </div>
    );
};

export default Error404;