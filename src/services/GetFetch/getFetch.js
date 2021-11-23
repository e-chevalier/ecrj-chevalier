import getFirestore from  '../GetFiretore/getFirestore'

const getFetch = (kind = 0, id = 0) => {

    const bdQuery = getFirestore()

    
    if ( id === 0 ) {
        console.log("CASE WITHOUT ID")
        if (kind === 0 ) {
            return (
                bdQuery.collection('products').get()
                .then( data => data.docs.map( prod =>({ id: prod.id, ...prod.data()}) ))
                .catch((err) => { console.log(err)})
                .finally() 
            )
        } else {
            return (
                bdQuery.collection('products').where('kind', '==', kind).get()
                .then( data => data.docs.map( prod =>({ id: prod.id, ...prod.data()}) ))
                .catch((err) => { console.log(err)})
                .finally() 
            )
        }
    } else {
        console.log("CASE WITH ID")
        return (
            bdQuery.collection('products').doc(id).get()
            .then( prod => [{ id: prod.id, ...prod.data()}] )
            .catch((err) => { console.log(err)})
            .finally() 
        )
    }
    
}

export default getFetch;
