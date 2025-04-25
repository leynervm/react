import { describe, expect, test } from "vitest";
import { retornaArreglo } from "../../src/base-pruebas/prueba-test-07";

describe('TEST PRUEBA 07', () => {
    test('debe retornar un string y un numero', () => {
        const [letter, number] = retornaArreglo();

        expect(letter).toBe('ABC')
        expect(number).toBe(123)

        expect(typeof letter).toBe('string')
        expect(typeof number).toBe('number')

        expect(letter).toStrictEqual(expect.any(String))
    })
})