import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

const ItemDetail = ({ product }) => {

    const [wasClicked, setWasClicked] = useState(false);
    const { cartList, addItem, isInCart } = useCartContext();
    const currentQty = isInCart(product.id)? cartList.find(p => p.id === product.id).qty: 0
    const currentStock = product.stock - currentQty

    const onAdd = (newValue) => {
        setWasClicked(true);
        addItem(product, newValue);
    }

    return (
        <Card className="my-5">
            <Row className="g-0">
                <Col md={4} lg={{ span: 2, offset: 3 }}>
                    <img id="img" className="card-img-top" src={"/assets/img/product/" + product.id + ".jpg"} alt={product.name} />
                </Col>
                <Col md={8} lg={{ span: 4 }}>
                    <Card.Body className="text-center">
                        <Card.Title className="fs-2">{product.name}</Card.Title>
                        <Card.Text>Precio por Kg  <span className="fw-bold fs-4">${product.price}</span></Card.Text>
                        <Card.Text className="my-5 text-start">{product.description}</Card.Text>
                        {wasClicked ?
                            <Button as={Link} to={'/cart'} variant="success">Terminar Compra</Button> :
                            <ItemCount prodId={product.id} stock={currentStock} initial={0} onAdd={onAdd} />}
                    </Card.Body>
                </Col>
            </Row>
        </Card>

    )
}

export default ItemDetail
