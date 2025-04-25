import { describe, expect, test } from "vitest";
import { getSaludo } from "../../src/base-pruebas/prueba-test-01";

describe('TEST PRUEBA 01', () => {
    test('getSaludo debe retornar "Hola Leyner"', () => {
        const name = 'Leyner'
        const message = getSaludo(name)
        expect(message).toBe(`Hola ${name}`)
    })
})