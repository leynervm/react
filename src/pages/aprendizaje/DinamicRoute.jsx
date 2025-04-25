import { NavLink } from "react-router";

const DinamicRoute = () => {

    const orders = [
        {
            id: 1,
            name: 'Order 1',
            description: 'Description of Order 1',
            date: '2023-10-01',
            status: 'Pending'
        },
        {
            id: 2,
            name: 'Order 2',
            description: 'Description of Order 2',
            date: '2023-10-02',
            status: 'Shipped'
        },
        {
            id: 3,
            name: 'Order 3',
            description: 'Description of Order 3',
            date: '2023-10-03',
            status: 'Delivered'
        }
    ]

    return (
        <div>
            <h1 className="py-6 text-[#00d8ff]">Orders - Rutas dinámicas</h1>

            <div className="bg-white shadow rounded-2xl overflow-hidden">
                <table className="min-w-full border-collapse border-spacing-x-2 border-spacing-y-2">
                    <thead className="hidden lg:table-header-group border-b">
                        <tr className="">
                            <td className="sm:px-3 py-4 font-medium text-gray-500 text-sm whitespace-normal">
                                Order ID
                                <svg xmlns="http://www.w3.org/2000/svg" className="float-right mt-1 w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </td>
                            <td className="sm:px-3 py-4 font-medium text-gray-500 text-sm whitespace-normal">
                                Date</td>
                            <td className="sm:px-3 py-4 font-medium text-gray-500 text-sm text-start whitespace-normal">
                                Description</td>
                            <td className="sm:px-3 py-4 font-medium text-gray-500 text-sm whitespace-normal">Status</td>
                        </tr>
                    </thead>

                    <tbody className="bg-white lg:border-gray-300">
                        {
                            orders.map(order =>
                            (
                                <tr className="" key={order.id}>
                                    <td className="sm:px-3 py-4 text-gray-600 text-sm text-center whitespace-no-wrap">
                                        <p>{order.name}</p>
                                        <NavLink to={`${order.id}`} className="group inline-block hover:bg-[#00d8ff] p-2 border border-[#00d8ff] rounded-lg text-[#00d8ff] transition-colors duration-300">
                                            <span className="text-[#00d8ff] group-hover:text-white">Ver detalles</span>
                                        </NavLink>

                                    </td>
                                    <td className="sm:px-3 py-4 text-gray-600 text-sm text-center whitespace-no-wrap">
                                        {order.date}</td>
                                    <td className="hidden lg:table-cell sm:px-3 py-4 text-gray-600 text-sm text-left lg:text-left whitespace-no-wrap">
                                        {order.description}</td>
                                    <td className="hidden lg:table-cell sm:px-3 py-4 text-gray-600 text-sm text-center whitespace-no-wrap">
                                        <span className="bg-blue-200 p-1 px-2 rounded-lg font-semibold text-blue-500 text-xs">{order.status}</span>
                                    </td>
                                </tr>
                    ))
                        }

                </tbody>
            </table>
        </div>
        </div >
    );
};

export default DinamicRoute;