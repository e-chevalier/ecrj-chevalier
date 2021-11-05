import React from 'react';
import useFetch from '../../hooks/useFetch';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {

    const [products, loading] = useFetch();

    return (

        loading ?
            <Spinner animation="grow" variant="secondary" role="status" className="my-5" >
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            :
            <>
                <div>
                    <p className="h4 my-5">{greeting}</p>
                    <Container id="cards" className="py-5 my-5">
                        {
                            <ItemList products={products} />
                        }
                    </Container>
                </div>
            </>
    )
}

export default ItemListContainer
