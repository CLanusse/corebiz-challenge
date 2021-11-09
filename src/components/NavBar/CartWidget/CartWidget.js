import React from 'react'
import {BsCart4} from 'react-icons/bs';
import './CartWidget.scss'

export const CartWidget = () => {

    return (
        <div className="cart-widget">
            <BsCart4 className="cart-icon"/>
            <span className="cart-counter">1</span>
        </div>
    )
}
