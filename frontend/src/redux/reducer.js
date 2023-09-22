import { combineReducers } from "@reduxjs/toolkit"
import authReducer from './authSlice'
import proReducer from './proSlice'
import cateReducer from './cateSlice'
import brandReducer from './brandSlice'

const rootReducer = combineReducers({
    auth: authReducer,
    product: proReducer,
    category: cateReducer,
    brand: brandReducer,
})

export default rootReducer