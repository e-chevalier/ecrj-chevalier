import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({ prod, initial }) => {

    const { cartList, addItem, isInCart } = useCartContext();
    const currentQty = isInCart(prod.id)? cartList.find(p => p.id === prod.id).qty: 0
    const currentStock = prod.stock - currentQty
    
    const onAdd = (qty) => {

        if (qty <= currentStock && qty > 0) {
            addItem(prod, qty)
        } 
    }

    return (
        <Col className="col py-4 px-4 px-lg-2 py-lg-3">
            <Card className="h-100 mx-2">
                <Card.Header className="text-center">
                    <Card.Title>{prod.name}</Card.Title>
                </Card.Header>

                <Row as={Link} to={`/item/${prod.id}`} className="h-100 g-0 pt-3 text-decoration-none text-body">
                    <Col xs={6}>
                        <img id="img" className={currentStock > 0 ? 'card-img-top': 'card-img-top grayImageFilter'} src={"/assets/img/product/" + prod.id + ".jpg"} alt={prod.name} />
                    </Col>
                    <Col xs={6}>
                        <Card.Body>
                            <Card.Text>Precio por Kg</Card.Text>
                            <p className="fw-bold fs-4">${prod.price}</p>
                        </Card.Body>
                    </Col>
                </Row>
                <Row className="g-0">
                    <Card.Footer className="text-center">
                        <ItemCount prodId={prod.id} stock={currentStock} initial={initial} onAdd={onAdd} />
                    </Card.Footer>
                </Row>
            </Card>
        </Col>

    )
}

export default Item
