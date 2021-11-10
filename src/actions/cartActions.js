import { types } from "../types/types";

export const addToCart = (product) => {
    return {
        type: types.addToCart,
        payload: product
    }
}

export const removeFromCart = (prodId) => {
    return {
        type: types.removeFromCart,
        payload: prodId
    }
}

export const updateQuantity = (prodId, qty) => {
    return {
        type: types.updateQty,
        payload: {
            prodId,
            qty
        }
    }
}

export const emptyCart = () => {
    return {
        type: types.emptyCart
    }
}