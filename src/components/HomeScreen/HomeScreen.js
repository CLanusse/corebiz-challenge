import React from 'react'
import { Banner } from '../Banner/Banner'
import { Newsletter } from '../Newsletter/Newsletter'
import { ProductsContainer } from '../ProductsContainer/ProductsContainer'

export const HomeScreen = () => {

    return (
        <>
            <Banner/>
            <ProductsContainer/>
            <Newsletter/>
        </>
    )
}
