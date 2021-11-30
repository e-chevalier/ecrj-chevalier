import getFirestore from '../GetFirestore/getFirestore'

const getOrders = (userId=0) => {

    const db = getFirestore().collection('orders')
    let bdQuery = db.where('buyer.email', '==', userId)

    return (
        bdQuery.get()
            .then(data => data.docs.map(order => ({ id: order.id, ...order.data() })))
            .catch((err) => { console.log(err) })
            .finally()
    )

}

export default getOrders;
