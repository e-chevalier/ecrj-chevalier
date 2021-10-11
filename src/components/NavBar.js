import logo from '../logo.svg';
import '../App.css';

function NavBar() {
    return <>
    <header>
        <div className="container-fluid p-0">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo} className="App-logo" alt="logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Frutas</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Carnes</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Verduras
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Berenjena</a></li>
                            <li><a className="dropdown-item" href="#">Tomate</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Pepino</a></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    </>;
}


export default NavBar;