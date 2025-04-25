import { createContext, useState } from "react";

// 1.   Crear el Contexto | Este es el que tenemos que consumir
export const CartContext = createContext();

// 2.   Crear el provider, para proveer | Este es el que nos provee de acceso al contexto
export function CartProvider({ children }) {

    const [cart, setCart] = useState([]);
    const addToCart = (product) => {

        const productInCartIndex = cart.findIndex(item => product.id === item.id)
        if (productInCartIndex >= 0) {
            // Una forma seria usando structuredClone
            const newcart = structuredClone(cart)
            newcart[productInCartIndex].cantidad += 1
            return setCart(newcart)
        }

        // setCart((prevState) => {
        //     return [{
        //         id: product.id,
        //         cantidad: 1
        //     }, ...prevState]
        // })
        setCart((prevState) => ([
            {
                ...product,
                cantidad: 1
            },
            ...prevState
        ]))
    }
    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}