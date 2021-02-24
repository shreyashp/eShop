import { ADD_TO_CART, REMOVE_ALL_QUANTITY, REMOVE_FROM_CART } from './cartActionType'

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product,
    }
}

export const removeFromCart = (product) => {
    return {
        type: REMOVE_FROM_CART,
        payload: product,
    }
}

export const removeAllQuantity = (product) => {
    return {
        type: REMOVE_ALL_QUANTITY,
        payload: product
    }
}
