import React from 'react'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const ItemCount = ({ prodId }) => {

    const maxPurchase = 5;
    const [qtyCount, setQtyCount] = useState(0)

    const onAdd = () => {
        if ( qtyCount < maxPurchase ){
            setQtyCount(qtyCount + 1);
        } else {
            console.log("Se alcanzó el limite de unidades de compra de "+ prodId);
        }
    }

    const onRemove = () => {
        if(qtyCount > 0 ) {
            setQtyCount(qtyCount - 1);
        } else {
            console.log("QtyCount es cero para "+ prodId);
        }
    }

    const addToCart = () => {
        if( qtyCount > 0) {
            alert("Se agrego al carrito " + qtyCount + " Kg de " + prodId );
        }
    }

    useEffect(() => {
        document.getElementById("removeButton-" + prodId).addEventListener('click', onRemove);
        document.getElementById("addButton-" + prodId).addEventListener('click', onAdd);
        document.getElementById("addToCart-" + prodId).addEventListener('click', addToCart);

        return () => {
            document.getElementById("removeButton-" + prodId).removeEventListener('click', onRemove);
            document.getElementById("addButton-" + prodId).removeEventListener('click', onAdd);
            document.getElementById("addToCart-" + prodId).removeEventListener('click', addToCart);
        }
    });

    return (
        <>
            <ButtonGroup aria-label="ButtonGroupCard" className="align-items-center">
                <Button id={"removeButton-" + prodId} size="sm" variant="outline-dark" className="rounded-circle border-0 m-2">
                    <i className="bi bi-dash h4"></i>
                </Button>
                <span as={ButtonGroup} className="m-2 px-3 fs-6"> {qtyCount} Kg </span>
                <Button id={"addButton-" + prodId} size="sm" variant="outline-dark" className="rounded-circle border-0 m-2">
                    <i className="bi bi-plus h4"></i>
                </Button>
            </ButtonGroup>
            <div className="d-grid gap-2">
                <Button id={"addToCart-" + prodId} variant="outline-dark" size="sm" className="border-0 m-2">
                    Agregar al carrito
                </Button>
            </div>
        </>
    )

}

export default ItemCount
