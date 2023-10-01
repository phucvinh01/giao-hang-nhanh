import axios from '../axios/Axios';
import {
    loginFailed,
    loginStart,
    loginSuccess,
    logoutFailed,
    logoutStart,
    logoutSuccess,
} from './authSlice';
import {
    getProductFailed,
    getProductStart,
    getProductSuccess,
} from './proSlice';
import {
    getProducts,
} from '../axios/ProductRequest';
import {
    addToCartFailed,
    addToCartStart,
    addToCartSuccess,
    decrementQuantityFailed,
    decrementQuantityStart,
    decrementQuantitySuccess,
    getCartFailed,
    getCartStart,
    getCartSuccess,
    removeItemFailed,
    removeItemStart,
    removeItemSuccess,
} from './cartSlice';
import { Add, Decrement, Delete, Get } from '../axios/CartRequest';

export const login = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post('/v1/auth/login', user);
        dispatch(loginSuccess(res));
        if (res.role === 1) {
            navigate('/admin');
            return;
        }
        navigate('/');
    } catch (err) {
        dispatch(loginFailed());
    }
};

export const logout = async (dispatch, id, navigate, token) => {
    dispatch(logoutStart());
    try {
        const res = await axios.post('/v1/auth/logout');
        dispatch(logoutSuccess(res));
        navigate('/');
    } catch (err) {
        dispatch(logoutFailed());
    }
};

export const getProductList = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await getProducts();
        dispatch(getProductSuccess(res));
    } catch (err) {
        dispatch(getProductFailed());
    }
};

export const getCart = async (userId, dispatch) => {
    dispatch(getCartStart());
    try {
        const res = await Get(userId);
        if (res.status) {
            dispatch(getCartSuccess(res.cart));
        } else {
            dispatch(getCartFailed());
        }
    } catch (err) {
        dispatch(getCartFailed());
    }
};

export const addToCart = async (productId, userId, quantity, dispatch) => {
    dispatch(addToCartStart());
    try {
        const res = await Add(productId, userId, quantity);
        if (res) {
            dispatch(addToCartSuccess(res.data));
            return;
        }
        dispatch(addToCartFailed());
    } catch (err) {
        dispatch(addToCartFailed());
    }
};

export const decreaseQuantity = async (productId, userId, dispatch) => {
    dispatch(decrementQuantityStart());
    try {
        const res = await Decrement(productId, userId);
        if (res) {
            console.log(res);
            dispatch(decrementQuantitySuccess(res.data));
        }
    } catch (err) {
        dispatch(decrementQuantityFailed());
    }
};

export const RemoveCartItem = async (productId, userId, dispatch) => {
    dispatch(removeItemStart());
    try {
        console.log(userId);
        const res = await Delete(productId, userId);
        if (res) {
            console.log(res);
            dispatch(removeItemSuccess(res.data));
        }
    } catch (err) {
        dispatch(removeItemFailed());
    }
};
