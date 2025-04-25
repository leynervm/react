import { useCart } from '../../../hooks/useCart'
import { useFilters } from '../../../hooks/useFilters'

import('./footer.css')

const Footer = () => {

    const { filters } = useFilters()
    const { cart } = useCart()

    return (
        <footer className="footer">
            {
                JSON.stringify(filters, null, 2)
            }
            <br />
            {
                JSON.stringify(cart, null, 2)
            }
            <h4>Prueba tecnica de React * -
                <span>@LeynerVM</span>
            </h4>
            <h5>Shopping Cart con useContext & useReducer</h5>
        </footer>
    )
}

export default Footer