import { useParams } from "react-router";

const OrderDetails = () => {
    const {orderId} = useParams()
    // const orderId = paramas.orderId

    return (
        <>
            <div>
                <h1>Detalle de la orden - {orderId}</h1>
            </div>
        </>
    )
}

export default OrderDetails;