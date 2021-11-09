import { types } from "../types/types"

const init = {
    products: {
        loading: false
    },
    newsletter: {
        loading: false
    }
}

export const uiReducer = (state = init, action) => {

    switch( action.type ) {
        case types.startLoadingProducts:
            return {
                ...state,
                products: {
                    loading: true
                }
            }

        case types.finishLoadingProducts:
            return {
                ...state,
                products: {
                    loading: false
                }
            }    
        case types.startLoadingNewsletter:
            return {
                ...state,
                newsletter: {
                    loading: true
                }
            }

        case types.finishLoadingNewsletter:
            return {
                ...state,
                newsletter: {
                    loading: false
                }
            }    
    
        default:
            return state;
    }
}