import calculate from '../processors/calculate';

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
    it('adds two positive integers correctly', () => {
        const data = {
            n1: 2.5,
            n2: 3.5,
            op: '+'
        }
        const result = calculate(data);
        expect(result).toEqual(6)
    });

    it('subtracts two positive integers correctly', () => {
        const data = {
            n1: 4.9,
            n2: 3.1,
            op: '-'
        }
        const result = calculate(data);
        expect(result).toEqual(1.8)
    });
    
    it('multiplies two positive integers correctly', () => {
        const data = {
            n1: 2.7,
            n2: 3.1,
            op: '*'
        }
        const result = calculate(data);
        expect(result).toEqual(8.37)
    });

    it('divides two positive integers correctly', () => {
        const data = {
            n1: 9.7,
            n2: 3.2,
            op: '/'
        }
        const result = calculate(data);
        expect(result).toEqual(3.03125)
    });
})