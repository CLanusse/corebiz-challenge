import React from 'react'
import {FaRegStar, FaStar} from 'react-icons/fa'
import './ProductCard.scss'

export const ProductCard = ({productId, productName, stars, imageUrl, price, listPrice, installments}) => {


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

            <button className="product-btn">
                Comprar
            </button>
        </article>
    )
}
