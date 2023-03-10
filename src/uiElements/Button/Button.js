import React from 'react';
import './Buttons.css'

function Button({text,onClick}) {
    return(
        <div className='button' onClick={onClick}>
            {text}
        </div>
    );
}

export default Button;