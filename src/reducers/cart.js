export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) ?? []

export const CART_ACTIONS_TYPE = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART'
}

// Update localStorage with state for cart
const updateLocalStorage = (state) => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action

    switch (actionType) {
        case CART_ACTIONS_TYPE.ADD_TO_CART: {
            const { id } = actionPayload
            const productInCartIndex = state.findIndex(item => item.id === id)
            if (productInCartIndex >= 0) {
                const newState = structuredClone(state)
                newState[productInCartIndex].cantidad += 1
                updateLocalStorage(newState)
                return newState
            }

            const newState = [
                {
                    ...actionPayload,
                    cantidad: 1
                }, ...state
            ]

            updateLocalStorage(newState)
            return newState
        }

        case CART_ACTIONS_TYPE.REMOVE_FROM_CART: {
            const { id } = actionPayload
            const newState = state.filter(item => item.id !== id)
            updateLocalStorage(newState)
            return newState
        }

        case CART_ACTIONS_TYPE.CLEAR_CART: {
            updateLocalStorage(cartInitialState)
            return cartInitialState
        }
    }

    return state
}