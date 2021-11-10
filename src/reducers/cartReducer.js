import { types } from "../types/types";

const init = JSON.parse(localStorage.getItem('cart')) || []

export const cartReducer = (state = init, action) => {

    switch( action.type ) {
        case types.addToCart:
            const newCart = [...state, action.payload]
            localStorage.setItem('cart', JSON.stringify(newCart))
            return newCart
            
        case types.removeFromCart:
            const filteredCart = state.filter((item) => item.productId !== action.payload )
            localStorage.setItem('cart', JSON.stringify(filteredCart))
            return filteredCart

        case types.updateQty:
            const toIncrease = state.find((item) => item.productId === action.payload.prodId)
            toIncrease.qty = action.payload.qty
            localStorage.setItem('cart', JSON.stringify(state))
            return [...state]

        case types.emptyCart:
            localStorage.removeItem('cart')
            return []

        default:
            return state;
    }
}