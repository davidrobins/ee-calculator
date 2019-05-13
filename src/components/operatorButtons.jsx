import React from 'react';

function OperatorButtons(props){

    const keys = '+-*/'.split('');
    return keys.map(k => <button className="operatorButton" id={`digit${k}`} key={`digit${k}`} onClick={() => props.clickHandler(k)}>{k}</button>)

}

export default OperatorButtons