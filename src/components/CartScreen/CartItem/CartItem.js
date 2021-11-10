import React from 'react'
import {BsTrash} from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity } from '../../../actions/cartActions'
import './CartItem.scss'

export const CartItem = ({productId, price, imageUrl, productName, qty}) => {

    const dispatch = useDispatch()

    const handleIncrease = () => {
        qty < 10 && dispatch( updateQuantity(productId, qty + 1) ) // límite de 10 fingido
    }

    const handleDecrease = () => {
        qty > 1 && dispatch( updateQuantity(productId, qty - 1) )
    }

    const handleDelete = () => {
        dispatch( removeFromCart(productId) )
    }


    return (
        <li className="cart-item">
            <img src={imageUrl} alt={productName} className="cart-item-img"/>

            <div className="cart-item-info">
                <h3>{productName}</h3>
                <p>Precio: ${price * qty}</p>

                <div className="cart-item-qty">
                    <button className="btn-qty" onClick={handleIncrease}>
                        +
                    </button>
                    <p>{qty}</p>
                    <button className="btn-qty" onClick={handleDecrease}>
                        -
                    </button>
                </div>
            </div>

            <button className="btn-remove" onClick={handleDelete}>
                <BsTrash/>
            </button>
        </li>
    )
}
