import React from 'react';
import styles from  '../skin/styles.module.css'

function OperatorButtons(props){

    const keys = '+-*/'.split('');
    return keys.map(k => <button className={styles.operatorbutton} id={`digit${k}`} key={`digit${k}`} onClick={() => props.clickHandler(k)}>{k}</button>)

}

export default OperatorButtons