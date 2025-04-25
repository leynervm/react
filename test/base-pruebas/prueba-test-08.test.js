import { describe, expect, test } from "vitest"
import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/prueba-test-08"
import heroes from "../../src/data/heroes"

describe('TEST PRUEBA 08', () => {
    test('getHeroeById debe retornar un heroe por ID', () => {
        const id = 1;
        const heroeTest = getHeroeById(id)
        expect(heroeTest).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    })

    test('getHeroeById debe retornar undefined si no existe', () => {
        const id = 100;
        const heroeTest = getHeroeById(id)
        expect(heroeTest).toBeFalsy(undefined)
    })


    test('getHeroesByOwner debe retornar un arreglo con heroes de DC', () => {
        const owner = 'DC';
        const heroesDC = getHeroesByOwner(owner)
        expect(heroesDC.length).toBe(3)
        expect(heroesDC).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ])
    })

    test('getHeroesByOwner debe retornar un arreglo con heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroesMarvel = getHeroesByOwner(owner)
        expect(heroesMarvel.length).toBe(2)
        expect(heroesMarvel).toEqual(heroes.filter((heroe) => heroe.owner === owner))
    })
})