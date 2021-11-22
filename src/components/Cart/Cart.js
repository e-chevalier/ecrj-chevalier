import { useCartContext } from '../../context/CartContext';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cartList, removeItem, clear } = useCartContext();

    return (
        cartList.length === 0 ?
            <Container className="text-center m-5 p-5">

                <p> En este momento tu carrito esta vacio, accede al home para realizar compras. </p>
                <Button as={Link} to={`/`} id="goHomeButton" size="md" variant="outline-dark" className="border-0 m-2">
                    <i className="bi bi-house">HOME</i>
                </Button>
            </Container>
            :

            <Container id="checkOutItems">
                <ListGroup as="ul" className="list-group-flush my-5 py-2 d-flex">
                    {/* <ul className="list-group list-group-flush my-5 py-2 d-flex "> */}
                    <ListGroup.Item>
                        <Row className="g-0 mb-3">
                            <Col xs={5} className="text-center h6"> Producto </Col>
                            <Col xs={2} className="h6"> Precio </Col>
                            <Col xs={2} className="col-2 h6"> Cant. </Col>
                            <Col xs={2} className="col-2 h6"> Total </Col>
                            <Col xs={1} className="col-1 h6">
                                <Button onClick={() => { clear() }} id="clearButton" size="md" variant="outline-dark" className="border-0 m-2">
                                    <i className="bi bi-trash">Todo</i>
                                </Button>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    {cartList.map(prod =>
                        <ListGroup.Item key={prod.id}>
                            <Row className="g-0 mb-3">
                                <Col xs={5}>
                                    <Row className="align-items-center justify-content-center flex-column flex-md-row">
                                        <Col xs={12} md={{ span: 4, offset: 2 }} className="text-center">
                                            <img src={"/assets/img/product/" + prod.id + "_100px.png"} alt={prod.name} />
                                        </Col>
                                        <Col xs={12} md={6} className="text-center text-md-start txt-lg-start txt-xl-start">
                                            <div>{prod.name}</div>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col xs={2}> $ {prod.price} </Col>
                                <Col xs={2}> {prod.qty} Kg</Col>
                                <Col xs={2}> $ {prod.price * prod.qty} </Col>
                                <Col xs={1}>
                                    <Button onClick={() => { removeItem(prod.id) }} id={"removeButton-" + prod.id} size="md" variant="outline-dark" className="rounded-circle border-0 m-2">
                                        <i className="bi bi-trash"></i>
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    )}
                    <ListGroup.Item>
                        <Row className="g-0">
                            <Col xs={6} className="text-center h6"></Col>
                            <Col xs={2} className="h6"></Col>
                            <Col xs={2} className="h6"> Sub Total</Col>
                            <Col xs={2} id="checkOutSubtotal" className="h6"> $12000</Col>
                        </Row>
                        <Row className="g-0">
                            <Col xs={6} className="text-center h6"></Col>
                            <Col xs={2} className="h6"></Col>
                            <Col xs={2} className="h6"> Envio</Col>
                            <Col xs={2} id="checkOutEnvio" className="h6"> $300</Col>
                        </Row>
                        <Row className="g-0">
                            <Col xs={6} className="text-center h6"></Col>
                            <Col xs={2} className="h6"></Col>
                            <Col xs={2} className="h5"> TOTAL</Col>
                            <Col xs={2} id="checkOutTotal" className="h5"> $12300</Col>
                        </Row>
                    </ListGroup.Item>
                    <button id="checkoutButton" className="list-group-item list-group-item-action list-group-item-success disabled text-center h4" type="button">
                        INICIAR PAGO
                    </button>
                </ListGroup>
            </Container>
    )
}

export default Cart;