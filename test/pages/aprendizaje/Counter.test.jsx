import { afterEach, describe, expect, test } from "vitest";
import Counter from "../../../src/pages/aprendizaje/Counter";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";


describe('TEST COUNTER EN COMPONENT en <Counter />', () => {
    afterEach(cleanup)

    const start = 100
    test('debe de hacer match con el snapshoot', () => {
        const { container } = render(<Counter />);
        expect(container).toMatchSnapshot();
    })

    test('debe mostrar el valor inicial de 100', () => {
        render(<Counter start={start} />);
        expect(screen.getByText(start).innerHTML).toContain(start);
    })

    test('debe incrementar con el boton Incrementar +1', () => {
        render(<Counter start={start} />);
        fireEvent.click(screen.getByRole('button', { name: 'btn-incrementar' }));
        // screen.debug();
        expect(screen.getByText('101')).toBeTruthy();
    })

    test('debe disminuir con el boton Disminuir -1', () => {
        render(<Counter start={start} />)
        fireEvent.click(screen.getByRole('button', { name: 'btn-disminuir' }))
        // screen.debug()
        expect(screen.getByText('99')).toBeTruthy();
    })

    test('debe funcionar el boton Resetear', () => {
        render(<Counter start={start} />)
        fireEvent.click(screen.getByRole('button', { name: 'btn-incrementar' }))
        fireEvent.click(screen.getByRole('button', { name: 'btn-incrementar' }))
        fireEvent.click(screen.getByRole('button', { name: 'btn-incrementar' }))
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }))
        expect(screen.getByText(start)).toBeTruthy();
    })

})