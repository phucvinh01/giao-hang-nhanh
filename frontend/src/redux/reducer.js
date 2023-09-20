import { combineReducers } from "@reduxjs/toolkit"
import authReducer from './authSlice'
import proReducer from './proSlice'

const rootReducer = combineReducers({
    auth: authReducer,
    product: proReducer
})

export default rootReducer