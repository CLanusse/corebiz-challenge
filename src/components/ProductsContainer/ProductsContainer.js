import React, { useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../actions/productsActions'
import { ProductsList } from './ProductsList/ProductsList'

export const ProductsContainer = () => {

    const dispatch = useDispatch()
    const {products} = useSelector(state => state)
    const {loading} = useSelector(state => state.ui.products)

    useEffect(()=>{
        dispatch( getAllProducts() )
    }, [dispatch])

    return (
        <main>
            {loading 
                ? <CircularProgress
                    size={240}
                    sx={{
                        color: '#000',
                        top: '50%',
                        left: '50%',
                        marginTop: '32px',
                        marginLeft: 'calc(50% - 120px)',
                    }}
                />
                : <ProductsList products={products}/>
            }
        </main>
    )
}
