import('./cart.css')
import { useId } from "react"
import { useCart } from "../../../hooks/useCart"
import ItemCart from "./ItemCart"

const Cart = () => {
    const cartCheckboxId = useId()
    const { cart, addToCart, clearCart } = useCart()

    return (
        <>
            <label htmlFor={cartCheckboxId} className="cart-button">
                <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24" fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    className="block size-5">
                    <path d="m8 16l8.72-.727c2.729-.227 3.341-.823 3.643-3.544L21 6M6 6h.5M22 6h-2.5m-10 0h7M13 9.5v-7" />
                    <circle cx="6" cy="20" r="2" /><circle cx="17" cy="20" r="2" />
                    <path d="M8 20h7M2 2h.966c.945 0 1.768.625 1.997 1.515L7.94 15.076a1.96 1.96 0 0 1-.35 1.686L6.631 18" />
                </svg>
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />

            <aside className="cart">
                <ul>
                    {
                        cart.map((item) => (
                            <ItemCart
                                key={item.id}
                                {...item}
                                addToCart={() => addToCart(item)} />
                        ))
                    }

                    {
                        cart.length > 0 && (
                            <li className="flex justify-end w-full">
                                <button onClick={clearCart} className="!bg-red-500 !border-red-500 !text-white link-navigation-aprendizaje">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="block size-5 !text-current">
                                        <path d="m8 16l8.72-.727c2.729-.227 3.341-.823 3.643-3.544L21 6M6 6h2m14 0h-3.5m-8-3l3 3m0 0l3 3m-3-3l-3 3m3-3l3-3" />
                                        <circle cx="6" cy="20" r="2" />
                                        <circle cx="17" cy="20" r="2" />
                                        <path d="M8 20h7M2 2h.966c.945 0 1.768.625 1.997 1.515L7.94 15.076a1.96 1.96 0 0 1-.35 1.686L6.631 18" />
                                    </svg>
                                </button>
                            </li>
                        )
                    }
                </ul>
            </aside>
        </>
    )
}

export default Cart