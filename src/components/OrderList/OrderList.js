import { memo } from 'react'
import Order from '../Order/Order'

const OrderList = memo(
    ({ orders }) => {
        return (
            <>
                <div className="row justify-content-evenly row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4">
                    {orders.map(order =>
                        <Order key={order.id} id={order.id} items={order.items}  />
                    )}
                </div >
            </>
        )
    }
)

export default OrderList