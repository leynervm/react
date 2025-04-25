import { describe, expect, test } from "vitest";
import { getImagen } from "../../src/base-pruebas/prueba-test-11";

describe('TEST PRUEBA 11', () => {
    test('getImagen debe retornar error si api key es invalido', async () => {
        const resp = await getImagen()
        expect(resp).toBe('Error al obtener url')
    })

    test('getImagen debe retornar un URL de la imagen', async () => {
        const url = await getImagen()
        expect(typeof url).toBe('string')
    })
})