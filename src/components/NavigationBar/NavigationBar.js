import logo from "../../logo.svg";
import "../../App.css";
import CartWidget from "../CartWidget/CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


const NavigationBar = () => {
  return (
    <header>
      <Container fluid>
        <Navbar bg="light" expand="lg">
        
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={logo} alt="Mi Logo" width="60" height="60" />
            </Navbar.Brand>
            <Navbar.Text className="d-flex justify-content-between text-right order-lg-1 px-md-4">
              <CartWidget qtyOnCart="9" />
              <Navbar.Toggle className="border-0 mx-3" aria-controls="navbarScroll" />
            </Navbar.Text>

            <Navbar.Collapse id="navbarScroll">
              <Nav id="navbarNavContent" className="me-auto mb-2 mb-lg-0" style={{ maxHeight: '300px' }}  >
                <Nav.Link href="#action1">Carnes</Nav.Link>
                <Nav.Link href="#action2">Verduras</Nav.Link>
                <Nav.Link href="#action3">Lacteos</Nav.Link>
                <NavDropdown title="Frutas" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action4">Manzana</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Pera</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action6">
                    Melón
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>

              <div className="d-flex flex-row align-items-center">
                <div id="loginContainer"></div>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </header>
  );
};

export default NavigationBar;
