import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: {
            data: null,
            isLoading: false,
            error: false
        },

    },
    reducers: {
        getCartStart: (state) => {
            state.cart.isLoading = true
        },
        getCartSuccess: (state, action) => {
            state.cart.isLoading = false;
            state.cart.data = action.payload;
        },
        getCartFailed: (state) => {
            state.cart.isLoading = false;
            state.cart.error = true;
        },
        addToCartStart: (state) => {
            state.cart.isLoading = true
        },
        addToCartSuccess: (state, action) => {
            state.cart.isLoading = false;
            state.cart.data = action.payload;
        },
        addToCartFailed: (state) => {
            state.cart.isLoading = false;
            state.cart.error = true;
        },
        incrementQuantityStart: (state) => {
            state.cart.isLoading = true
        },
        incrementQuantitySuccess: (state, action) => {
            state.cart.isLoading = false;
            state.cart.data = action.payload;
        },
        incrementQuantityFailed: (state) => {
            state.cart.isLoading = false;
            state.cart.error = true;
        },
        decrementQuantity: (state, action) => {
            state.cart.cart = action.payload;
        },

        removeItemStart: (state) => {
            state.cart.isLoading = true
        },
        removeItemSuccess: (state, action) => {
            state.cart.isLoading = false;
            state.cart.data = action.payload;
        },
        removeItemFailed: (state) => {
            state.cart.isLoading = false;
            state.cart.error = true;
        },
    },
});



export const {
    addToCartStart,
    addToCartSuccess,
    addToCartFailed,
    incrementQuantityStart,
    incrementQuantitySuccess,
    incrementQuantityFailed,
    decrementQuantity,
    removeItemStart,
    removeItemSuccess,
    removeItemFailed,
    getCartStart,
    getCartSuccess,
    getCartFailed,
} = cartSlice.actions;

export default cartSlice.reducer
