import { useCart } from "../../../hooks/useCart"

const Products = ({ products }) => {

    const { cart, addToCart, removeFromCart } = useCart()

    const checkProductIncart = (product) => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <div className="gap-2 grid grid-cols-7 w-full">
            {
                products.map((product) => {
                    const isProductInCart = checkProductIncart(product)
                    // console.log(product.images[0]);
                    return (
                        <div className="flex flex-col gap-2 bg-white shadow-md p-1 rounded-2xl w-full" key={product.id}>
                            <div className="flex-1">
                                <div className="block rounded-lg w-full overflow-hidden">
                                    <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt={product.title} className="block w-full object-scale-down overflow-hidden" />
                                    {/* <img src={product.images[0]} alt={product.title} className="block w-full object-scale-down overflow-hidden" /> */}
                                </div>
                                <p className="mt-2 font-semibold text-neutral-500 text-center !leading-none">
                                    {product.title}</p>
                                <p className="mt-2 font-semibold text-neutral-800 text-2xl text-center !leading-none">
                                    <small>S/.</small>
                                    {product.price}</p>
                                <p className="mt-2 font-semibold text-[#00d8ff] text-xs text-center !leading-none">
                                    {product.category}</p>
                            </div>
                            <div>
                                <button
                                    onClick={() => {
                                        isProductInCart ?
                                            removeFromCart(product) :
                                            addToCart(product)
                                    }}
                                    style={isProductInCart ? { background: 'red', color: 'white', borderColor: 'red' } : {}}
                                    className="block w-full !text-xs link-navigation-aprendizaje">

                                    {
                                        isProductInCart ? 'QUITAR' : 'AGREGAR'
                                    }
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeWidth="2"
                                        className="block size-5 text-current">
                                        <path d="m8 16l8.72-.727c2.729-.227 3.341-.823 3.643-3.544L21 6M6 6h.5M22 6h-2.5m-10 0h7M13 9.5v-7" />
                                        <circle cx="6" cy="20" r="2" />
                                        <circle cx="17" cy="20" r="2" />
                                        <path d="M8 20h7M2 2h.966c.945 0 1.768.625 1.997 1.515L7.94 15.076a1.96 1.96 0 0 1-.35 1.686L6.631 18" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default Products