import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import { useNavigate } from 'react-router-dom';

const SearchOrder = () => {

    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('johnDoe@gmail.com')
    let navigate = useNavigate();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            event.stopPropagation();
            console.log(email)
            navigate('/orders/' + email)
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="d-flex">
            <InputGroup>
                <FormControl required
                    placeholder="Ingrese email del comprador"
                    type="email"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={(e) => { setEmail(e.target.value)}}
                />
                <Button variant="outline-success" type="submit">
                    Buscar
                </Button>
            </InputGroup>
        </Form>
    )
}

export default SearchOrder
