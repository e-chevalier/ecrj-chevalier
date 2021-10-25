import React from 'react'

const CartWidget = ({ qtyOnCart }) => {
    return (

        <a id="Cart" className="btn btn-light position-relative" href="#" role="button" aria-controls="offcanvasCart">
            <span>
                <i className="bi bi-cart h2"></i>
                <span id="cartCounter"
                    className="position-absolute top-0 start-100 translate-middle badge bg-success">{qtyOnCart}</span>
            </span>
        </a>
    )
}

export default CartWidget
