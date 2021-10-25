import logo from "../../logo.svg";
import "../../App.css";
import CartWidget from "../CartWidget/CartWidget";


const NavigationBar = () => {
  return (
    <header>
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="Mi Logo" alt="" width="60" height="60" />
            </a>
            <div className="navbar-text d-flex justify-content-between text-right order-lg-1 px-md-4">
              <CartWidget qtyOnCart="9" />
              <button className="navbar-toggler border-0 mx-3" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul id="navbarNavContent" className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Carnes
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Verduras
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Lacteos
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Frutas
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li>
                      <a className="dropdown-item" href="#"> Manzana </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#"> Pera </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#"> Melón </a>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="d-flex flex-row align-items-center">
                <div id="loginContainer"></div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;
