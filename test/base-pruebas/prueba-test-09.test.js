import { describe, expect, test } from "vitest";
import { getHeroeByIdAsync } from "../../src/base-pruebas/prueba-test-09";

describe('TEST PRUEBA 09', () => {
    test('getHeroeByIdAsync debe retornar un heroe', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
            .then(hero => {
                // console.log(hero);
                // expect(hero).toBe(false)
                expect(hero).toEqual({
                    id: 2,
                    name: 'Spiderman',
                    owner: 'DC'
                })

                done();
            })
    })

    test('getHeroeByIdAsync debe obtener un error si heroe no existe', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toBeFalsy()
                done()
            })
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el heroe ' + id)
                done();
            })
    })
})