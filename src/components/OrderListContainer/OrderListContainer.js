
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Loading from '../Loading/Loading';
import useOrder from '../../hooks/useOrder';
import OrderList from '../OrderList/OrderList'

const OrderListContainer = () => {

    const { userId } = useParams();
    const [orders, loading] = useOrder(userId);
    console.log(orders)

    return (
        loading ?
        <Loading />
        :
        <div>
            <p className="h4 my-5 text-center">Ordenes de compra de <span className="text-capitalize"> {orders[0].buyer.name} </span></p>
            <Container id="cards" className="py-5 my-5">
                {
                    <OrderList orders={orders} />
                }
            </Container>
        </div>
    )
}

export default OrderListContainer
