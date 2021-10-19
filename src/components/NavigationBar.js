import logo from '../logo.svg';
import '../App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img alt=""
                        src={logo}
                        className="d-inline-block align-top App-logo"
                    />{' '}LA VERDULERIA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Carnes</Nav.Link>
                        <Nav.Link href="#link">Frutas</Nav.Link>
                        <NavDropdown title="Verduras" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Tomate</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Berenjena</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Pepino</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Brocoli</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default NavigationBar;