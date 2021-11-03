import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import ItemList from '../ItemList/ItemList';
import getFetch from '../../services/GetFetch/getFetch';

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getFetch
            .then(res => {
                setProducts(res)
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false);
                console.log('Tarea Finalizada');
            });
    }, [])

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
    //<Item prodName={prod.name} prodId={prod.id} price={prod.price} description={prod.description} stock={prod.stock} initial={prod.initial}/>
}

export default ItemListContainer
