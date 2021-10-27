import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Accordion from 'react-bootstrap/Accordion'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

const CardComponent = ({prodName, prodId, price, description, qtySelected}) => {

    return (
        <Col className="col py-4 px-4 px-lg-2 py-lg-3">
            <Card className="h-100 mx-2">
                <Card.Header className="text-center">
                    <Card.Title>{prodName}</Card.Title>
                </Card.Header>

                <Row className="h-100 g-0 pt-3">
                    <Col xs={6}>
                     <img id="img" className="card-img-top" src={"/assets/img/product/"+prodId+".jpg"} alt={prodName} />
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
                        <ButtonGroup aria-label="ButtonGroupCard">
                            <Button id={"takeoutButton-"+prodId} variant="outline-danger" className="rounded-circle border-0">
                                <i className="bi bi-patch-minus h2"></i>
                            </Button>
                            <Button variant="light" type="null">
                                <span id={"prodQty-"+prodId} className="badge bg-light text-success fs-5">{qtySelected} Kg</span>
                            </Button>
                            <Button id={"addButton-"+prodId} variant="outline-success" className="rounded-circle border-0">
                                <i className="bi bi-patch-plus h2"></i>
                            </Button>
                        </ButtonGroup>
                    </Card.Footer>
                </Row>

            </Card>
        </Col>

    )
}

export default CardComponent
