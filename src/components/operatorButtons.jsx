import React from 'react';
import styles from  '../skin/styles.module.css'

function OperatorButtons(props){

    const operators = {
        plus: '+',
        minus: '-',
        multiply: '*',
        divide: '/'
    }

    return Object.entries(operators).map(([desc,sym]) => {
        return (
            <button className={styles.operatorbutton} id={`op_${desc}`} key={`op_${desc}`} onClick={() => props.clickHandler(sym)}>{sym}</button>
        )
    })

    // const keys = '+-*/'.split('');
    // return keys.map(k => <button className={styles.operatorbutton} id={`op${k}`} key={`op${k}`} onClick={() => props.clickHandler(k)}>{k}</button>)

}

export default OperatorButtons