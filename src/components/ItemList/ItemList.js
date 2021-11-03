import React from 'react'
import Item from '../Item/Item'

// products Array 4 items
const ItemList = ({products}) => {
    return (
        <>
           <div className="row justify-content-evenly row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4">
                {products.map( prod => 
                    <Item key={prod.id} prodName={prod.name} prodId={prod.id} price={prod.price} description={prod.description} stock={prod.stock} initial={0}/>
                )}
            </div >  
        </>
    )
}

export default ItemList