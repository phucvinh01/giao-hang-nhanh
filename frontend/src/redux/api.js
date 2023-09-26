import axios from '../axios/Axios'
import { loginFailed, loginStart, loginSuccess, logoutFailed, logoutStart, logoutSuccess } from './authSlice'
import { getProductFailed, getProductStart, getProductSuccess } from './proSlice'
import { getOneProducts, getProductByCategory, getProducts } from '../axios/ProductRequest'
import { getCategoryFailed, getCategoryStart, getCategorySuccess } from './cateSlice'
import { getCategory } from '../axios/CategoryRequest'
import { getBrandFailed, getBrandStart, getBrandSuccess } from './brandSlice'
import { getBrand } from '../axios/BrandRequest'
import { addToCartFailed, addToCartStart, addToCartSuccess, getCartFailed, getCartStart, getCartSuccess } from './cartSlice'
import { Add, Get } from '../axios/CartRequest'
import { Axios } from 'axios'

export const login = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post('/v1/auth/login', user)
        dispatch(loginSuccess(res))
        if (res.role === 1) {
            navigate('/admin')
            return
        }
        navigate('/')
    }
    catch (err) {
        dispatch(loginFailed())
    }
}


export const logout = async (dispatch, id, navigate, token) => {
    dispatch(logoutStart());
    try {
        const res = await axios.post('/v1/auth/logout')
        dispatch(logoutSuccess())
        navigate('/')
    }
    catch (err) {
        dispatch(logoutFailed())

    }
}

export const getProductList = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await getProducts()
        dispatch(getProductSuccess(res))
    }
    catch (err) {
        dispatch(getProductFailed())
    }
}

export const getCategoryList = async (dispatch) => {
    dispatch(getCategoryStart());
    try {
        const res = await getCategory()
        dispatch(getCategorySuccess(res))
    }
    catch (err) {
        dispatch(getCategoryFailed())
    }
}

export const getBrandList = async (dispatch) => {
    dispatch(getBrandStart());
    try {
        const res = await getBrand()
        dispatch(getBrandSuccess(res))
    }
    catch (err) {
        dispatch(getBrandFailed())
    }
}


export const addToCart = async (productId, userId, quantity, dispatch) => {
    dispatch(addToCartStart());
    try {
        const res = await Add(productId, userId, quantity)
        dispatch(addToCartSuccess(res))
    }
    catch (err) {
        dispatch(addToCartFailed())
    }
}


export const getCart = async (userId, dispatch) => {
    dispatch(getCartStart());
    try {
        const res = await Get(userId)
        console.log(res);
        if (res.status) {
            dispatch(getCartSuccess(res.cart))
        }
        else {
            dispatch(getCartFailed())
        }
    }
    catch (err) {
        dispatch(getCartFailed())
    }
}