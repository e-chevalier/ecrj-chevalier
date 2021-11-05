import React from 'react';
import useFetch from '../../hooks/useFetch';
import ItemDetail from '../ItemDetail/ItemDetail';

import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';

const ItemDetailContainer = () => {

    const [products, loading ] = useFetch('fruit00002');

    return (
        loading ?
            <Spinner animation="grow" variant="secondary" role="status" className="my-5" >
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            :
            <Container>
                <ItemDetail product={products[0]} />
            </Container>
    )
}

export default ItemDetailContainer
