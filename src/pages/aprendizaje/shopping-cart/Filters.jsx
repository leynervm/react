import { useId, useState } from "react"
import { useFilters } from "../../../hooks/useFilters";

const Filters = () => {
    // const [minPrice, setMinPrice] = useState(0); //Estado Local
    const { filters, setFilters } = useFilters()

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleCHangeMinPrice = (event) => {
        // setMinPrice(event.target.value)
        setFilters((filters) => ({
            ...filters,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters((prevState) => ({
            ...prevState,
            category: event.target.value
        }))
        // onChange((prevState) => ({
        //     ...prevState,
        //     category: event.target.value
        // }))
    }

    return (
        <section className="flex justify-end items-end gap-3 w-full">
            <div className="min-w-60">
                <label htmlFor={minPriceFilterId} className="block text-left">
                    Precio a partir S/. {filters.minPrice}</label>
                <input className="block"
                    type="range" min='0'
                    max='1000'
                    id={minPriceFilterId}
                    value={filters.minPrice}
                    onChange={handleCHangeMinPrice}
                />
            </div>
            <div className="w-60">
                <label className="block text-start" htmlFor={categoryFilterId}>Categoría :</label>
                <select name="category"
                    id={categoryFilterId}
                    className="inline-block p-2.5 border border-[#00d8ff] rounded-lg focus:outline-0 focus:ring-0 w-full text-[#00d8ff]"
                    onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                </select>
            </div>
        </section>
    )
}
export default Filters