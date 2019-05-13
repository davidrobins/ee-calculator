
const add = (n1,n2) => n1 + n2;
const subtract = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => n1 / n2;

export const getScaler = data => {
    const {n1, n2, op} = data
    if((parseInt(n1) !== n1 || parseInt(n2) !== n2) && op !== '+'){
        return 1e16
    } else {
        return 1
    }
}

const calculate = data => {
    let { n1, n2, op } = data;

    const scaler = getScaler(data);

    n1 *= scaler;
    n2 *= scaler;

    let solution;
    let reverseScaler;

    switch(op){
        case '+': solution = add(n1, n2); reverseScaler = scaler; break;
        case '-': solution = subtract(n1, n2); reverseScaler = scaler; break;
        case '*': solution = multiply(n1, n2); reverseScaler = Math.pow(scaler, 2); break;
        case '/': solution = divide(n1, n2); reverseScaler = 1; break;
        default: throw new Error('unidentifed operator');
    }
    
    return solution/reverseScaler
}

export default calculate;