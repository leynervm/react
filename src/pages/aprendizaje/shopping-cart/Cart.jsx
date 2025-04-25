import('./cart.css')
import { useId } from "react"

const Cart = () => {
    const cartCheckboxId = useId()

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
                    <li>
                        <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagen" />
                        <div>
                            <strong>iPhone</strong> - S/. 199
                        </div>
                        <footer>
                            <small>Cant : 1</small>
                            <button>+</button>
                        </footer>
                    </li>
                </ul>
            </aside>
        </>
    )
}

export default Cart