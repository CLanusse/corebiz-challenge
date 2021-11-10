import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { emptyCart } from '../../actions/cartActions'
import { customSwal } from '../../App'
import { CartItem } from './CartItem/CartItem'
import { useHistory } from 'react-router-dom'
import './CartScreen.scss'

export const CartScreen = () => {

    const dispatch = useDispatch()
    const {cart} = useSelector(state => state)
    const {push} = useHistory()

    const total = () => {
        return cart.reduce((acc, prod) => acc + (prod.price * prod.qty), 0).toFixed(2)
    }

    const handleEmptyCart = () => {
        dispatch( emptyCart() )
    }

    // mock de finalización de compra
    const handleFinishPurchase = () => {
        customSwal.fire({
            icon: 'success',
            title: '¡Gracias por su compra!',
            confirmButtonText: 'Volver al inicio',
            willClose: () => {
                dispatch( emptyCart() )
                push('/')
            }
          })
    }

    return (
        <section className="contenedor cart-container">

        {cart.length === 0 
            ? 
                <>
                    <h2>Tu carrito está vacío</h2>
                    <Link to="/" className="btn-volver">Volver</Link>
                </>
            :
                <>
                    <h2>Tu compra</h2>

                    <ul className="cart-list">
                        {cart.map((prod) => <CartItem key={prod.productId} {...prod}/>)}
                    </ul>

                    <h3 className="cart-total">
                        Total: ${total()}
                    </h3>

                    <div className="cart-options">
                        <button className="btn-cart-option" onClick={handleFinishPurchase}>
                            Finalizar compra
                        </button>
                        <button className="btn-cart-option" onClick={handleEmptyCart}>
                            Vaciar carrito
                        </button>
                    </div>
                </>
        }
        </section>
    )
}
