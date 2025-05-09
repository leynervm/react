import { useContext } from "react"
import { CartContext } from "../context/cart"

export const useCart = () => {

    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error('UseCart no esta siendo usado por un CartProvider')
    }

    return context
}