import { useState } from 'react';
import PropTypes from 'prop-types';

const Counter = ({ start, end }) => {

    const [counter, setCounter] = useState(start)
    const handleIncrement = () => setCounter(counter + 1)
    const handleDecrement = () => setCounter(counter - 1)
    const handleReset = () => setCounter(start)

    return (
        <>
            <div>
                <div>
                    MAX
                    <span>{end}</span>
                </div>
                <h1 data-testid="test-counter">{counter}</h1>

                <div className="flex justify-center gap-1 mt-6 w-full">
                    <button aria-label='btn-disminuir' className='link-navigation-aprendizaje' type='button' onClick={handleDecrement}>
                        Disminuir
                    </button>
                    <button aria-label='btn-incrementar' className='link-navigation-aprendizaje' type='button' onClick={handleIncrement}>
                        Incrementar
                    </button>
                    <button aria-label='btn-reset' className='bg-red-500 !border-red-500 !ring-red-500 !text-white link-navigation-aprendizaje' type='button' onClick={handleReset}>
                        Resetear
                    </button>
                </div>
            </div>
        </>
    )
}

Counter.propTypes = {
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
};

export default Counter