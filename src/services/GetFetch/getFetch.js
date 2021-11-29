import getFirestore from '../GetFirestore/getFirestore'

const getFetch = (kind = 0, id = 0) => {

    const db = getFirestore().collection('products')
    let bdQuery = db

    if (id !== 0) { bdQuery = db.doc(id) }
    if (kind !== 0) { bdQuery = db.where('kind', '==', kind) }

    return (
        bdQuery.get()
            .then(data => id !== 0 ? [{ id: data.id, ...data.data() }] : data.docs.map(prod => ({ id: prod.id, ...prod.data() })))
            .catch((err) => { console.log(err) })
            .finally()
    )

}

export default getFetch;
