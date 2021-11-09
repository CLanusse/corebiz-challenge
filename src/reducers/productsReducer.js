import { types } from "../types/types";

export const productsReducer = (state = [], action) => {

    switch( action.type ) {
        case types.getProducts:
            return [...action.payload]
        default:
            return state;
    }
}