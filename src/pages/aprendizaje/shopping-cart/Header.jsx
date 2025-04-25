import Filters from "./Filters"

const Header = () => {
    return (
        <div>
            <h1 className="rounded-lg font-semibold text-[#00d8ff] !text-2xl text-center">
                React Shopping Cart</h1>

            <Filters />
        </div>
    )
}
export default Header