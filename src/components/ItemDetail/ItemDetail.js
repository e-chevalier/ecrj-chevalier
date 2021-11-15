import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'



const ItemDetail = ({ product }) => {

    const [qtyToAdd, setQtyToAdd] = useState(0);
    const [wasClicked, setWasClicked] = useState(false);

    const onAdd = (newValue) => {
        setWasClicked(true);
        setQtyToAdd(newValue);
    }

    console.log("QtyIs: " + qtyToAdd );

    return (
        <Card className="my-5">
            <Row className="g-0">
                <Col md={4} lg={{ span: 2, offset: 3 }}>
                    <img id="img" className="card-img-top" src={"/assets/img/product/" + product.id + ".jpg"} alt={product.name} />
                </Col>
                <Col md={8} lg={{ span: 4 }}>
                    <Card.Body>
                        <Card.Title className="fs-2">{product.name}</Card.Title>
                        <Card.Text>Precio por Kg  <span className="fw-bold fs-4">${product.price}</span></Card.Text>
                        <Card.Text className="my-5 text-start">{product.description}</Card.Text>
                        {wasClicked ?
                        <Button as={Link} to={'/cart'} variant="success">Terminar Compra</Button>:
                        <ItemCount prodId={product.id} stock={product.stock} initial={0} onAdd={onAdd} />}
                    </Card.Body>
                </Col>
            </Row>
        </Card>

    )
}

export default ItemDetail
