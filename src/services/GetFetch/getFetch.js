import getFirestore from  '../GetFiretore/getFirestore'

const getFetch = (kind = 0, id = 0) => {

    let bdQuery

    if (id !== 0 ) {
        bdQuery = getFirestore().collection('products').doc(id)
    } else {
        if (kind !== 0 ) {
            bdQuery = getFirestore().collection('products').where('kind', '==', kind)
        } else {
            bdQuery = getFirestore().collection('products')
        }
    }

    return (
        bdQuery.get()
        .then( data => id !== 0 ? [{ id: data.id, ...data.data()}] : data.docs.map( prod =>({ id: prod.id, ...prod.data()}) ) )
        .catch((err) => { console.log(err)})
        .finally() 
    )
    
}

export default getFetch;
