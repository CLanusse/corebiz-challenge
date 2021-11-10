import React from 'react'
import {BsCart4} from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './CartWidget.scss'

export const CartWidget = () => {

    const {cart} = useSelector(state => state)

    const totalQty = () => {
        return cart.reduce((acc, prod) => acc + prod.qty, 0)
    }

    return (
        <Link to="/cart" className="cart-widget">
            <BsCart4 className="cart-icon"/>
            {cart.length > 0 && <span className="cart-counter">{totalQty()}</span>}
        </Link>
    )
}
