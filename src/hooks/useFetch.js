import { useState, useEffect } from 'react';
import getFetch from '../services/GetFetch/getFetch';

const useFetch = (kind =0 ,id = 0) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFetch(kind, id)
            .then(res => {
                setProducts(res)
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false);
            });
        return () => {
            setLoading(true);
        }
    // eslint-disable-next-line        
    }, [kind, id]);

    return [products, loading]
}

export default useFetch
