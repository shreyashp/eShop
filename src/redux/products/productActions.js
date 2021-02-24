import axios from 'axios'
import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_FAILURE } from './productActionsType'

export const fetchProductsRequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST,
    }
}

const fetchProductsSuccess = (products) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

const fetchProductsFailure = (error) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: error
    }
}

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductsRequest)
        axios.get("http://localhost:8000/store")
        .then(response => {
            const products = response.data;
            dispatch(fetchProductsSuccess(products))
        })
        .catch(error => {
            const errMsg = error.messsage
            dispatch(fetchProductsFailure(errMsg))
        })
    }
}