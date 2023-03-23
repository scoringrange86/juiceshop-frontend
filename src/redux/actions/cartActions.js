import * as actionTypes from '../constants/cartConstants'
import axios from 'axios'
// static product for cart functionality
import { staticProduct } from '../reducers/productReducers'

// Learn redux thunk / dispatch
export const addToCart = (id, qty) => async (dispatch, getState) => {
    // const {data} = await axios.get(`/api/products/${id}` )


    // static product for isolated front end, cart functionality
    const data = staticProduct;

    dispatch ({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data._id,
            name: data.name,
            imageUrl: data.imageUrl,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch ({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}