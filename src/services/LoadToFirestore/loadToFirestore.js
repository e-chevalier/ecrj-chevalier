import products from '../products'
import getFirestore from '../GetFirestore/getFirestore'


const loadToFirestore = () => {

    const db = getFirestore().collection('products')

    products.forEach( prod => db
        .doc(prod.id).set({
            description: prod.description,
            discount: prod.discount,
            kind: prod.kind,
            name: prod.name,
            price: prod.price,
            qty: prod.qty,
            stock: prod.stock,
            weight: prod.weight
        })
        .then(data => console.log(data.id))
        .catch(err => console.log(err))
        .finally()
    )

}

export default loadToFirestore