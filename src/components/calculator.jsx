import React, { Component } from 'react';
import calculate from '../processors/calculate';
import DigitButtons from './digitButtons';
import OperatorButtons from './operatorButtons'

class Calculator extends Component {

    constructor(props){
        super(props);
        this.state = {
            n1: null,
            n2: null,
            op: null,
            ans: 0
        }
    }

    equalsButtonHandler(key){

    }

    digitButtonHandler(key){
        
    }

    operatorButtonHandler(key){

    }

    acButtonHandler(key){

    }
    
    render(){
        return(
            <div className="calculator">
                <div className="display">{this.state.ans}</div>
                <div className="buttonPad">
                    <DigitButtons clickHandler={this.digitButtonHandler} />
                    <OperatorButtons clickHandler={this.operatorButtonHandler} />
                    <button className="equalsButton" onClick={this.equalsButtonHandler}>=</button>
                    <button className="acButton" onClick={this.acButtonHandler}>AC</button>
                </div>
            </div>
        )
    }
    
}

export default Calculator