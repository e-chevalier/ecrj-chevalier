import { createContext, useContext, useState } from 'react'


const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
}


const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const isInCart = (itemId) => {
        return( cartList.findIndex(prod => prod.id === itemId) !== -1 ? true : false )
    }

    const addItem = (item, qty) => {
        if( isInCart(item.id) ) { //The item is in the cart
            cartList.map(prod => prod.id === item.id? prod.qty += qty: prod)
            setCartList(cartList)
        } else {  // The item is not in the cart
            item.qty = qty
            setCartList([...cartList, item])
        }
    }
    
    const removeItem = (itemId) => {
        setCartList(cartList.filter(prod => prod.id !== itemId))
    }

    const clear = () => {
        // TODO: Iterate over cartList and restore the stock.
        console.log("Call clear()")
        setCartList([])
    }

    return (
        <CartContext.Provider value={{ cartList, addItem, removeItem, clear }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
