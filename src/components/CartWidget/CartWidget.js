import { useCartContext } from '../../context/CartContext';
import Button from 'react-bootstrap/Button'

const CartWidget = () => {

    const {cartList} = useCartContext()    

    return (

        <Button variant="outline-primary" className="position-relative">
            <i className="bi bi-cart h3"></i>
            <span id="cartCounter"
                    className="position-absolute top-0 start-100 translate-middle badge bg-success">{cartList.length}</span>
        </Button>
    )
}

export default CartWidget
