import {capitalize, reverseString, calculator, caesarCipher, analyzeArray} from './assignment.js';

test('capitalize', () => {
    expect(capitalize('hello')).toBe('Hello');
})

test('reverseString', () => {
    expect(reverseString('hello')).toBe('olleh');
})

const calc = calculator();

test('calculator', () => {
    expect(calc.add(1, 2)).toBe(3);
    expect(calc.subtract(1, 2)).toBe(-1);
    expect(calc.multiply(2, 3)).toBe(6);
    expect(calc.divide(6, 3)).toBe(2);
})

test('caesarCipher', () => {
    expect(caesarCipher('hello', 1)).toBe('ifmmp');
    expect(caesarCipher('hello', 2)).toBe('jgnnq');
    expect(caesarCipher('hello', 3)).toBe('khoor');
    expect(caesarCipher('Zoo', 4)).toBe('Dss');
    expect(caesarCipher('HELLO', 5)).toBe('MJQQT');
    expect(caesarCipher('Goodbye!', 6)).toBe('Muujhek!');
})

test('analyzeArray', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({average: 4, min: 1, max: 8, length: 6});
    expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual({average: 5.5, min: 1, max: 10, length: 10});
})