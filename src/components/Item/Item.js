import React from 'react'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Accordion from 'react-bootstrap/Accordion'

import ItemCount from '../ItemCount/ItemCount'

const Item = ({ prodName, prodId, price, description, stock, initial }) => {

    const onAdd = (qty) => {

        if (qty <= stock && qty > 0) {
            alert("Cantidad seleccionada de " + prodName + " es: " + qty + " Kg.");
        } else {
            console.log("Qty en OnAdd no cumple con los requisitos.");
        }

    }

    return (
        <Col className="col py-4 px-4 px-lg-2 py-lg-3">
            <Card className="h-100 mx-2">
                <Card.Header className="text-center">
                    <Card.Title>{prodName}</Card.Title>
                </Card.Header>

                <Row as={Link} to={`/item/${prodId}`} className="h-100 g-0 pt-3 text-decoration-none text-body">
                    <Col xs={6}>
                        <img id="img" className="card-img-top" src={"/assets/img/product/" + prodId + ".jpg"} alt={prodName} />
                    </Col>
                    <Col xs={6}>
                        <Card.Body>
                            <Card.Text>Precio por Kg</Card.Text>
                            <p className="fw-bold fs-4">${price}</p>
                        </Card.Body>
                    </Col>
                </Row>
                <Row className="g-0">
                    <Card.Footer className="text-center">
                        <Accordion flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Más información</Accordion.Header>
                                <Accordion.Body>
                                    {description}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <ItemCount prodId={prodId} stock={stock} initial={initial} onAdd={onAdd} />
                    </Card.Footer>
                </Row>
            </Card>
        </Col>

    )
}

export default Item
