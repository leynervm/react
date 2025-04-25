import { useState } from 'react'
import { useFilters } from '../../../hooks/useFilters'
import { products as initialProducts } from '../../../mocks/products.json'
import { IS_DEVELOPMENT } from '../../../config.js'

import Products from "./Products"
import Header from './Header'
import Footer from './Footer'
import Cart from './Cart.jsx'
import { CartProvider } from '../../../context/cart.jsx'

const AppCarshoop = () => {

    const [products] = useState(initialProducts)
    const { filterProducts } = useFilters();

    const filteredProducts = filterProducts(products)

    return (
        <CartProvider>
            <Header />
            <Cart />
            <Products products={filteredProducts} />
            {IS_DEVELOPMENT && <Footer />}
        </CartProvider>
    )
}
export default AppCarshoop