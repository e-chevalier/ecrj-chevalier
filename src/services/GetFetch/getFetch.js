import products from '../products';

const getFetch = (id = 0) => {
    return (
        new Promise((resolve, reject) => {
            setTimeout(() => {
                id === 0 ? resolve(products) : resolve(products.filter(prod => prod.id === id))
            }, 2000)
        })
    )
}

export default getFetch;
