import React from 'react'
import { ProductCard } from '../ProductCard/ProductCard'
import './ProductsList.scss'

export const ProductsList = ( {products} ) => {
    return (
        <section className="contenedor products-container">
            <h2>Más vendidos</h2>

            <div className="products-list">
                {products.map( item => <ProductCard key={item.productId} {...item}/>)}
            </div>
        </section>
    )
}
