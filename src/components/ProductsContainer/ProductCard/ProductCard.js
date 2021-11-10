import React from 'react'
import {FaRegStar, FaStar} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../actions/cartActions'
import { customSwal } from '../../../App'
import './ProductCard.scss'


export const ProductCard = ({productId, productName, stars, imageUrl, price, listPrice, installments}) => {

    const dispatch = useDispatch()
    const {cart} = useSelector(state => state)

    const handleAdd = () => {

        if (!cart.some(el => el.productId === productId)) {
            const newItem = {
                productId,
                productName,
                imageUrl,
                price,
                qty: 1
            }
            dispatch( addToCart(newItem) )
            customSwal.fire({
                icon: 'success',
                title: 'Producto agregado al carrito!',
                confirmButtonText: 'Genial!'
              })
        } else {
            customSwal.fire({
                icon: 'warning',
                title: 'El producto ya se encuentra en el carrito',
                confirmButtonText: 'Entendido'
              })
        }
    }

    // función genera las estrellas a mostrar
    const generateStars = () => {
        const toPrint = []
        for (let i = 1; i <= 5; i++) {
            i <= stars ? toPrint.push(<FaStar key={i}/>) : toPrint.push(<FaRegStar key={i}/>)
        }
        return toPrint
    }

    return (
        <article className="product-card">
            
            <img src={imageUrl} alt={productName}/>
            <h3>{productName}</h3>
            <div className="stars-container">
                {generateStars()}
            </div>
            {listPrice && <p className="list-price">de ${listPrice.toFixed(2)}</p>}
            {listPrice && <div className="on-sale"><p>OFF</p></div>}
            
            <p className="price">por ${price.toFixed(2)}</p>
            {installments.length > 0 && <p className="cuotas">o en {installments[0].quantity} cuotas de ${installments[0].value}</p>}

            <button 
                className="product-btn"
                onClick={handleAdd}
            >
                Comprar
            </button>
        </article>
    )
}
