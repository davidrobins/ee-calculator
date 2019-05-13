import React, { Component } from 'react';
import calculate from '../processors/calculate';
import DigitButtons from './digitButtons';
import OperatorButtons from './operatorButtons'
import styles from  '../skin/styles.module.css'

class Calculator extends Component {

    constructor(props){
        super(props);
        this.emptyState = {
            n1: '',
            n2: '',
            op: '',
            display: 0
        }
        this.state = {...this.emptyState}

        this.equalsButtonHandler = this.equalsButtonHandler.bind(this);
        this.digitButtonHandler = this.digitButtonHandler.bind(this);
        this.operatorButtonHandler = this.operatorButtonHandler.bind(this);
        this.acButtonHandler = this.acButtonHandler.bind(this);
    }

    equalsButtonHandler(){
        const {n1, n2, op} = this.state;
        if(n1 !== null && n2 !== null && op !== null){
            const ans = calculate(this.state);
            this.setState({
                n1: ans,
                n2: '',
                op: '',
                display: ans
            })
        }
    }

    digitButtonHandler(key){
        let { n1, n2, op } = this.state;

        if(op){
            n2 = `${n2}${key}`;
            this.setState({'n2': n2, 'display': n2})  
        } else {
            n1 = `${n1}${key}`;
            this.setState({'n1': n1, 'display': n1})
        }
    }

    operatorButtonHandler(key){
        if(this.state.n1){
            this.setState({op: key})
        }
    }

    acButtonHandler(key){
        this.setState({...this.emptyState})
    }

    componentDidUpdate(){

    }
    
    render(){
        return(
            <div className={styles.calculator}>
                <div className={styles.display}>{this.state.display}</div>
                <div className={styles.numpad}>
                    <DigitButtons clickHandler={this.digitButtonHandler} />
                    <button className={styles.digitbutton} onClick={this.equalsButtonHandler}>=</button>
                </div>
                <div className={styles.operatorpad}>
                    <OperatorButtons clickHandler={this.operatorButtonHandler} />
                    <button className={styles.operatorbutton} onClick={this.acButtonHandler}>AC</button>
                </div>
                <img src="logo.svg" style={{width: '200px', marginTop: '10px', marginLeft: '-30px'}}/>
            </div>
        )
    }
    
}

export default Calculator