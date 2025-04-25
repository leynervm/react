import { describe, expect, test } from "vitest";
import { getUser, getUsuarioActivo } from '../../src/base-pruebas/prueba-test-05'

describe('TEST PRUEBA 05', () => {
    test('getUser debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser()
        expect(userTest).toStrictEqual(user)
    })

    test('getUsuarioActivo debe retornar un usuario activo', () => {
        const name = 'Leyner'
        const userTestActive = {
            uid: 'ABC567',
            username: name
        }

        const userActive = getUsuarioActivo(name)
        expect(userTestActive).toStrictEqual(userActive)
    })
})