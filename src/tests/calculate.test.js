import calculate, { getScaler } from '../processors/calculate';


describe('calculate function: positive integers', () => {
    it('adds two positive integers correctly', () => {
        const data = {
            n1: 2,
            n2: 3,
            op: '+'
        }
        const result = calculate(data);
        expect(result).toEqual(5)
    });

    it('subtracts two positive integers correctly', () => {
        const data = {
            n1: 4,
            n2: 3,
            op: '-'
        }
        const result = calculate(data);
        expect(result).toEqual(1)
    });
    
    it('multiplies two positive integers correctly', () => {
        const data = {
            n1: 2,
            n2: 3,
            op: '*'
        }
        const result = calculate(data);
        expect(result).toEqual(6)
    });

    it('divides two positive integers correctly', () => {
        const data = {
            n1: 9,
            n2: 3,
            op: '/'
        }
        const result = calculate(data);
        expect(result).toEqual(3)
    });
})

describe('calculate function: negative integers', () => {
    it('adds two positive integers correctly', () => {
        const data = {
            n1: -2,
            n2: -3,
            op: '+'
        }
        const result = calculate(data);
        expect(result).toEqual(-5)
    });

    it('subtracts two positive integers correctly', () => {
        const data = {
            n1: -4,
            n2: -3,
            op: '-'
        }
        const result = calculate(data);
        expect(result).toEqual(-1)
    });
    
    it('multiplies two positive integers correctly', () => {
        const data = {
            n1: -2,
            n2: -3,
            op: '*'
        }
        const result = calculate(data);
        expect(result).toEqual(6)
    });

    it('divides two positive integers correctly', () => {
        const data = {
            n1: -9,
            n2: -3,
            op: '/'
        }
        const result = calculate(data);
        expect(result).toEqual(3)
    });
})

describe('calculate function: decimals', () => {
    it('adds two positive decimals correctly', () => {
        const data = {
            n1: 2.5,
            n2: 3.5,
            op: '+'
        }
        const result = calculate(data);
        expect(result).toEqual(6)
    });

    it('subtracts two positive decimals correctly', () => {
        const data = {
            n1: 4.9,
            n2: 3.1,
            op: '-'
        }
        const result = calculate(data);
        expect(result).toEqual(1.8)
    });
    
    it('multiplies two positive decimals correctly', () => {
        const data = {
            n1: 2.7,
            n2: 3.1,
            op: '*'
        }
        const result = calculate(data);
        expect(result).toEqual(8.37)
    });

    it('divides two positive decimals correctly', () => {
        const data = {
            n1: 9.7,
            n2: 3.2,
            op: '/'
        }
        const result = calculate(data);
        expect(result).toEqual(3.03125)
    });
});

describe('getScaler', () => {
    it('generates a multiplier to scale decimals up to integers', () => {
        const scaler1 = getScaler({ n1: 1.234, n2: 1.23, op: '+' });
        expect(scaler1).toEqual(1);

        const scaler2 = getScaler({ n1: 1.234, n2: 1.23, op: '*' });
        expect(scaler2).toEqual(1e16);

        const scaler3 = getScaler({ n1: 5, n2: 1.23, op: '/' });
        expect(scaler3).toEqual(1e16);

    })
})