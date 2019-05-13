import React from 'react';
import styles from  '../skin/styles.module.css'


function DigitButtons(props){

    const keys = '7894561230.'.split('');

    return keys.map(k => <button className={styles.digitbutton} id={`digit${k}`} key={`digit${k}`} onClick={() => props.clickHandler(k)}>{k}</button>)

}

export default DigitButtons