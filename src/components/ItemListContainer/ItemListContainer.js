import React from 'react';
import useFetch from '../../hooks/useFetch';
import Container from 'react-bootstrap/Container';
import Loading from '../Loading/Loading';
import ItemList from '../ItemList/ItemList';

import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {

    const [products, loading] = useFetch();
    const { id } = useParams();

    return (

        loading ?
            <Loading />
            :
            <div>
                <p className="h4 my-5">{greeting}</p>
                <Container id="cards" className="py-5 my-5">
                    {
                        <ItemList products={
                            id ? products.filter(prod => prod.kind === id) :
                                products} />
                    }
                </Container>
            </div>

    )
}

export default ItemListContainer
