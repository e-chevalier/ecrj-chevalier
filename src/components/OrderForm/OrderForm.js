import { useState } from 'react'
import firebase from "firebase/app";
import getFirestore from '../../services/GetFirestore/getFirestore'
import { useCartContext } from '../../context/CartContext'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';

const OrderForm = () => {

    const { cartList, subTotal } = useCartContext()
    const [show, setShow] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [idOrder, setIdOrder] = useState('')
    let navigate = useNavigate();

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    /**
     * Function to generate the order and insert on collection.
     */
    const generateOrder = (e) => {
        e.preventDefault()
        const orderCollection = getFirestore().collection('orders')

        const buyer = { name, phone, email }
        let order = {}
        order.buyer = buyer
        order.items = cartList.map(prod => ({ id: prod.id, title: prod.name, price: prod.price, qty: prod.qty }))
        order.date = firebase.firestore.Timestamp.fromDate(new Date())
        order.total = subTotal

        console.log(order)

        
        orderCollection.add(order)
            .then(data => {
                setIdOrder(data.id)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally( () => {
                    console.log(idOrder)
                    handleClose()
                    navigate('/orders/'+email)
                }
            )

    }

    return (
        <>
            <Button variant="outline-success" onClick={handleShow}>
                INICIAR COMPRA
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Form>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Nombre y Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese Nombre y Apellido" onChange={(e) => { setName(e.target.value) }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Dirección Email</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese email" onChange={(e) => { setEmail(e.target.value) }} />
                            <Form.Text className="text-muted">
                                Nunca compartimos información personal con nadie.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Número Teléfono</Form.Label>
                            <Form.Control type="number" placeholder="Ingrese número de teléfono" onChange={(e) => { setPhone(e.target.value) }} />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="primary" type="submit" onClick={generateOrder}>
                            GENERAR
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>


        </>
    )
}

export default OrderForm
