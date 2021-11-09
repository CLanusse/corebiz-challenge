import { getProducts } from "../services/apiServices"
import { types } from "../types/types"
import { finishLoadingProducts, startLoadingProducts } from "./ui"

export const getAllProducts = () => {
    return async (dispatch) => {
        dispatch( startLoadingProducts() )

        const data = await getProducts()
        dispatch({
            type: types.getProducts,
            payload: data
        })

        dispatch( finishLoadingProducts() )
    }
}

export const getFilteredProducts = (query) => {
    return async (dispatch) => {
        dispatch( startLoadingProducts() )

        const data = await getProducts()
        dispatch({
            type: types.getProducts,
            payload: data.filter( el => el.productName.toLowerCase().includes(query.trim().toLowerCase()) )
        })

        dispatch( finishLoadingProducts() )
    }
}
