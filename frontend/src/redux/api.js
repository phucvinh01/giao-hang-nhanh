import axios from '../axios/Axios'
import { loginFailed, loginStart, loginSuccess, logoutFailed, logoutStart, logoutSuccess } from './authSlice'
import { getProductFailed, getProductStart, getProductSuccess } from './proSlice'
import { getProducts } from '../axios/ProductRequest'

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