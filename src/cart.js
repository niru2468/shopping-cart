import React, { useState, useEffect } from 'react'
import CartItem from './cartItem'
import './Cart.css'

function Cart({ initialItems }) {
    const initialState = JSON.parse(window.localStorage.getItem('items'))

    const [items, setItems] = useState(initialState || initialItems)

    useEffect(() => {
        window.localStorage.setItem('items', JSON.stringify(items))
    }, [items])

    const updateQty = (id, newQty) => {
        const newItems = items.map(item => {
            if (item.id === id) {
                return ({ ...item, qty: newQty })
            }
            return item
        })
        setItems(newItems)
    }

    const grandTotal = items.reduce((total, items) => (total + items.qty * items.price
    ), 0).toFixed(2)

    return (
        <div className='Cart'>
            <h1 className='Cart-title'>Shopping Cart</h1>
            <div className='Cart-items'>
                {items.map(item => (
                    <CartItem key={item.id} updateQty={updateQty} {...item} />
                ))}
            </div>
            <h3 className='Grand-Total-Head'>Grand Total: Rs.{grandTotal}</h3>
        </div>
    )
}
export default Cart