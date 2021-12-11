import { useState, useEffect } from 'react';
import getOrders from '../services/GetOrders/getOrders';

const useOrder = (userId='') => {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getOrders(userId)
            .then(res => {
                setOrders(res)
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false);
            });
        return () => {
            setLoading(true);
        }
    // eslint-disable-next-line        
    }, [userId]);

    return [orders, loading]
}

export default useOrder
