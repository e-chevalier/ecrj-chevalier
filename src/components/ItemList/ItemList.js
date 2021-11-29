import { memo } from 'react'
import Item from '../Item/Item'

const ItemList = memo(
    ({ products }) => {
        return (
            <>
                <div className="row justify-content-evenly row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4">
                    {products.map(prod =>
                        <Item key={prod.id} prod={prod} initial={0} />
                    )}
                </div >
            </>
        )
    }
)

export default ItemList
