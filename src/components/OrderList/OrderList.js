import { memo } from 'react'
import Order from '../Order/Order'

const OrderList = memo(
    ({ orders }) => {
        return (
            <>
                <div className="">
                    {orders.sort((a,b) => a.date - b.date).map(order =>
                        <Order key={order.id} id={order.id} items={order.items} total={order.total} date={order.date}  />
                    )}
                </div >
            </>
        )
    }
)

export default OrderList