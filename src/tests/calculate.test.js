import calculate from '../processors/calculate';

describe('calculate function', () => {
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