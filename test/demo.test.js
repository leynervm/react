import { describe, expect, it } from "vitest";

const fizzbuzz = (number) => {
    if (typeof number !== 'number')
        throw new Error('parametro recibido debe ser un numero');
    if (Number.isNaN(number))
        throw new Error('parametro recibido debe ser un numero');

    const multiplies = { 3: 'fizz', 5: 'buzz', 7: 'woff' }
    let output = ''

    Object
        .entries(multiplies)
        .forEach(([multiplier, word]) => {
            if (number % multiplier === 0) output += word
        })
    return output === '' ? number : output;
}

describe('TEST', () => {

    // Este test ya es redundante 
    // it('debería ser una función', () => {
    //     expect(typeof fizzbuzz).toBe('function');
    // })

    it('lanzar un mensaje de error específico si no se proporciona ningún número como parámetro', () => {
        expect(() => fizzbuzz()).toThrow();
    })

    it('lanzar un mensaje de error específico si no se proporciona ningún número como parámetro', () => {
        expect(() => fizzbuzz()).toThrow('parametro recibido debe ser un numero');
    })

    it('lanzar un mensaje de error específico si no se proporciona ningún número', () => {
        expect(() => fizzbuzz(NaN)).toThrow('parametro recibido debe ser un numero');
    })

    it('retornar 1 si numero proporcionado es 1', () => {
        expect(fizzbuzz(1)).toBe(1);
    })

    it('retornar 2 si numero proporcionado es 2', () => {
        expect(fizzbuzz(2)).toBe(2);
    })

    it('retornar "fizz" si numero proporcionado es 3', () => {
        expect(fizzbuzz(3)).toBe('fizz');
    })

    it('retornar "fizz" si numero proporcionado es múltiplo de 3', () => {
        expect(fizzbuzz(6)).toBe('fizz');
        expect(fizzbuzz(9)).toBe('fizz');
        expect(fizzbuzz(12)).toBe('fizz');
    })

    it('retornar "buzz" si numero proporcionado es 5', () => {
        expect(fizzbuzz(5)).toBe('buzz');
    })

    it('retornar "buzz" si numero proporcionado es múltiplo de 5', () => {
        expect(fizzbuzz(10)).toBe('buzz');
        expect(fizzbuzz(20)).toBe('buzz');
    })

    it('retornar "fizzbuzz" si numero proporcionado es multiple de 15', () => {
        expect(fizzbuzz(15)).toBe('fizzbuzz');
    })

    it('retornar "woff" si numero proporcionado es multiple de 7', () => {
        expect(fizzbuzz(7)).toBe('woff');
    })

    it('retornar "fizzwoff" si numero proporcionado es multiple de 21', () => {
        expect(fizzbuzz(21)).toBe('fizzwoff');
    })
})