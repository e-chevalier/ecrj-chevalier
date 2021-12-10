import { useState, useEffect } from 'react';
import "../../App.css";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import Loading from "../Loading/Loading";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import useFetch from '../../hooks/useFetch';

const NavigationBar = () => {

  const [products, loadingProducts] = useFetch();
  const [kinds, setKinds] = useState([]);
  const [loadingKinds, setLoadingKinds] = useState(true);

  useEffect(() => {
    if (!loadingProducts) {
      const arrayTemp = [];
      products.forEach(prod => { if (!(arrayTemp.includes(prod.kind))) { arrayTemp.push(prod.kind) } });
      setKinds(arrayTemp.sort());
      setLoadingKinds(false);
    }
    return () => {
      setLoadingKinds(true);
    }
  }, [products, loadingProducts])

  return (
    loadingKinds ? <Loading />
      :
      <header>
        <Container fluid>
          <Navbar bg="light" expand="lg">

            <Container fluid>
              <Navbar.Brand as={Link} to={'/'}>
                <img src="/assets/icons/logo_small.png" alt="Mi Logo" width="60" height="60" />
              </Navbar.Brand>

              <Navbar.Text className="d-flex justify-content-between text-right order-lg-1 px-md-4">
                <Link to={'/cart'}>
                  <CartWidget />
                </Link>
                <Navbar.Toggle className="border-0 mx-3" aria-controls="navbarScroll" />
              </Navbar.Text>

              <Navbar.Collapse id="navbarScroll">
                <Nav id="navbarNavContent" className="me-auto mb-2 mb-lg-0" style={{ maxHeight: '300px' }}  >
                  {
                    kinds.map(kind =>
                      <NavDropdown key={kind} title={kind} id={`navbarScrollingDropdown-${kind}`}>
                        <NavDropdown.Item as={Link} to={`/category/${kind}`}>Todas las {kind}</NavDropdown.Item>
                        <NavDropdown.Divider />
                        {
                          products
                            .filter(prod => prod.kind === kind)
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map(prod =>
                              <NavDropdown.Item key={prod.id} as={Link} to={`/item/${prod.id}`}>{prod.name}</NavDropdown.Item>
                            )
                        }
                      </NavDropdown>)
                  }
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
