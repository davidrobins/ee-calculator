import React from 'react';

function DigitButtons(props){

    const keys = '7894561230.'.split('');
    return keys.map(k => <button className="digitButton" id={`digit${k}`} key={`digit${k}`} onClick={() => props.clickHandler(k)}>{k}</button>)

}

export default DigitButtons