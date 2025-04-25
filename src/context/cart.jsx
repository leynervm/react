import { useReducer, createContext } from "react";
import { cartReducer, cartInitialState } from '../reducers/cart'
// 1.   Crear el Contexto | Este es el que tenemos que consumir
export const CartContext = createContext();

function useCartReducer() {

    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = (product) => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({ type: 'CLEAR_CART' })

    return {
        state,
        addToCart,
        removeFromCart,
        clearCart
    }
}

// 2.   Crear el provider, para proveer | Este es el que nos provee de acceso al contexto
export function CartProvider({ children }) {

    const { state, addToCart, removeFromCart, clearCart } = useCartReducer();
    // Se refactorizó a useReduce()
    // const addToCart = (product) => {

    //     const productInCartIndex = cart.findIndex(item => product.id === item.id)
    //     if (productInCartIndex >= 0) {
    //         // Una forma seria usando structuredClone
    //         const newcart = structuredClone(cart)
    //         newcart[productInCartIndex].cantidad += 1
    //         return setCart(newcart)
    //     }

    //     // setCart((prevState) => {
    //     //     return [{
    //     //         id: product.id,
    //     //         cantidad: 1
    //     //     }, ...prevState]
    //     // })
    //     setCart((prevState) => ([
    //         {
    //             ...product,
    //             cantidad: 1
    //         },
    //         ...prevState
    //     ]))
    // }

    // const removeFromCart = (product) => {
    //     setCart((prev) => prev.filter(item => product.id !== item.id))
    // }

    // const clearCart = () => {
    //     setCart([])
    // }

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            clearCart,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}