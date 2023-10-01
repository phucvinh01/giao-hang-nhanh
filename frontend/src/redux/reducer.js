import { combineReducers } from "@reduxjs/toolkit"
import authReducer from './authSlice'
import proReducer from './proSlice'
import cartReducer from "./cartSlice"

const rootReducer = combineReducers({
    auth: authReducer,
    product: proReducer,
    cart: cartReducer
})

export default rootReducer