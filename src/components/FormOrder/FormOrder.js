import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const FormOrder = ({show, setName, setEmail, setPhone, handleShow, handleClose, updateStock}) => {

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
                        <Button variant="primary" type="submit" onClick={updateStock}>
                            GENERAR
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default FormOrder


